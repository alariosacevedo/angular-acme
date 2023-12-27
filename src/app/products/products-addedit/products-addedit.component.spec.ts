import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddeditComponent } from './products-addedit.component';

describe('ProductsAddeditComponent', () => {
  let component: ProductsAddeditComponent;
  let fixture: ComponentFixture<ProductsAddeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsAddeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
