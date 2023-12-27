import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsAddeditComponent } from './products-addedit/products-addedit.component';
import { ProductsListComponent } from './products-list/products-list.component'

@NgModule({
  declarations: [
    ProductsAddeditComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ProductsModule { }
