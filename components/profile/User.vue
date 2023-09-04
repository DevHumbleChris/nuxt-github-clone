<script setup lang="ts">
const props = defineProps({
  userInfo: Object,
});

const userInfo = computed(() => {
  return props?.userInfo;
});
</script>

<template>
  <section class="bg-light-dark">
    <div class="grid grid-cols-8">
        <div class="col-span-2 p-5 space-y-3 text-gray-200">
            <div class="max-w-64 lg:w-64 h-auto mx-auto rounded-full border-2 border-gray-400 shadow">
                <nuxt-img :src="userInfo?.avatar_url" :alt="userInfo?.login" class="w-full h-full object-cover rounded-full" />
            </div>
            <div class="space-y-4">
                <div>
                    <h2 class="text-2xl text-white font-semibold">{{ userInfo?.name }}</h2>
                    <h1 class="text-gray-500">{{ userInfo?.login }}</h1>
                </div>
                <button class="block bg-[#21262c] p-2 w-full rounded-md">follow</button>
            </div>
            <p>{{ userInfo?.bio }}</p>
        </div>
        <div class="col-span-6 bg-blue-400 p-5">hello</div>
    </div>
  </section>
</template>
