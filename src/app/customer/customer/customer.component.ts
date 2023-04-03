import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { debounceTime, distinctUntilChanged, first, Subject } from 'rxjs';
import { CustomerDTO } from 'src/app/DTO/customerDTO.dto';
import { EditDialogComponent } from 'src/app/shared/edit-dialog/edit-dialog.component';
import { SnakBarComponent } from 'src/app/shared/snak-bar/snak-bar.component';
import { SuccessSnakeComponent } from 'src/app/shared/success-snake/success-snake.component';
import { StorageService } from 'src/app/_service/storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],

})
export class CustomerComponent implements OnInit {

  formData: FormGroup = new FormGroup({
    id: new FormControl(),
    FirstName: new FormControl(''),
    LastName: new FormControl('',),
    DateOfBrith: new FormControl(''),
    PhoneNumber: new FormControl('', [Validators.minLength(11)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    BankAccountNumber: new FormControl('', [Validators.required, Validators.pattern(/^\w{1,16}$/)])
  });

  customerList: CustomerDTO[] = [];

  btndisable: boolean = false;
  editCustomerComponent: MatDialogRef<EditDialogComponent> | undefined;
  constructor(
    private _storage: StorageService,
    private _snackBar: MatSnackBar,
    public _editDialog: MatDialog
  ) {



  }

  ngOnInit(): void {
    this.checkTheStorage();

  }
  ngAfterViewInit() {
  }

  checkTheStorage() {
    this._storage.mylist.subscribe(
      result => {
        if (result) {
          this.customerList = result;
        }
      }
    )
  }

  checkData(data: string) {

    this.formData.controls[data].valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(
        value => {
          if (value) {
            const data = value.toLowerCase();
            if (this.customerList.filter((x: any) => x[data] === data).length) {
              this.openSnackBar();
              this.formData.reset();
            }
          }
        }
      )
  }

  onSubmit() {
    if (this.formData.valid) {
      this.checkTheStorage();
      this.formData.value['id'] = this.customerList.length; //add id for finding user
      this.customerList.push(this.formData.value);
      this._storage.saveOnLocalStorage(this.customerList); // the last step for submitting
      this.formData.reset();
      this.openSuccessSnak();
    }

  }


  get f() { return this.formData.controls }

  editCustomerData(id: any) {

    const user = this.customerList.filter((user) => user.id === id)[0];

    this.editCustomerComponent = this._editDialog.open(EditDialogComponent, {
      width: '520px',
      data: user
    });
  }

  deleteUser(firstName: string) {
    const objWithFirstnameIndex = this.customerList.findIndex((obj) => obj.FirstName === firstName);
    if (objWithFirstnameIndex > -1) {
      this.customerList.splice(objWithFirstnameIndex, 1);
      this._storage.saveOnLocalStorage(this.customerList)
    }
    this.checkTheStorage();
  }

  openSnackBar() {
    debugger

    this._snackBar.openFromComponent(SnakBarComponent, {
      data: 'Users can not have same name, Lastname and birthday.',
      duration: 3 * 1000
    });

  }
  openSuccessSnak() {
    this._snackBar.openFromComponent(SuccessSnakeComponent, {
      duration: 3 * 1000,
    });
  }
}
