// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Techbooks from 'techbooks';
import { Response } from 'node-fetch';

const techbooks = new Techbooks({
  apiKey: 'My API Key',
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource books', () => {
  test('create: only required params', async () => {
    const responsePromise = techbooks.books.create({
      author: {},
      category: 'Programming',
      description: 'A Handbook of Agile Software Craftsmanship',
      price: 2999,
      title: 'Clean Code',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await techbooks.books.create({
      author: {
        id: 1,
        name: 'Robert C. Martin',
        photo: 'https://example.com/photos/robert.jpg',
        biography:
          'Robert Cecil Martin, colloquially known as "Uncle Bob", is an American software engineer...',
      },
      category: 'Programming',
      description: 'A Handbook of Agile Software Craftsmanship',
      price: 2999,
      title: 'Clean Code',
      id: 1,
      cover_image: 'https://example.com/covers/cleancode.jpg',
    });
  });

  test('retrieve', async () => {
    const responsePromise = techbooks.books.retrieve(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(techbooks.books.retrieve(1, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Techbooks.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = techbooks.books.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(techbooks.books.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Techbooks.NotFoundError,
    );
  });
});
