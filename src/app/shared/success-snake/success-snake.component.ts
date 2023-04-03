import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-snake',
  templateUrl: './success-snake.component.html',
  styleUrls: ['./success-snake.component.scss'],

})
export class SuccessSnakeComponent implements OnInit {

  constructor() { }
  snackBarRef = inject(MatSnackBarRef);

  ngOnInit(): void {
  }

}
