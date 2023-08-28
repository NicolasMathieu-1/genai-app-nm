import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(username: string, password: string) {
    if ((username == "genai-poc-user@atos.net" && password =="Abhcah27136##.-21(80")) {
          sessionStorage.setItem("loggedInUser", "EvidenUser");
          return true;
    }
    else  
      return false;
  }

  loggedIn(){
    return !!sessionStorage.getItem("loggedInUser");
  }
}
