import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-eigthExample',
  templateUrl: './eigthExample.component.html',
  styleUrls: ['./eigthExample.component.css']
})
export class EigthExampleComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {  
    this.postService.getPosts().subscribe(posts => {
      // console.log(posts);
      this.posts = posts;
    });
  }

}