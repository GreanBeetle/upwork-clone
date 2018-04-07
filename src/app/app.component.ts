import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})

export class AppComponent {
  loginClick = null;
  loggedIn = null;
  user: User = null;

  userID;
  userEMAIL;
  /**
  this hides the modal window
  */
  display = null;

/**
@param afAuth Test
*/
  constructor(public afAuth: LoginService){
  }

  openModal(){
    this.display='block';
  }

  openSignup(){
    this.loginClick="false";
    this.openModal();
  }

  openSignin() {
    this.openModal();
  }

  onCloseHandled(){
    this.display='none';
    this.loginClick = null;
  }

  logout() {
    this.afAuth.logOut();
    this.loggedIn = null;
  }

  changeLoginStatus(){
    this.loggedIn = true;
    this.afAuth.user.subscribe(user => {
      this.userID = user.uid;
      this.userEMAIL = user.email;
      if (user !== null) {
        this.loggedIn = 'true';
      }
    });
  }

}
