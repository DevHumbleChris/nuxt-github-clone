<script setup>
const config = useRuntimeConfig();
const { image } = user();
const { username } = await getUsername();

const perPageFetch = useState('perPageFetch', () => 7)

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
    perPageFetch.value += 5
    refresh()
}
</script>

<template>
  <aside
    v-motion
    :initial="{ opacity: 0, x: 100 }"
    :enter="{ opacity: 1, x: 0 }"
    :delay="200"
    class="fixed shrink-0 hidden lg:block top-0 right-0 w-[20rem] bg-[#161b21] h-screen text-gray-100 text-sm px-4 py-3 rounded-r-2xl shadow-xl z-40"
  >
    <div class="flex items-center bg-[#161b21] z-20 py-2 justify-between">
      <Icon name="mdi:github" class="text-white w-10 h-auto" />
      <button
        class="block hover:bg-[#2d313a] p-2 rounded-md text-gray-500 hover:text-white"
      >
        <Icon name="ic:round-close" class="w-4 h-auto" />
      </button>
    </div>
    <div class="overflow-auto h-[80%]">
        <ul class="p-2 space-y-1">
          <li class="hover:bg-gray-800 p-2 hover:rounded-md">
            <NuxtLink href="#" class="flex items-center gap-2">
              <Icon name="octicon:home-24" class="w-5 h-auto text-gray-500" />
              <p>Home</p>
            </NuxtLink>
          </li>
          <li class="hover:bg-gray-800 p-2 hover:rounded-md">
            <NuxtLink href="#" class="flex items-center gap-2"
              ><Icon
                name="octicon:issue-opened-24"
                class="w-5 h-auto text-gray-500"
              />
              <p>Issues</p></NuxtLink
            >
          </li>
          <li class="hover:bg-gray-800 p-2 hover:rounded-md">
            <NuxtLink href="#" class="flex items-center gap-2"
              ><Icon
                name="octicon:git-pull-request-24"
                class="w-5 h-auto text-gray-500"
              />
              <p>Pull requests</p></NuxtLink
            >
          </li>
          <li class="hover:bg-gray-800 p-2 hover:rounded-md">
            <NuxtLink href="#" class="flex items-center gap-2"
              ><Icon
                name="octicon:comment-discussion-24"
                class="w-5 h-auto text-gray-500"
              />
              <p>Discussions</p></NuxtLink
            >
          </li>
          <hr class="border-gray-800" />
        </ul>
        <div class="p-2 space-y-2">
          <div class="flex items-center justify-between">
            <h2>Repositories</h2>
            <button
              class="block hover:bg-[#2d313a] p-2 rounded-md text-gray-500 hover:text-white"
            >
              <Icon name="octicon:search-24" class="w-4 h-auto" />
            </button>
          </div>
          <div class="text-xs">
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
            <button @click="showMore" class="text-gray-500 block p-2 hover:bg-gray-800 w-full text-left hover:rounded-md">
              Show more
            </button>
          </div>
        </div>
    </div>
    <ul class="absolute bg-[#161b21] z-20 bottom-0 right-0 left-0 p-2 space-y-1">
      <hr class="border-gray-800" />
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2">
          <Icon name="octicon:telescope-24" class="w-5 h-auto text-gray-500" />
          <p>Explore</p>
        </NuxtLink>
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:gift-24" class="w-5 h-auto text-gray-500" />
          <p>Marketplace</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon
            name="octicon:comment-discussion-24"
            class="w-5 h-auto text-gray-500"
          />
          <p class="flex items-center justify-between w-full">
            <span class="block">Give new navigation feedback</span>
            <span
              class="block border rounded-full px-2 border-octo-green text-octo-green text-xs"
              >Beta</span
            >
          </p></NuxtLink
        >
      </li>
    </ul>
  </aside>
</template>
