import { Component, OnInit } from '@angular/core';

import { Customer } from './model';
import { CustomerService } from './customer.service';
import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'customer-list',  // html element = <customer-list>
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  customer: Customer;
  isBusy = false;

  shift(increment: number) {
    let ix = this.customers.findIndex(c => c === this.customer) + increment;
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }

  getCustomers() {
    this.isBusy = true;
    this._loggerService.log('Getting Customers ...');

    // Observable HTTP syntax
    this._customerService.getCustomersHttpObservable()
    .subscribe( custs => {
      this.isBusy = false;
      this.customers = custs;
    }, (errorMsg: string) => {
      this.isBusy = false;
      console.error(errorMsg);
    });

    // Promise HTTP syntax
    // this._customerService.getCustomersHttpPromise()
    // .then( custs => {
    //   this.isBusy = false;
    //   this.customers = custs;
    // }, (errorMsg: string) => {
    //   this.isBusy = false;
    //   console.error(errorMsg);
    // });

    // Observable syntax
    // this._customerService.getCustomersObservable()
    // .subscribe( custs => {
    //   this.isBusy = false;
    //   this.customers = custs;
    // });

    // Promise syntax
    // this._customerService.getCustomersPromise()
    //   .then( custs => {
    //     this.isBusy = false;
    //     this.customers = custs;
    //   });
  }

  constructor(
    private _customerService: CustomerService,
    private _loggerService: LoggerService) {}

  ngOnInit() {
    this.getCustomers();
  }

}
