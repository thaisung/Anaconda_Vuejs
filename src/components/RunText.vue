<template>
  <marquee v-if="counter.language==1" class="flex min-h-[40px] lg:mt-[54px] flex-row  text-sky-400 font-bold rounded  items-center  bg-white dark:bg-slate-900 drop-shadow-md ">{{ counter.admins[0]['Run_Text'] }}</marquee>
  <marquee v-if="counter.language==2" class="flex min-h-[40px] lg:mt-[54px] flex-row  text-sky-400 font-bold rounded  items-center  bg-white dark:bg-slate-900 drop-shadow-md ">{{ counter.admins[0]['Run_Text_English'] }}</marquee>
    <!-- <div class="flex min-h-[40px] lg:mt-[54px] flex-row  text-lime-900 font-bold rounded  items-center  bg-white dark:bg-[#0f172a] drop-shadow-md  dark:bg-transparent " ><h1>{{  }}</h1></div> -->
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
