import { registerLocaleData } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./Contact/contact.component";
import { LoginComponent } from "./Login/login.component";
import { BodyhomeComponent } from "./PublicHome/bodyhome/bodyhome.component";
import { CardsBodyComponent } from "./PublicHome/cards-body/cards-body.component";

import { ListUserComponent } from './users/list-user/list-user.component';

import { RegisterComponent } from "./PublicHome/register/register.component";
import { PostsComponent } from './PublicHome/posts/posts.component';
import { CreatePostComponent } from './Admin/Post/create-post/create-post.component';

const routes: Routes = [
    {
        path : '',
        component: BodyhomeComponent ,
        pathMatch : 'full'
    },
    {
        path : 'Login',
        component: LoginComponent
    },
    {
        path : 'SingUp',
        component: RegisterComponent
    },
    {
        path : 'Contact',
        component: ContactComponent
    },
    {
        path : 'Posts',
        component: PostsComponent
    },
    {
        path : 'Admin/CreatePosts',
        component: CreatePostComponent
    },
    {
        path : 'listUser',
        component: ListUserComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ],

})

export class AppRoutingModule{}