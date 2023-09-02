<script setup lang="ts">
import Sidebar from '~/components/dashboard/Sidebar.vue'
import Events from '~/components/dashboard/Events.vue';
definePageMeta({
    title: 'Dashboard'
})
</script>

<template>
    <section class="flex bg-main">
        <Sidebar />
        <Events />
        <div>right</div>
    </section>
</template>
