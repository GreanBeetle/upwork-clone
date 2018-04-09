import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [LoginService]
})
export class SignInComponent implements OnInit {
  @Output() sendClick = new EventEmitter();

  constructor(public authService: LoginService) { }

  signIn(email, password) {
    this.authService.toggleSignIn(email, password);
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  ngOnInit() {
  }

  alertAppComp(){
    this.sendClick.emit();
  }

}
