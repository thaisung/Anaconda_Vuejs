<template>
  <div class="flex  font-medium justify-start  lg:justify-between h-[60px] py-2 rounded items-center   bg-white drop-shadow-md dark:bg-slate-900">
    <div v-if="typeof counter.openthongtincanhan.username == 'undefined'" class="lg:hidden flex h-full  items-center px-3 py-1.5 bg-green-600  rounded mx-[6px] sm:mx-2  text-white  text-[16px] font-semibold " v-show="counter.Route.path==counter.tab_parent.home_page"><h1 v-if="counter.language==1">Bảng dịch vụ</h1><h1 v-if="counter.language==2">Service Table</h1></div>
    <div class="hidden lg:flex grow h-full shrink-0 justify-start items-center">
      <div class="flex h-full justify-center items-center px-3 py-1.5 bg-green-600  rounded mx-[6px] sm:mx-2  text-white  text-[16px] font-semibold " v-show="counter.Route.path==counter.tab_parent.home_page"><h1 v-if="counter.language==1">Bảng dịch vụ</h1><h1 v-if="counter.language==2">Service Table</h1></div>
      <div class="flex h-full justify-center items-center px-3 py-1.5 bg-green-600  rounded mx-[6px] sm:mx-2  text-white  text-[16px] " v-show="counter.Route.path==counter.tab_parent.personal_page_information || counter.Route.path==counter.tab_parent.personal_page_changepassword || counter.Route.path==counter.tab_parent.personal_page_accuracy || counter.Route.path==counter.tab_parent.personal_recharge"><font-awesome-icon icon="fa-solid fa-arrows-down-to-line" /></div>
      <div class="flex h-full justify-center items-center px-3 py-1.5 bg-green-600  rounded mx-[6px] sm:mx-2  text-white  text-[16px] " v-show="counter.Route.path==counter.tab_parent.personal_history"><font-awesome-icon icon="fa-solid fa-arrows-down-to-line" /></div>
      <div class="flex h-full justify-center items-center px-3 py-1.5 bg-green-600  rounded mx-[6px] sm:mx-2  text-white  text-[16px] " v-show="counter.Route.path==counter.tab_parent.personal_APIdocumentation"><font-awesome-icon icon="fa-solid fa-arrows-down-to-line" /></div>
    </div>
    <div v-if="typeof counter.openthongtincanhan.username == 'string'" class="flex grow h-full shrink-0 sm:mr-2 cursor-pointer  mx-[6px] text-green-600 ">
      <router-link to="/" class=" flex grow justify-center items-center px-2 py-1 border-2 border-green-600 leading-normal rounded-l gap-1" v-on:click="counter.openTab();" v-bind:class="{' bg-green-600 text-white ':counter.Route.path==counter.tab_parent.home_page,'hover:text-green-500 hover:border-green-500':counter.Route.path!=counter.tab_parent.home_page}">
        <div><font-awesome-icon icon="fa-solid fa-house" /></div>
        <div class="hidden md:flex"><h1 v-if="counter.language==1">Trang chủ</h1><h1 v-if="counter.language==2">Home page</h1></div>
      </router-link>
      <router-link to="/personal" class=" flex grow justify-center items-center px-2 py-1 border-2 border-green-600   leading-normal gap-1" v-on:click="counter.openTab();"  v-bind:class="{' bg-green-600 text-white ':counter.Route.path==counter.tab_parent.personal_page_information || counter.Route.path==counter.tab_parent.personal_page_changepassword || counter.Route.path==counter.tab_parent.personal_page_accuracy || counter.Route.path==counter.tab_parent.personal_recharge,'hover:text-green-500 hover:border-green-500':counter.Route.path!=counter.tab_parent.personal_page_information && counter.Route.path!=counter.tab_parent.personal_page_changepassword && counter.Route.path!=counter.tab_parent.personal_page_accuracy && counter.Route.path!=counter.tab_parent.personal_recharge}" >
        <div><font-awesome-icon icon="fa-solid fa-user-ninja" /></div>
        <div class="hidden md:flex"><h1 v-if="counter.language==1">Trang cá nhân</h1><h1 v-if="counter.language==2">Personal page</h1></div>
      </router-link>
      <router-link to="/history" class="flex grow justify-center items-center px-2 py-1 border-2 border-green-600   leading-normal gap-1" v-on:click="counter.openTab(); counter.TransactionHistory();" v-bind:class="{' bg-green-600 text-white ':counter.Route.path==counter.tab_parent.personal_history,'hover:text-green-500 hover:border-green-500':counter.Route.path!=counter.tab_parent.personal_history}">
        <div><font-awesome-icon icon="fa-solid fa-clock-rotate-left" /></div>
        <div class="hidden md:flex"><h1 v-if="counter.language==1">Lịch sử giao dịch</h1><h1 v-if="counter.language==2">Transaction history</h1></div>
      </router-link>         
      <router-link to="/APIdocumentation" class="flex grow justify-center items-center px-2 py-1 rounded-r border-2 border-green-600   leading-normal gap-1" v-on:click="counter.openTab();"  v-bind:class="{' bg-green-600 text-white ':counter.Route.path==counter.tab_parent.personal_APIdocumentation,'hover:text-green-500 hover:border-green-500':counter.Route.path!=counter.tab_parent.personal_APIdocumentation}">
        <div><font-awesome-icon icon="fa-solid fa-file-lines" /></div>
        <div class="hidden md:flex"><h1 v-if="counter.language==1">Tài liệu API</h1><h1 v-if="counter.language==2">API documentation</h1></div>
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
    // this.counter.getStatetuLocalStorage();
  }
}
</script> 