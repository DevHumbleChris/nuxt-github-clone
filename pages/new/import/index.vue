<script setup>
import { generateUsername } from "unique-username-generator";
definePageMeta({
  title: 'Import Repository'
})
const { username } = await getUsername();
const { image } = await user();
const config = useRuntimeConfig();
const genRepoName = useState("genRepoName", () => "");

if (process.server) {
  const genUserName = generateUsername("-", 0, 20);
  if (genUserName) {
    genRepoName.value = genUserName;
  }
}

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
    <div class="text-gray-500 max-w-2xl mx-auto py-8 space-y-5">
      <div class="space-y-2">
        <h1 class="text-2xl text-white">Import your project to GitHub</h1>
        <p>
          Import all the files, including revision history, from another version
          control system.
        </p>
        <hr class="border-gray-700 block" />
        <div class="space-y-3">
          <p class="text-gray-100 italic">
            Required fields are marked with an asterisk (*).
          </p>
          <p
            class="text-white p-4 bg-[#272115] rounded-md border-2 border-[#4d432d]"
          >
            Support for importing Mercurial, Subversion and Team Foundation
            Version Control (TFVC) repositories will end on October 17, 2023.
            For more details, see the
            <NuxtLink
              to="https://gh.io/github-importer-non-git-eol"
              class="text-new-blue"
              >changelog</NuxtLink
            >.
          </p>
        </div>
      </div>
      <div class="space-y-3">
        <h2 class="text-gray-100">Your old repository's clone URL *</h2>
        <input
          type="text"
          class="w-full px-2 py-1 text-white border border-gray-500 bg-transparent group rounded-md focus:border-0 outline-none focus:outline-blue-500"
          placeholder="https://svn.example.org/code/svn"
        />
        <p class="text-gray-100">
          Learn more about the types of
          <NuxtLink
            to="https://docs.github.com/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer"
            class="text-new-blue"
            >supported VCS.</NuxtLink
          >.
        </p>
        <hr class="border-gray-700 block" />
      </div>
      <div class="space-y-3">
        <div class="space-y-2">
          <h3 class="text-lg text-gray-100">Your new repository details</h3>
          <div class="flex items-center gap-4">
            <div class="space-y-2">
              <h2 class="text-gray-100">Owner *</h2>
              <div class="relative text-gray-100">
                <div
                  @click="setSelectedInput"
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
                      <nuxt-img
                        :src="image"
                        class="w-full h-full object-cover"
                      />
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
        <hr class="border-gray-700 block" />
      </div>
      <div class="space-y-3">
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <input
              type="radio"
              name="repo-type"
              id="repo-type-1"
              checked
              class="w-4 h-4 bg-trasparent accent-blue-600"
            />
            <label for="repo-type-1" class="flex items-center gap-1">
              <Icon name="octicon:repo" class="w-6 h-auto text-gray-100" />
              <div class="">
                <p class="text-gray-100 text-sm">Public</p>
                <p>
                  Anyone on the internet can see this repository. You choose who
                  can commit.
                </p>
              </div>
            </label>
          </div>
          <div class="flex items-center gap-2">
            <input
              type="radio"
              name="repo-type"
              id="repo-type-2"
              class="w-4 h-4 bg-trasparent accent-blue-600"
            />
            <label for="repo-type-2" class="flex items-center gap-1">
              <Icon name="octicon:lock" class="w-6 h-auto text-gray-100" />
              <div class="">
                <p class="text-gray-100 text-sm">Private</p>
                <p>You choose who can see and commit to this repository.</p>
              </div>
            </label>
          </div>
        </div>
        <hr class="border-gray-700 block" />
      </div>
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <Icon
            name="material-symbols:info-outline-rounded"
            class="w-4 h-auto"
          />
          You are creating a public repository in your personal account.
        </div>
        <hr class="border-gray-700 block" />
      </div>
      <div class="flex justify-end">
        <div class="flex items-center gap-4">
          <button class="block text-new-blue p-2 rounded-md hover:bg-gray-800">
            Cancel
          </button>
          <button
            class="block bg-octo-green p-2 text-white hover:bg-green-500 rounded-md"
          >
            Begin Import
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
