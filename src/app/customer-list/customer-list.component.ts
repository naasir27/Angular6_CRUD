import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from 'rxjs';

import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {MatPaginator, PageEvent} from '@angular/material';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  @Input('data') customers: Observable<Customer[]>;
  pageEvent: PageEvent;

  Page: number = 0;
  Size: number = 2;
  recordCount: number;
  pageSizeOptions: number[] = [2, 3, 4, 5];



  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  deleteCustomers() {
    this.customerService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {

    this.customers = this.customerService.setPageSize(this.Page, this.Size);
    this.customerService.getSize().subscribe(res => {
      this.recordCount = Number(res);
      // Todo check the variable type issue
      console.log(this.recordCount);
    });
  }

  pageNavigations(event?: PageEvent) {
    console.log(event);
    this.Page = event.pageIndex;
    this.Size = event.pageSize;
    this.reloadData();
  }

  navigatePage(Page: number) {
    this.customerService.getCustomersList();
  }
}
