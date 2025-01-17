/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * Book object to be added
 */
export type AddBookRequestBody =
    | (components.ProgrammingBook & { category: "Programming" })
    | (components.FantasyBook & { category: "Fantasy" })
    | (components.SciFiBook & { category: "Sci-fi" });

/**
 * Book created successfully
 */
export type AddBookResponseBody =
    | (components.ProgrammingBook & { category: "Programming" })
    | (components.FantasyBook & { category: "Fantasy" })
    | (components.SciFiBook & { category: "Sci-fi" });

export type AddBookResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Book created successfully
     */
    oneOf?:
        | (components.ProgrammingBook & { category: "Programming" })
        | (components.FantasyBook & { category: "Fantasy" })
        | (components.SciFiBook & { category: "Sci-fi" })
        | undefined;
};

/** @internal */
export namespace AddBookRequestBody$ {
    export const inboundSchema: z.ZodType<AddBookRequestBody, z.ZodTypeDef, unknown> = z.union([
        components.ProgrammingBook$.inboundSchema.and(
            z
                .object({ category: z.literal("Programming") })
                .transform((v) => ({ category: v.category }))
        ),
        components.FantasyBook$.inboundSchema.and(
            z
                .object({ category: z.literal("Fantasy") })
                .transform((v) => ({ category: v.category }))
        ),
        components.SciFiBook$.inboundSchema.and(
            z.object({ category: z.literal("Sci-fi") }).transform((v) => ({ category: v.category }))
        ),
    ]);

    export type Outbound =
        | (components.ProgrammingBook$.Outbound & { category: "Programming" })
        | (components.FantasyBook$.Outbound & { category: "Fantasy" })
        | (components.SciFiBook$.Outbound & { category: "Sci-fi" });
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddBookRequestBody> = z.union([
        components.ProgrammingBook$.outboundSchema.and(
            z
                .object({ category: z.literal("Programming") })
                .transform((v) => ({ category: v.category }))
        ),
        components.FantasyBook$.outboundSchema.and(
            z
                .object({ category: z.literal("Fantasy") })
                .transform((v) => ({ category: v.category }))
        ),
        components.SciFiBook$.outboundSchema.and(
            z.object({ category: z.literal("Sci-fi") }).transform((v) => ({ category: v.category }))
        ),
    ]);
}

/** @internal */
export namespace AddBookResponseBody$ {
    export const inboundSchema: z.ZodType<AddBookResponseBody, z.ZodTypeDef, unknown> = z.union([
        components.ProgrammingBook$.inboundSchema.and(
            z
                .object({ category: z.literal("Programming") })
                .transform((v) => ({ category: v.category }))
        ),
        components.FantasyBook$.inboundSchema.and(
            z
                .object({ category: z.literal("Fantasy") })
                .transform((v) => ({ category: v.category }))
        ),
        components.SciFiBook$.inboundSchema.and(
            z.object({ category: z.literal("Sci-fi") }).transform((v) => ({ category: v.category }))
        ),
    ]);

    export type Outbound =
        | (components.ProgrammingBook$.Outbound & { category: "Programming" })
        | (components.FantasyBook$.Outbound & { category: "Fantasy" })
        | (components.SciFiBook$.Outbound & { category: "Sci-fi" });
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddBookResponseBody> = z.union([
        components.ProgrammingBook$.outboundSchema.and(
            z
                .object({ category: z.literal("Programming") })
                .transform((v) => ({ category: v.category }))
        ),
        components.FantasyBook$.outboundSchema.and(
            z
                .object({ category: z.literal("Fantasy") })
                .transform((v) => ({ category: v.category }))
        ),
        components.SciFiBook$.outboundSchema.and(
            z.object({ category: z.literal("Sci-fi") }).transform((v) => ({ category: v.category }))
        ),
    ]);
}

/** @internal */
export namespace AddBookResponse$ {
    export const inboundSchema: z.ZodType<AddBookResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            oneOf: z
                .union([
                    components.ProgrammingBook$.inboundSchema.and(
                        z
                            .object({ category: z.literal("Programming") })
                            .transform((v) => ({ category: v.category }))
                    ),
                    components.FantasyBook$.inboundSchema.and(
                        z
                            .object({ category: z.literal("Fantasy") })
                            .transform((v) => ({ category: v.category }))
                    ),
                    components.SciFiBook$.inboundSchema.and(
                        z
                            .object({ category: z.literal("Sci-fi") })
                            .transform((v) => ({ category: v.category }))
                    ),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.oneOf === undefined ? null : { oneOf: v.oneOf }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        oneOf?:
            | (components.ProgrammingBook$.Outbound & { category: "Programming" })
            | (components.FantasyBook$.Outbound & { category: "Fantasy" })
            | (components.SciFiBook$.Outbound & { category: "Sci-fi" })
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddBookResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            oneOf: z
                .union([
                    components.ProgrammingBook$.outboundSchema.and(
                        z
                            .object({ category: z.literal("Programming") })
                            .transform((v) => ({ category: v.category }))
                    ),
                    components.FantasyBook$.outboundSchema.and(
                        z
                            .object({ category: z.literal("Fantasy") })
                            .transform((v) => ({ category: v.category }))
                    ),
                    components.SciFiBook$.outboundSchema.and(
                        z
                            .object({ category: z.literal("Sci-fi") })
                            .transform((v) => ({ category: v.category }))
                    ),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.oneOf === undefined ? null : { oneOf: v.oneOf }),
            };
        });
}
