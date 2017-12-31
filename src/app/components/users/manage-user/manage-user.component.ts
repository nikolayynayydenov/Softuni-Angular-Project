import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from './../../../services/auth.service'
import { UserService } from './../../../services/user.service'
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-manage-user',
    templateUrl: './manage-user.component.html',
    styleUrls: ['./manage-user.component.css']
})

export class ManageUserComponent implements OnInit {
    public user: Object
    constructor(
        private authService: AuthService,
        private userService: UserService,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef,
        private router: Router
    ) { 
        this.toastr.setRootViewContainerRef(vcr)
        
    }
    ngOnInit() {        
        this.user = this.authService.currentUser
    }

    handleSubmit(event) {        
        if (this.userIsValid()) {
            this.userService.update(this.user['_id'], {
                username: this.user['username'],
                password: this.user['password'],
                isAdmin: this.authService.currentUser['isAdmin']
            }).subscribe(res => {                
                this.authService.logout()
                this.router.navigateByUrl('/login')
                    .then(() => {
                        this.toastr.success('Profile info updated')
                    })
            }, err => {
                this.toastr.error(err.error.description)
            })
        } else {
            this.toastr.error('Wrong credentials')
        }
    }

    userIsValid(): boolean {
        return Boolean(this.user['username']) &&
            Boolean(this.user['password']) &&
            this.user['password_rep'] === this.user['password']
    }
}
