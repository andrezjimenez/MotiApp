import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUserComponent } from './list-user/list-user.component';
import { UsersService } from './services/users.service';



@NgModule({
  declarations: [
    ListUserComponent
  ],
  exports:[
    ListUserComponent
  ],  
  providers: [
    UsersService
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
