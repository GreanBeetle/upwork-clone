import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})

export class AppComponent implements OnInit {
  loginClick = null;
  loggedIn = null;
  user;
  userID;
  userEMAIL;

  constructor(public auth: LoginService, public afAuth: AngularFireAuth){
    this.auth.user.subscribe(user => {
      this.userID = user.uid;
      this.userEMAIL = user.email;
      if (user !== null) {
        loggedIn = 'true'; 
      }
    });
  }

  ngOnInit() {

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
    this.auth.logout();
  }

  changeLoginStatus(){
    this.loggedIn = true;
  }


}
