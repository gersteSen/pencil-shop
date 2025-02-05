import { computed } from '@angular/core';
import { ProductCardApi } from '../product-card/product-card-interface';
import {
  getState,
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Checkout } from '../checkout/checkout.interface';

export interface ShopStateModel {
  orders: Checkout[];
}

export const intialState: ShopStateModel = {
  orders: [],
};

export const ShopState = signalStore(
  { providedIn: 'root' },
  withState(intialState),
  withComputed(({ orders }) => ({
    totalSum: computed<number>(() => {
      return orders()
        .map((x) => ({ price: x.product.price, amount: x.amount }))
        .reduce((prev, curr) => prev + curr.amount * curr.price, 0);
    }),
  })),
  withMethods((store) => ({
    addToWarenkorb(item: Checkout): void {
      patchState(store, (state) => {
        const existingItemIndex = state.orders.findIndex(
          (order) => order.product.id === item.product.id,
        );

        if (existingItemIndex !== -1) {
          // Update the amount of the existing item
          const updatedOrders = [...state.orders];
          updatedOrders[existingItemIndex] = {
            ...updatedOrders[existingItemIndex],
            amount: updatedOrders[existingItemIndex].amount + item.amount,
          };
          return { orders: updatedOrders };
        } else {
          // Add the new item to the orders array
          return { orders: [...state.orders, item] };
        }
      });
    },
  })),
);
