import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const TechStackSchema = z.string().array().optional()
export type TechStack = z.infer<typeof TechStackSchema>

export const LinksSchema = z.object({
  text: z.string(),
  url: z.string().url(),
}).array().optional()
export type Links = z.infer<typeof LinksSchema>

export const DetailsSchema = z.string().array().optional()
export type Details = z.infer<typeof DetailsSchema>

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  intro: z.string().optional(),
  techStack: TechStackSchema,
  links: LinksSchema,
  details: DetailsSchema,
})
export type Project = z.infer<typeof ProjectSchema>

const projects = defineCollection({
  loader: glob({
    base: './src/projects',
    pattern: '*.md',
  }),
  schema: ProjectSchema,
})

export const collections = { projects }
