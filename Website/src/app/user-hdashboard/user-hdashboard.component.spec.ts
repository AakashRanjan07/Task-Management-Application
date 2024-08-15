import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHdashboardComponent } from './user-hdashboard.component';

describe('UserHdashboardComponent', () => {
  let component: UserHdashboardComponent;
  let fixture: ComponentFixture<UserHdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserHdashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserHdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
