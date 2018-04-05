import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})

export class AppComponent {


  openModal(){
    this.display='block';
  }

  onCloseHandled(){
    this.display='none';
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

  logout() {
    this.authService.logout();
  }


}
