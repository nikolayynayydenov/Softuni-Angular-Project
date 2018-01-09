import {
    Component,
    OnInit,
    ViewContainerRef,
    Output,
    EventEmitter
} from '@angular/core';
import { User } from './../../../core/models/input-models/user'
import { AuthService } from './../../../core/services/auth.service'
import { Router } from '@angular/router'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SessionService } from './../../../core/services/session.service'
import { Observable } from 'rxjs/Observable';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    public user: User = new User('', '')
    private sub$: Subscription
    @Output() onReached5 = new EventEmitter<boolean>()

    constructor(
        private authService: AuthService,
        private session: SessionService,
        private router: Router,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef,
        private spinnerService: Ng4LoadingSpinnerService,
    ) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    handleSubmit(event): void {
        if (this.userIsValid()) {
            this.sub$ = this.authService.login({
                username: this.user.username,
                password: this.user.password
            }).subscribe(res => {
                const authToken = res._kmd.authtoken

                this.session.setVal('authToken', authToken)
                this.session.setVal('userId', res._id)
                this.session.setVal('userName', res.username)

                this.authService.currentAuthToken = authToken
                this.authService.currentUser = res

                this.router.navigateByUrl('/article/all')
                    .then(() => {
                        this.toastr.success('Login Successful!')
                    })
            }, errRes => {
                this.toastr.error('Wrong credentials!')
            }, () => {
            })
        }
    }

    userIsValid(): boolean {
        return Boolean(this.user.username) &&
            Boolean(this.user.password)
    }

    ngOnDestroy() {
        if (this.sub$) {
            this.sub$.unsubscribe()
        }        
    }
}
