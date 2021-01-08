import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly _url = 'https://maru-potanu.firebaseio.com/posts.json';

  constructor(private http: HttpClient) { }

  createAndStrorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};

    this.http.post(this._url, postData).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  fetchPost(): Observable<Post[]> {
    return this.http.get<{[key: string]: Post}>(this._url)
      .pipe( map( (respoceData) => {
        const postArray = [];
        for(const key in respoceData) {
          if (respoceData.hasOwnProperty(key)) {
            postArray.push({...respoceData[key], id: key});
          }
        }
        return postArray;
      }));
  }

  clearPost() {
    return this.http.delete(this._url);
  }
  
}
