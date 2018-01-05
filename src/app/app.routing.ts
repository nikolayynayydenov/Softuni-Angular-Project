import { Routes } from "@angular/router";

// Guards
import { AuthGuardService } from "./core/guards/auth.guard";

// Components
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { LogoutComponent } from "./components/auth/logout/logout.component";
import { NewArticleComponent } from "./components/article/new-article/new-article.component";
import { AllArticlesComponent } from "./components/article/all-articles/all-articles.component";
import { ManageUserComponent } from "./components/profile/manage-user/manage-user.component";
import { ManageOwnArticlesComponent } from "./components/article/manage-own-articles/manage-own-articles.component";
import { HomeComponent } from "./components/home/home.component";


export let routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: LogoutComponent },
    {
        path: 'article/new',
        component: NewArticleComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'article/all',
        component: AllArticlesComponent
    },
    {
        path: 'profile/edit',
        component: ManageUserComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'profile/articles',
        component: ManageOwnArticlesComponent,
        canActivate: [AuthGuardService]
    },
    { path: '', component: HomeComponent }
]