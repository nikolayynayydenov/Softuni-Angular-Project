import { Component, ViewContainerRef } from '@angular/core';
import { Article } from './../../../core/models/input-models/article'
import { ArticleService } from './../../../core/services/article.service'
import { Router } from '@angular/router'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-new-article',
    templateUrl: './new-article.component.html'
})

export class NewArticleComponent {
    public article: Article
    private sub$: Subscription

    constructor(
        private articleService: ArticleService,
        private router: Router,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef        
    ) {
        this.toastr.setRootViewContainerRef(vcr);        
        this.article = new Article('', '')
    }

    handleSubmit(event) {
        if (this.articleIsValid()) {
            this.sub$ = this.articleService.addNew({
                title: this.article.title,
                content: this.article.content,
                date: new Date(),
                createdBy: sessionStorage.getItem('userName')
            }).subscribe(res => {                
                this.router.navigateByUrl('/article/all')
                    .then(() => {
                        this.toastr.success('Article Created!')
                    })                
            }, errRes => {
                this.toastr.error(errRes.error.description)
            })
        } else {
            this.toastr.error('Article invalid!')
        }
    }

    articleIsValid() {
        return Boolean(this.article.title) && 
            Boolean(this.article.content)
    }

    ngOnDestroy() {
        if (this.sub$) {
            this.sub$.unsubscribe()
        }        
    }
}
