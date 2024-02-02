<script setup lang="ts">
import UserRepos from "./UserRepos.vue";
const props = defineProps({
  userInfo: Object,
});

const userInfo = computed(() => {
  return props?.userInfo;
});
</script>

<template>
  <section class="bg-light-dark">
    <div class="grid grid-cols-1 sm:grid-cols-8 text-sm">
      <div class="sm:col-span-2 p-5 space-y-3 text-gray-200">
        <div
          class="max-w-64 xl:w-64 h-auto mx-auto rounded-full border-2 border-gray-400 shadow"
        >
          <nuxt-img
            :src="userInfo?.avatar_url"
            :alt="userInfo?.login"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <div class="space-y-4">
          <div>
            <h2 class="text-xl text-white font-semibold">
              {{ userInfo?.name }}
            </h2>
            <h1 class="text-gray-500">{{ userInfo?.login }}</h1>
          </div>
          <button class="block bg-[#21262c] p-2 w-full rounded-md">
            follow
          </button>
        </div>
        <p>{{ userInfo?.bio }}</p>
        <div class="flex items-center gap-2">
          <NuxtLink
            to="#"
            class="block flex items-center gap-1 group"
            target="_blank"
          >
            <Icon
              name="octicon:people-24"
              class="w-4 h-auto group-hover:text-blue-500"
            />
            <p class="text-gray-500 group-hover:text-blue-500">
              <span class="text-gray-200 group-hover:text-blue-500">{{
                userInfo?.followers
              }}</span>
              followers
            </p>
          </NuxtLink>
          <div class="w-1 h-1 bg-white rounded-full"></div>
          <NuxtLink to="#" class="block group">
            <p class="text-gray-500 group-hover:text-blue-500">
              <span class="text-gray-200 group-hover:text-blue-500">{{
                userInfo?.following
              }}</span>
              following
            </p>
          </NuxtLink>
        </div>
        <div class="space-y-2">
          <div v-if="userInfo?.company" class="flex items-center gap-2">
            <Icon
              name="octicon:organization-24"
              class="w-4 h-auto text-gray-400"
            />
            <p class="text-gray-100">{{ userInfo?.company }}</p>
          </div>
          <div v-if="userInfo?.location" class="flex items-center gap-2">
            <Icon name="octicon:location-24" class="w-4 h-auto text-gray-400" />
            <p class="text-gray-100">{{ userInfo?.location }}</p>
          </div>
          <div v-if="userInfo?.blog" class="flex items-center gap-2">
            <Icon name="octicon:link-24" class="w-4 h-auto text-gray-400" />
            <NuxtLink
              :to="userInfo?.blog"
              class="block hover:text-blue-500 text-gray-100"
              >{{ userInfo?.blog }}</NuxtLink
            >
          </div>
          <div
            v-if="userInfo?.twitter_username"
            class="flex items-center gap-2"
          >
            <Icon name="uim:twitter" class="w-4 h-auto text-gray-400" />
            <NuxtLink
              :to="'https://x.com/' + userInfo?.twitter_username"
              class="block hover:text-blue-500 text-gray-100"
              target="_blank"
              >@{{ userInfo?.twitter_username }}</NuxtLink
            >
          </div>
        </div>
      </div>
      <UserRepos :username="userInfo?.login" />
    </div>
  </section>
</template>
