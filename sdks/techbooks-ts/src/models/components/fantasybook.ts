/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Author, Author$ } from "./author";
import * as z from "zod";

export type FantasyBook = {
    id?: number | undefined;
    title: string;
    description: string;
    /**
     * Price in USD cents
     */
    price: number;
    category?: "Fantasy" | undefined;
    author: Author;
    coverImage?: string | undefined;
};

/** @internal */
export namespace FantasyBook$ {
    export const inboundSchema: z.ZodType<FantasyBook, z.ZodTypeDef, unknown> = z
        .object({
            id: z.number().int().optional(),
            title: z.string(),
            description: z.string(),
            price: z.number().int(),
            category: z.literal("Fantasy").optional(),
            author: Author$.inboundSchema,
            cover_image: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                title: v.title,
                description: v.description,
                price: v.price,
                ...(v.category === undefined ? null : { category: v.category }),
                author: v.author,
                ...(v.cover_image === undefined ? null : { coverImage: v.cover_image }),
            };
        });

    export type Outbound = {
        id?: number | undefined;
        title: string;
        description: string;
        price: number;
        category: "Fantasy";
        author: Author$.Outbound;
        cover_image?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FantasyBook> = z
        .object({
            id: z.number().int().optional(),
            title: z.string(),
            description: z.string(),
            price: z.number().int(),
            category: z.literal("Fantasy").default("Fantasy" as const),
            author: Author$.outboundSchema,
            coverImage: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                title: v.title,
                description: v.description,
                price: v.price,
                category: v.category,
                author: v.author,
                ...(v.coverImage === undefined ? null : { cover_image: v.coverImage }),
            };
        });
}
