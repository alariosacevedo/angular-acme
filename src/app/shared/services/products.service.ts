import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { ProductDto } from '../dto/product-dto.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productDto = new ProductDto();
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

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  public getProductById(productId: number): Observable<ProductDto> {
    if (productId === 1){
      this.productDto.productId = 1;
      this.productDto.code = "A";
      this.productDto.name = "Elegance Hair Gel";
      this.productDto.description = "Strong hold hair gel.";
      this.productDto.quantity = 1;
      this.productDto.price = 1;
      this.productDto.rating = 1;
    }
    else {
      this.productDto.productId = 0;
      this.productDto.code = "";
      this.productDto.name = "";
      this.productDto.description = "";
      this.productDto.quantity = 0;
      this.productDto.price = 0;
      this.productDto.rating = 0;
    }
    return of(this.productDto);
  }

  public getProductsList() {
    return this.productDtoList;
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
    }
    console.log(`Error Message: ${errorMessage} at ${Date.now()}`);
    return throwError(() => errorMessage);
  }
}
