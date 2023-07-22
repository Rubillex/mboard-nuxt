// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icons',
    'nuxt-svgo',
    '@nuxtjs/eslint-module',
    'dayjs-nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts'
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  googleFonts: {
    families: {
      preload: true,
      Roboto: true,
      'Josefin+Sans': true,
      Raleway: [100, 300, 400, 600],
      Montserrat: [100, 300, 400, 500, 600, 700],
      Inter: [100, 300, 400, 500, 600, 700]
    }
  }
});
