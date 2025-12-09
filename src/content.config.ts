import { defineCollection, z, type CollectionEntry, type ImageFunction } from 'astro:content';
import { glob } from 'astro/loaders';

const ImageSchema = (image: ImageFunction) => z.object({
  src: image(),
  alt: z.string(),
})

const projects = defineCollection({
  loader: glob({
    base: './src/projects',
    pattern: '*.md',
  }),
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    intro: z.string().optional(),
    techStack: z.string().array().optional(),
    links: z.object({
      text: z.string(),
      url: z.string().url(),
    }).array().optional(),
    images: z.object({
      thumbnail: ImageSchema(image),
      hero: ImageSchema(image).optional(),
    }),
    details: z.string().array().optional(),
  }),
})

export type Project = CollectionEntry<'projects'>

export const collections = { projects }
