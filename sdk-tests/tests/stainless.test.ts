import { Techbooks } from "techbooks";
import { describe, it, expect } from "bun:test";

const bookStore = new Techbooks({
  apiKey: "My API Key",
  clientId: "My Client ID",
  clientSecret: "My Client Secret",
});

describe("Stainless TechBooks SDK", () => {
  it("should add a book successfully", async () => {
    const params: Techbooks.BookCreateParams = {
      author: {
        name: "Robert C. Martin",
        photo: "https://example.com/photos/robert.jpg",
        biography:
          'Robert Cecil Martin, colloquially known as "Uncle Bob", is an American software engineer...',
      },
      category: "Programming",
      description: "A Handbook of Agile Software Craftsmanship",
      price: 2999,
      title: "Clean Code",
    };

    const result: Techbooks.BookCreateResponse = await bookStore.books.create(
      params
    );
    expect(result).toHaveProperty("id");
  });

  it("calls the API for a book with an invalid price and receives a prism UNPROCESSABLE_ENTITY error", async () => {
    expect(async () => {
      const params: Techbooks.BookCreateParams = {
        author: {
          name: "Robert C. Martin",
          photo: "https://example.com/photos/robert.jpg",
          biography:
            'Robert Cecil Martin, colloquially known as "Uncle Bob", is an American software engineer...',
        },
        category: "Programming",
        description: "A Handbook of Agile Software Craftsmanship",
        price: 29.99,
        title: "Clean Code",
      };

      const result: Techbooks.BookCreateResponse = await bookStore.books.create(
        params
      );

      console.log(result);
    }).toThrow("UNPROCESSABLE_ENTITY");
  });

  it("calls the API for a book with an invalid author and receives a prism UNPROCESSABLE_ENTITY error", async () => {
    expect(async () => {
      const params: Techbooks.BookCreateParams = {
        author: {},
        category: "Programming",
        description: "A Handbook of Agile Software Craftsmanship",
        price: 2999,
        title: "Clean Code",
      };

      const result: Techbooks.BookCreateResponse = await bookStore.books.create(
        params
      );

      console.log(result);
    }).toThrow("UNPROCESSABLE_ENTITY");
  });
});
