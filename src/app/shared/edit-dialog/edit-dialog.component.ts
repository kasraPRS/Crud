import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CustomerDTO } from 'src/app/DTO/customerDTO.dto';
import { StorageService } from 'src/app/_service/storage.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],


})
export class EditDialogComponent implements OnInit {
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

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    private _storage: StorageService

  ) {

    this.checkTheStorage(); //load All customer data
    this.formData.patchValue(this.data);
  }

  ngOnInit(): void { }

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
            if (this.customerList.filter((x: any) => x[data] === value).length) {
              // this.openSnackBar();
              this.formData.reset();
            }
          }
        }
      )
  }
  onSubmit() {
    this.customerList[this.customerList.indexOf(this.data)] = this.formData.value; // replacment function
    this._storage.saveOnLocalStorage(this.customerList);
    this.dialogRef.close()
  }
}
