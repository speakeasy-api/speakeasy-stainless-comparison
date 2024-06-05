// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as BooksAPI from './books';
import * as CoverAPI from './cover';

export class Books extends APIResource {
  cover: CoverAPI.Cover = new CoverAPI.Cover(this._client);

  /**
   * Adds a new book to the bookstore
   */
  create(body: BookCreateParams, options?: Core.RequestOptions): Core.APIPromise<BookCreateResponse> {
    return this._client.post('/books', { body, ...options });
  }

  /**
   * Returns a single book
   */
  retrieve(bookId: number, options?: Core.RequestOptions): Core.APIPromise<BookRetrieveResponse> {
    return this._client.get(`/books/${bookId}`, options);
  }

  /**
   * Returns a list of books
   */
  list(options?: Core.RequestOptions): Core.APIPromise<BookListResponse> {
    return this._client.get('/books', options);
  }
}

export interface FantasyBook {
  author: FantasyBook.Author;

  category: 'Fantasy' | 'Sci-fi' | 'Programming';

  description: string;

  /**
   * Price in USD cents
   */
  price: number;

  title: string;

  id?: number;

  cover_image?: string;
}

export namespace FantasyBook {
  export interface Author {
    id?: number;

    biography?: string;

    name?: string;

    photo?: string;
  }
}

export interface ProgrammingBook {
  author: ProgrammingBook.Author;

  category: 'Programming' | 'Sci-fi' | 'Fantasy';

  description: string;

  /**
   * Price in USD cents
   */
  price: number;

  title: string;

  id?: number;

  cover_image?: string;
}

export namespace ProgrammingBook {
  export interface Author {
    id?: number;

    biography?: string;

    name?: string;

    photo?: string;
  }
}

export interface SciFiBook {
  author: SciFiBook.Author;

  category: 'Sci-fi' | 'Fantasy' | 'Programming';

  description: string;

  /**
   * Price in USD cents
   */
  price: number;

  title: string;

  id?: number;

  cover_image?: string;
}

export namespace SciFiBook {
  export interface Author {
    id?: number;

    biography?: string;

    name?: string;

    photo?: string;
  }
}

export type BookCreateResponse = ProgrammingBook | FantasyBook | SciFiBook;

export type BookRetrieveResponse = ProgrammingBook | FantasyBook | SciFiBook;

export type BookListResponse = Array<ProgrammingBook | FantasyBook | SciFiBook>;

export type BookCreateParams =
  | BookCreateParams.ProgrammingBook
  | BookCreateParams.FantasyBook
  | BookCreateParams.SciFiBook;

export namespace BookCreateParams {
  export interface ProgrammingBook {
    author: BookCreateParams.ProgrammingBook.Author;

    category: 'Programming' | 'Sci-fi' | 'Fantasy';

    description: string;

    /**
     * Price in USD cents
     */
    price: number;

    title: string;

    id?: number;

    cover_image?: string;
  }

  export namespace ProgrammingBook {
    export interface Author {
      id?: number;

      biography?: string;

      name?: string;

      photo?: string;
    }
  }

  export interface FantasyBook {
    author: BookCreateParams.FantasyBook.Author;

    category: 'Fantasy' | 'Sci-fi' | 'Programming';

    description: string;

    /**
     * Price in USD cents
     */
    price: number;

    title: string;

    id?: number;

    cover_image?: string;
  }

  export namespace FantasyBook {
    export interface Author {
      id?: number;

      biography?: string;

      name?: string;

      photo?: string;
    }
  }

  export interface SciFiBook {
    author: BookCreateParams.SciFiBook.Author;

    category: 'Sci-fi' | 'Fantasy' | 'Programming';

    description: string;

    /**
     * Price in USD cents
     */
    price: number;

    title: string;

    id?: number;

    cover_image?: string;
  }

  export namespace SciFiBook {
    export interface Author {
      id?: number;

      biography?: string;

      name?: string;

      photo?: string;
    }
  }
}

export namespace Books {
  export import FantasyBook = BooksAPI.FantasyBook;
  export import ProgrammingBook = BooksAPI.ProgrammingBook;
  export import SciFiBook = BooksAPI.SciFiBook;
  export import BookCreateResponse = BooksAPI.BookCreateResponse;
  export import BookRetrieveResponse = BooksAPI.BookRetrieveResponse;
  export import BookListResponse = BooksAPI.BookListResponse;
  export import BookCreateParams = BooksAPI.BookCreateParams;
  export import Cover = CoverAPI.Cover;
  export import CoverUpdateParams = CoverAPI.CoverUpdateParams;
}
