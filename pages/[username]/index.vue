<script setup>
import Tabs from '~/components/profile/Tabs.vue'
import User from '~/components/profile/User.vue'
const { currentRoute } = useRouter();

const usernameParams = computed(() => {
  return currentRoute?.value?.params?.username;
});

const { data: userInfo, error } = await getUserInfo(usernameParams?.value);
console.log(userInfo);

useHead({
  title: `${usernameParams.value} (${userInfo?.name})`,
});
</script>

<template>
  <section>
    <Tabs :userInfo="userInfo"/>
    <User :userInfo="userInfo"/>
  </section>
</template>
