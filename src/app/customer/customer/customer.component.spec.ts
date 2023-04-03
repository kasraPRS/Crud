import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerComponent],
      imports: [MatSnackBarModule, MatDialogModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
