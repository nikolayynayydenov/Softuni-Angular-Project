// Miscellaneous
import { ToastrCustomOptions } from './config/toastr/custom-options'
import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { routes } from './app.routing'
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ToastModule } from 'ng2-toastr/ng2-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleModule } from './components/article/article.module'
import { AuthModule } from './components/auth/auth.module'
import { ProfileModule } from './components/profile/profile.module'
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


// Services
import { AuthService } from './core/services/auth.service'
import { SessionService } from './core/services/session.service'

// Guards
import { AuthGuardService } from './core/guards/auth.guard';
import { AdminGuardService } from './core/guards/admin.guard';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { NewArticleComponent } from './components/article/new-article/new-article.component';
import { AllArticlesComponent } from './components/article/all-articles/all-articles.component';
import { ManageUserComponent } from './components/profile/manage-user/manage-user.component';
import { ManageOwnArticlesComponent } from './components/article/manage-own-articles/manage-own-articles.component'
import { ArticlesComponent } from './components/article/articles/articles.component';
import { NotFoundPageComponent } from './components/common/not-found-page/not-found-page.component';
import { AllUsersComponent } from './components/user/all-users/all-users.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        NotFoundPageComponent,
        AllUsersComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        ToastModule.forRoot(),
        Ng4LoadingSpinnerModule.forRoot(),
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ArticleModule,
        AuthModule,
        ProfileModule,
    ],
    providers: [
        AuthService,
        AuthGuardService,
        AdminGuardService,
        SessionService,
        { provide: ToastOptions, useClass: ToastrCustomOptions }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
