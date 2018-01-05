import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { articleComponents } from './index'
import { ArticleService } from './../../core/services/article.service'
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ...articleComponents
    ],
    providers: [
        ArticleService
    ]
})

export class ArticleModule { }
