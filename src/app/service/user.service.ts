import { Injectable, Type } from '@angular/core';
import { Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {LoggerService} from './logger.service';
import {Customer} from './user'

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private userListUrl='api/users'; 

  constructor(private http: Http,private logger: LoggerService ) { }

 getAll(): Promise<Customer[]>{
    return this.http.get(this.userListUrl)
                    .toPromise()
                    .then(response => response.json().data as Customer[])
                    .catch(this.handleError);
  }

   create(name: string, location:string): Promise<Customer> {
    return this.http
      .post(this.userListUrl, JSON.stringify({name: name, location:location}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Customer)
      .catch(this.handleError);
      
      
  }

  private handleError(error:any): Promise<any>{
    this.logger.error('An error occured-'+error);
    return Promise.reject(error.message || error);
  }

}
