import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class LoginService {
  public user: Observable<firebase.User>; // observable firebase user object

  constructor(private afAuth: AngularFireAuth, private router: Router){
    this.user = afAuth.authState.uid; // this creates the user object above
    console.log(this.user + "HERE is SOMETHING");
  }

  // LOGIN GOOGLE
  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  // CREATE USER EMAIL PASSWORD

  createUser(email, password) {
    if (email.length < 5) {
      alert('Please enter an address longer than 10 characters.');
      return;
    }
    if (password.length < 5 ) {
      alert('Your password must be at least 10 characters');
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }); // error function
  } // createUser

  // SIGN

  toggleSignIn(email, password) {
     if (firebase.auth().currentUser) {
       // [START signout]
       firebase.auth().signOut();
       // [END signout]
     } else {
       // Sign in with email and pass.
       // [START authwithemail]
       firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // [START_EXCLUDE]
         if (errorCode === 'auth/wrong-password') {
           alert('Wrong password.');
         } else {
           alert(errorMessage);
         }
         console.log(error);
         // [END_EXCLUDE]
       });
       // [END authwithemail]
     }
   }
} // class
