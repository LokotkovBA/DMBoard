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

    security: {
        corsHandler: {
            origin: 'https://www.owlbear.rodeo',
        },
    },
    devServer: {
        cors: { origin: ['https://www.owlbear.rodeo'] },
    },

    nitro: {
        preset: 'netlify-edge',
        replace: {
            'typeof window': '`undefined`',
        },
    },
});
