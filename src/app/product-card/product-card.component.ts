import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  InputSignal,
  Output,
  output,
} from '@angular/core';
import { ProductCardApi } from './product-card-interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: ProductCardApi;
  @Output() addToWarenkorbEvent: EventEmitter<ProductCardApi> =
    new EventEmitter<ProductCardApi>();

  addToWarenkorb() {
    this.addToWarenkorbEvent.emit(this.product);
  }
}
