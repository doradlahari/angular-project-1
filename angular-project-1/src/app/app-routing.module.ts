import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './child/child.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CrudComponent } from './crud/crud.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MarketingComponent } from './marketing/marketing.component';
import { NgAfterContentCheckedLifeHookComponent } from './ng-after-content-checked-life-hook/ng-after-content-checked-life-hook.component';
import { NgAfterViewCheckedLifeHookComponent } from './ng-after-view-checked-life-hook/ng-after-view-checked-life-hook.component';
import { NgAfterViewInitLifeHookComponent } from './ng-after-view-init-life-hook/ng-after-view-init-life-hook.component';
import { NgOnDestroyLifeHookComponent } from './ng-on-destroy-life-hook/ng-on-destroy-life-hook.component';
import { NgaftercontentInitLifeHookComponent } from './ngaftercontent-init-life-hook/ngaftercontent-init-life-hook.component';
import { NgdocheckLifeHookComponent } from './ngdocheck-life-hook/ngdocheck-life-hook.component';
import { OnInItLifeHookComponent } from './on-in-it-life-hook/on-in-it-life-hook.component';
import { OnchangeLifeHookComponent } from './onchange-life-hook/onchange-life-hook.component';
import { ParentComponent } from './parent/parent.component';
import { PlotlyGraphsComponent } from './plotly-graphs/plotly-graphs.component';
import { ServicesComponent } from './services/services.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ViewContactComponent } from './view-contact/view-contact.component';


const routes: Routes = [
  { path: '', component: SignInComponent }, //login
  { path: 'login', component: LoginComponent },  //signup
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'software-marketing', component: MarketingComponent },
  { path: 'consultancy', component: ConsultancyComponent },
  { path: 'graphs', component: PlotlyGraphsComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'contact-manager', component: ContactManagerComponent },
  { path: 'edit-contact/:contactId', component: EditContactComponent },
  { path: 'view-contact/:contactId', component: ViewContactComponent },
  { path: 'onchange', component: OnchangeLifeHookComponent },
  { path: 'onit', component: OnInItLifeHookComponent },
  { path: 'ngDoCheck', component: NgdocheckLifeHookComponent },
  { path: 'ngAfterContentInit', component: NgaftercontentInitLifeHookComponent },
  { path: 'ngAfterContentChecked', component: NgAfterContentCheckedLifeHookComponent },
  { path: 'ngAfterViewInit', component: NgAfterViewInitLifeHookComponent },
  { path: 'ngAfterViewChecked', component: NgAfterViewCheckedLifeHookComponent },
  { path: 'ngOnDestroy', component: NgOnDestroyLifeHookComponent },
  {path:'child',component:ChildComponent},
  {path:'parent',component:ParentComponent},
  {path:'binding',component:BindingComponent},
  {path:'user',component:UserComponent},
  {path:'users',component:UsersComponent},
  {path:'grid',component:GridComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
