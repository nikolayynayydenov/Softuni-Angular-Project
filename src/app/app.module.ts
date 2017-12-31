// Miscellaneous
import { ToastrCustomOptions } from './config/toastr/custom-options'
import { ToastOptions } from 'ng2-toastr/src/toast-options';

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
import { UserModule } from './components/users/user.module'

// Services
import { AuthService } from './services/auth.service';

// Guards
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AdminGuardService } from './services/guards/admin-guard.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { NewArticleComponent } from './components/article/new-article/new-article.component';
import { AllArticlesComponent } from './components/article/all-articles/all-articles.component';
import { ManageUserComponent } from './components/users/manage-user/manage-user.component'

let appRoutes = [
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
        path: 'user/edit',
        component: ManageUserComponent,
        canActivate: [AuthGuardService]
    },
    { path: '', component: HomeComponent }
]

// TODO: create app routes moule

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        ToastModule.forRoot(),
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ArticleModule,
        AuthModule,
        UserModule
    ],
    providers: [
        AuthService,
        AuthGuardService,
        AdminGuardService,
        { provide: ToastOptions, useClass: ToastrCustomOptions }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
