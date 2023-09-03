<script setup>
import Header from '@/components/global/Header.vue'
import SidebarMenu from '@/components/global/SidebarMenu.vue'
import RightSidebarMenu from '~/components/global/RightSidebarMenu.vue';
const route = useRoute()
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { property: 'og:title', content: `Nuxt GitHub Clone` },
    { name: 'description', content: 'GitHub Clone using Nuxt.js, Typescript, and Tailwind CSS.' },
    { property: 'og:description', content: 'GitHub Clone using Nuxt.js, Typescript, and Tailwind CSS.' },
    { property: 'og:url', content: 'https://panto-ke.vercel.app/' },
    { name: 'twitter:title', content: 'Nuxt GitHub Clone' },
    { name: 'twitter:description', content: 'GitHub Clone using Nuxt.js, Typescript, and Tailwind CSS.' },
    { name: 'twitter:site', content: 'https://panto-ke.vercel.app/' }
  ],
  title: `${route?.meta?.title}`,
})
</script>

<template>
  <main class="max-w-8xl font-lexend text-gray-700">
    <SidebarMenu />
    <Header />
    <slot />
    <RightSidebarMenu />
  </main>
</template>
