import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string;
  userpassword:string;

  onLogin(loginForm:NgForm){
    console.log('User Name :' + loginForm.controls['username'].value);
    console.log('Password :' + loginForm.controls['userpassword'].value);
}

}
