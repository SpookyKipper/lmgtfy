import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		outDir: 'dist', // Specify your custom output directory here
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
})
