import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CrudComponent } from './crud/crud.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MarketingComponent } from './marketing/marketing.component';
import { OnInItLifeHookComponent } from './on-in-it-life-hook/on-in-it-life-hook.component';
import { OnchangeLifeHookComponent } from './onchange-life-hook/onchange-life-hook.component';
import { PlotlyGraphsComponent } from './plotly-graphs/plotly-graphs.component';
import { ServicesComponent } from './services/services.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {path:'', component:SignInComponent}, //login
  {path:'login', component:LoginComponent},  //signup
  {path:'home',component:HomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'software-marketing',component:MarketingComponent},
  {path:'consultancy',component:ConsultancyComponent},
  {path:'graphs',component:PlotlyGraphsComponent},
  {path:'crud',component:CrudComponent},
  {path:'contact-manager',component:ContactManagerComponent},
  {path:'edit-contact/:contactId',component:EditContactComponent},
  {path:'view-contact/:contactId',component:ViewContactComponent},
  {path:'onchange',component:OnchangeLifeHookComponent},
  {path:'onit',component:OnInItLifeHookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
