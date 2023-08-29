<script setup lang="ts">
import Sidebar from '~/components/dashboard/Sidebar.vue'
definePageMeta({
    title: 'Dashboard'
})
</script>

<template>
    <section class="flex">
        <Sidebar />
        <div class="w-full">center</div>
        <div>right</div>
    </section>
</template>
