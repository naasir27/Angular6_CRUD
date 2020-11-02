import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from 'rxjs';

import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {MatPaginator} from '@angular/material';
import {delay, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Input('data') customers: Observable<Customer[]>;
  asyncCustomers: Observable<Customer[]>;
  Page: number = 1;
  Size: number = 4;
  recordCount: number;
  loading: boolean;
  // customers: Observable<Customer[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.reloadData();
    // Todo check the variable type issue
    console.log(this.recordCount);
  }

  /*  setPage(page: number) {
      this.loading = true;
      this.customerService.setPageNo(page);
    }*/

  setPaging(page: number, size: number) {
    this.loading = true;
    this.customerService.setPageSize(page, size);
  }


  /*  ngAfterViewInit() {
      this.customerService.counter$
        .pipe(
          tap((count) => {
            this.paginator.length = count;
          })
        )
        .subscribe();

      this.paginator.page
        .pipe(
          tap(() => this.loadData())
        )
        .subscribe();
    }
    loadData() {
      this.customerService.getCustomersList(this.paginator.pageIndex, this.paginator.pageSize);
    }*/

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
    });
  }

  navigatePage() {
    this.customerService.getCustomersList();
  }
}
