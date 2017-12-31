import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ArticleService } from './../../../services/article.service'
import { AuthService } from './../../../services/auth.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
    selector: 'app-all-articles',
    templateUrl: './all-articles.component.html',
    styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
    public articles: Object[]

    constructor(
        private articleService: ArticleService,
        private authService: AuthService,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef
    ) {
        this.articles = []
        this.toastr.setRootViewContainerRef(vcr)        
    }

    ngOnInit() {
        this.articleService.getAll().subscribe(res => {
            this.articles = res
        })
    }

    deleteArticle(id, arrIndex) {
        this.articleService.delete(id).subscribe(res => {
            if (res.count === 1) {
                this.toastr.success('Article deleted')
                    .then(() => {
                        this.articles.splice(arrIndex, 1)
                    })
            }
        }, err => {
            console.log(err)
        })
    }

    editArticle(article: Object) {
        article['editMode'] = true
    }
}
