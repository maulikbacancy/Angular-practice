import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}
  private readonly _url = 'https://maru-potanu.firebaseio.com/posts.json';

  ngOnInit() {
    this.fetchPost();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post(this._url, postData).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
  }

  fetchPost() {
    this.http.get(this._url)
      .pipe( map( respoceData => {
        const postArray = [];
        for(const key in respoceData) {
          if (respoceData.hasOwnProperty(key)) {
            postArray.push({...respoceData[key], id: key});
          }
        }
        return postArray;
      }))
      .subscribe( posts => {
      console.log(postsz);
    });
  }
}
