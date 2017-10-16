import { Component, OnInit } from '@angular/core';
import { GithubService } from './../github.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = {username:""};
  score=0;
  message:String;
  style='white';
  constructor(private _githubService: GithubService) { }

  onSubmit(){
    this._githubService.getUser(this.user.username,(score)=>{
      this.score = score;
      this.determineMessage();
    });
    // this.determineMessage();
    console.log(this.score);
  }
  determineMessage(){
    if(this.score==0){
      this.message = "User does not exist, pick a different user."
      this.style = 'red'
      return;
    }
    if(this.score < 20){
      this.message = "Needs Work!"
      this.style = 'red'
    } else if (this.score < 50) {
      this.message = "A decent start!"
      this.style = 'orange'
    }
    else if (this.score < 100) {
      this.message = "Doing good!"
      this.style = 'black'
    }
    else if (this.score < 200) {
      this.message = "Great Job!"
      this.style = 'green'
    }else{
      this.message = "Github Elite!"
      this.style = 'blue'
    }
  }

  ngOnInit() {
  }

}
