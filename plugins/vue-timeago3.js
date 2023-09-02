import timeago from "vue-timeago3";

export default defineNuxtPlugin((nuxtApp) => {
  const timeagoOptions = {
    converterOptions: {
      includeSeconds: true,
    },
  };

  nuxtApp.vueApp.use(timeago, timeagoOptions);
});
