import { Component } from '@angular/core';
import { AuthService } from './../../core/services/auth.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public userName: string
    constructor(private auth: AuthService) {
        this.userName = sessionStorage.getItem('userName')        
    }
}