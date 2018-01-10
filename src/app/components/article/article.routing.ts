import { Routes } from '@angular/router'
import { NewArticleComponent } from './new-article/new-article.component';
import { AuthGuardService } from '../../core/guards/auth.guard';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

export const articleRoutes: Routes = [
    {
        path: 'new',
        component: NewArticleComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'all',
        component: AllArticlesComponent
    },
    {
        path: ':id',
        component: ArticleDetailsComponent
    },
]