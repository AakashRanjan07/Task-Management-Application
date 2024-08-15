import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserassignedtasksComponent } from './userassignedtasks.component';

describe('UserassignedtasksComponent', () => {
  let component: UserassignedtasksComponent;
  let fixture: ComponentFixture<UserassignedtasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserassignedtasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserassignedtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
