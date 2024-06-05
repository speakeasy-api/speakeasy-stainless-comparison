// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as OrderStreamAPI from './order-stream';
import * as OrdersAPI from './orders';

export class OrderStream extends APIResource {
  /**
   * Returns a stream of orders
   */
  list(options?: Core.RequestOptions): Core.APIPromise<OrderStreamListResponse> {
    return this._client.get('/orderstream', options);
  }
}

/**
 * A message in the order stream
 */
export interface OrderStreamListResponse {
  id: string;

  data: OrdersAPI.Order;

  event: string;
}

export namespace OrderStream {
  export import OrderStreamListResponse = OrderStreamAPI.OrderStreamListResponse;
}
