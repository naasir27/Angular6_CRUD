import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
// tslint:disable-next-line: max-line-length
import {MatCheckboxModule, MatDialog, MatDialogModule, MatDialogRef, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
      CreateCustomerComponent,
      CustomerDetailsComponent,
      CustomerListComponent,
      SearchCustomersComponent,
      UpdateCustomerComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  entryComponents: [
    UpdateCustomerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
