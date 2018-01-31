import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
// import { CustomerComponent }  from './customer/customer.component';
// import { CustomersComponent }  from './customer/customers.component';

import { CustomerComponent, CustomersComponent }  from './customer/index';

import {HttpModule} from '@angular/http';


@NgModule({
  imports:  [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
