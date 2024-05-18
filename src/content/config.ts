import { z, defineCollection } from "astro:content";

const experiencesCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			image: image(),
			name: z.string(),
			background: image(),
			order: z.number(),
			period: z.string(),
			role: z.string(),
			url: z.string(),
		}),
});

export const collections = {
	experiences: experiencesCollection,
};
