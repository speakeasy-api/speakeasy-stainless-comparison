/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type User = {
    id?: number | undefined;
    email?: string | undefined;
    name?: string | undefined;
};

/** @internal */
export namespace User$ {
    export const inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z
        .object({
            id: z.number().int().optional(),
            email: z.string().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        id?: number | undefined;
        email?: string | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, User> = z
        .object({
            id: z.number().int().optional(),
            email: z.string().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
