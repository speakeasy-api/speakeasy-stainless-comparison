import { TechBooks } from "techbooks-speakeasy";
import { describe, it, expect } from "bun:test";

const bookStore = new TechBooks({
  apiKey: "123",
});

describe("Speakeasy TechBooks SDK", () => {
  it("should add a book successfully", async () => {
    const result = await bookStore.books.addBook({
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
    });
    expect(result).toHaveProperty("oneOf");
    expect(result.oneOf).toHaveProperty("id");
  });

  it("should throw for a book with an invalid price", async () => {
    expect(async () => {
      await bookStore.books.addBook({
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
      });
    }).toThrow("Input validation failed");
  });

  it("should throw for a book with an invalid author", async () => {
    expect(async () => {
      await bookStore.books.addBook({
        author: {},
        category: "Programming",
        description: "A Handbook of Agile Software Craftsmanship",
        price: 2999,
        title: "Clean Code",
      });
    }).toThrow("Input validation failed");
  });
});
