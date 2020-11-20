import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { FilteredUserComponent } from './filtered-user/filtered-user.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent, children: [
    { path: '', component: AllUsersComponent },
    { path: ':id', component: FilteredUserComponent }
  ]},
] 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
