// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@sidebase/nuxt-auth", "@nuxtjs/tailwindcss"],
  auth: {
    provider: {
      type: "authjs",
    },
    globalAppMiddleware: true,
  },
  runtimeConfig: {
    public: {
      GITHUB_CLIENT_ID: process.env.NUXT_GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET: process.env.NUXT_GITHUB_CLIENT_SECRET,
    },
  },
  tailwindcss : {
    cssPath: '~/assets/css/tailwind.css',
    config: {
      theme: {
        fontFamily: {
          lexend: ["Lexend", "sans-serif"],
        },
      },
      plugins: [
        require("tailwind-scrollbar-hide"),
        // ...
      ],
    },
  }
});
