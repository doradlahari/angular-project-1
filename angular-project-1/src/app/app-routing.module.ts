import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ServicesComponent } from './services/services.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'', component:SignInComponent}, //login
  {path:'login', component:LoginComponent},  //signup
  {path:'home',component:HomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'software-marketing',component:MarketingComponent},
  {path:'consultancy',component:ConsultancyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
