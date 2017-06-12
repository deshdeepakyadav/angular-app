import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingRoutingModule } from './routing/routing-routing.module';
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

import {LoggerService} from './service/logger.service';
import {UserService} from './service/user.service';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserModifyComponent } from './user-modify/user-modify.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    UserListComponent,
    AddUserComponent,
    UserModifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService,{ delay: 0 }),
    RoutingRoutingModule
  ],
  providers: [LoggerService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
