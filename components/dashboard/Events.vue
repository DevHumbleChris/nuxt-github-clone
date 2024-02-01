<script setup lang="ts">
import EventRemarks from "./EventRemarks.vue";
import EventWrapper from "./EventWrapper.vue";
const config = useRuntimeConfig();
const { username } = await getUsername();
const selectedMainEvent = useState("selectedMainEvent", () => "for you");
const { data: userEvents } = useAsyncData("events", async () => {
  const { data } = await useMyFetch(`/users/${username}/received_events`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.public.NUXT_GITHUB_AUTH_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });
  console.log(data);
  return data?.value;
});

const setSelectedMainEvent = (eventName: string) => {
  selectedMainEvent.value = eventName;
};

const getEventType = (userEvent: string) => {
  switch (userEvent) {
    case "ForkEvent":
      return "forked";
    case "WatchEvent":
      return "starred";
    case "CreateEvent":
      return "created";
    case "ReleaseEvent":
      return "released";
    case "MemberEvent":
      return "added";
    default:
      return "unknown";
  }
};
</script>

<template>
  <section class="w-full py-5 px-8 text-gray-500 text-xs space-y-5">
    <div class="flex items-center gap-5">
      <button
        @click="setSelectedMainEvent('for you')"
        class="p-2"
        :class="{
          'border-[#c0877d] border-b-2': selectedMainEvent === 'for you',
        }"
      >
        <p class="text-gray-100">
          For you
          <span
            class="border mx-1 text-[0.65rem] text-[#32573d] border-[#32573d] rounded-full p-1"
            >Beta</span
          >
        </p>
      </button>
      <button
        @click="setSelectedMainEvent('following')"
        class="p-2"
        :class="{
          'border-[#c0877d] border-b-2': selectedMainEvent === 'following',
        }"
      >
        <p class="text-gray-100">Following</p>
      </button>
    </div>
    <div class="space-y-4">
      <div v-for="event in userEvents" :key="event?.id">
        <div v-if="getEventType(event?.type) !== 'unknown'" class="space-y-3">
          <div class="flex items-center flex-wrap gap-2">
            <NuxtLink :to="'/' + event?.actor?.login" class="block w-6 h-6">
              <nuxt-img
                :src="event?.actor?.avatar_url"
                :alt="event?.actor?.login"
                class="w-full h-full object-cover rounded-full"
              />
            </NuxtLink>
            <div class="flex items-center flex-wrap gap-1">
              <NuxtLink
                :to="'/' + event?.actor?.login"
                class="block hover:text-blue-600 text-gray-100"
                >{{ event?.actor?.login }}</NuxtLink
              >
              <div class="flex items-center gap-1">
                <p>
                  {{ getEventType(event?.type) }}
                </p>
                <EventRemarks
                  :eventType="getEventType(event?.type)"
                  :userEvent="event"
                />
              </div>
              <timeago :datetime="event?.created_at" />
            </div>
          </div>
          <EventWrapper
            :userEvents="event"
            :eventType="getEventType(event?.type)"
            :username="username"
          />
        </div>
      </div>
    </div>
  </section>
</template>
