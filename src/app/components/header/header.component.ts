import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
// Declare the global function to avoid TypeScript errors
declare var handleSignout: any;


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() userProfile: any;

  constructor(private authService: AuthService, 
    private router: Router) {    
  }

  ngOnInit() {
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "");
  }

  isLoggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }

  handleSignOut() {
    handleSignout();
    sessionStorage.removeItem("loggedInUser");
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    });
  }
}
