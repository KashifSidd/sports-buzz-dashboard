import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm:boolean=true;
  registrationForm:boolean;
  name: string;
  phone: string;
  email: string;
  password: string;
  emailOrPhone: string;

  registerForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router:Router, private loginService: LoginService, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.status === 'INVALID') {
      this.registerForm.markAllAsTouched();
      this.toastrService.error('Kindly fill up all the fields');
      return;
    }
    const data = {
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      phone: this.registerForm.get('phone').value,
      roles: 'CUSTOMER'
    }
    this.loginService.registerUser(data).subscribe(res => {
      this.showSignInForm();
      this.toastrService.success('Registered successfully!!!');
    })
  }

  login() {
    if (this.loginForm.status === 'INVALID') {
      this.loginForm.markAllAsTouched();
      this.toastrService.error('Kindly fill up all the fields');
      return;
    }
    const data = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
    this.loginService.loginUser(data).subscribe(res => {
      this.navigateToHomePage();
      localStorage.setItem('token', res['result']['accessToken']);
      this.toastrService.success('Logged-in successfully!!!');
    })
  }

  showSignInForm(){
    this.signInForm=true;
    this.registrationForm=false;
    this.registerForm.reset();
  }
  showRegistrationForm(){
    this.signInForm=false;
    this.registrationForm=true;
    this.loginForm.reset();
  }
  navigateToHomePage(){
    this.router.navigate(['home']);

  }

}
