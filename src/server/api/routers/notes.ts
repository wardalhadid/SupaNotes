import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const notesRouter = createTRPCRouter({
  getNotes: publicProcedure.query(async ({ ctx }) => {
    const userId = ctx.userId || "";
    const notes = await ctx.prisma.notes.findMany({
      where: {
        userId,
      },
      take: 100,
      orderBy: [{ createdAt: "desc" }]
    });
    return notes;
  }),
  addNotes: protectedProcedure.input(z.object({title: z.string(), note: z.string()})).mutation(async ({ ctx, input}) => {
    const noteAdded = await ctx.prisma.notes.create({
      data: {
        title: input.title,
        note: input.note,
        userId: ctx.userId,
      }
    });
    return noteAdded;
  }),
  deleteNote: protectedProcedure.input(z.object({id: z.string()})).mutation(async ({ ctx, input}) => {
    const deletedNote = await ctx.prisma.notes.delete({
      where: {
        id: input.id,
      }
    });
    return deletedNote;
  }),
  editNote: protectedProcedure.input(z.object({id: z.string(), title: z.string(), note: z.string()})).mutation(async ({ ctx, input}) => {
    const editedNote = await ctx.prisma.notes.update({
      where: {
        id: input.id,
      },
    data: {
      title: input.title,
      note: input.note,
    },
   });
    return editedNote;
  })
});