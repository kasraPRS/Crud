import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CustomerDTO } from '../DTO/customerDTO.dto';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  customerList: CustomerDTO[] = [];
  tempList: any;
  mylist = new BehaviorSubject<any>([]);

  constructor() {

    if (localStorage.getItem('CustomerList')) {
      const storage: any = localStorage.getItem('CustomerList');
      this.customerList = JSON.parse(storage);
      this.mylist.next(this.customerList);

    }

  }

  saveOnLocalStorage(customerData: any) {
    this.mylist.next(customerData);
    localStorage.setItem('CustomerList', JSON.stringify(customerData));
  }


}
