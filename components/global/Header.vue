<script setup lang="ts">
import { useMenuStore } from "~/stores/menu";

const menuStore = useMenuStore();
const { image: userImage } = user();

const openLeftSidebarMenu = () => {
  menuStore?.openLeftSidebarMenu();
};

const openRightSidebarMenu = () => {
  menuStore?.openRightSidebarMenu();
};
</script>

<template>
  <header class="bg-[#010409] p-3 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <button
        @click="openLeftSidebarMenu"
        class="block border hover:border-gray-200 border-gray-600 px-1.5 py-1 rounded"
      >
        <Icon name="heroicons:bars-3" class="text-gray-400 w-5 h-auto -mt-1" />
      </button>
      <NuxtLink to="/" class="group flex items-center gap-2">
        <Icon name="mdi:github" class="text-white w-10 h-auto" />
        <p
          class="text-white px-2 py-1 group-hover:bg-gray-800 group-hover:rounded text-sm"
        >
          Dashboard
        </p>
      </NuxtLink>
    </div>
    <div class="flex items-center gap-2 sm:gap-5">
      <button
        class="block flex items-center justify-between border px-1 py-[5px] border-gray-500 rounded-md gap-2 lg:w-[20rem] hover:border-gray-300"
      >
        <span class="block flex items-center gap-2">
          <Icon
            name="material-symbols:search"
            class="text-gray-500 w-5 h-auto"
          />
          <span class="hidden lg:block text-sm text-gray-500"
            >Type <span class="border border-gray-500 px-[1px]">/</span> to
            search</span
          >
        </span>
        <span class="hidden lg:block">
          <Icon
            name="ri:terminal-line"
            class="text-gray-500 w-7 h-auto border-l pl-2 border-gray-800"
          />
        </span>
      </button>
      <div class="flex items-center gap-2 sm:gap-4">
        <button
          class="hidden sm:block border border-gray-700 px-1 py-[2px] rounded-md border-gray-500 hover:border-gray-300 hover:bg-gray-800"
        >
          <Icon
            name="material-symbols:add-rounded"
            class="text-gray-500 w-5 h-auto -mt-1"
          />
        </button>
        <button
          class="hidden sm:block border border-gray-700 px-1 py-[2px] rounded-md border-gray-500 hover:border-gray-300 hover:bg-gray-800"
        >
          <Icon name="codicon:issues" class="text-gray-500 w-5 h-auto -mt-1" />
        </button>
        <button
          class="hidden sm:block border border-gray-700 px-1 py-[2px] rounded-md border-gray-500 hover:border-gray-300 hover:bg-gray-800"
        >
          <Icon name="mdi:source-pull" class="text-gray-500 w-5 h-auto -mt-1" />
        </button>
        <button
          class="block border border-gray-700 px-1 py-[2px] rounded-md border-gray-500 hover:border-gray-300 hover:bg-gray-800"
        >
          <Icon
            name="octicon:inbox-16"
            class="text-gray-500 w-5 h-auto -mt-1"
          />
        </button>
        <button
          @click="openRightSidebarMenu"
          class="block border border-gray-700 px-1 py-[2px] rounded-full border-gray-500 hover:border-gray-300 hover:bg-gray-800 rounded-full w-8 h-8"
        >
          <nuxt-img :src="userImage" class="w-full h-full object-cover" />
        </button>
      </div>
    </div>
  </header>
</template>
