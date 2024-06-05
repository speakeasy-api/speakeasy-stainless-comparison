# GetOrderStreamResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `orderStreamMessage`                                               | *EventStream<components.OrderStreamMessage>*                       | :heavy_minus_sign:                                                 | A stream of orders                                                 |