<script setup lang="ts">
const config = useRuntimeConfig();
const { image } = user();
const { username } = await getUsername();

const perPageFetch = useState("perPageFetch", () => 7);
const isLoadingMore = useState("isLoadingMore", () => false);

const { data: repos, refresh } = useAsyncData("repos", async () => {
  const { data } = await useMyFetch(
    `/users/${username}/repos?per_page=${perPageFetch?.value}&sort=created`,
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

const showMore = () => {
  isLoadingMore.value = true;
  perPageFetch.value += 5;
  refresh();
  setTimeout(() => {
    isLoadingMore.value = false;
  }, 600);
};
</script>

<template>
  <aside
    class="shrink-0 hidden lg:block sticky top-0 left-0 w-[20rem] bg-light-dark h-screen text-white text-xs"
  >
    <div class="overflow-auto h-[100%] px-4 py-3">
      <div class="mt-4 space-y-6">
        <div class="flex items-center gap-2 border-b border-gray-600 py-5">
          <nuxt-img :src="image" class="w-5 h-5 rounded-full bg-gray-600" />
          <p>{{ username }}</p>
        </div>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h1 class="text-sm">Top Repositories</h1>
            <NuxtLink
              to="/new"
              class="flex items-center gap-1 bg-octo-green p-2 rounded-md hover:bg-green-500"
            >
              <Icon name="octicon:repo" class="w-4 h-auto" />
              <span class="block">New</span>
            </NuxtLink>
          </div>
          <input
            type="text"
            class="w-full placeholder:text-gray-500 px-2 py-1 border border-gray-500 bg-main group rounded-md focus:border-0 outline-none focus:outline-blue-500"
            placeholder="Find a repository..."
          />
        </div>
        <div>
          <NuxtLink
            v-for="repo in repos"
            :key="repo?.id"
            to="#"
            class="flex w-full hover:bg-gray-800 p-2 hover:rounded-md items-center gap-2 hover:underline text-gray-200"
          >
            <div class="w-5 h-5 bg-gray-700 rounded-full">
              <nuxt-img :src="image" class="w-full h-full object-cover" />
            </div>
            <p>{{ repo?.owner?.login }}/{{ repo?.name }}</p>
          </NuxtLink>
          <button
            @click="showMore"
            class="block p-2 hover:bg-gray-800 w-full text-left hover:rounded-md"
            :class="{
              'text-gray-500': !isLoadingMore,
              'text-blue-500': isLoadingMore,
            }"
            :disabled="isLoadingMore"
          >
            {{ isLoadingMore ? "Loading more..." : "Show more" }}
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>
