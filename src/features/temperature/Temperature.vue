<script setup>
import { ref } from 'vue'
const celsius = ref(0)
const fahrenheit = ref(0)
function celsiusToFahrenheit() {
  fahrenheit.value = Number(((celsius.value * 9 / 5) + 32).toFixed(2))
}
function fahrenheitToCelsius() {
  celsius.value = Number(((fahrenheit.value - 32) * 5 / 9).toFixed(2))
}
</script>

<template>
  <van-form >
    <van-cell-group inset>
      <van-field v-model="celsius" type="number" label="℃" @blur="celsiusToFahrenheit" />
      <van-field v-model="fahrenheit" type="number" label="℉" @blur="fahrenheitToCelsius" />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        转换
      </van-button>
    </div>
  </van-form>
</template>
