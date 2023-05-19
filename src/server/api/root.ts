import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { validateRouter } from "./routers/validate";
import { authenticationRouter } from "./routers/authentication";
import { bingoRouter } from "./routers/bingo";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  validate: validateRouter,
  bingo: bingoRouter,
  auth: authenticationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
