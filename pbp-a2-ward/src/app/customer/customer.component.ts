import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-customer',
  templateUrl: 'app/customer/customer.component.html',
})
export class CustomerComponent  implements OnInit {
  @Input() customer: {id: number, name:string};

  myColor = "blue";

  constructor() {}

  ngOnInit() {}
}
