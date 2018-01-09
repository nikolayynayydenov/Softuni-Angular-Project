import { Component } from '@angular/core';
import { User } from './../../../core/models/input-models/user'
import { AuthService } from './../../../core/services/auth.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { ViewContainerRef } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [
        AuthService,
        ToastsManager
    ]
})
export class RegisterComponent {
    public user: User = new User('', '')
    private sub$: Subscription

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
            this.sub$ = this.authService.register({
                username: this.user.username,
                password: this.user.password,
                isAdmin: false
            }).subscribe(res => {
                if (res._kmd.authtoken) {                    
                    this.router.navigateByUrl('/login')
                    // TODO: add toastr notification                
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

    ngOnDestroy() {
        if (this.sub$) {
            this.sub$.unsubscribe()
        }        
    }
}
