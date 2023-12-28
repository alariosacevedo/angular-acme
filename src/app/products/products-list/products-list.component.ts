import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../shared/services/products.service';
import { ProductDto } from '../../shared/dto/product-dto.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  providers: [ProductsService],
})
export class ProductsListComponent implements OnInit, OnDestroy{
  public subscription!: Subscription;

  public productDtoList: ProductDto[] = [
    {
      "productId": 1,
      "code": "A",
      "name": "Elegance Hair Gel",
      "description": "Strong hold hair gel.",
      "quantity": 1,
      "price": 9.99,
      "rating": 1
      },
      {
      "productId": 2,
      "code": "B",
      "name": "Elegance Hair Serum",
      "description": "Hair serum with vitamins.",
      "quantity": 2,
      "price": 14.99,
      "rating": 2
      },
      {
      "productId": 3,
      "code": "C",
      "name": "Elegance Hair Shampoo",
      "description": "Hair Shampoo with Aloe Vera.",
      "quantity": 3,
      "price": 7.99,
      "rating": 3
      }
  ];

  constructor(private productsService: ProductsService) {}

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
  }
}
