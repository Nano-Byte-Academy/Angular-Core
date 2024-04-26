import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyPostsServiceService {

  constructor(private http: HttpClient) { }

  getMyPosts():any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

}
