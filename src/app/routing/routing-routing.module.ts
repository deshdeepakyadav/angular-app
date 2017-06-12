import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from '../user-list/user-list.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserModifyComponent } from '../user-modify/user-modify.component';

const routes: Routes = [
                        {path:'', redirectTo:'/user', pathMatch:'full'  },
                        {path:'user', component:UserListComponent},
                        {path:'add', component:AddUserComponent},
                        {path:'modify', component:UserModifyComponent},
                        {path:'**', component:UserListComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
