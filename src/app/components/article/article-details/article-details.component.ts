import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArticleService } from '../../../core/services/article.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-article-details',
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
    private id: string
    public article: object
    private sub$: Subscription

    constructor(
        private activatedRoute: ActivatedRoute,
        private articleService: ArticleService,
        private router: Router,
        private spinnerService: Ng4LoadingSpinnerService,
    ) {
        this.article = {}
        this.activatedRoute.params.subscribe({
            next: (params: Params) => {
                this.id = params['id']
            }
        })
    }

    ngOnInit() {
        this.spinnerService.show()
        this.sub$ = this.articleService.getById(this.id).subscribe({
            next: data => {
                this.article = data
            },
            error: err => {
                this.router.navigateByUrl('/page-not-found')
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
