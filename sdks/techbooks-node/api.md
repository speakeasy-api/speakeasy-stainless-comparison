# Books

Types:

- <code><a href="./src/resources/books/books.ts">FantasyBook</a></code>
- <code><a href="./src/resources/books/books.ts">ProgrammingBook</a></code>
- <code><a href="./src/resources/books/books.ts">SciFiBook</a></code>
- <code><a href="./src/resources/books/books.ts">BookCreateResponse</a></code>
- <code><a href="./src/resources/books/books.ts">BookRetrieveResponse</a></code>
- <code><a href="./src/resources/books/books.ts">BookListResponse</a></code>

Methods:

- <code title="post /books">client.books.<a href="./src/resources/books/books.ts">create</a>({ ...params }) -> BookCreateResponse</code>
- <code title="get /books/{bookId}">client.books.<a href="./src/resources/books/books.ts">retrieve</a>(bookId) -> BookRetrieveResponse</code>
- <code title="get /books">client.books.<a href="./src/resources/books/books.ts">list</a>() -> BookListResponse</code>

## Cover

Methods:

- <code title="put /books/{bookId}/cover">client.books.cover.<a href="./src/resources/books/cover.ts">update</a>(bookId, { ...params }) -> void</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">Order</a></code>
- <code><a href="./src/resources/orders.ts">OrderListResponse</a></code>

Methods:

- <code title="post /orders">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> Order</code>
- <code title="get /orders/{orderId}">client.orders.<a href="./src/resources/orders.ts">retrieve</a>(orderId) -> Order</code>
- <code title="get /orders">client.orders.<a href="./src/resources/orders.ts">list</a>() -> OrderListResponse</code>

# OrderStream

Types:

- <code><a href="./src/resources/order-stream.ts">OrderStreamListResponse</a></code>

Methods:

- <code title="get /orderstream">client.orderStream.<a href="./src/resources/order-stream.ts">list</a>() -> OrderStreamListResponse</code>
