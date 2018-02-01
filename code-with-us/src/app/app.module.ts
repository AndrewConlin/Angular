import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';
import { CustomerService } from './customer.service';
import { LoggerService } from './logger.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataStore } from './in-memory-data.store';


@NgModule({
  imports:      [
     BrowserModule,
     FormsModule,
     HttpModule,
     InMemoryWebApiModule.forRoot(InMemoryDataStore)
   ], // what stuff do i need?
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddressComponent
   ],  // what things are in my app
  providers: [
    CustomerService,
    LoggerService
  ],
  bootstrap:    [ AppComponent ]   // where do i start
})
export class AppModule { }
