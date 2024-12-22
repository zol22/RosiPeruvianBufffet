import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const plates = defineCollection({
	loader: file("src/data/plates.json"),
	schema: z.object({
		slug: z.string(),
		prettyName: z.string(),
		description: z.string(),
		plates: z.array(
			z.object({
				name: z.string(),
				description: z.string(),
				price: z.number(),
			})
		),
	}),
});

const reviews = defineCollection({
	loader: file("src/data/reviews.json"),
	schema: z.object({
		author: z.string(),
		review: z.string(),
	}),
});

const gallery = defineCollection({
	loader: glob({ pattern: "**/*.{png,jpg,jpeg,webp}", base: "./src/assets/images/gallery" }),
	schema: ({ image }) =>
		z.object({
			title: z.string().optional(),
			alt: z.string().optional(),
			image: image(),
		}),
});

export const collections = { plates, reviews, gallery };
