import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { ProductsAddeditComponent } from './products-addedit/products-addedit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsAddeditComponent,
    ProductsListComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ]
})
export class ProductsModule { }
