import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsAddeditComponent } from './products-addedit/products-addedit.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsAddeditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
