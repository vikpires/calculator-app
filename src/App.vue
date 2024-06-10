<script setup lang="ts">
  import { defineComponent } from 'vue';
  import Calculator from './components/Calculator.vue'
  
  export default defineComponent({
  components: {
    Calculator
  },
});
</script>

<template>
  <div id="app">
    <h1>Calculadora</h1>
    <Calculator />
  </div>
</template>
