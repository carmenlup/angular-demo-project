import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationDetailComponent } from './applications/application-detail/application-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ApplicationsComponent,
    ApplicationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
