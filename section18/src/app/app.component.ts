import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';
import { Post } from './post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isfetching = false;
  error: string;
  isError = false;

  constructor(private http: HttpClient, private postService: PostService) {}
  private readonly _url = 'https://maru-potanu.firebaseio.com/posts.json';

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStrorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isError = false;
    this.isfetching = true;
    this.postService.fetchPost()
      .subscribe( posts => {
        this.isfetching = false;
        this.loadedPosts = posts;
      }, error => {
        this.isfetching= false;
        this.isError = true;
        this.error = error.error.error;
        console.log(error.message);
      });
  }

  onClearPosts() {
    // Send Http request
    this.postService.clearPost().subscribe(
      () => {
        this.loadedPosts = [];
      }
    );
  }
}
