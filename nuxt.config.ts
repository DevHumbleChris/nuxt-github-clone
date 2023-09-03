// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@sidebase/nuxt-auth",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
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
      NUXT_AUTH_SECRET: process.env.NUXT_AUTH_SECRET,
      baseURL: process.env.BASE_URL,
      NUXT_GITHUB_AUTH_TOKEN: process.env.NUXT_GITHUB_AUTH_TOKEN,
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        fontFamily: {
          lexend: ["Lexend", "sans-serif"],
        },
        extend: {
          colors: {
            "light-dark": "#0d1017",
            main: "#010409",
            "octo-green": "#238636",
            "light-octo-green": "#a7ceae",
            "new-blue": "#154792",
          },
        },
      },
      plugins: [require("tailwind-scrollbar-hide")],
    },
  },
  image: {
    domains: ["avatars.githubusercontent.com"],
  },
});
