import { Component, OnInit } from '@angular/core';
import {Adduser} from './adduser';
import {Customer} from '../service/user';
import {UserService} from '../service/user.service';


@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers:[ UserService ]
})
export class AddUserComponent implements OnInit {

newcustomer:object;

  constructor(private userservice:UserService) { }

  
newuser = new Adduser('', '');


submitted= false;

onsubmit(){this.submitted=true;}

addNewUser(newuser:Adduser){

this.newcustomer=this.newuser;
console.log(this.newcustomer);

}

//cehcking the value binding on form
//get diagnostic(){return JSON.stringify(this.newuser);}
  ngOnInit() {
    
  }

}
