// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    build: {
        transpile: ['vue-toastification'],
    },
    components: [{ path: '~/assets/icons', prefix: 'Icon' }, '~/components'],
    modules: [
        '@nuxtjs/eslint-module',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'frog-modal',
        '@nuxtjs/google-fonts',
        'nuxt-swiper',
    ],
    googleFonts: {
        families: {
            Inter: [300, 400, 500, 600],
        },
    },
    runtimeConfig: {
        public: {
            api: process.env.API_URL,
            apiKey: process.env.API_KEY,
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/collection/index.scss";',
                },
            },
        },
    },
});
