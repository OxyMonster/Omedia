import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitUser } from "src/app/interfaces/GitUser";

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  private apiUrl: string = 'https://api.github.com/users'; 

  constructor(private _http: HttpClient) {  }

  // * * API calls * *   

  getAllUsers(): Observable<GitUser[]> {

    return this._http
               .get<GitUser[]>(this.apiUrl);                  
  }; 
  
  getGitUser(userName: string): Observable<GitUser> {
    
    return this._http.get<GitUser>(`${this.apiUrl}/${userName}`);
  };

  getAllUserDetails(url: string): Observable<any> {

    return this._http.get(url);
  };

  getUserRepos(repoUrl: string): Observable<any> {
    
    return this._http.get(repoUrl)
  }; 

}
