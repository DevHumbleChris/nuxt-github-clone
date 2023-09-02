<script setup>
import { generateUsername } from "unique-username-generator";
definePageMeta({
  title: 'New Repository'
})
const { username } = await getUsername();
const { image } = await user();
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
  <section class="bg-light-dark h-screen text-xs">
    <div class="text-gray-500 max-w-2xl mx-auto py-8 space-y-5">
      <div class="space-y-2">
        <h1 class="text-2xl text-white">Create a new repository</h1>
        <p>
          A repository contains all project files, including the revision
          history. Already have a project repository elsewhere?
        </p>
        <NuxtLink to="/new/import" class="block text-new-blue"
          >Import a repository.</NuxtLink
        >
        <hr class="border-gray-700 block" />
        <p class="text-gray-100 italic">
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
      <div class="space-y-3">
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
        <p class="text-gray-100">
          Great repository names are short and memorable. Need inspiration? How
          about
          <span class="text-octo-green font-semibold">{{ genRepoName }}</span> ?
        </p>
        <div class="space-y-2">
          <p class="text-gray-100">
            Description <span class="text-gray-600">(optional)</span>
          </p>
          <input
            type="text"
            class="w-full px-2 py-1 border border-gray-500 bg-transparent group rounded-md focus:border-0 outline-none focus:outline-blue-500"
          />
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
        <div class="space-y-1">
          <h2 class="text-gray-100">Initialize this repository with:</h2>
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              name="readme"
              id="readme"
              class="w-4 h-4 self-start"
            />
            <label for="readme" class="">
              <h3 class="text-gray-100">Add a README file</h3>
              <p>
                This is where you can write a long description for your project.
                <NuxtLink
                  class="text-new-blue"
                  to="https://docs.github.com/github/creating-cloning-and-archiving-repositories/about-readmes"
                  >Learn more about READMEs.</NuxtLink
                >
              </p>
            </label>
          </div>
        </div>
        <div class="space-y-2">
          <h2 class="text-gray-100">Add .gitignore</h2>
          <select
            name="template"
            id="template"
            class="p-2 rounded-md bg-[#21262c]"
          >
            <option value="No template" selected>
              .gitignore template: None
            </option>
          </select>
          <p>
            Choose which files not to track from a list of templates.
            <NuxtLink
              to="https://docs.github.com/github/using-git/ignoring-files"
              class="text-new-blue"
              >Learn more about ignoring files.</NuxtLink
            >
          </p>
        </div>
        <div class="space-y-2">
          <h2 class="text-gray-100">Choose a license</h2>
          <select
            name="template"
            id="template"
            class="p-2 rounded-md bg-[#21262c]"
          >
            <option value="No template" selected>License: None</option>
          </select>
          <p>
            A license tells others what they can and can't do with your code.
            <NuxtLink
              to="https://docs.github.com/github/creating-cloning-and-archiving-repositories/licensing-a-repository"
              class="text-new-blue"
              >Learn more about licenses.</NuxtLink
            >
          </p>
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
        <button
          class="order-last bg-octo-green p-2 text-white hover:bg-green-500 rounded-md"
        >
          Create repository
        </button>
      </div>
    </div>
  </section>
</template>
