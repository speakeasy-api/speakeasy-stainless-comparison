/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64";
import { blobLikeSchema } from "../../types";
import * as components from "../components";
import * as z from "zod";

export type Cover = {
    fileName: string;
    content: Uint8Array | string;
};

/**
 * Book cover
 */
export type UpdateBookCoverByIdRequestBody = {
    cover?: Cover | Blob | undefined;
};

export type UpdateBookCoverByIdRequest = {
    /**
     * ID of the book to update
     */
    bookId: number;
    /**
     * Book cover
     */
    requestBody: UpdateBookCoverByIdRequestBody;
};

export type UpdateBookCoverByIdResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace Cover$ {
    export const inboundSchema: z.ZodType<Cover, z.ZodTypeDef, unknown> = z
        .object({
            fileName: z.string(),
            content: b64$.zodInbound,
        })
        .transform((v) => {
            return {
                fileName: v.fileName,
                content: v.content,
            };
        });

    export type Outbound = {
        fileName: string;
        content: Uint8Array;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Cover> = z
        .object({
            fileName: z.string(),
            content: b64$.zodOutbound,
        })
        .transform((v) => {
            return {
                fileName: v.fileName,
                content: v.content,
            };
        });
}

/** @internal */
export namespace UpdateBookCoverByIdRequestBody$ {
    export const inboundSchema: z.ZodType<UpdateBookCoverByIdRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            cover: z.lazy(() => Cover$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cover === undefined ? null : { cover: v.cover }),
            };
        });

    export type Outbound = {
        cover?: Cover$.Outbound | Blob | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateBookCoverByIdRequestBody> =
        z
            .object({
                cover: z
                    .lazy(() => Cover$.outboundSchema)
                    .or(blobLikeSchema)
                    .optional(),
            })
            .transform((v) => {
                return {
                    ...(v.cover === undefined ? null : { cover: v.cover }),
                };
            });
}

/** @internal */
export namespace UpdateBookCoverByIdRequest$ {
    export const inboundSchema: z.ZodType<UpdateBookCoverByIdRequest, z.ZodTypeDef, unknown> = z
        .object({
            bookId: z.number().int(),
            RequestBody: z.lazy(() => UpdateBookCoverByIdRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return {
                bookId: v.bookId,
                requestBody: v.RequestBody,
            };
        });

    export type Outbound = {
        bookId: number;
        RequestBody: UpdateBookCoverByIdRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateBookCoverByIdRequest> = z
        .object({
            bookId: z.number().int(),
            requestBody: z.lazy(() => UpdateBookCoverByIdRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return {
                bookId: v.bookId,
                RequestBody: v.requestBody,
            };
        });
}

/** @internal */
export namespace UpdateBookCoverByIdResponse$ {
    export const inboundSchema: z.ZodType<UpdateBookCoverByIdResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateBookCoverByIdResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
            };
        });
}
