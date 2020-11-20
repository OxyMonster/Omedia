import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-user-organizations',
  templateUrl: './user-organizations.component.html',
  styleUrls: ['./user-organizations.component.scss']
})
export class UserOrganizationsComponent implements OnInit {

  @Input() organizationsUrl: string;
  allOrganizations$: Observable<any>; 


  constructor(
    private _gitUserService: GithubUsersService
  ) { }

  ngOnInit(): void {
    console.log("helloooo");
    
    this.getAllOrganizations(); 
    console.log(this.organizationsUrl);
    
  }; 

  getAllOrganizations() {
    return this.allOrganizations$ = this._gitUserService.getUserOrganizations(this.organizationsUrl);
   };

   linkToOrnganization(orgUrl) {
     window.open(`https://github.com/${orgUrl}`)
   }

}
