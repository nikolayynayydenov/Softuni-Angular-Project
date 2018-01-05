import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ManageUserComponent } from './manage-user/manage-user.component'

import { UserService } from './../../core/services/user.service'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ManageUserComponent
    ],
    providers: [
        UserService
    ]
})
export class ProfileModule { }
