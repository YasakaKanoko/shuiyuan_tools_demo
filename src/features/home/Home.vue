<template>
  <van-grid :border="false" :column-num="3" gutter="10">
    <van-grid-item class="item" @click="router.push('/temperature')">
      <van-image src="temperature.svg" />
    </van-grid-item>
    <van-grid-item class="item">
      <van-image src="length.svg" />
    </van-grid-item>
    <van-grid-item class="item">
      <van-image src="weight.svg" />
    </van-grid-item>
    <van-grid-item class="item">
      <van-image src="currency.svg" />
    </van-grid-item>
    <van-grid-item class="item">
      <van-image src="memo.svg" />
    </van-grid-item>
  </van-grid>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
.item:active {
  transform: scale(0.8);
}
</style>
