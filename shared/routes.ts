import { z } from 'zod';
import { insertVolunteerSchema, volunteers } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  volunteers: {
    create: {
      method: 'POST' as const,
      path: '/api/volunteers',
      input: insertVolunteerSchema,
      responses: {
        201: z.custom<typeof volunteers.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};
