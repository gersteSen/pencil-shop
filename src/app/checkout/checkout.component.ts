import {
  Component,
  computed,
  inject,
  Input,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { Checkout } from './checkout.interface';
import { ShopState } from '../_state/shop.state';
import { DecimalPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [DecimalPipe],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  shopState = inject(ShopState);

  orders = this.shopState.orders;
}
