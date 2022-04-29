import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ServicesComponent } from './services/services.component';
import { RepairingPointComponent } from './repairing-point/repairing-point.component';
import { PlotlyGraphsComponent } from './plotly-graphs/plotly-graphs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    ConsultancyComponent,
    ContactUsComponent,
    MarketingComponent,
    ServicesComponent,
    RepairingPointComponent,
    PlotlyGraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
