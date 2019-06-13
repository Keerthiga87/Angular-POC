import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(post:any): Observable<any> {
    return this.httpClient.post("https://jsonplaceholder.typicode.com/posts", post);
  }
}
