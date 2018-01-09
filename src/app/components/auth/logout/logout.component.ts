import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './../../../core/services/auth.service'

@Component({
    selector: 'app-logout',
    template: ''
})
export class LogoutComponent {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        this.authService.logout()
        this.router.navigateByUrl('/login')
    }
}
