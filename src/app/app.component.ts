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
  display = null;
  uid = null;
  user = null;
  email; 

  constructor(public authService: LoginService) {
    this.authService.user.subscribe(user => {
      this.uid = user.uid;
      this.email = user.email;
      console.log(user.email + "HERE IS THE EMAIL")
      this.user = user;
    });
  }

  createUser(email, password) {
    this.authService.createUser(email, password);
  }

  signIn(email, password) {
    this.authService.signIn(email, password);
  }

  // openModal(){
  //   this.display='block';
  // }
  //
  // openSignup(){
  //   this.loginClick="false";
  //   this.openModal();
  // }
  //
  // openSignin() {
  //   this.openModal();
  // }
  //
  // onCloseHandled(){
  //   this.display='none';
  //   this.loginClick = null;
  // }
  //
  // logout() {
  //   this.afAuth.logOut();
  //   this.loggedIn = null;
  // }
  //
  // changeLoginStatus(){
  //   this.loggedIn = true;
  // }

}
