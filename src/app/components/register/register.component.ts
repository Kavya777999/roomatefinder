import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    username:string;
    password:string;
    confirmpassword:string;
    email:string;
    phone:number;

    onRegister(registerForm:NgForm)
    {
      this.username=registerForm.controls['Name'].value;
      this.password=registerForm.controls['Password'].value;
      this.confirmpassword=registerForm.controls['ConfirmPassword'].value;
      this.email=registerForm.controls['Email'].value;
      this.phone=registerForm.controls['Phone'].value;

      if(this.password===this.confirmpassword)
      {
        console.log("Success");
        alert("Registration is Successfull");
      }
      else
      {
        console.log("Failure");
        alert("Password and Confirm Password doesnot match");
      }
    }

}
