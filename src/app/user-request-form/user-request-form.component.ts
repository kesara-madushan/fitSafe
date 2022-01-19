import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-user-request-form',
  templateUrl: './user-request-form.component.html',
  styleUrls: ['./user-request-form.component.css']
})
export class UserRequestFormComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  customer = new Customer();
  confirmPwd: string = '';
  error = '';
  submitted = false;

  onSubmit(){
    this.submitted = true;
    if(this.customer.firstName != "" && this.customer.lastName != "" && this.customer.email != "" && this.customer.telephone != ""
      && this.customer.nic != "" && this.customer.password != ""){

        if(this.customer.password == this.confirmPwd){
          this.error='';
          this.customerService.postRequest(this.customer);
          this.router.navigate(['home'])
        }
        else{
          this.error = 'Passwords are not matching!'
        }
      
    } else {
      this.error = 'All fields are required!';
    }
    
  }

}
