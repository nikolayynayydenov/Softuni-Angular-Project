import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { articleComponents } from './index'
import { ArticleService } from './../../services/article.service'
import { FormsModule } from '@angular/forms'

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
