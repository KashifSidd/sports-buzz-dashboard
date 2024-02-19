import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signInForm:boolean=true;
  registrationForm:boolean;

  constructor() { }

  ngOnInit(): void {
  }
  showSignInForm(){
    this.signInForm=true;
    this.registrationForm=false;
  }
  showRegistrationForm(){
    this.signInForm=false;
    this.registrationForm=true;
  }

}
