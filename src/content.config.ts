import { defineCollection, z, type CollectionEntry, type InferEntrySchema } from 'astro:content';
import { glob } from 'astro/loaders';

const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  intro: z.string().optional(),
  techStack: z.string().array().optional(),
  links: z.object({
    text: z.string(),
    url: z.string().url(),
  }).array().optional(),
  details: z.string().array().optional(),
})

const projects = defineCollection({
  loader: glob({
    base: './src/projects',
    pattern: '*.md',
  }),
  schema: ProjectSchema,
})

export type Project = CollectionEntry<'projects'>

export const collections = { projects }
