import { Component, inject, signal } from '@angular/core';
import { ProductCardApi } from './product-card/product-card-interface';
import { mockProducts } from './products.mock';
import { ProductCardComponent } from './product-card/product-card.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout } from './checkout/checkout.interface';
import { ShopState } from './_state/shop.state';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ProductCardComponent, CheckoutComponent],
})
export class AppComponent {
  products: ProductCardApi[] = mockProducts;
  newItems = signal<Checkout[]>([]);

  shopState = inject(ShopState);
  orders = this.shopState.orders;

  addToWarenkorb($event: ProductCardApi) {
    console.log('New Item: ', $event);
    this.shopState.addToWarenkorb({
      product: $event,
      amount: 1,
    });
  }
}
