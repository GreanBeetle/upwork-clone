import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [LoginService]
})
export class SignUpComponent implements OnInit {
  @Output() sendClick = new EventEmitter();

  constructor(public authService: LoginService) { }

  createUserSignup(email, password) {
    this.authService.createUser(email, password);
    console.log(email);
    console.log(password);
  }

  ngOnInit() {
  }

  alertAppComp() {
    this.sendClick.emit(); 
  }

}
