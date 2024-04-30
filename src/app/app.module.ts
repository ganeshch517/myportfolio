import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from './components/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
//import { ToastComponent } from './components/toast/toast.component';
import { NgTemplateOutlet } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpsInterceptor } from './components/interceptor/https.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    PageNotFoundComponent,
    PopupComponent,
    //ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule
    // NgbToastModule,
    // NgTemplateOutlet
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
