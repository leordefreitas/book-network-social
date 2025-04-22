import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component'
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './pages/register/register.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import {CodeInputModule} from "angular-code-input";
import {HttppTokenInterceptor} from "./services/interceptor/httpp-token.interceptor";
import { BorrowedBookListComponent } from './modules/book/pages/borrowed-book-list/borrowed-book-list.component';
import {BookModule} from "./modules/book/book.module";
import {ApiModule} from "./services/api.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ActivateAccountComponent,
    BorrowedBookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CodeInputModule,
    BookModule,
    ApiModule.forRoot({rootUrl: 'http://34.172.189.198:8088/api/v1'})
  ],
  providers: [
     HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttppTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
