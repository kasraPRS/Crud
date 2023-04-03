import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnakBarComponent } from './snak-bar/snak-bar.component';
import { SuccessSnakeComponent } from './success-snake/success-snake.component';
import { MaterialModule } from '../material/material.module';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SnakBarComponent,
    SuccessSnakeComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class SharedModule { }
