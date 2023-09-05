<script setup lang="ts">
import { useMenuStore } from "~/stores/menu";
const { signOut } = useAuth();
const menuStore = useMenuStore();
const config = useRuntimeConfig();
const { image, name } = user();
const { username } = await getUsername();

const perPageFetch = useState("perPageFetch", () => 7);
const isRightSidebarMenuOpen = computed(() => {
  return menuStore?.isRightSidebarMenuOpen;
});

const closeRightSidebarMenu = () => {
  menuStore?.openRightSidebarMenu();
};

const userSignOut = async () => {
  await signOut({ callbackUrl: "/login" });
};
</script>

<template>
  <aside
    v-if="isRightSidebarMenuOpen"
    v-motion
    :initial="{ opacity: 0, x: 100 }"
    :enter="{ opacity: 1, x: 0 }"
    :delay="200"
    class="fixed shrink-0 top-0 right-0 w-[20rem] bg-[#161b21] h-screen text-gray-100 text-sm px-4 py-3 shadow-gray-800/10 space-y-2 rounded-r-2xl shadow-xl z-40"
  >
    <div class="flex items-center bg-[#161b21] z-20 py-2 justify-between">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 border rounded-full border-gray-600">
          <nuxt-img
            :src="image"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h2>{{ username }}</h2>
          <p class="text-gray-600">{{ name }}</p>
        </div>
      </div>
      <button
        @click="closeRightSidebarMenu"
        class="block bg-[#2d313a] p-2 rounded-md text-gray-500 hover:text-white"
      >
        <Icon name="ic:round-close" class="w-4 h-auto" />
      </button>
    </div>
    <ul class="p-2 space-y-1">
      <hr class="border-gray-800" />
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2">
          <Icon name="octicon:person-24" class="w-5 h-auto text-gray-500" />
          <p>Your profile</p>
        </NuxtLink>
      </li>
      <hr class="border-gray-800" />

      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:repo-24" class="w-5 h-auto text-gray-500" />
          <p>Your repositories</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:project-24" class="w-5 h-auto text-gray-500" />
          <p>Your projects</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon
            name="octicon:codespaces-24"
            class="w-5 h-auto text-gray-500"
          />
          <p>Your codespaces</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon
            name="octicon:organization-24"
            class="w-5 h-auto text-gray-500"
          />
          <p>Your organizations</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:globe-24" class="w-5 h-auto text-gray-500" />
          <p>Your enterprises</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:star-24" class="w-5 h-auto text-gray-500" />
          <p>Your stars</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:heart-24" class="w-5 h-auto text-gray-500" />
          <p>Your sponsors</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon
            name="octicon:code-square-24"
            class="w-5 h-auto text-gray-500"
          />
          <p>Your gists</p></NuxtLink
        >
      </li>
      <hr class="border-gray-800" />
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:upload-24" class="w-5 h-auto text-gray-500" />
          <p>Upgrade</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:globe-24" class="w-5 h-auto text-gray-500" />
          <p>Try Enterprise</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:copilot-24" class="w-5 h-auto text-gray-500" />
          <p>Try Copilot</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:beaker-24" class="w-5 h-auto text-gray-500" />
          <p>Feature preview</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:settings-24" class="w-5 h-auto text-gray-500" />
          <p>Settings</p></NuxtLink
        >
      </li>
      <hr class="border-gray-800" />
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:book-24" class="w-5 h-auto text-gray-500" />
          <p>GitHub Docs</p></NuxtLink
        >
      </li>
      <li class="hover:bg-gray-800 p-2 hover:rounded-md">
        <NuxtLink href="#" class="flex items-center gap-2"
          ><Icon name="octicon:people-24" class="w-5 h-auto text-gray-500" />
          <p>GitHub Support</p></NuxtLink
        >
      </li>
      <hr class="border-gray-800" />
      <button
        @click="userSignOut"
        class="block w-full text-left hover:bg-gray-800 p-2 hover:rounded-md"
      >
        Sign out
      </button>
    </ul>
  </aside>
</template>
