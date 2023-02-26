<template>
    <div v-if="typeof counter.openthongtincanhan.username == 'string'" class="flex lg:flex-col h-[43px]   text-sky-900 dark:text-sky-400 dark:bg-slate-900 rounded shadow-inner  text-[16px] justify-center lg:justify-start font-medium md:min-w-[220px] ">
        <router-link to="/personal/information" class="flex grow lg:grow-0 justify-center lg:justify-start items-center gap-1 px-2 py-3 rounded-l lg:rounded-l-none lg:rounded-t  border-2 border-sky-900 dark:border-sky-400 " v-on:click="counter.openTabpersonal();" v-bind:class="{'bg-sky-900 text-white dark:bg-sky-400 dark:text-slate-900': counter.Route.path==counter.tab_parent.personal_page_information}" >
            <div><font-awesome-icon icon="fa-solid fa-id-badge" class="text-[17px]"/></div>
            <div class="hidden md:flex"><h1 v-if="counter.language==1">Thông tin cá nhân</h1><h1 v-if="counter.language==2">Personal information</h1></div>
        </router-link>
        <router-link to="/personal/accuracy" class="flex grow lg:grow-0 justify-center lg:justify-start items-center  gap-1 px-2 py-3 border-2 border-sky-900 dark:border-sky-400"  v-bind:class="{'bg-sky-900 text-white dark:bg-sky-400 dark:text-slate-900 ': counter.Route.path==counter.tab_parent.personal_page_accuracy}" v-on:click="counter.openTabpersonal();">
            <div><font-awesome-icon icon="fa-solid fa-user-secret" class="text-[17px]"/></div>
            <div class="hidden md:flex"><h1 v-if="counter.language==1">Xác thực bảo mật 2 lớp</h1><h1 v-if="counter.language==2">2-factor authentication</h1></div>
        </router-link>
        <router-link to="/personal/changepassword" class="flex grow lg:grow-0 justify-center lg:justify-start items-center gap-1 px-3 py-2 border-2 border-sky-900 dark:border-sky-400"  v-bind:class="{'bg-sky-900 text-white dark:bg-sky-400 dark:text-slate-900': counter.Route.path==counter.tab_parent.personal_page_changepassword}" v-on:click="counter.openTabpersonal();">
            <div><font-awesome-icon icon="fa-solid fa-key" class="text-[17px]"/></div>
            <div class="hidden md:flex"><h1 v-if="counter.language==1">Đổi mật khẩu</h1><h1 v-if="counter.language==2">Change Password</h1></div>
        </router-link>
        <router-link to="/personal/recharge" class="flex grow lg:grow-0 justify-center lg:justify-start items-center gap-1 px-2 py-3  rounded-r  lg:rounded-r-none lg:rounded-b border-2 border-sky-900 dark:border-sky-400"  v-bind:class="{'bg-sky-900 text-white dark:bg-sky-400 dark:text-slate-900': counter.Route.path==counter.tab_parent.personal_recharge}" v-on:click="counter.openTabpersonal();">
            <div><font-awesome-icon icon="fa-solid fa-credit-card" class="text-[17px]"/></div>
            <div class="hidden md:flex"><h1 v-if="counter.language==1">Nạp tiền</h1><h1 v-if="counter.language==2">Recharge</h1></div>
        </router-link>
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
    },
  }
  </script> 