import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';

import { DialogData } from '../customer-details/customer-details.component';



@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id: number;
  customer: Customer;
  age: number;
  name: string;
  submitted = false;
  router: any;

  constructor(private customerService: CustomerService,
    public dialogRef: MatDialogRef<UpdateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {

  }

  getData() {
    this.customerService.getCustomer(this.customer.id);
    console.log(this.id);
  }
  save() {
    this.customerService.updateCustomer(this.customer.id, this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
  }
  updateCustomer() {
    // this.customerService.updateCustomer(this.customer.id, this.customer)
    //   .subscribe(result => {
    //     console.log(result);
    //     this.customer = new Customer();
    //     this.gotoList();
    //   }, error => console.log(error));
  }

  onSubmit() {
    // this.updateCustomer();
    console.log(this.customer.name);
  }
  gotoList() {
    this.router.navigate(['/customer']);
  }
}
