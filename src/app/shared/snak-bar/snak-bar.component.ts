import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snak-bar',
  templateUrl: './snak-bar.component.html',
  styleUrls: ['./snak-bar.component.scss'],
  providers: [
    { provide: MatSnackBar, useValue: [] },
    { provide: MatSnackBarRef, useValue: [] },

  ]
})
export class SnakBarComponent implements OnInit {

  constructor(
    public snackBarRef: MatSnackBarRef<SnakBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }
  ngOnInit(): void {
  }

}
