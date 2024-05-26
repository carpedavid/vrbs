import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'VRBS SRD',
			customCss: [
				'./src/styles/custom.css'
			],
			social: {
				github: 'https://github.com/carpedavid/vrbs',
				discord: 'https://discord.gg/r72BBj2Rcy',
				mastodon: 'https://dice.camp/@carpedavid'
			},
			sidebar: [
				{
					label: 'SRD',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/srd/introduction/' },
						{ label: 'Design principles', link: '/srd/principles/'},
						{ label: 'Building your game', link: '/srd/rules/'},
					],
				},
				// {
				// 	label: 'Game Directory',
				// 	autogenerate: { directory: 'games' },
				// 	collapsed: true
				// },
				{ label: 'Credits', link: '/credits/'},
				{ label: 'Amalara Game Studio', link: 'https://amalara.com', icon: ''}
			],
		}),
	],
});
