import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const movieRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().min(1),
        genre: z.array(z.enum(["ACTION", "COMEDY", "DRAMA", "HORROR"])),
        ageRange: z.enum(["G_RATED", "PG_RATED", "PG_13_RATED", "R_RATED"]),
        categories: z.array(
          z.enum(["TRUE_STORY", "CHANGE_WAY_TO_LOOK_AT_LIFE"]),
        ),
        mood: z.enum(["HAPPY", "NEUTRAL", "SAD"]),
        avatarUrl: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.movie.create({
        data: {
          name: input.name,
          description: input.description,
          ageRange: input.ageRange,
          avatarUrl: input.avatarUrl,
          mood: input.mood,
          categories: input.categories,
          genres: input.genre,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.movie.findMany();
  }),

  getMoviesRecomendation: publicProcedure
    .input(
      z.object({
        genre: z.array(z.enum(["ACTION", "COMEDY", "DRAMA", "HORROR"])),
        situation: z.enum([
          "WATCHING_MOVIE_ALONE",
          "WATCHING_MOVIE_WITH_FRIENDS",
          "WATCHING_MOVIE_WITH_GIRLFRIEND",
          "WATCHING_MOVIE_WITH_FAMILY",
        ]),
        ageRange: z.enum(["G_RATED", "PG_RATED", "PG_13_RATED", "R_RATED"]),
        categories: z.array(
          z.enum(["TRUE_STORY", "CHANGE_WAY_TO_LOOK_AT_LIFE"]),
        ),
        mood: z.enum(["HAPPY", "NEUTRAL", "SAD"]),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.movie.findMany();
    }),
});
