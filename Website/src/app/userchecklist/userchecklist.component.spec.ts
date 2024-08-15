import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchecklistComponent } from './userchecklist.component';

describe('UserchecklistComponent', () => {
  let component: UserchecklistComponent;
  let fixture: ComponentFixture<UserchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserchecklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
