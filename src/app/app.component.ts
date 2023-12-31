import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angulardemoapp';
  //const loginExcludedRoute = ["signup"];
  constructor(public authService : AuthService,
              private router : Router){
    
  }
  ngOnInit(): void {
    if (localStorage.getItem('access_token')) {
      this.authService.setLoggedIn();
      //this.router.navigateByUrl("/users");
    } else {
     // this.router.navigateByUrl("/login");
    }
  }
}
