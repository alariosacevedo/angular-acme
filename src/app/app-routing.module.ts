import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsAddeditComponent } from './products/products-addedit/products-addedit.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:productId/addedit', component: ProductsAddeditComponent },
  { path: 'products/:productId/details', component: ProductsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
