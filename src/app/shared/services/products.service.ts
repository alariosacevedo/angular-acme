import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { ProductDto } from '../dto/product-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productDtoList: ProductDto[] = [
    {
      "producId": 1,
      "code": "A",
      "name": "Elegance Hair Gel",
      "description": "Strong hold hair gel.",
      "quantity": 1,
      "price": 9.99,
      "rating": 1
      },
      {
      "producId": 2,
      "code": "B",
      "name": "Elegance Hair Serum",
      "description": "Hair serum with vitamins.",
      "quantity": 2,
      "price": 14.99,
      "rating": 2
      },
      {
      "producId": 3,
      "code": "C",
      "name": "Elegance Hair Shampoo",
      "description": "Hair Shampoo with Aloe Vera.",
      "quantity": 3,
      "price": 7.99,
      "rating": 3
      }
  ];

  constructor(private httpClient: HttpClient) { }

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
