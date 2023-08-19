import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: null,
    password: null
  };

  durationInSeconds = 5;

  constructor(private router: Router,
      private _snackBar: MatSnackBar) {}

  onSubmit(user: any) {
    if(user.email == "genai-poc-user@atos.net"
      && user.password == "Abhcah27136##.-21(80") {
        sessionStorage.setItem("loggedInUser", "EvidenUser");
      this.router.navigate(["/home"]);
    }
    else
     {
      this.openSnackBar("Login failed","");
     }
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.openFromComponent(LoginFailedComponent,  {
      duration: this.durationInSeconds * 1000,
    })
  }
}


@Component({
  selector: 'error-message',
  templateUrl: 'error-message.html',
  styles: [
    `
    .error-message {
      color: hotpink;
    }
  `,
  ],
})
export class LoginFailedComponent {}