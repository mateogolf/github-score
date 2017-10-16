import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {
  score=0;

  constructor(private _http: Http) { }

  getUser(user,callback){
    let url = 'https://api.github.com/users/' + user //+ '/repos'
    console.log(url)
    this._http.get(url).subscribe(
      (response)=>{
        this.score= response.json().public_repos
        callback(this.score);
      },
      (error)=>{console.log(error);
        callback(0);
      }
    )
  }

}
