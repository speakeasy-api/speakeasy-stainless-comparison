// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['TECHBOOKS_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Defaults to process.env['TECHBOOKS_CLIENT_ID'].
   */
  clientId?: string | undefined;

  /**
   * Defaults to process.env['TECHBOOKS_CLIENT_SECRET'].
   */
  clientSecret?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['TECHBOOKS_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Techbooks API. */
export class Techbooks extends Core.APIClient {
  apiKey: string;
  clientId: string;
  clientSecret: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Techbooks API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['TECHBOOKS_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.clientId=process.env['TECHBOOKS_CLIENT_ID'] ?? undefined]
   * @param {string | undefined} [opts.clientSecret=process.env['TECHBOOKS_CLIENT_SECRET'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['TECHBOOKS_BASE_URL'] ?? http://127.0.0.1:4010] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('TECHBOOKS_BASE_URL'),
    apiKey = Core.readEnv('TECHBOOKS_API_KEY'),
    clientId = Core.readEnv('TECHBOOKS_CLIENT_ID'),
    clientSecret = Core.readEnv('TECHBOOKS_CLIENT_SECRET'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.TechbooksError(
        "The TECHBOOKS_API_KEY environment variable is missing or empty; either provide it, or instantiate the Techbooks client with an apiKey option, like new Techbooks({ apiKey: 'My API Key' }).",
      );
    }
    if (clientId === undefined) {
      throw new Errors.TechbooksError(
        "The TECHBOOKS_CLIENT_ID environment variable is missing or empty; either provide it, or instantiate the Techbooks client with an clientId option, like new Techbooks({ clientId: 'My Client ID' }).",
      );
    }
    if (clientSecret === undefined) {
      throw new Errors.TechbooksError(
        "The TECHBOOKS_CLIENT_SECRET environment variable is missing or empty; either provide it, or instantiate the Techbooks client with an clientSecret option, like new Techbooks({ clientSecret: 'My Client Secret' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      clientId,
      clientSecret,
      ...opts,
      baseURL: baseURL || `http://127.0.0.1:4010`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.apiKey = apiKey;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  books: API.Books = new API.Books(this);
  orders: API.Orders = new API.Orders(this);
  orderStream: API.OrderStream = new API.OrderStream(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-API-Key': this.apiKey };
  }

  static Techbooks = this;

  static TechbooksError = Errors.TechbooksError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  TechbooksError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Techbooks {
  export import RequestOptions = Core.RequestOptions;

  export import Books = API.Books;
  export import FantasyBook = API.FantasyBook;
  export import ProgrammingBook = API.ProgrammingBook;
  export import SciFiBook = API.SciFiBook;
  export import BookCreateResponse = API.BookCreateResponse;
  export import BookRetrieveResponse = API.BookRetrieveResponse;
  export import BookListResponse = API.BookListResponse;
  export import BookCreateParams = API.BookCreateParams;

  export import Orders = API.Orders;
  export import Order = API.Order;
  export import OrderListResponse = API.OrderListResponse;
  export import OrderCreateParams = API.OrderCreateParams;

  export import OrderStream = API.OrderStream;
  export import OrderStreamListResponse = API.OrderStreamListResponse;
}

export default Techbooks;
