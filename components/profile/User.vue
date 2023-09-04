<script setup lang="ts">
const props = defineProps({
  userInfo: Object,
});

const userInfo = computed(() => {
  return props?.userInfo;
});
</script>

<template>
  <section>user</section>
</template>
