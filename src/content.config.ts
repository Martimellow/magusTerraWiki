import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema(
			{
				extend: z.object({
					// icon: z.string().optional() as z.ZodType<import('@astrojs/starlight/types').StarlightIcon | undefined>,
					icon: z.string().optional() ,
					bannerImage: z.string().optional(),
					subHeading: z.string().optional(),
					pronunciation: z.string().optional(),
					inspirationLink: z.string().optional(),
					inspirationDescription: z.string().optional(),
				})
			}
		)
	}),
};
