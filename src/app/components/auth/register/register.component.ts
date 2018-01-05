import { Component } from '@angular/core';
import { User } from './../../../core/models/input-models/user'
import { AuthService } from './../../../core/services/auth.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { ViewContainerRef } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [
        AuthService,
        ToastsManager
    ]
})
export class RegisterComponent {
    public user: User = new User('', '')

    constructor(
        private authService: AuthService,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef,
        private router: Router
    ) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    handleSubmit(event): void {
        if (this.userIsValid()) {
            this.authService.register({
                username: this.user.username,
                password: this.user.password,
                isAdmin: false
            }).subscribe(res => {
                if (res._kmd.authtoken) {
                    this.router.navigateByUrl('/login')
                        .then(() => {
                            this.toastr.success('Register successful!')
                        })
                }
            }, errRes => {
                this.toastr.error(errRes.error.description)
            })
        } else {
            this.toastr.error('Invalid credentials')
        }
    }

    userIsValid(): boolean {
        return Boolean(this.user.username) &&
            Boolean(this.user.password) &&
            this.user.password === this.user.passwordRepeat
    }
}
