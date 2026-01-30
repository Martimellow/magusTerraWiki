// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import '@fontsource/bad-script';
import '@fontsource/playpen-sans';

// import starlight from '@astrojs/starlight';
import Icons from 'starlight-plugin-icons';
// import { reference } from 'astro:content';

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
				plugins: [],
				components: {
					PageTitle: './src/components/iconTitle.astro'

				},
				customCss:
					[
						'@fontsource/bad-script',
						'@fontsource/playpen-sans',
						'./src/styles/custom.css',
						'./src/styles/customHeaderImage.css',
						'./src/styles/theme.css',
					],
				sidebar: [
					{
						label: 'Video Games',
						items: [
							{ icon: 'i-game-icons:console-controller', label: 'Discovering Olivia Northrop', slug: 'videogames/escape' },
						],
					},
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
								label: 'Volariso',
								items: [
									{ icon: 'i-game-icons:mine-explosion', label: 'Dereliction of Terrkanei', slug: 'zones/volariso/dereliction' },
									{ icon: 'i-game-icons:floating-platforms', label: 'Floating Islands of Volariso', slug: 'zones/volariso/floatingisland' },
									{ icon: 'i-game-icons:meteor-impact', label: 'Crater of Volariso', slug: 'zones/volariso/crater' }
								],
							},
							{
								label: 'The Southlands',
								items: [
									{
										label: 'Caverns of Den Gru\'le',
										items:
											[
												{ icon: 'i-game-icons:dark-squad', label: 'Hand of Den Gru\'le', slug: 'zones/southlands/cavernsofdengrule/handofdengrule' },
												{ icon: 'i-game-icons:cave-entrance', label: 'Caverns of Den Gru\'le', slug: 'zones/southlands/cavernsofdengrule/cavernsofdengrule' },
												{ icon: 'i-game-icons:cut-diamond', label: 'Assari Stone', slug: 'zones/southlands/cavernsofdengrule/assaristone' },
											]
									},
									{
										label: 'The Banshee Badlands',
										items:
											[
												{ icon: 'i-game-icons:ghost', label: 'The Banshee Badlands', slug: 'zones/southlands/bansheebadlands/thebansheebadlands' },
												{ icon: 'i-game-icons:person', label: 'Taegar the Animator', slug: 'zones/southlands/bansheebadlands/taegartheanimator' },
												{ icon: 'i-game-icons:pirate-flag', label: 'The Forsaken Wharf', slug: 'zones/southlands/bansheebadlands/theforsakenwharf' }
											]
									},
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
						label: 'World Trees',
						items: [
							{ icon: 'i-game-icons:triple-shells', label: 'World Trees', slug: 'worldtrees/worldtrees' },
							{ icon: 'i-game-icons:pine-tree', label: 'Terrginnan', slug: 'worldtrees/terrginnan' },
							{ icon: 'i-game-icons:mountaintop', label: 'Terrkanei', slug: 'worldtrees/terrkanei' },
							{ icon: 'i-game-icons:palm-tree', label: 'Terrliiff', slug: 'worldtrees/terrliiff' },
							{ icon: 'i-game-icons:willow-tree', label: 'Terrsang', slug: 'worldtrees/terrsang' },
							{ icon: 'i-game-icons:mushroom-gills', label: 'Terrcadere', slug: 'worldtrees/terrcadere' },
						]
					},
					{
						label: 'Cosmos',
						items: [
							{ icon: 'i-wi:moon-waning-crescent-3', label: 'Dull Moon', slug: 'cosmos/dullmoon' },
							{ icon: 'i-wi:moon-waxing-crescent-4', label: 'Vibrant Moon', slug: 'cosmos/vibrantmoon' },
						]
					},
					{
						label: 'Test',
						autogenerate: { directory: 'reference' }
					}
				],
			},
		}),
	],
});
