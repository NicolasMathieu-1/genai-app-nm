import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService, 
    private router: Router) {    
  }

  isLoggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }
}
