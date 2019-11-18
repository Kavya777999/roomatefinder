import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { ServicespageComponent } from './containers/servicespage/servicespage.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { LoginpageComponent } from './containers/loginpage/loginpage.component';
import { RegisterpageComponent } from './containers/registerpage/registerpage.component';
import { AboutpageComponent } from './containers/aboutpage/aboutpage.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomepageComponent,
    ServicespageComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    LoginpageComponent,
    RegisterpageComponent,
    AboutpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
