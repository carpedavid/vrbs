import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const gameCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		creators: z.array(z.string()),
		tags: z.array(z.string()),
		image: z.string().optional(),
		link: z.string()
	})
});

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	games: gameCollection
};
