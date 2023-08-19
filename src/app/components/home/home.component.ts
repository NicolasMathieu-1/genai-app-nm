import { Component } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bardOpenState = false; 
  promptOpenState = false;
  appAwsAiSearchOpenState = false;  
}