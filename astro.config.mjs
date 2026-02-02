// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import '@fontsource/bad-script';
import '@fontsource/playpen-sans';

// import starlight from '@astrojs/starlight';
import StarlightIcons from 'starlight-plugin-icons';
import icon from "astro-icon";

// import { reference } from 'astro:content';

// https://astro.build/config
export default defineConfig({
	site: 'https://martimellow.github.io',
	base: '/magusTerraWiki/',
	integrations: [
		icon(),
		UnoCSS(),
		StarlightIcons({
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: true,
			extractSafelist: true,
			starlight: {
				title: 'MagusTerra',
				plugins: [],
				components: {
					PageTitle: './src/components/iconTitle.astro',
					Banner: './src/components/imageBanner.astro'
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
						collapsed: true,
						items: [
							{ icon: 'i-game-icons:console-controller', label: 'Discovering Olivia Northrop', slug: 'videogames/escape' },
						],
					},
					{
						label: 'Regions',
						items: [
							{
								label: 'Howling Timber',
								collapsed: true,
								items: [
									{ icon: 'i-game-icons:night-sky', label: 'Silver Moon Trackers', slug: 'zones/howlingtimber/silvermoontrackers' },
									{ icon: 'i-game-icons:herbs-bundle', label: 'Vehkmosss', slug: 'zones/howlingtimber/vehkmoss' }
								],
							}, // end of howling timber
							{
								label: 'Volariso',
								collapsed: true,
								items: [
									{ icon: 'i-game-icons:mine-explosion', label: 'Dereliction of Terrkanei', slug: 'zones/volariso/dereliction' },
									{ icon: 'i-game-icons:floating-platforms', label: 'Floating Islands of Volariso', slug: 'zones/volariso/floatingisland' },
									{ icon: 'i-game-icons:meteor-impact', label: 'Crater of Volariso', slug: 'zones/volariso/crater' }
								],
							}, // end of volariso
							{
								label: 'The Southlands',
								collapsed: true,
								items: [
									{ icon: 'i-game-icons:castle', label: 'Maeloch', slug: 'zones/southlands/maeloch' },
									{ icon: 'i-game-icons:village', label: 'Beckforge', slug: 'zones/southlands/beckforge' },
									{ icon: 'i-game-icons:person', label: 'James Meadowford', slug: 'zones/southlands/jamesmeadowford' },
									{
										label: 'Caverns of Den Gru\'le',
										collapsed: true,
										items:
											[
												{ icon: 'i-game-icons:dark-squad', label: 'Hand of Den Gru\'le', slug: 'zones/southlands/cavernsofdengrule/handofdengrule' },
												{ icon: 'i-game-icons:cave-entrance', label: 'Caverns of Den Gru\'le', slug: 'zones/southlands/cavernsofdengrule/cavernsofdengrule' },
												{ icon: 'i-game-icons:cut-diamond', label: 'Assari Stone', slug: 'zones/southlands/cavernsofdengrule/assaristone' },
												{
													label: 'Prominent Figures',
													collapsed: true,
													items:
														[
															{ icon: 'i-game-icons:person', label: 'Olivia', slug: 'zones/southlands/cavernsofdengrule/characters/olivia' },
															{ icon: 'i-game-icons:person', label: 'Octavius', slug: 'zones/southlands/cavernsofdengrule/characters/octavius' },
															{ icon: 'i-game-icons:person', label: 'Den Gru\'le', slug: 'zones/southlands/cavernsofdengrule/characters/dengrule' },
															{ icon: 'i-game-icons:person', label: 'Dredge', slug: 'zones/southlands/cavernsofdengrule/characters/dredge' },

														]
												},

											]
									}, // end of caverns of den gru'le
									{
										label: 'The Banshee Badlands',
										collapsed: true,
										items:
											[
												{ icon: 'i-game-icons:ghost', label: 'The Banshee Badlands', slug: 'zones/southlands/bansheebadlands/thebansheebadlands' },
												{ icon: 'i-game-icons:person', label: 'Taegar the Animator', slug: 'zones/southlands/bansheebadlands/taegartheanimator' },
												{ icon: 'i-game-icons:pirate-flag', label: 'The Forsaken Wharf', slug: 'zones/southlands/bansheebadlands/theforsakenwharf' }
											]
									},
								]
							}, // end of Southlands
							{
								label: 'Seacliff',
								collapsed: true,
								items: [
									{ icon: 'i-game-icons:night-sky', label: 'Seacliff', slug: 'zones/seacliff/seacliff' },
									{ icon: 'i-game-icons:herbs-bundle', label: 'Communal Bath House', slug: 'zones/seacliff/communalbathhouse' },
									{
										label: 'Organizations',
										collapsed: true,
										items:
											[
												{ icon: 'i-game-icons:night-sky', label: 'Lunar Monks', slug: 'zones/seacliff/seaclifforganizations/lunarmonks' },
												{ icon: 'i-game-icons:night-sky', label: 'Council of Elders', slug: 'zones/seacliff/seaclifforganizations/councilofelders' },
											]
									},
									{
										label: 'Residents',
										collapsed: true,
										items:
											[
												{ icon: 'i-game-icons:night-sky', label: 'Maive', slug: 'zones/seacliff/residents/maive' },
												{ icon: 'i-game-icons:night-sky', label: 'Cliftons', slug: 'zones/seacliff/residents/cliftons' },
											]
									},
									{
										label: 'Wildlife',
										collapsed: true,
										items:
											[
												{ icon: 'i-game-icons:night-sky', label: 'Ironwood Trees', slug: 'zones/seacliff/wildlife/ironwoodtrees' },
											]
									},
								],
							}, // end of seacliff
							{
								label: "Volcanic Fields",
								collapsed: true,
								items:
									[
										{ icon: 'i-game-icons:night-sky', label: 'Tim the Hermit', slug: 'zones/volcanicfields/timthehermit' },
										{
											label: 'Wildlife',
											collapsed: true,
											items:
												[
													{ icon: 'i-game-icons:night-sky', label: 'Vampiric Moss', slug: 'zones/volcanicfields/wildlife/vampiricmoss' },
													{ icon: 'i-game-icons:night-sky', label: 'Pokey', slug: 'zones/volcanicfields/wildlife/pokey' },
													{ icon: 'i-game-icons:night-sky', label: 'Rock Sponge', slug: 'zones/volcanicfields/wildlife/rocksponge' },
												]
										}
									]

							}// end of Volcanic Fields
						]
					},
					{
						label: 'Races',
						collapsed: true,
						items: [
							{ icon: 'i-game-icons:bird-claw', label: 'Efos', slug: 'races/efos' },
							{ icon: 'i-game-icons:slingshot', label: 'Halflings', slug: 'races/halflings' },
							{
								label: 'Vehkran',
								collapsed: true,
								items: [
									{ icon: 'i-game-icons:wolf-howl', label: 'Vehkran', slug: 'races/vehkran' },
									{ icon: 'i-game-icons:biohazard', label: 'Sangvehk', slug: 'races/sangvehk' }
								]
							},
						]
					},
					{
						label: 'World Trees',
						collapsed: true,
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
						collapsed: true,
						items: [
							{ icon: 'i-wi:moon-waning-crescent-3', label: 'Dull Moon', slug: 'cosmos/dullmoon' },
							{ icon: 'i-wi:moon-waxing-crescent-4', label: 'Vibrant Moon', slug: 'cosmos/vibrantmoon' },
						]
					},
					// {
					// 	label: 'Test Pages',
					// 	autogenerate: { directory: 'reference' }
					// }
				],
			},
		}),
	],
});
