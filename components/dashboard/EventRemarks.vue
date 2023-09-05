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

const { data: repoInfo } = await getRepoInfo(userEvent?.value?.repo?.name);
</script>

<template>
  <NuxtLink
    target="_blank"
    :to="repoInfo?.html_url"
    v-if="eventType === 'starred'"
    class="block text-gray-100 hover:text-blue-500"
  >
    {{ userEvent?.repo?.name }}
  </NuxtLink>
  <div v-else-if="eventType === 'created'">a repository</div>
  <div v-else-if="eventType === 'released'" class="text-gray-100">
    {{ userEvent?.payload?.release?.name }}
  </div>
  <NuxtLink
    target="_blank"
    :to="repoInfo?.html_url"
    v-else-if="eventType === 'forked'"
    class="text-gray-100 hover:text-blue-500"
  >
    {{ userEvent?.repo?.name }}
  </NuxtLink>
  <NuxtLink
    :to="userEvent?.payload?.member?.login"
    target="_blank"
    v-else-if="eventType === 'added'"
    class="text-gray-100 hover:text-blue-500"
  >
    {{ userEvent?.payload?.member?.login }}
    <span class="text-gray-500">as a collaborator</span>
  </NuxtLink>
</template>
