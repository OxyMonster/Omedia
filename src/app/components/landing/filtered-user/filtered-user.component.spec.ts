import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredUserComponent } from './filtered-user.component';

describe('FilteredUserComponent', () => {
  let component: FilteredUserComponent;
  let fixture: ComponentFixture<FilteredUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
