<script setup lang="ts">
const config = useRuntimeConfig();
const { image } = user();
const { username } = await getUsername();

const { data: repos } = useAsyncData("repos", async () => {
  const { data } = await useMyFetch(
    `/users/${username}/repos?per_page=7&sort=created`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.public.NUXT_GITHUB_AUTH_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  return data?.value;
});

console.log(repos?.value);
</script>

<template>
  <aside
    class="sticky top-0 left-0 w-[22rem] bg-light-dark h-screen text-white text-xs px-4 py-3"
  >
    <div class="mt-4 space-y-6">
      <div class="flex items-center gap-2 border-b border-gray-600 py-5">
        <nuxt-img :src="image" class="w-5 h-5 rounded-full bg-gray-600" />
        <p>{{ username }}</p>
      </div>
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h1 class="text-sm">Top Repositories</h1>
          <button class="flex items-center gap-1 bg-octo-green p-2 rounded-md hover:bg-green-500">
            <Icon name="octicon:repo" class="w-4 h-auto" />
            <span class="block">New</span>
          </button>
        </div>
        <input
          type="text"
          class="w-full placeholder:text-gray-500 px-2 py-1 border border-gray-500 bg-main group rounded-md focus:border-0 outline-none focus:outline-blue-500"
          placeholder="Find a repository..."
        />
      </div>
      <div class="space-y-2">
        <NuxtLink
          v-for="repo in repos"
          :key="repo?.id"
          to="#"
          class="flex items-center gap-2 hover:underline text-gray-200 w-5 h-5"
        >
          <nuxt-img :src="image" class="w-full h-full object-cover rounded-full" />
          <p>{{ repo?.owner?.login }}/{{ repo?.name }}</p>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>
