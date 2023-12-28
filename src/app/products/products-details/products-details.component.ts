import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent {
  
  constructor(private route: ActivatedRoute){
  }

  ngOnInit() {
    //const productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('productId')) ;

      if (productId > 0) {
        console.log("productId: " + productId);
      }
      else {
        
      }
    });
    
  }
}
