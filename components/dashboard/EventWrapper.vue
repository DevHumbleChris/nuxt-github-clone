<script setup lang="ts">
const props = defineProps({
  userEvents: Object,
  eventType: String,
});

const userEvents = computed(() => {
  return props?.userEvents;
});

const eventType = computed(() => {
  return props?.eventType;
});
</script>

<template>
  <div class="p-3 border border-gray-700 rounded bg-light-dark">
    <div v-if="eventType === 'forked'" class="flex items-center justify-between">
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
      <div></div>
    </div>
  </div>
</template>
