import { Component, Input, OnInit } from '@angular/core';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {
  
  @Input() repoUrl: string;
  allUserRepos$; 

  constructor(
    private _gitUserService: GithubUsersService
  ) { }

  ngOnInit(): void {
    
    this.getUserRepos()
  }


  getUserRepos() {
    return this.allUserRepos$ = this._gitUserService.getUserRepos(this.repoUrl)
  }

}
