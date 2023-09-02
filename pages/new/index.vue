<script setup>
const { username } = await getUsername();
const { image } = await user();
const config = useRuntimeConfig();

const isSelectInputTriggered = useState("isSelectInputTriggered", () => false);
const selectedInput = useState("selectedInput", () => {
  return {
    name: "",
    image: "",
  };
});

const setSelectedInput = () => {
  isSelectInputTriggered.value = !isSelectInputTriggered?.value;
};

</script>

<template>
  <section class="bg-light-dark text-xs">
    <div class="text-gray-400 max-w-2xl mx-auto py-8 space-y-5">
      <div class="space-y-2">
        <h1 class="text-2xl text-white">Create a new repository</h1>
        <p>
          A repository contains all project files, including the revision
          history. Already have a project repository elsewhere?
        </p>
        <NuxtLink to="#" class="block text-new-blue"
          >Import a repository.</NuxtLink
        >
        <hr class="border-gray-700 block" />
        <p class="text-gray-100">
          Required fields are marked with an asterisk (*).
        </p>
      </div>
      <div class="space-y-2">
        <h2 class="text-gray-100">Repository template</h2>
        <select
          name="template"
          id="template"
          class="p-2 rounded-md bg-[#21262c]"
        >
          <option value="No template" selected>No template</option>
        </select>
        <p>Start your repository with a template repository's contents.</p>
        <hr class="border-gray-700 block" />
      </div>
      <div class="flex items-center gap-4">
        <div class="space-y-2">
          <h2 class="text-gray-100">Owner *</h2>
          <div class="relative text-gray-100">
            <div @click="setSelectedInput"
              class="cursor-pointer flex items-center gap-2 p-2 rounded-md bg-[#21262c]"
            >
              <div class="w-5 h-5 rounded-full border border-gray-500">
                <nuxt-img :src="image" class="w-full h-full object-cover" />
              </div>
              <p>{{ username }}</p>
              <Icon name="bx:chevron-down" class="w-5 h-auto" />
            </div>
            <div
              v-if="isSelectInputTriggered"
              class="absolute z-30 -bottom-[3rem] rounded-md left-0 right-0 w-full px-2 py-3 bg-[#161b21]"
            >
              <div class="flex items-center gap-1">
                <Icon
                  name="teenyicons:tick-small-solid"
                  class="w-5 h-auto shrink-0"
                />
                <div
                  class="w-5 h-5 rounded-full border border-gray-500 shrink-0"
                >
                  <nuxt-img :src="image" class="w-full h-full object-cover" />
                </div>
                <p>{{ username }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-2">
          <h2 class="text-gray-100">Repository name *</h2>
          <input
            type="text"
            class="w-full placeholder:text-gray-500 px-2 py-1 border border-gray-500 bg-transparent group rounded-md focus:border-0 outline-none focus:outline-blue-500 text-gray-100"
          />
        </div>
      </div>
    </div>
  </section>
</template>
