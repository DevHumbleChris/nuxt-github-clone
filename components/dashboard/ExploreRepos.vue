<script setup lang="ts">
import SingleRepo from './SingleRepo.vue';
const { data: repos } = await getPublicRepos();
</script>

<template>
  <aside
    class="hidden shrink-0 lg:block sticky top-0 left-0 w-[22rem] text-gray-500 text-xs px-4 py-3 space-y-6"
  >
    <h1 class="text-white text-sm">Explore repositories</h1>
    <div class="space-y-5">
      <div v-for="repo in repos" :key="repo?.id" class="space-y-3">
        <div class="space-y-3">
            <SingleRepo :repo="repo"/>
            <hr class="border border-gray-700">
        </div>
      </div>
    </div>
  </aside>
</template>
