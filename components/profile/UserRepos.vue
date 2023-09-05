<script setup lang="ts">
import Repo from "./Repo.vue";
const config = useRuntimeConfig();
const props = defineProps({
  username: String,
});

const username = computed(() => {
  return props?.username;
});

const { data: repos, error } = await useMyFetch(
  `/users/${username?.value}/repos?per_page=8`,
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.public.NUXT_GITHUB_AUTH_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  }
);
</script>

<template>
  <div class="sm:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10 p-5">
    <Repo v-for="repo in repos" :key="repo?.id" :repo="repo" />
  </div>
</template>
