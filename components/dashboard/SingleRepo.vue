<script setup lang="ts">
const props = defineProps({
  repo: Object,
});

const repo = computed(() => {
  return props?.repo;
});

const { data: repoInfo, error } = await getRepoInfo(repo?.value?.full_name);
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center flex-wrap gap-2">
      <NuxtLink
        :to="repo?.owner?.login"
        class="w-6 h-6 rounded-full border border-gray-600"
      >
        <nuxt-img
          :src="repo?.owner?.avatar_url"
          :alt="repo?.owner?.login"
          class="w-full h-full object-cover rounded-full"
        />
      </NuxtLink>
      <NuxtLink
        :to="repo?.html_url"
        target="_blank"
        class="block hover:underline text-white"
        >{{ repo?.full_name }}</NuxtLink
      >
    </div>
    <button
      class="block bg-[#21262c] border hover:border-gray-300 border-gray-500 rounded-md px-3 py-1"
    >
      <Icon name="ic:round-star-border" class="w-5 h-auto text-gray-500" />
    </button>
  </div>
  <p>{{ repoInfo?.description }}</p>
  <div class="flex items-center gap-4">
    <div v-if="repoInfo?.language" class="flex items-center gap-1">
      <div class="w-2 h-2 bg-octo-green rounded-full"></div>
      <div>{{ repoInfo?.language }}</div>
    </div>
    <div v-if="repoInfo?.stargazers_count > 0" class="flex items-center gap-1">
      <Icon name="ic:round-star-border" class="w-5 h-auto" />
      <p>{{ repoInfo?.stargazers_count }}</p>
    </div>
  </div>
</template>
