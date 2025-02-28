// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@uploadthing/nuxt',
        'nuxt-security',
    ],
    runtimeConfig: {
        uploadthingToken: process.env.UPLOADTHING_TOKEN,
    },

    nitro: {
        preset: 'netlify-edge',
        replace: {
            'typeof window': '`undefined`',
        },
    },

    vite: {
        server: {
            cors: {
                origin: 'https://www.owlbear.rodeo',
            },
        },
    },
});
