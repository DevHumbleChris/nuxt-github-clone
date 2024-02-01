<script setup lang="ts">
import Sidebar from "~/components/dashboard/Sidebar.vue";
import Events from "~/components/dashboard/Events.vue";
import ExploreRepos from "~/components/dashboard/ExploreRepos.vue";
useHead({
  title: "Dashboard",
});
</script>

<template>
  <section class="flex bg-main">
    <Sidebar />
    <Events />
    <ExploreRepos />
  </section>
</template>
