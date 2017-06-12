import { Component, Input, OnInit } from '@angular/core';
import {LoggerService} from '../service/logger.service';
import {Customer} from '../service/user';

import {UserService} from '../service/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  //providers: [UserService,LoggerService]
})
export class UserListComponent implements OnInit {

customers:Customer[]=[];

@Input() customer:Customer;

constructor(private UserService:UserService,private Logger:LoggerService ) {  }
   
   getCustomers(){
                  this.UserService.getAll().then(customers =>this.customers=customers);
                  
                  }


  ngOnInit():void {
    this.getCustomers();
       
  }

}
