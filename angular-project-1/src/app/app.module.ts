import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { RepairingPointComponent } from './repairing-point/repairing-point.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommonModule } from '@angular/common';
import { PlotlyGraphsComponent } from './plotly-graphs/plotly-graphs.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { CrudComponent } from './crud/crud.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import {HttpClientModule} from "@angular/common/http"
PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    HomeComponent,
    ServicesComponent,
    RepairingPointComponent,
    MarketingComponent,
    ConsultancyComponent,
    ContactUsComponent,
    PlotlyGraphsComponent,
    CrudComponent,
    ContactManagerComponent,
    EditContactComponent,
    ViewContactComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PlotlyModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
