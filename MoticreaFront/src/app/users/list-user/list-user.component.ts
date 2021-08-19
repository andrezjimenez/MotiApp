import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/Interface/User.interface';

import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html'
})
export class ListUserComponent implements OnInit {

  users : UserInterface [] = [];


  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( (resp: any) => {
    console.log(resp);
     
    this.users=resp.users;
    console.log(this.users)
   

    } )
  }
}
