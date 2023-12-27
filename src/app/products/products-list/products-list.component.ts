import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit, OnDestroy{
  constructor() {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  ngAfterViewInit() {
    $("#tblProductsList").DataTable({
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: true,
    });
    //console.log("app-user-list-ngAfterViewInit");
  }
}
