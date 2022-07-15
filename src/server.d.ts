import * as trpc from '@trpc/server';
declare const appRouter: import("@trpc/server/dist/declarations/src/router").Router<unknown, unknown, {}, Record<"getUser", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<unknown, unknown, {}, string, string, {
    id: string;
    name: string;
}, unknown, {
    id: string;
    name: string;
}>>, {}, {}, trpc.DefaultErrorShape>;
export declare type AppRouter = typeof appRouter;
export {};
