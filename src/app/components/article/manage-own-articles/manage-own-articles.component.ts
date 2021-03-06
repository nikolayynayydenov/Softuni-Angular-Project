import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../../../core/services/article.service'
import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-manage-own-articles',
    templateUrl: './manage-own-articles.component.html'
})
export class ManageOwnArticlesComponent implements OnInit {
    public articles: object[]
    private sub$: Subscription

    constructor(
        private articleService: ArticleService,
        private auth: AuthService
    ) {
        this.articles = []
    }

    ngOnInit() {
        this.sub$ = this.articleService.getAllFromUser(this.auth.currentUser['_id'])
            .subscribe({
                next: res => {
                    this.articles = res
                },
                error: err => {
                    console.log('Error from manage-own-articles:')
                    console.log(err)
                }
            })
    }

    ngOnDestroy() {
        if (this.sub$) {
            this.sub$.unsubscribe()
        }        
    }
}
