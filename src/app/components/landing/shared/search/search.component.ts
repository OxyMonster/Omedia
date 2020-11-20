import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  @Output() result: EventEmitter<string> = new EventEmitter<string>();
  searchKey: string;
  lastSearches: string[]; 

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getSearchesFromLocalStorage(); 
    
  }

  routeToDetails(keyword: string): void {
    this._router.navigate([`/${keyword}`])
  };

  onSubmit(): void {
    if ( this.searchKey ) {
      // * * send search value to parent and clear input * * 
      this.result.emit(this.searchKey);
      this.saveLastSearches();
    };
  };

  saveLastSearches(): void {
    // * *  update filtered users * * 
    this.lastSearches = this.lastSearches || [];
    this.lastSearches.push(this.searchKey);
    
    if (this.lastSearches.length >= 4) {
       this.lastSearches.splice(0, 1); 
    };
    // &&  Save last searches &&
    localStorage.setItem('lastSearches', JSON.stringify(this.lastSearches));
  };

  getSearchesFromLocalStorage(): void {
    this.lastSearches = JSON.parse(localStorage.getItem('lastSearches'));
  };


}
