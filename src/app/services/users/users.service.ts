import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserDetailsForSelectedUser(userId){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users/'+ userId);
  }

}
