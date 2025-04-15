import { Component, computed, inject, Renderer2, signal } from '@angular/core';
import { ProductCardApi } from './product-card/product-card-interface';
import { mockProducts } from './products.mock';

import { Checkout } from './checkout/checkout.interface';
import { ShopState } from './_state/shop.state';
import { HighlightDirective } from './directives/highlight.directive';
import { NativeButtonDirective } from './directives/native-button.directive';
import { HeadingDirective } from './directives/heading.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NativeButtonDirective, HeadingDirective],
})
export class AppComponent {
  renderer = inject(Renderer2);
  products: ProductCardApi[] = mockProducts;
  newItems = signal<Checkout[]>([]);
  theme = signal<'light' | 'dark'>('light');
  themeIcon = computed<'light_mode' | 'dark_mode'>(() => {
    return this.theme() === 'light' ? 'dark_mode' : 'light_mode';
  });

  shopState = inject(ShopState);
  orders = this.shopState.orders;

  addToWarenkorb($event: ProductCardApi) {
    console.log('New Item: ', $event);
    this.shopState.addToWarenkorb({
      product: $event,
      amount: 1,
    });
  }

  toggleTheme(): void {
    this.theme.update((state) => (state === 'light' ? 'dark' : 'light'));
    this.renderer.setAttribute(
      document.documentElement,
      'data-theme',
      this.theme(),
    );
  }
}
