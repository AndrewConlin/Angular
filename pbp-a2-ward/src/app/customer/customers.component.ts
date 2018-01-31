import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-customers',
  templateUrl: 'app/customer/customers.component.html',
  providers: [CustomerService]
})
export class CustomersComponent  implements OnInit {
  // customers: Observable<any[]>;
  // customers: Promise<any[]>;
  customers : any[];

  constructor(private _customerService: CustomerService) {}

  ngOnInit() {
    this._customerService.getCustomers()
    .then((customers) => this.customers = customers)
    .catch((err) => {
      console.log(err);
    });
    //promise
    // this.customers = this._customerService.getCustomers()
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //rX Observable
    // this.customers = this._customerService.getCustomers_RxObservable()
    // .catch((err) => {
    //   console.log(err);
    //   return Observable.of();
    // });
    //OR
    // this._customerService.getCustomers_RxObservable()
    //     .subscribe(
    //       (customers) =>  this.customers = customers,
    //       (err) => console.log(err)
    //     );

  }
}
