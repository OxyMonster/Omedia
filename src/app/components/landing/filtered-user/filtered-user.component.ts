import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of  } from 'rxjs';
import { GithubUsersService } from 'src/app/services/github-users.service';
import { catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filtered-user',
  templateUrl: './filtered-user.component.html',
  styleUrls: ['./filtered-user.component.scss']
})
export class FilteredUserComponent implements OnInit {


  routeID: string; 
  filteredUser$: Observable<any>;
  loadingError$ = new Subject<boolean>();
  
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

  getGitUser():Observable<any> {
        
    return this.filteredUser$ = this._gitUserService
                                    .getGitUser(this.routeID)
                                    .pipe(
                                      catchError((error) => {
                                        console.error('error loading the list of users', error);
                                        this.loadingError$.next(true);
                                        
                                        return of();
                                      })
                                    );
  };

  routeToLanding(): void {
    this._router.navigate(['/']);
  };

  
  linkToGitHub(url): void {
    window.open(url)
     
  };

}
