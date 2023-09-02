<script setup>
import EventWrapper from "./EventWrapper.vue";
const props = defineProps({
  userEvents: Object,
  eventType: String,
  username: String
});

const userEvents = computed(() => {
  return props?.userEvents;
});

const eventType = computed(() => {
  return props?.eventType;
});

const username = computed(() => {
  return props?.username
})

const getUserRepo = (repoName) => {
  const splittedName = repoName.split("/");
  return splittedName[splittedName?.length - 1];
};
</script>

<template>
  <div class="p-3 border border-gray-700 rounded bg-light-dark">
    <div
      v-if="eventType === 'forked'"
      class="flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <div class="w-4 h-4">
          <nuxt-img
            :src="userEvents?.actor?.avatar_url"
            :alt="userEvents?.actor?.login"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <div class="flex items-center gap-1">
          <p class="text-gray-100">{{ userEvents?.actor?.login }}</p>
          <p>/</p>
          <p class="text-gray-100">{{ userEvents?.payload?.forkee?.name }}</p>
        </div>
      </div>
      <div class="bg-[#21262c] flex items-center border border-gray-500 rounded">
        <div class="flex items-center gap-1 px-2 py-1 hover:bg-gray-700">
          <Icon name="ic:round-star-border" class="w-5 h-auto" />
          <p class="text-gray-100">Star</p>
        </div>
        <div class="border-l border-gray-500 p-1 hover:bg-gray-700">
          <Icon name="majesticons:chevron-down-line" class="w-5 h-auto" />
        </div>
      </div>
    </div>
    <div
      v-else-if="eventType === 'created'"
      class="flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <div class="w-4 h-4">
          <nuxt-img
            :src="userEvents?.actor?.avatar_url"
            :alt="userEvents?.actor?.login"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <div class="flex items-center gap-1">
          <p class="text-gray-100">{{ userEvents?.actor?.login }}</p>
          <p>/</p>
          <p class="text-gray-100">{{ getUserRepo(userEvents?.repo?.name) }}</p>
        </div>
      </div>
      <div class="bg-[#21262c] flex items-center border border-gray-500 rounded">
        <div class="flex items-center gap-1 px-2 py-1 hover:bg-gray-700">
          <Icon name="ic:round-star-border" class="w-5 h-auto" />
          <p class="text-gray-100">Star</p>
        </div>
        <div class="border-l border-gray-500 p-1 hover:bg-gray-700">
          <Icon name="majesticons:chevron-down-line" class="w-5 h-auto" />
        </div>
      </div>
    </div>
    <div
      v-else-if="eventType === 'starred'"
      class="flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <div class="w-4 h-4">
          <nuxt-img
            :src="userEvents?.actor?.avatar_url"
            :alt="userEvents?.actor?.login"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <div class="flex items-center gap-1">
          <p class="text-gray-100">{{ userEvents?.actor?.login }}</p>
          <p>/</p>
          <p class="text-gray-100">{{ getUserRepo(userEvents?.repo?.name) }}</p>
        </div>
      </div>
      <div class="bg-[#21262c] flex items-center border border-gray-500 rounded">
        <div class="flex items-center gap-1 px-2 py-1 hover:bg-gray-700">
          <Icon name="ic:round-star-border" class="w-5 h-auto" />
          <p class="text-gray-100">Star</p>
        </div>
        <div class="border-l border-gray-500 p-1 hover:bg-gray-700">
          <Icon name="majesticons:chevron-down-line" class="w-5 h-auto" />
        </div>
      </div>
    </div>
  </div>
</template>
