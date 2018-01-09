import { Component, OnInit } from '@angular/core'
import { ArticleService } from './../../../core/services/article.service'
import { AuthService } from '../../../core/services/auth.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-all-articles',
    templateUrl: './all-articles.component.html'
})

export class AllArticlesComponent implements OnInit {
    public articles: object[]
    private sub$: Subscription

    constructor(
        private spinnerService: Ng4LoadingSpinnerService,
        private articleService: ArticleService,
        public authService: AuthService,
    ) {
        this.articles = []        
    }

    ngOnInit() {
        this.spinnerService.show()
        this.sub$ = this.articleService.getAll().subscribe({
            next: res => {
                this.articles = res
            },
            complete: () => {
                this.spinnerService.hide()
            }
        })
    }

    ngOnDestroy() {
        if (this.sub$) {
            this.sub$.unsubscribe()
        }        
    }
}
