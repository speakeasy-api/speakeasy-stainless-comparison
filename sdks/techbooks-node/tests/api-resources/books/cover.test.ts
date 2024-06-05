// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Techbooks from 'techbooks';
import { Response } from 'node-fetch';

const techbooks = new Techbooks({
  apiKey: 'My API Key',
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cover', () => {
  test('update', async () => {
    const responsePromise = techbooks.books.cover.update(1, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
