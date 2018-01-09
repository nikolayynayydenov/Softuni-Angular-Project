// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { articleComponents } from './index'

// Services
import { ArticleService } from './../../core/services/article.service'

// Pipes
import { TruncatePipe } from './../../core/pipes/truncate.pipe';
import { ArticleDetailsComponent } from './article-details/article-details.component'



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        TruncatePipe,
        ...articleComponents,
        ArticleDetailsComponent
    ],
    providers: [
        ArticleService
    ]
})

export class ArticleModule { }
