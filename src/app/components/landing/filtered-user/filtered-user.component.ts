import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GitUser } from 'src/app/interfaces/GitUser'
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-filtered-user',
  templateUrl: './filtered-user.component.html',
  styleUrls: ['./filtered-user.component.scss']
})
export class FilteredUserComponent implements OnInit {


  routeID: string; 
  filteredUser$: Observable<GitUser>

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _gitUserService: GithubUsersService
  ) { }

  ngOnInit(): void {

  //  * * Get Route parameterID and call API by parameterID * * 
    this.onParamChangeUpdateData();
    
  }; 



  onParamChangeUpdateData(): void {
   this._route.paramMap
              .subscribe(params => {
                this.routeID = params.get('id');
                this.getGitUser();
              } );
  };

  getGitUser(): Observable<GitUser> {
    return this.filteredUser$ = this._gitUserService.getGitUser(this.routeID);
  };

  routeToLanding() {
    this._router.navigate(['/']);
  };


}
