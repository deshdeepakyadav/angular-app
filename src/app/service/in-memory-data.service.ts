import { InMemoryDbService } from 'angular-in-memory-web-api';
import {LoggerService} from './logger.service';


export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    //let logger=new LoggerService;
    //logger.log('from DB');
    let users=[
          {id:1, "name":"Desh","location":"Noida"},
					{id:2, "name":"Deepak","location":"Delhi"},
					{id:3, "name":"Ajay","location":"Noida"},
					{id:4, "name":"Shiv","location":"Delhi"},
					{id:5, "name":"Manjeet","location":"Chandigarh"},
          {id:6, "name":"Atul","location":"Gkp"}
          ];

        return {users};
  }
  
}
