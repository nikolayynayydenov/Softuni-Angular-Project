import {
    Component,
    OnInit,
    ViewContainerRef,
    Output,
    EventEmitter
} from '@angular/core';
import { User } from './../../../models/input-models/user'
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    public user: User = new User('', '')
    private sub$
    @Output() onReached5 = new EventEmitter<boolean>()

    constructor(
        private authService: AuthService,
        private router: Router,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnDestroy() {
        if (this.sub$ && typeof this.sub$.unsubscribe === 'function') {
            this.sub$.unsubscribe()
            console.log('Unsubscribed') 
        }
    }

    handleSubmit(event): void {
        if (this.userIsValid()) {
            this.sub$ = this.authService.login({
                username: this.user.username,
                password: this.user.password
            }).subscribe(res => {
                const authToken = res._kmd.authtoken
                sessionStorage.setItem('authToken', authToken)
                sessionStorage.setItem('userName', res.username)
                this.authService.currentAuthToken = authToken
                this.authService.currentUser = res
                this.router.navigateByUrl('/article/all')
                    .then(() => {
                        this.toastr.success('Login Successful!')
                    })
            }, errRes => {
                this.toastr.error('Wrong credentials!')
            })
        }
    }

    userIsValid(): boolean {
        return Boolean(this.user.username) &&
            Boolean(this.user.password)
    }

    get diagnostics() {
        return JSON.stringify(this.user)
    }
}
