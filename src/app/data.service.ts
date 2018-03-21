import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Customer} from './Customer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class DataService {
dataURL = 'https://customer-service-demo.cfapps.io/api/customer/v1/customers';

  constructor(private  http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.dataURL).map((res: Response) => res);
  }

 }
