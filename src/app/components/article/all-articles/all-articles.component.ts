import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../../../core/services/article.service'
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-all-articles',
    templateUrl: './all-articles.component.html'
})
export class AllArticlesComponent implements OnInit {
    public articles: object[]

    constructor(
        private articleService: ArticleService,
        public authService: AuthService
    ) {
        this.articles = []      
    }

    ngOnInit() {
        this.articleService.getAll().subscribe({
            next: res => {
                this.articles = res
            }
        })
    }
}
