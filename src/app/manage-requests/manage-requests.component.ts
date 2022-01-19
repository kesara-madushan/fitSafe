import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-manage-requests',
  templateUrl: './manage-requests.component.html',
  styleUrls: ['./manage-requests.component.css']
})
export class ManageRequestsComponent implements OnInit {

  customerRequests: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private router: Router 
  ) {}


  ngOnInit(): void {
    this.getRequests();
  }

  getRequests() : void {
    this.customerService.getRequests()
    .subscribe(customerRequests => this.customerRequests = customerRequests);
  }

  approveCustomer(email: string) : void {
    console.warn(email);
    this.customerService.approveCustomer(email);
  }

  declineRequest(email: string) : void {
    this.customerService.declineRequest(email);
  }

}
