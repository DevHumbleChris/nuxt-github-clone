// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@sidebase/nuxt-auth",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image",
  ],
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
      NUXT_AUTH_SECRET: process.env.NUXT_AUTH_SECRET
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        fontFamily: {
          lexend: ["Lexend", "sans-serif"],
        },
        colors: {
          primary: '#010409',
          secondary: '#010409',
          away: '#0d1017'
        }
      },
      plugins: [require("tailwind-scrollbar-hide")],
    },
  },
});
