<script setup>
import { ref } from 'vue'
import Home from '@/features/home/Home.vue'
import Temperature from '@/features/temperature/Temperature.vue'

const currentComponent = ref('Home');
const components = {
  Home,
  Temperature
};
function changeComponent(componentName) {
  currentComponent.value = componentName;
}
</script>

<template>
  <nav>
    <van-nav-bar title="Tools" :border="false" />
  </nav>

  <main>
    <component :is="components[currentComponent]" :changeComponent />
  </main>

  <van-floating-bubble axis="xy" icon="chat" magnetic="x" @click="changeComponent('Home')"
    v-if="currentComponent !== 'Home'" />
</template>
<style scoped>
main {
  margin-top: 8rem;
}
</style>
