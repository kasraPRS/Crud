import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { SnakBarComponent } from './snak-bar.component';

describe('SnakBarComponent', () => {
  let component: SnakBarComponent;
  let fixture: ComponentFixture<SnakBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnakBarComponent],
      imports: [MatSnackBarModule],
      providers: [
        { provide: MatSnackBar, useValue: [] },
        { provide: MatSnackBarRef, useValue: [] },
        { provide: MAT_SNACK_BAR_DATA, useValue: [] },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SnakBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
