import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

 url: string = 'http://localhost:3000/customers';
//  url: string = 'https://fitsafe-backend.el.r.appspot.com/customers';
 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  //Post customer requests
  postRequest(customer : Customer) : void {
    console.warn(customer);
    this.httpClient.post(this.url + '/customer-requests', customer)
    .subscribe((result) => {
      console.warn("result",result)
    })
  }

  //Get customer requests
  getRequests(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url + '/customers');
  }
  

  //Approve customer
  approveCustomer(email: string): void {
    this.httpClient.patch(this.url + '/approve/' + email, {approved: true});
  }

  //Decline request
  declineRequest(email: string): void {
    console.warn(email);
    this.httpClient.delete(this.url + '/' + email, this.httpOptions);
  }

}
