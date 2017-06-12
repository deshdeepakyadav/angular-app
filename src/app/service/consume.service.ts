import { Injectable,Type,Injector } from '@angular/core';
import {Customer} from './user';
import {UserService} from './user.service';


@Injectable()
export class ConsumeService {

customers:Customer[];
UserService:UserService;
  constructor(private injector: Injector) {  }

  getCustomers(){
                 this.UserService=this.injector.get(UserService);
                 return  this.UserService.getAll().then(customers =>this.customers=customers); 
                }
  }

 
 

  
  


