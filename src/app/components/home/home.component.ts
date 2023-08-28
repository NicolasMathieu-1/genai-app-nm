import { Component, OnInit } from '@angular/core';
// Declare the global function to avoid TypeScript errors
declare var handleSignout: any;
import { Router } from "@angular/router";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userProfile: any;
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "");
  }
  
  bardOpenState = false; 
  promptOpenState = false;
  appAwsAiSearchOpenState = false;
  
  handleSignOut() {
    handleSignout();
    sessionStorage.removeItem("loggedInUser");
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    });
  }
}