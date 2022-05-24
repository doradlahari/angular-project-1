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
import {HttpClientModule} from "@angular/common/http";
import { OnchangeLifeHookComponent } from './onchange-life-hook/onchange-life-hook.component';
import { OnInItLifeHookComponent } from './on-in-it-life-hook/on-in-it-life-hook.component';
import { NgdocheckLifeHookComponent } from './ngdocheck-life-hook/ngdocheck-life-hook.component';
import { NgaftercontentInitLifeHookComponent } from './ngaftercontent-init-life-hook/ngaftercontent-init-life-hook.component';
import { NgAfterContentCheckedLifeHookComponent } from './ng-after-content-checked-life-hook/ng-after-content-checked-life-hook.component';
import { NgAfterViewInitLifeHookComponent } from './ng-after-view-init-life-hook/ng-after-view-init-life-hook.component';
import { NgAfterViewCheckedLifeHookComponent } from './ng-after-view-checked-life-hook/ng-after-view-checked-life-hook.component';
import { NgOnDestroyLifeHookComponent } from './ng-on-destroy-life-hook/ng-on-destroy-life-hook.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component'
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BindingComponent } from './binding/binding.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { YoutuubeComponent } from './youtuube/youtuube.component';
import { GridComponent } from './grid/grid.component';
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
    OnchangeLifeHookComponent,
    OnInItLifeHookComponent,
    NgdocheckLifeHookComponent,
    NgaftercontentInitLifeHookComponent,
    NgAfterContentCheckedLifeHookComponent,
    NgAfterViewInitLifeHookComponent,
    NgAfterViewCheckedLifeHookComponent,
    NgOnDestroyLifeHookComponent,
    UsersComponent,
    UserComponent,
    ParentComponent,
    ChildComponent,
    BindingComponent,
    YoutuubeComponent,
    GridComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PlotlyModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
