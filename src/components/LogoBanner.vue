<template>
  <div class="flex flex-col md:flex-row   rounded min-h-[200px]   bg-white drop-shadow-md dark:bg-slate-900 px-2 py-5 gap-2">
    <!-- Logo -->
    <router-link to="/" > v-for="admin in counter.admins" class="flex flex-col gap-3 rounded overflow-hidden items-center  justify-center  md:w-[250px] w-full">
      <div class="w-[120px]" v-on:click="counter.opentab=1; counter.setStatevaoLocalStorage();"><img alt="Image" :src="admin.Avatar"/></div>
      <div :class="'text-[20px] font-bold antialiased text-'+admin.Main_Color"><h1>{{admin.Brand_Name}}</h1></div>
    </router-link>
    <!-- Banner -->
    <div class="flex flex-col items-center rounded   text-lime-900 dark:text-lime-700   w-full h-full px-4 lg:px-1">
      <div><h1 v-if="counter.language==1" class="text-2xl font-bold antialiased ">Thông báo</h1><h1 v-if="counter.language==2" class="text-2xl font-bold antialiased ">Notify</h1></div>
      <ul v-if="counter.language==1" class="list-disc list-outside text-justify font-semibold">
        <li v-for="st in counter.admins[0]['Notification'].split('\r\n')" class="text-justify">{{ st }}</li>
      </ul>
      <ul v-if="counter.language==2" class="list-disc list-outside text-justify font-semibold">
        <li v-for="st in counter.admins[0]['Notification_English'].split('\r\n')" class="text-justify">{{ st }}</li>
      </ul>
      <!-- <h2 v-if="counter.language==1" class=" font-semibold antialiased ">{{counter.admins[0]['Notification']}}</h2>
      <h2 v-if="counter.language==2" class=" font-semibold antialiased ">{{counter.admins[0]['Notification_English']}}</h2> -->
    </div>
  </div>
</template>

<script >
import { useCounterStore } from '@/stores/counter';

export default {

  setup() {
    const counter = useCounterStore();

    return {counter}
  },
}
</script> 