import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})

export class AppComponent {
  user;

  private isLoggedIn: Boolean;
  private userName: String;

  openModal() {
    alert("YOU CLICKED THE MODAL BUTTON")
  }

  constructor(public authService: LoginService) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }

    });
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  logoutGoogle() {
    this.authService.logoutGoogle();
  }


}
