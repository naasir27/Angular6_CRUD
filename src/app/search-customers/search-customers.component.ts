import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  age: number;
  customers: Customer[];
  msg: String;

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    this.age = null;
    this.msg = null;
  }

  private searchCustomers() {
    this.dataService.getCustomersByAge(this.age)
      .subscribe(customers => this.customers = customers);
  }

  private showNotFound() {
    if(this.customers.length > 0){
      console.log(this.customers.length);
      this.msg = null;
    } else {
      console.log(this.customers.length);
      this.msg = "No results were found";
    }
  }

  onSubmit() {
    this.searchCustomers();
    console.log(this.customers);
    this.showNotFound();
    this.searchCustomers();
  }
}
