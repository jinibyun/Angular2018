import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-ninthExample',
  templateUrl: './ninthExample.component.html',
  styleUrls: ['./ninthExample.component.css']
})
export class NinthExampleComponent implements OnInit {

  // post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: Boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {

    // console.log(title, body);
    if(!title || !body) {
      alert('Please add post');
    } else {
      this.postService.savePost({title, body} as Post).subscribe(post => {
        // console.log(post);
        // emit event to commnunicate different components
        this.newPost.emit(post);
      });
    }
  }

  updatePost(){
    console.log(123);
  }
}
