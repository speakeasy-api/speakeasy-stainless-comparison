// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Techbooks from 'techbooks';
import { APIUserAbortError } from 'techbooks';
import { Headers } from 'techbooks/core';
import defaultFetch, { Response, type RequestInit, type RequestInfo } from 'node-fetch';

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };

    console.warn = jest.fn();
  });

  afterEach(() => {
    process.env = env;
  });

  describe('defaultHeaders', () => {
    const client = new Techbooks({
      baseURL: 'http://localhost:5000/',
      defaultHeaders: { 'X-My-Default-Header': '2' },
      apiKey: 'My API Key',
      clientId: 'My Client ID',
      clientSecret: 'My Client Secret',
    });

    test('they are used in the request', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post' });
      expect((req.headers as Headers)['x-my-default-header']).toEqual('2');
    });

    test('can ignore `undefined` and leave the default', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect((req.headers as Headers)['x-my-default-header']).toEqual('2');
    });

    test('can be removed with `null`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect(req.headers as Headers).not.toHaveProperty('x-my-default-header');
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new Techbooks({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
        apiKey: 'My API Key',
        clientId: 'My Client ID',
        clientSecret: 'My Client Secret',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new Techbooks({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
        apiKey: 'My API Key',
        clientId: 'My Client ID',
        clientSecret: 'My Client Secret',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new Techbooks({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
        apiKey: 'My API Key',
        clientId: 'My Client ID',
        clientSecret: 'My Client Secret',
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  test('custom fetch', async () => {
    const client = new Techbooks({
      baseURL: 'http://localhost:5000/',
      apiKey: 'My API Key',
      clientId: 'My Client ID',
      clientSecret: 'My Client Secret',
      fetch: (url) => {
        return Promise.resolve(
          new Response(JSON.stringify({ url, custom: true }), {
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      },
    });

    const response = await client.get('/foo');
    expect(response).toEqual({ url: 'http://localhost:5000/foo', custom: true });
  });

  test('custom signal', async () => {
    const client = new Techbooks({
      baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
      apiKey: 'My API Key',
      clientId: 'My Client ID',
      clientSecret: 'My Client Secret',
      fetch: (...args) => {
        return new Promise((resolve, reject) =>
          setTimeout(
            () =>
              defaultFetch(...args)
                .then(resolve)
                .catch(reject),
            300,
          ),
        );
      },
    });

    const controller = new AbortController();
    setTimeout(() => controller.abort(), 200);

    const spy = jest.spyOn(client, 'request');

    await expect(client.get('/foo', { signal: controller.signal })).rejects.toThrowError(APIUserAbortError);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new Techbooks({
        baseURL: 'http://localhost:5000/custom/path/',
        apiKey: 'My API Key',
        clientId: 'My Client ID',
        clientSecret: 'My Client Secret',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new Techbooks({
        baseURL: 'http://localhost:5000/custom/path',
        apiKey: 'My API Key',
        clientId: 'My Client ID',
        clientSecret: 'My Client Secret',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    afterEach(() => {
      process.env['TECHBOOKS_BASE_URL'] = undefined;
    });

    test('explicit option', () => {
      const client = new Techbooks({
        baseURL: 'https://example.com',
        apiKey: 'My API Key',
        clientId: 'My Client ID',
        clientSecret: 'My Client Secret',
      });
      expect(client.baseURL).toEqual('https://example.com');
    });

    test('env variable', () => {
      process.env['TECHBOOKS_BASE_URL'] = 'https://example.com/from_env';
      const client = new Techbooks({
        apiKey: 'My API Key',
        clientId: 'My Client ID',
        clientSecret: 'My Client Secret',
      });
      expect(client.baseURL).toEqual('https://example.com/from_env');
    });

    test('empty env variable', () => {
      process.env['TECHBOOKS_BASE_URL'] = ''; // empty
      const client = new Techbooks({
        apiKey: 'My API Key',
        clientId: 'My Client ID',
        clientSecret: 'My Client Secret',
      });
      expect(client.baseURL).toEqual('http://127.0.0.1:4010');
    });

    test('blank env variable', () => {
      process.env['TECHBOOKS_BASE_URL'] = '  '; // blank
      const client = new Techbooks({
        apiKey: 'My API Key',
        clientId: 'My Client ID',
        clientSecret: 'My Client Secret',
      });
      expect(client.baseURL).toEqual('http://127.0.0.1:4010');
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new Techbooks({
      maxRetries: 4,
      apiKey: 'My API Key',
      clientId: 'My Client ID',
      clientSecret: 'My Client Secret',
    });
    expect(client.maxRetries).toEqual(4);

    // default
    const client2 = new Techbooks({
      apiKey: 'My API Key',
      clientId: 'My Client ID',
      clientSecret: 'My Client Secret',
    });
    expect(client2.maxRetries).toEqual(2);
  });

  test('with environment variable arguments', () => {
    // set options via env var
    process.env['TECHBOOKS_API_KEY'] = 'My API Key';
    process.env['TECHBOOKS_CLIENT_ID'] = 'My Client ID';
    process.env['TECHBOOKS_CLIENT_SECRET'] = 'My Client Secret';
    const client = new Techbooks();
    expect(client.apiKey).toBe('My API Key');
    expect(client.clientId).toBe('My Client ID');
    expect(client.clientSecret).toBe('My Client Secret');
  });

  test('with overriden environment variable arguments', () => {
    // set options via env var
    process.env['TECHBOOKS_API_KEY'] = 'another My API Key';
    process.env['TECHBOOKS_CLIENT_ID'] = 'another My Client ID';
    process.env['TECHBOOKS_CLIENT_SECRET'] = 'another My Client Secret';
    const client = new Techbooks({
      apiKey: 'My API Key',
      clientId: 'My Client ID',
      clientSecret: 'My Client Secret',
    });
    expect(client.apiKey).toBe('My API Key');
    expect(client.clientId).toBe('My Client ID');
    expect(client.clientSecret).toBe('My Client Secret');
  });
});

describe('request building', () => {
  const client = new Techbooks({
    apiKey: 'My API Key',
    clientId: 'My Client ID',
    clientSecret: 'My Client Secret',
  });

  describe('Content-Length', () => {
    test('handles multi-byte characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: '—' } });
      expect((req.headers as Record<string, string>)['content-length']).toEqual('20');
    });

    test('handles standard characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: 'hello' } });
      expect((req.headers as Record<string, string>)['content-length']).toEqual('22');
    });
  });

  describe('custom headers', () => {
    test('handles undefined', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        body: { value: 'hello' },
        headers: { 'X-Foo': 'baz', 'x-foo': 'bar', 'x-Foo': undefined, 'x-baz': 'bam', 'X-Baz': null },
      });
      expect((req.headers as Record<string, string>)['x-foo']).toEqual('bar');
      expect((req.headers as Record<string, string>)['x-Foo']).toEqual(undefined);
      expect((req.headers as Record<string, string>)['X-Foo']).toEqual(undefined);
      expect((req.headers as Record<string, string>)['x-baz']).toEqual(undefined);
    });
  });
});

describe('retries', () => {
  test('retry on timeout', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Promise(
          (resolve, reject) => signal?.addEventListener('abort', () => reject(new Error('timed out'))),
        );
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Techbooks({
      apiKey: 'My API Key',
      clientId: 'My Client ID',
      clientSecret: 'My Client Secret',
      timeout: 10,
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry on 429 with retry-after', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Techbooks({
      apiKey: 'My API Key',
      clientId: 'My Client ID',
      clientSecret: 'My Client Secret',
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry on 429 with retry-after-ms', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After-Ms': '10',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Techbooks({
      apiKey: 'My API Key',
      clientId: 'My Client ID',
      clientSecret: 'My Client Secret',
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });
});