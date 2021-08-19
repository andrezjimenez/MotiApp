import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../Interface/User.interface'; 

import { UsersService } from '../../users/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  newUser : UserInterface = {
    name : '',
    lastname : '',
    email : '',
    login : '',
    password : ''
  }

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }
  
  Register(){
    
    this.userService.createUser(this.newUser).subscribe(
      res => {
        
        console.log(res);
      },
      err => console.log(err)
    )
    console.log(this.newUser);
    

  }

}
