import {
  defineCollection,
  type CollectionEntry,
  type ImageFunction,
} from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const ImageSchema = (image: ImageFunction) =>
  z.object({
    src: image(),
    alt: z.string(),
  });

const projects = defineCollection({
  loader: glob({
    base: "./src/projects",
    pattern: "**/*.mdx",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      intro: z.string().optional(),
      techStack: z.string().array().optional(),
      links: z
        .object({
          text: z.string(),
          url: z.url(),
        })
        .array()
        .optional(),
      images: z.object({
        thumbnail: ImageSchema(image),
        featured: ImageSchema(image),
      }),
      details: z.string().array().optional(),
    }),
});

export type Project = CollectionEntry<"projects">;

export const collections = { projects };
