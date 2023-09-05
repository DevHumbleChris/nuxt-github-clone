<script setup lang="ts">
const props = defineProps({
    repo: Object
})

const repo = computed(() => {
    return props?.repo
})
</script>

<template>
    <div class="p-5 border border-gray-500 rounded-md space-y-4">
        <div class="flex items-center gap-2">
            <Icon name="octicon:repo-24" class="w-4 h-auto text-gray-500" />
            <div class="flex items-center gap-3">
                <NuxtLink :to="repo?.html_url" class="block text-blue-600 font-semibold hover:underline">{{ repo?.name }}</NuxtLink>
                <p class="text-xs px-2 rounded-full border border-gray-600">{{ repo?.visibility }}</p>
            </div>
        </div>
        <p v-if="repo?.description" class="text-gray-200">{{ repo?. description }}</p>
        <div class="flex items-center gap-4">
            <div v-if="repo?.language" class="flex items-center gap-1">
                <div class="w-3 h-3 bg-blue-600 rounded-full"></div>
                <p class="text-gray-300">{{ repo?.language }}</p>
            </div>
            <div class="flex items-center gap-1">
                <Icon name="octicon:star-24" class="w-4 h-auto text-gray-500" />
                <p class="text-gray-300">{{ repo?.stargazers_count }}</p>
            </div>
        </div>
    </div>
</template>
