import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../../users/services/users.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html'
})
export class CreatePostComponent implements OnInit {

  // newPost : PostsInterface = {
  //   postId :         '',
  //   title :          '',
  //   content :        '',
  //   publicationdate :'',
  //   writedby :       '',
  //   image :          ''
  // }

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  CreatePost(){
    
    // this.userService.createUser(this.user).subscribe(
    //   res => {
        
    //     console.log(res);
    //   },
    //   err => console.log(err)
    // )
    // console.log(this.newPost);
    

  }

}
