import { Component } from '@angular/core';
import { AuthService } from './../../../core/services/auth.service'
import { Router } from '@angular/router'
import { SessionService } from './../../../core/services/session.service'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    public userName: string
    constructor(
        public authService: AuthService,
        private sessionService: SessionService
    ) {
        this.sessionService.session.subscribe({
            next: val => {
                this.userName = val
            }
        })
    }
}
