# Books
(*books*)

## Overview

Operations related to books

### Available Operations

* [getAllBooks](#getallbooks) - Get all books
* [addBook](#addbook) - Add a new book
* [getBookById](#getbookbyid) - Get a book by ID
* [updateBookCoverById](#updatebookcoverbyid) - Update a book cover by ID

## getAllBooks

Returns a list of books

### Example Usage

```typescript
import { TechBooks } from "techbooks-speakeasy";

const techBooks = new TechBooks({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await techBooks.books.getAllBooks();

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetAllBooksResponse](../../models/operations/getallbooksresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## addBook

Adds a new book to the bookstore

### Example Usage

```typescript
import { TechBooks } from "techbooks-speakeasy";

const techBooks = new TechBooks({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await techBooks.books.addBook({
      id: 1,
      title: "New Sci-Fi Book",
      description: "A new Sci-Fi book description",
      price: 1999,
      category: "Sci-fi",
    author:     {
          id: 1,
          name: "New Author",
          photo: "https://example.com/photos/newauthor.jpg",
          biography: "New Author is an upcoming writer in the Sci-Fi genre...",
        },
      coverImage: "https://example.com/covers/newbook.jpg",
    });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddBookRequestBody](../../models/operations/addbookrequestbody.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.AddBookResponse](../../models/operations/addbookresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getBookById

Returns a single book

### Example Usage

```typescript
import { TechBooks } from "techbooks-speakeasy";

const techBooks = new TechBooks();

async function run() {
  const result = await techBooks.books.getBookById(1);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `bookId`                                                                                                                                                                       | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the book to return                                                                                                                                                       | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise\<[operations.GetBookByIdResponse](../../models/operations/getbookbyidresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateBookCoverById

Updates a single book cover

### Example Usage

```typescript
import { TechBooks } from "techbooks-speakeasy";

const techBooks = new TechBooks({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await techBooks.books.updateBookCoverById(1, {});

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `bookId`                                                                                                                                                                       | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the book to update                                                                                                                                                       | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.UpdateBookCoverByIdRequestBody](../../models/operations/updatebookcoverbyidrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | Book cover                                                                                                                                                                     |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise\<[operations.UpdateBookCoverByIdResponse](../../models/operations/updatebookcoverbyidresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
