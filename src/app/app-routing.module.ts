import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { ServicespageComponent } from './containers/servicespage/servicespage.component';
import { LoginpageComponent } from './containers/loginpage/loginpage.component';
import { RegisterpageComponent } from './containers/registerpage/registerpage.component';
import { AboutpageComponent } from './containers/aboutpage/aboutpage.component';


const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"about",
    component:AboutpageComponent
  },
  {
    path:"login",
    component:LoginpageComponent
  },
  {
    path:"register",
    component:RegisterpageComponent
  },
  {
    path:"services",
    component:ServicespageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
