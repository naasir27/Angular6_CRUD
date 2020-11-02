import { MatDialog } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import {MAT_DIALOG_DATA} from '@angular/material';

import { CustomerListComponent } from '../customer-list/customer-list.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import {queryRefresh} from '@angular/core/src/render3/query';

export interface DialogData {
  name: string;
  id: number;
  age: number;
}

@Component({

  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;
  @Input() total : any;

  constructor(private customerService: CustomerService, private listComponent: CustomerListComponent, public dialog: MatDialog) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.customerService.updateCustomer(this.customer.id,
      { name: this.customer.name, age: this.customer.age, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.customer = data as Customer;
        },
        error => console.log(error));
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
  openUpdateCustomer() {
      const dialogRef = this.dialog.open(UpdateCustomerComponent, {
      width: '500px', height: '500px',
      data: {id: this.customer.id, name: this.customer.name, age: this.customer.age}});
      console.log(this.customer.name);
      dialogRef.afterClosed().subscribe(result => {
        console.log('Closed the Dialog: ${result}');
        // this.customer = result;
        this.reloadData();
      });

  }

  reloadData() {
    this.customerService.getCustomer(this.customer.id).subscribe(res => {
      this.customer = res[this.customer.id];
     });
  }
}
