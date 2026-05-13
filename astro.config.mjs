// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sidebar from './sidebar.gen.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SikuliX / Oculix',
			customCss: ['./src/styles/rtd.css'],
			components: {
				Header: './src/components/Header.astro',
			},
			// Critical header styles inlined into <head> so they apply at
			// first paint and are NOT subject to Vite's per-route CSS
			// re-injection during Astro view transitions. This kills the
			// residual flicker that customCss couldn't.
			head: [
				{
					tag: 'style',
					content: `
						header.header,
						.oculix-header-persist header.header {
							background-color: #7d3c12 !important;
							color: #ffefe0 !important;
							border-bottom: 1px solid #5a2c10 !important;
						}
						header.header a,
						header.header button,
						header.header .site-title,
						header.header svg,
						header.header [data-open-modal],
						header.header [data-open-modal] *,
						header.header .social-icons a,
						header.header .social-icons svg,
						header.header starlight-theme-select,
						header.header starlight-theme-select label,
						header.header starlight-theme-select select {
							color: #ffefe0 !important;
						}
						header.header [data-open-modal],
						header.header starlight-theme-select select {
							background-color: rgba(255, 255, 255, 0.1) !important;
							border: 1px solid rgba(255, 255, 255, 0.25) !important;
						}
						header.header [data-open-modal] kbd {
							background-color: rgba(255, 255, 255, 0.15) !important;
							border: 1px solid rgba(255, 255, 255, 0.3) !important;
							color: #ffefe0 !important;
						}
					`,
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/oculix-org/Oculix' },
			],
			sidebar,
		}),
	],
});
