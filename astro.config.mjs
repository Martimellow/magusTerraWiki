// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro'

// import starlight from '@astrojs/starlight';
import Icons from 'starlight-plugin-icons';

// https://astro.build/config
export default defineConfig({
	site: 'https://martimellow.github.io',
	base: '/magusTerraWiki/',
	integrations: [
		UnoCSS(),
		Icons({
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: true,
			extractSafelist: true,
			starlight: {
				title: 'MagusTerra',
				sidebar: [
					{
						label: 'Zones',
						items: [
							{
								label: 'Howling Timber',
								items: [
									{ icon: 'i-game-icons:night-sky', label: 'Silver Moon Trackers', slug: 'zones/howlingtimber/silvermoontrackers' },
									{ icon: 'i-game-icons:herbs-bundle', label: 'Vehkmosss', slug: 'zones/howlingtimber/vehkmoss' }
								],
							},
							{
								label: 'The Southlands',
								items: [
									{ icon: 'i-game-icons:castle', label: 'Maeloch', slug: 'zones/southlands/maeloch' },
									{ icon: 'i-game-icons:village', label: 'Beckforge', slug: 'zones/southlands/beckforge' },
									{ icon: 'i-game-icons:person', label: 'James Meadowford', slug: 'zones/southlands/jamesmeadowford' }
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
									{ icon: 'i-game-icons:wolf-howl', label: 'Vehkran', slug: 'races/vehkran' },
									{ icon: 'i-game-icons:biohazard', label: 'Sangvehk', slug: 'races/sangvehk' }
								]
							},
							{ icon: 'i-game-icons:bird-claw', label: 'Efos', slug: 'races/efos' },
							{ icon: 'i-game-icons:slingshot', label: 'Halflings', slug: 'races/halflings' },
						]
					},
					{
						label: 'Cosmos',
						items: [
							{ icon: 'i-wi:moon-waning-crescent-3', label: 'Dull Moon', slug: 'cosmos/dullmoon' },
							{ icon: 'i-wi:moon-waxing-crescent-4', label: 'Vibrant Moon', slug: 'cosmos/vibrantmoon' },
						]
					},
				],
			},
		}),
	],
});
