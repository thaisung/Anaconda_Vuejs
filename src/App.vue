<template>
  <div id="app" v-bind:class="counter.openDark">
    <router-view />
  </div>
</template>


<script >
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';
import axios from 'axios'

export default {

  setup() {
    const counter = useCounterStore();
    return {counter}
  },
}
</script> 
