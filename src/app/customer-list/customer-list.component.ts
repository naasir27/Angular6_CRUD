import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';

import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {MatPaginator} from '@angular/material';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  // @Input('data') customer: Observable<Customer[]> =[];
  recordCount: number;
  customers: Observable<Customer[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.reloadData();
    // Todo check the variable type issue
    console.log(this.recordCount);
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
    this.customers = this.customerService.getCustomersList();
    this.customerService.getSize().subscribe(res => {
      this.recordCount = Number(res);
    });
  }

  navigatePage() {
    this.customerService.getCustomersList();
  }
}
