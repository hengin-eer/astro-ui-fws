import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import preact from '@astrojs/preact';
import lit from '@astrojs/lit';
import alpine from '@astrojs/alpinejs';
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
    integrations: [
        react({
            include: ['**/react/**'],
        }),
        // vue({
        //     include: ['**/vue/**'],
        // }),
        svelte({
            include: ['**/svelte/**'],
        }),
        preact({
            include: ['**/preact/**'],
        }),
        lit({
            include: ['**/lit/**'],
        }),
        alpine({
            include: ['**/alpine/**'],
        }),
        solid({
            include: ['**/solid/**'],
        }),
    ],
});
