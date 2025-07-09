<script setup>
import { RouterView, useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute();
function goHome() {
  router.push('/');
}
</script>

<template>
  <nav>
    <van-nav-bar title="Tools" :border="false" @click="goHome" />
  </nav>

  <main>
    <RouterView />
  </main>
  
  <van-floating-bubble axis="xy" icon="chat" magnetic="x" @click="goHome" v-if="route.path !== '/'" />
</template>

<style scoped>
main {
  margin-top: 8rem;
}
</style>
