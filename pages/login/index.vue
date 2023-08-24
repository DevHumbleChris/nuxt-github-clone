<script setup lang="ts">
definePageMeta({
  title: "Login",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
  layout: 'custom'
});

const { signIn } = useAuth();

const loginWithGithub = async (): Promise<void> => {
  try {
    const data = await signIn("github", { callbackUrl: "/" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <section class="mx-4">
    <div
      class="max-w-lg mx-auto border p-8 mt-32 space-y-4 rounded-3xl border border-gray-300 bg-white shadow-2xl shadow-blue-100"
    >
      <nuxt-img src="/images/scubacat.png" />
      <p class="text-2xl capitalize text-center">
        Sign in to Nuxt GitHub Clone.
      </p>
      <button
        @click="loginWithGithub"
        class="group mx-auto relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 hover:before-gray-400 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100"
      >
        <span
          class="w-full relative flex justify-center items-center gap-3 text-base font-medium text-gray-600"
        >
          <span class="block flex items-center gap-2 w-full">
            <Icon name="mdi:github" class="w-5 h-auto" />
            <span>Continue with Github</span>
          </span>
        </span>
      </button>
    </div>
  </section>
</template>
