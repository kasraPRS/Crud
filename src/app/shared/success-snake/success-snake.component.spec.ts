import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarRef } from '@angular/material/snack-bar';

import { SuccessSnakeComponent } from './success-snake.component';

describe('SuccessSnakeComponent', () => {
  let component: SuccessSnakeComponent;
  let fixture: ComponentFixture<SuccessSnakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessSnakeComponent],
      providers: [{
        provide: MatSnackBarRef,
        useValue: []
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SuccessSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
