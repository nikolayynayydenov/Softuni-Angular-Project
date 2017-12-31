import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { FormsModule } from '@angular/forms'
import { UserService } from '../../services/user.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [ManageUserComponent],
    providers: [
        UserService
    ]
})
export class UserModule { }
