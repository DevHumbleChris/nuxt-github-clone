<script setup>
const currentYear = useState('currentYear', () => {
    let year = new Date().getFullYear()
    return year
})
</script>

<template>
  <footer class="bg-main p-4">
    <div class="max-w-2xl mx-auto flex flex-col items-center flex-wrap gap-3">
        <div class="flex items-center gap-1">
            <NuxtLink to="/" class="block">
              <Icon name="mdi:github" class="text-white w-10 h-auto" />
            </NuxtLink>
            <p>© {{ currentYear }} Nuxt GitHub Clone.</p>
        </div>
      <div class="flex items-center gap-1">
        <p>Made With</p>
        <Icon name="octicon:heart-fill-16" class="w-4 h-auto text-red-600" />,
        <NuxtLink to="https://the-coding-montana.vercel.app">The Coding Montana</NuxtLink>
      </div>
    </div>
  </footer>
</template>
