<!-- Start SDK Example Usage [usage] -->
```typescript
import { TechBooks } from "techbooks-speakeasy";

const techBooks = new TechBooks({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await techBooks.books.getAllBooks();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->