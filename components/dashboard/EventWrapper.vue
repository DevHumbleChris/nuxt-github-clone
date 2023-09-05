<script setup>
import EventWrapper from "./EventWrapper.vue";
import MarkdownIt from "markdown-it";
const props = defineProps({
  userEvents: Object,
  eventType: String,
  username: String,
});

const userEvents = computed(() => {
  return props?.userEvents;
});

const eventType = computed(() => {
  return props?.eventType;
});

const username = computed(() => {
  return props?.username;
});

const { data: repoInfo } = await getRepoInfo(userEvents?.value?.repo?.name);
console.log(repoInfo);

const getUserRepo = (repoName) => {
  const splittedName = repoName.split("/");
  return splittedName[splittedName?.length - 1];
};

const setRenderedMarkdown = (markdownText) => {
  const md = new MarkdownIt();
  const generetedMarkdownText = md.render(markdownText);
  return generetedMarkdownText;
};
</script>

<template>
  <div class="p-3 border border-gray-700 rounded bg-light-dark">
    <div v-if="eventType === 'forked'" class="space-y-2">
      <div class="flex items-center flex-wrap gap-3 justify-between">
        <div class="flex items-center gap-2">
          <NuxtLink
            :to="repoInfo?.owner?.login"
            class="block w-4 h-4 border rounded-full border-gray-600"
          >
            <nuxt-img
              :src="
                repoInfo?.owner?.avatar_url || userEvents?.actor?.avatar_url
              "
              :alt="repoInfo?.owner?.login"
              class="w-full h-full object-cover rounded-full"
            />
          </NuxtLink>
          <div class="flex items-center gap-1">
            <NuxtLink
              :to="repoInfo?.owner?.login"
              class="block hover:text-blue-500 text-gray-100"
              >{{ repoInfo?.owner?.login }}</NuxtLink
            >
            <p>/</p>
            <NuxtLink
              :to="repoInfo?.html_url"
              target="_blank"
              class="block hover:text-blue-500 text-gray-100"
            >
              {{ getUserRepo(userEvents?.repo?.name) }}
            </NuxtLink>
          </div>
        </div>
        <div
          class="bg-[#21262c] flex items-center border border-gray-500 rounded"
        >
          <div class="flex items-center gap-1 px-2 py-1 hover:bg-gray-700">
            <Icon name="ic:round-star-border" class="w-5 h-auto" />
            <p class="text-gray-100">Star</p>
          </div>
          <div class="border-l border-gray-500 p-1 hover:bg-gray-700">
            <Icon name="majesticons:chevron-down-line" class="w-5 h-auto" />
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <div v-if="repoInfo?.description" class="text-gray-100">
          {{ repoInfo?.description }}
        </div>
        <div class="flex items-center gap-4">
          <div v-if="repoInfo?.language" class="flex items-center gap-1">
            <div class="w-2 h-2 bg-octo-green rounded-full"></div>
            <div>{{ repoInfo?.language }}</div>
          </div>
          <div v-if="repoInfo?.stargazers_count > 0" class="flex items-center">
            <Icon name="ic:round-star-border" class="w-5 h-auto" />
            <p>{{ repoInfo?.stargazers_count }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="eventType === 'created'" class="space-y-2">
      <div class="flex items-center flex-wrap gap-3 justify-between">
        <div class="flex items-center gap-2">
          <NuxtLink :to="userEvents?.actor?.login" class="w-4 h-4">
            <nuxt-img
              :src="userEvents?.actor?.avatar_url"
              :alt="userEvents?.actor?.login"
              class="w-full h-full object-cover rounded-full"
            />
          </NuxtLink>
          <div class="flex items-center gap-1">
            <NuxtLink
              :to="userEvents?.actor?.login"
              class="hover:text-blue-500 text-gray-100"
              >{{ userEvents?.actor?.login }}</NuxtLink
            >
            <p>/</p>
            <NuxtLink
              :to="repoInfo?.html_url"
              target="_blank"
              class="hover:text-blue-500 text-gray-100"
            >
              {{ getUserRepo(userEvents?.repo?.name) }}
            </NuxtLink>
          </div>
        </div>
        <div
          class="bg-[#21262c] flex items-center border border-gray-500 rounded"
        >
          <div class="flex items-center gap-1 px-2 py-1 hover:bg-gray-700">
            <Icon name="ic:round-star-border" class="w-5 h-auto" />
            <p class="text-gray-100">Star</p>
          </div>
          <div class="border-l border-gray-500 p-1 hover:bg-gray-700">
            <Icon name="majesticons:chevron-down-line" class="w-5 h-auto" />
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <div v-if="repoInfo?.description" class="text-gray-100">
          {{ repoInfo?.description }}
        </div>
        <div class="flex items-center gap-4">
          <div v-if="repoInfo?.language" class="flex items-center gap-1">
            <div class="w-2 h-2 bg-octo-green rounded-full"></div>
            <div>{{ repoInfo?.language }}</div>
          </div>
          <div
            v-if="repoInfo?.stargazers_count > 0"
            class="flex items-center gap-1"
          >
            <Icon name="ic:round-star-border" class="w-5 h-auto" />
            <p>{{ repoInfo?.stargazers_count }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="eventType === 'starred'" class="space-y-2">
      <div class="flex items-center flex-wrap gap-3 justify-between">
        <div class="flex items-center gap-2">
          <NuxtLink
            :to="repoInfo?.owner?.login"
            class="w-4 h-4 border rounded-full border-gray-600"
          >
            <nuxt-img
              :src="
                repoInfo?.owner?.avatar_url || userEvents?.actor?.avatar_url
              "
              :alt="repoInfo?.owner?.login"
              class="w-full h-full object-cover rounded-full"
            />
          </NuxtLink>
          <div class="flex items-center gap-1">
            <NuxtLink
              :to="repoInfo?.owner?.login"
              class="block hover:text-blue-500 text-gray-100"
              >{{ repoInfo?.owner?.login }}</NuxtLink
            >
            <p>/</p>
            <NuxtLink
              :to="repoInfo?.html_url"
              target="_blank"
              class="block hover:text-blue-500 text-gray-100"
            >
              {{ getUserRepo(userEvents?.repo?.name) }}
            </NuxtLink>
          </div>
        </div>
        <div
          class="bg-[#21262c] flex items-center border border-gray-500 rounded"
        >
          <div class="flex items-center gap-1 px-2 py-1 hover:bg-gray-700">
            <Icon name="ic:round-star-border" class="w-5 h-auto" />
            <p class="text-gray-100">Star</p>
          </div>
          <div class="border-l border-gray-500 p-1 hover:bg-gray-700">
            <Icon name="majesticons:chevron-down-line" class="w-5 h-auto" />
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <div v-if="repoInfo?.description" class="text-gray-100">
          {{ repoInfo?.description }}
        </div>
        <div class="flex items-center gap-4">
          <div v-if="repoInfo?.language" class="flex items-center gap-1">
            <div class="w-2 h-2 bg-octo-green rounded-full"></div>
            <div>{{ repoInfo?.language }}</div>
          </div>
          <div v-if="repoInfo?.stargazers_count > 0" class="flex items-center">
            <Icon name="ic:round-star-border" class="w-5 h-auto" />
            <p>{{ repoInfo?.stargazers_count }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="eventType === 'released'" class="space-y-2">
      <div class="flex items-center flex-wrap gap-3 justify-between">
        <div class="flex items-center gap-2">
          <NuxtLink
            :to="repoInfo?.owner?.login"
            class="w-4 h-4 border rounded-full border-gray-600"
          >
            <nuxt-img
              :src="
                repoInfo?.owner?.avatar_url || userEvents?.actor?.avatar_url
              "
              :alt="repoInfo?.owner?.login"
              class="w-full h-full object-cover rounded-full"
            />
          </NuxtLink>
          <div class="flex items-center gap-1">
            <NuxtLink
              :to="repoInfo?.owner?.login"
              class="block hover:text-blue-500 text-gray-100"
              >{{ repoInfo?.owner?.login }}</NuxtLink
            >
            <p>/</p>
            <NuxtLink
              :to="repoInfo?.html_url"
              target="_blank"
              class="block hover:text-blue-500 text-gray-100"
            >
              {{ getUserRepo(userEvents?.repo?.name) }}
            </NuxtLink>
          </div>
        </div>
        <div
          class="bg-[#21262c] flex items-center border border-gray-500 rounded"
        >
          <div class="flex items-center gap-1 px-2 py-1 hover:bg-gray-700">
            <Icon name="ic:round-star-border" class="w-5 h-auto" />
            <p class="text-gray-100">Star</p>
          </div>
          <div class="border-l border-gray-500 p-1 hover:bg-gray-700">
            <Icon name="majesticons:chevron-down-line" class="w-5 h-auto" />
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <div class="text-lg text-gray-100">
          {{ userEvents?.payload?.release?.tag_name }}
        </div>
        <div v-if="repoInfo?.description" class="text-gray-100">
          {{ repoInfo?.description }}
        </div>
        <div
          class="text-lg text-gray-100"
          v-html="setRenderedMarkdown(userEvents?.payload?.release?.body)"
        ></div>
        <div class="flex items-center gap-4">
          <div v-if="repoInfo?.language" class="flex items-center gap-1">
            <div class="w-2 h-2 bg-octo-green rounded-full"></div>
            <div>{{ repoInfo?.language }}</div>
          </div>
          <div v-if="repoInfo?.stargazers_count > 0" class="flex items-center">
            <Icon name="ic:round-star-border" class="w-5 h-auto" />
            <p>{{ repoInfo?.stargazers_count }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="eventType === 'added'" class="space-y-2">
      <div class="flex items-center flex-wrap gap-3 justify-between">
        <div class="flex items-center gap-2">
          <NuxtLink
            :to="repoInfo?.owner?.login"
            class="w-4 h-4 border rounded-full border-gray-600"
          >
            <nuxt-img
              :src="
                repoInfo?.owner?.avatar_url || userEvents?.actor?.avatar_url
              "
              :alt="repoInfo?.owner?.login"
              class="w-full h-full object-cover rounded-full"
            />
          </NuxtLink>
          <div class="flex items-center gap-1">
            <NuxtLink
              :to="repoInfo?.owner?.login"
              class="block hover:text-blue-500 text-gray-100"
              >{{ repoInfo?.owner?.login }}</NuxtLink
            >
            <p>/</p>
            <NuxtLink
              :to="repoInfo?.html_url"
              target="_blank"
              class="block hover:text-blue-500 text-gray-100"
            >
              {{ getUserRepo(userEvents?.repo?.name) }}
            </NuxtLink>
          </div>
        </div>
        <div
          class="bg-[#21262c] flex items-center border border-gray-500 rounded"
        >
          <div class="flex items-center gap-1 px-2 py-1 hover:bg-gray-700">
            <Icon name="ic:round-star-border" class="w-5 h-auto" />
            <p class="text-gray-100">Star</p>
          </div>
          <div class="border-l border-gray-500 p-1 hover:bg-gray-700">
            <Icon name="majesticons:chevron-down-line" class="w-5 h-auto" />
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <div v-if="repoInfo?.description" class="text-gray-100">
          {{ repoInfo?.description }}
        </div>
        <div class="flex items-center gap-4">
          <div v-if="repoInfo?.language" class="flex items-center gap-1">
            <div class="w-2 h-2 bg-octo-green rounded-full"></div>
            <div>{{ repoInfo?.language }}</div>
          </div>
          <div v-if="repoInfo?.stargazers_count > 0" class="flex items-center">
            <Icon name="ic:round-star-border" class="w-5 h-auto" />
            <p>{{ repoInfo?.stargazers_count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
