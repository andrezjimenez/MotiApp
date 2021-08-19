import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../../Interface/User.interface';
// import { PostsInterface } from '../../Interface/Posts.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _historial: string[] = [];
  private _url : string = 'http://localhost:3000/api';
  private _apiKey: string='VpeqsVm202hvmlwSWw5ByBAxdQpeQYPL';


  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this._url}/games`);
  }
     
  getOneUser (id: string){
    return this.http.get(`${this._url}/games/${id}`);
  }

  deleteUser (id: string){
    return this.http.delete(`${this._url}/games/${id}`);
  }
    
  createUser (user : UserInterface ) {
    return this.http.post(`${this._url}/games`,user);
  }

  // createPosts (user : PostsInterface ) {
  //   return this.http.post(`${this._url}/posts`,user);
  // }


  // updateUser (id : string ,updateUser : User): Observable<User> {
  //   return this.http.put(`${this._url}/games/${id}`,updateUser);
  // }



}
