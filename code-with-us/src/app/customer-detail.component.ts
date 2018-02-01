import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',  // html element = <customer-detail>
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent {

  @Input()
  customer: Customer;

  @Output()
  shift = new EventEmitter<number>();

  hideAddress = false;

  right() {
    this.shift.emit(1);
  }

  left() {
    this.shift.emit(-1);
  }

}
