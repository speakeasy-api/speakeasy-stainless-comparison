// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as OrdersAPI from './orders';
import * as BooksAPI from './books/books';

export class Orders extends APIResource {
  /**
   * Creates a new order
   */
  create(body: OrderCreateParams, options?: Core.RequestOptions): Core.APIPromise<Order> {
    return this._client.post('/orders', { body, ...options });
  }

  /**
   * Returns a single order
   */
  retrieve(orderId: number, options?: Core.RequestOptions): Core.APIPromise<Order> {
    return this._client.get(`/orders/${orderId}`, options);
  }

  /**
   * Returns a list of orders
   */
  list(options?: Core.RequestOptions): Core.APIPromise<OrderListResponse> {
    return this._client.get('/orders', options);
  }
}

export interface Order {
  id: number;

  date: string;

  products: Array<BooksAPI.FantasyBook | BooksAPI.ProgrammingBook | BooksAPI.SciFiBook>;

  status: 'pending' | 'shipped' | 'delivered';

  user: Order.User;
}

export namespace Order {
  export interface User {
    id?: number;

    email?: string;

    name?: string;
  }
}

export type OrderListResponse = Array<Order>;

export interface OrderCreateParams {
  products: Array<number>;

  user: number;
}

export namespace Orders {
  export import Order = OrdersAPI.Order;
  export import OrderListResponse = OrdersAPI.OrderListResponse;
  export import OrderCreateParams = OrdersAPI.OrderCreateParams;
}
