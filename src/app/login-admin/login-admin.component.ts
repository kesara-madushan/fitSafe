import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  error: string = '';

  emailAd: string = '';
  pwdAd: string = '';

  onSubmit(){
    if(this.emailAd != '' && this.pwdAd != ''){
      if(this.emailAd == 'fitSafe@gmail.com' && this.pwdAd == 'fitSafe@123'){
        this.error = '';
        this.router.navigate(['home-admin']);
      } else {
        this.error = 'Invalid email or password!';
      }
    } else {
      this.error = 'Email and password are required!';
    }
  }
}
