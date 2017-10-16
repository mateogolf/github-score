import { Component, OnInit } from '@angular/core';
import { GithubService } from './../github.service'; //<----IMPORT Service here: Step 2

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  user = {};
  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    // this.user = this._githubService.getUser();
  }

}
