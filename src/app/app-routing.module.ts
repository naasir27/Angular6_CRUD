import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';

const routes: Routes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'customer', component: CustomerListComponent },
    { path: 'add', component: CreateCustomerComponent },
    { path: 'findbyage', component: SearchCustomersComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
