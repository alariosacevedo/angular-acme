import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../../shared/services/products.service';
import { ProductDto } from '../../shared/dto/product-dto.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})

export class ProductsDetailsComponent implements OnInit, OnDestroy {  
  public subscription!: Subscription;
  public errorMessage: string = '';
  public productDto = new ProductDto();

  constructor(private productsService: ProductsService, private route: ActivatedRoute){
  }

  ngOnInit() {
   const productId = Number(this.route.snapshot.paramMap.get('productId'));
   if (productId > 0){
    console.log("productId " + productId);

    this.subscription = this.productsService.getProductById(productId).subscribe({
      next: (productDto) => {
        this.productDto = productDto;
      },
      error: (err) => (this.errorMessage = err),
    });
   }
   else {

   }   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
