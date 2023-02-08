<template>
  <div class="flex  font-medium  justify-between min-h-[50px] rounded items-center   bg-white drop-shadow-md dark:bg-slate-900">
    <div class=" px-3 py-1.5 bg-green-600  rounded mx-[6px] sm:mx-2 my-1 text-white  text-[16px] font-semibold " v-show="counter.opentab==1"><h1 v-if="counter.language==1">Bảng giá dịch vụ</h1><h1 v-if="counter.language==2">Service price list</h1></div>
    <div class=" px-3 py-1.5 bg-green-600  rounded mx-[6px] sm:mx-2 my-1 text-white  text-[16px] " v-show="counter.opentab==2"><font-awesome-icon icon="fa-solid fa-arrows-down-to-line" /></div>
    <div class=" px-3 py-1.5 bg-green-600  rounded mx-[6px] sm:mx-2 my-1 text-white  text-[16px] " v-show="counter.opentab==3"><font-awesome-icon icon="fa-solid fa-arrows-down-to-line" /></div>
    <div class=" px-3 py-1.5 bg-green-600  rounded mx-[6px] sm:mx-2 my-1 text-white  text-[16px] " v-show="counter.opentab==4"><font-awesome-icon icon="fa-solid fa-arrows-down-to-line" /></div>
    <div v-if="typeof counter.openthongtincanhan.username == 'string'" class="flex sm:mr-2 cursor-pointer my-1 mx-[6px] text-green-600 ">
        <router-link to="/" >
          <div class=" flex px-2 py-1 border-2 border-green-600 leading-normal rounded-l gap-1" v-on:click="counter.openTab(1);  counter.setStatevaoLocalStorage();"  v-bind:class="{' bg-green-600 text-white ':counter.opentab == 1,'hover:text-green-500 hover:border-green-500':counter.opentab !=1}">
            <div><font-awesome-icon icon="fa-solid fa-house" /></div>
            <div class="hidden md:flex"><h1 v-if="counter.language==1">Trang chủ</h1><h1 v-if="counter.language==2">Home page</h1></div>
          </div>
        </router-link>
        <router-link to="/personal" >
          <div class=" flex px-2 py-1 border-2 border-green-600   leading-normal gap-1" v-on:click="counter.openTab(2);  counter.setStatevaoLocalStorage(); " v-bind:class="{' bg-green-600 text-white ':counter.opentab == 2,'hover:text-green-500 hover:border-green-500':counter.opentab !=2}" >
            <div><font-awesome-icon icon="fa-solid fa-user-ninja" /></div>
            <div class="hidden md:flex"><h1 v-if="counter.language==1">Trang cá nhân</h1><h1 v-if="counter.language==2">Personal page</h1></div>
          </div>
        </router-link>
        <router-link to="/history">
          <div class="flex px-2 py-1 border-2 border-green-600   leading-normal gap-1" v-on:click="counter.openTab(3);  counter.setStatevaoLocalStorage(); counter.TransactionHistory();" v-bind:class="{' bg-green-600 text-white ':counter.opentab == 3,'hover:text-green-500 hover:border-green-500':counter.opentab !=3}">
            <div><font-awesome-icon icon="fa-solid fa-clock-rotate-left" /></div>
            <div class="hidden md:flex"><h1 v-if="counter.language==1">Lịch sử giao dịch</h1><h1 v-if="counter.language==2">Transaction history</h1></div>
          </div>
        </router-link>
        <router-link to="/APIdocumentation">
          <div class="flex px-2 py-1 rounded-r border-2 border-green-600   leading-normal gap-1" v-on:click="counter.openTab(4);  counter.setStatevaoLocalStorage(); " v-bind:class="{' bg-green-600 text-white ':counter.opentab == 4,'hover:text-green-500 hover:border-green-500':counter.opentab !=4}">
            <div><font-awesome-icon icon="fa-solid fa-file-lines" /></div>
            <div class="hidden md:flex"><h1 v-if="counter.language==1">Tài liệu API</h1><h1 v-if="counter.language==2">API documentation</h1></div>
          </div>
        </router-link>
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
  mounted:function(){
    this.counter.getStatetuLocalStorage();
  }
}
</script> 