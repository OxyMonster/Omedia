import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUsersService } from 'src/app/services/github-users.service';
import { GitUser } from "src/app/interfaces/GitUser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  allGitUsers$: Observable<GitUser[]>; 
  isGridView: boolean = false;


  constructor(
    private _gitUserService: GithubUsersService,
    private _router: Router
  ) { }

  ngOnInit(): void {
   this.getAllUsers();
    
  };

  getAllUsers() {
   return this.allGitUsers$ = this._gitUserService.getAllUsers();
  };

  routeToSelectedUser(name) {
    this._router.navigate([`/${name}`]);
  };

  toggleView(type) {
    type === 'grid' ? this.isGridView = false : this.isGridView = true;
  }; 

    
}
