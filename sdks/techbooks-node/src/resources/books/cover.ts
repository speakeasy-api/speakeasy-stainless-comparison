// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as CoverAPI from './cover';
import { type Uploadable, multipartFormRequestOptions } from '../../core';

export class Cover extends APIResource {
  /**
   * Updates a single book cover
   */
  update(bookId: number, body: CoverUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(
      `/books/${bookId}/cover`,
      multipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }
}

export interface CoverUpdateParams {
  cover?: Uploadable;
}

export namespace Cover {
  export import CoverUpdateParams = CoverAPI.CoverUpdateParams;
}
