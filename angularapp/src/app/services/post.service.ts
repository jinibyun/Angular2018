import { Injectable } from '@angular/core';

// NOTE: ref: https://stackoverflow.com/questions/47236963/no-provider-for-httpclient
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable()
export class PostService {
  
  // ref: fake api : make sure https
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
