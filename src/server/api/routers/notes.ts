import { z } from "zod";
import clerkClient from "@clerk/clerk-sdk-node";
import type {User} from "@clerk/nextjs/dist/api";
import { TRPCError } from "@trpc/server";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const notesRouter = createTRPCRouter({
  getNotes: publicProcedure.query(async ({ ctx }) => {
    const notes = await ctx.prisma.Notes.findMany({
      where: {
        userId: ctx.userId,
      },
      take: 100,
      orderBy: [{ createdAt: "desc" }]
    });
    return notes;
  }),
  addNotes: protectedProcedure.input(z.object({title: z.string(), note: z.string()})).mutation(async ({ ctx, input}) => {
    const noteAdded = await ctx.prisma.Notes.create({
      data: {
        title: input.title,
        note: input.note,
        userId: ctx.userId,
      }
    });
    return noteAdded;
  }),
});
