// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

// Components
import { authComponents } from './index'

// Services
import { AuthService } from './../../services/auth.service'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ...authComponents
    ],
    providers: [
        AuthService
    ]
})

export class AuthModule { }
