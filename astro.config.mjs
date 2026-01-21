// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MagusTerra',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Zones',
					items: [
						{
							label: 'Howling Timber',
							items: [
								{ label: 'Silver Moon Trackers', slug: 'zones/howlingtimber/silvermoontrackers' },
								{ label: 'Vehkmosss', slug: 'zones/howlingtimber/vehkmoss' }
							]
						}
					]
				},
				{
					label: 'Races',
					items: [
						{
							label: 'Vehkran',
							items: [
								{ label: 'Vehkran', slug: 'races/vehkran' },
								{ label: 'Sangvehk', slug: 'races/sangvehk' }
							]
						},
						{ label: 'Efos', slug: 'races/efos' },
						{ label: 'Halflings', slug: 'races/halflings' },
					]
				},
				{
					label: 'Cosmos',
					autogenerate: { directory: 'cosmos' },
				},
			],
		}),
	],
});
