<script setup lang="ts">
const props = defineProps({
  userInfo: Object,
});

const userInfo = computed(() => {
  return props?.userInfo;
});
</script>

<template>
  <div class="bg-[#010409] px-5 py-1 border-b border-gray-800 shadow-xl">
    <ul class="flex items-center overflow-auto gap-2 text-sm">
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <button class="flex items-center gap-2">
          <Icon name="octicon:book-24" class="w-4 h-auto text-[#5f656e]" />
          <p class="text-gray-300">Overview</p>
        </button>
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <button class="flex items-center gap-2">
          <Icon name="octicon:repo-24" class="w-4 h-auto text-[#5f656e]" />
          <p class="text-gray-300 flex items-center gap-2">
            <span class="block"> Repositories </span>
            <span
              v-if="userInfo?.public_repos > 0"
              class="block text-xs rounded-full px-2 bg-[#2d313a]"
              >{{ userInfo?.public_repos }}</span
            >
          </p>
        </button>
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <button class="flex items-center gap-2">
          <Icon name="octicon:table-24" class="w-4 h-auto text-[#5f656e]" />
          <p class="text-gray-300">Projects</p>
        </button>
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <button class="flex items-center gap-2">
          <Icon name="octicon:package-24" class="w-4 h-auto text-[#5f656e]" />
          <p class="text-gray-300">Packages</p>
        </button>
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <button class="flex items-center gap-2">
          <Icon name="octicon:star-24" class="w-4 h-auto text-[#5f656e]" />
          <p class="text-gray-300">Stars</p>
        </button>
      </li>
    </ul>
  </div>
</template>
