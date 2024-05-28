import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const gameCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		creators: z.array(z.string()),
		publisher: z.string(),
		publishDate: z.string().optional(),
		tags: z.array(z.string()),
		image: z.object({ url: z.string(), alt: z.string() }),
		link: z.string(),
		description: z.string()
	})
});

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	games: gameCollection
};
