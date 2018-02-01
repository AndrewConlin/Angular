import { Component, Input, OnInit} from '@angular/core';

import { Address } from './model';
import { CustomerService } from './customer.service';


@Component({
  moduleId: module.id,
  selector: 'address-comp',
  templateUrl: 'address.component.html'
})

export class AddressComponent implements OnInit{
  states: string[];
  regions: string[] = ['North', 'South', 'East', 'West', 'Midwest'];

  @Input()
  address: Address;

  getStates() {
    this._customerService.getStates()
    .subscribe( (states) => {
       this.states = states;
    }, (errorMsg: string) => console.error(errorMsg));
  }

  constructor(private _customerService: CustomerService) {

  }

  ngOnInit() {
    this.getStates();
  }
}
