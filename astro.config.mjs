import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mis Documentos',
			social: {
				github: 'https://github.com/JOVANNYAC',
			},
			sidebar: [
				{
					label: 'Guias',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Soportes para Tv', link: '/guides/soportes/' },
						{ label: 'Emprendimiento', link: '/guides/otraguia/' },
						
						
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
