import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.route.paramMap.subscribe(
      params => {
        const productId = Number(params.get('productId'));
        this.onGetProductById(productId);
      }
    );
  }

  onGetProductById(productId: number) {
    if (productId > 0){
      this.subscription = this.productsService.getProductById(productId).subscribe({
        next: (productDto) => {
          this.productDto = productDto;
        },
        error: (err) => (this.errorMessage = err),
      });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
