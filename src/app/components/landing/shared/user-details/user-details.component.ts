import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() userUrl: string; 
  @Input() isFilteredUsers: boolean; 

  allUsersData$: Observable<any>;

  constructor(
    private _gitUserService: GithubUsersService
  ) { }

  ngOnInit(): void {
   this.getAllUserDetails();
    
  }

  getAllUserDetails() {

    this.allUsersData$ = this._gitUserService.getAllUserDetails(this.userUrl);      
  };

  linkToGitHub(url) {
   window.open(url)
    
  }

}
