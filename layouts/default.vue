<script setup>
import Header from "@/components/global/Header.vue";
import SidebarMenu from "@/components/global/SidebarMenu.vue";
import RightSidebarMenu from "~/components/global/RightSidebarMenu.vue";
import { useMenuStore } from "~/stores/menu";
import Footer from "~/components/global/Footer.vue";

const menuStore = useMenuStore();
const route = useRoute();
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { property: "og:title", content: `Nuxt GitHub Clone` },
    {
      name: "description",
      content: "GitHub Clone using Nuxt.js, Typescript, and Tailwind CSS.",
    },
    {
      property: "og:description",
      content: "GitHub Clone using Nuxt.js, Typescript, and Tailwind CSS.",
    },
    { property: "og:url", content: "https://nuxt-github-clone-ke.vercel.app/" },
    { name: "twitter:title", content: "Nuxt GitHub Clone" },
    {
      name: "twitter:description",
      content: "GitHub Clone using Nuxt.js, Typescript, and Tailwind CSS.",
    },
    { name: "twitter:site", content: "https://nuxt-github-clone-ke.vercel.app/" },
  ],
  title: `${route?.meta?.title}`,
});

const isLeftSidebarMenuOpen = computed(() => {
  return menuStore?.isLeftSidebarMenuOpen;
});
const isRightSidebarMenuOpen = computed(() => {
  return menuStore?.isRightSidebarMenuOpen;
});
</script>

<template>
  <main class="max-w-8xl font-lexend text-gray-700">
    <SidebarMenu />
    <Header />
    <div
      :class="{ 'opacity-90': isLeftSidebarMenuOpen || isRightSidebarMenuOpen }"
    >
      <slot />
    </div>
    <RightSidebarMenu />
    <Footer />
  </main>
</template>
