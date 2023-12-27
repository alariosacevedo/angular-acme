import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsAddeditComponent } from './products/products-addedit/products-addedit.component';

const routes: Routes = [
  { path: 'products-list', component: ProductsListComponent },
  { path: 'products-addedit', component: ProductsAddeditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
