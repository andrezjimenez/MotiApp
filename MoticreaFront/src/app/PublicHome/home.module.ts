import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardsBodyComponent } from './cards-body/cards-body.component';
import { CarruselHomeComponent } from './carrusel-home/carrusel-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { BodyhomeComponent } from './bodyhome/bodyhome.component';
import { UsersService } from '../users/services/users.service';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
    declarations: [
        NavbarComponent,
        CarruselHomeComponent,
        CardsBodyComponent,
        FooterComponent,
        BodyhomeComponent,
        RegisterComponent,
        PostsComponent
    ],
    exports:[
        NavbarComponent,
        CarruselHomeComponent,
        CardsBodyComponent,
        FooterComponent,
    ],
    providers: [
      UsersService
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule
    ]
  })
  export class HomeModule { }
  