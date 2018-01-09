import { Component, OnInit } from '@angular/core'
import { UserService } from './../../../core/services/user.service'

@Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html'
})
export class AllUsersComponent implements OnInit {
    public users: object

    constructor(private userService: UserService) {
        this.users = []
    }

    ngOnInit() {
        this.userService.getAll()
            .subscribe({
                next: res => {
                    this.users = res
                },
                error: console.log,
                complete: () => {

                }
            })
    }

    promote(user: object): void {
        user['isAdmin'] = true
        this.userService.update(user['_id'], user)
            .subscribe({
                next: res => {

                },
                error: err => {

                },
                complete: () => {
                    console.log('Complete')
                }
            })
    }
    
    demote(user: object): void {
        user['isAdmin'] = false
    }
}
