import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { ProductsAddeditComponent } from './products-addedit/products-addedit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component'

@NgModule({
  declarations: [
    ProductsAddeditComponent,
    ProductsListComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]
})
export class ProductsModule { }
