<template>
    <!-- <div class="flex min-h-[40px] flex-row  text-lime-900 font-bold rounded  items-center  bg-white drop-shadow-md  dark:bg-transparent "><marquee class="">Xin chào bà con !!!!</marquee></div> -->
    <div class="flex min-h-[40px] flex-row lg:mt-[54px] text-lime-900 font-bold rounded  items-center  bg-white drop-shadow-md  dark:bg-slate-900 " ><h1>{{ counter.tabmaqr }}</h1></div>
</template>

<script >

import { useCounterStore } from '@/stores/counter';
import axios from 'axios';
import VueCookies from 'vue-cookies'


export default {

  setup() {
    const counter = useCounterStore();
    return {counter}
  },
  data() {
    return {
    }
  },
  methods:{
  },
}

</script>
