import { Component, Input, ViewContainerRef } from '@angular/core';
import { ArticleService } from '../../../core/services/article.service';
import { ToastsManager } from 'ng2-toastr';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html'
})

export class ArticlesComponent {
    @Input() articles: object[] // probably Article view-model?
    @Input() showOptions: boolean // show edit and delete

    constructor(
        private articleService: ArticleService,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcr) 
        this.articles = []    
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
