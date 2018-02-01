import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';

@Injectable()
export class CustomerService {

  private customersUrl = 'api/customers';
  private statesUrl = 'api/states';

  getCustomersPromise(): Promise<Customer[]> {
    this._loggerService.log(`Getting customers as a Promise ...`);
    const customers = createTestCustomers();

    return new Promise<Customer[]>(resolve => {
      setTimeout( () => {
        this._loggerService.log(`Got ${customers.length} customer`);
        resolve(customers);
      }, 1500);
    });
  }


  getCustomersObservable(): Observable<Customer[]> {
    this._loggerService.log(`Getting customers as an Observable ...`);
    const customers = createTestCustomers();

    return of(customers)
          .delay(1500)
          .do( () => {
              this._loggerService.log(`Got ${customers.length} customer`);
          });
  }

  getCustomersHttpPromise(): Promise<Customer[]> {
    this._loggerService.log(`Getting customers as a Http Promise ...`);
    return this.http.get(this.customersUrl)
             .toPromise()
             .then( (res) => {
               const cust = res.json().data as Customer[];
               this._loggerService.log(`Got ${cust.length} customer`);
               return cust;
             },
            (error) => {
              this._loggerService.log(`An error occured ${error}`);
              return Promise.reject('Check the console');
            });
  }

  getCustomersHttpObservable(): Observable<Customer[]>  {
    this._loggerService.log(`Getting customers as a Http Observable ...`);
    return this.http.get(this.customersUrl)
                    .map( (res) => res.json().data as Customer[])
                    .do( (custs) => {
                      this._loggerService.log(`Got ${custs.length} customer`);
                    });
  }

  getStates(): Observable<string[]> {
    this._loggerService.log(`Getting states as a Http Observable ...`);
    return this.http.get(this.statesUrl)
                    .map( (res) => res.json().data as string[])
                    .do((states) => console.log(states.length))
                    .catch( (error: any) => {
                      this._loggerService.log(`An error occured ${error}`);
                      return Observable.throw('Something bad happened check the console')
                    });
  }

  constructor(private _loggerService: LoggerService,
              private http: Http) {}
}
