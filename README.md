# SDK Generation Tests

This repo is for testing SDK generators Speakeasy and Stainless.

This is a companion repo to the [In Depth: Speakeasy vs Stainless](https://speakeasyapi.dev/post/speakeasy-vs-stainless) blog post by Speakeasy.

1. Clone this repository and navigate to the root directory.

2. Install the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy?tab=readme-ov-file#installation) from GitHub, or using Homebrew (macOS):

```bash
brew install speakeasy
```

3. Authenticate with Speakeasy:

```bash
speakeasy auth login
```

4. Install [Bun](https://bun.sh/)

5. Generate the Speakeasy SDK:

```bash
speakeasy generate sdk \
    --schema openapi.yaml \
    --lang typescript \
    --out ./sdks/techbooks-ts
```

6. Navigate to [Stainless](https://www.stainlessapi.com/) and generate the SDK for the same schema.

7. Download the SDK generated by Stainless and place it in the `sdks/techbooks-node` directory.

8. Build the Speakeasy SDK:

```bash
cd sdks/techbooks-ts
bun i
bun run build
```

9. Link the Speakeasy SDK using Bun:

```bash
bun link
```

 10. Build the Stainless SDK:

```bash
cd ../techbooks-node
yarn install
yarn run build
```

11. Link the Stainless SDK using Bun:

```bash
cd dist
bun link
```

11. Install [Prism](https://github.com/stoplightio/prism):

```bash
npm install -g @stoplight/prism-cli
```

12. Start the Prism mock server:

```bash
cd ../../..
prism mock openapi.yaml
```

13. In a new terminal, run the tests:

```bash
cd sdk-tests
bun test
```

14. Compare the results of the tests.