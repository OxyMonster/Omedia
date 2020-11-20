import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LandingRoutingModule } from './landing-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilteredUserComponent } from './filtered-user/filtered-user.component';
import { UserDetailsComponent } from './shared/user-details/user-details.component';
import { UserReposComponent } from './shared/user-details/user-repos/user-repos.component';
import { SearchComponent } from './shared/search/search.component';
import { UserOrganizationsComponent } from './filtered-user/user-organizations/user-organizations.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LandingComponent,
    SearchComponent,
    AllUsersComponent,
    PageNotFoundComponent,
    UserDetailsComponent,
    FilteredUserComponent, 
    UserReposComponent,
    UserOrganizationsComponent 
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})

export class LandingModule { }
