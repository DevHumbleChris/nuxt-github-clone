<script setup lang="ts">
const props = defineProps({
  eventType: String,
  userEvent: Object,
});

const eventType = computed(() => {
  return props?.eventType;
});

const userEvent = computed(() => {
  return props?.userEvent;
});
</script>

<template>
  <div v-if="eventType === 'starred'" class="text-gray-100">
    {{ userEvent?.repo?.name }}
  </div>
  <div v-else-if="eventType === 'created'">a repository</div>
  <div v-else-if="eventType === 'released'" class="text-gray-100">{{ userEvent?.payload?.release?.name }}</div>
  <div v-else-if="eventType === 'forked'" class="text-gray-100">
    {{ userEvent?.repo?.name }}
  </div>
</template>
