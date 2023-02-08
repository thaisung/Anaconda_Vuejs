<template>
    <div v-if="typeof counter.openthongtincanhan.username == 'string'" class="flex  sm:flex-col   text-sky-900 dark:text-sky-400 dark:bg-slate-900 rounded shadow-inner  text-[16px] justify-center sm:justify-start  font-medium md:min-w-[220px]">
        <router-link to="/personal/information">
            <div class="flex gap-1 px-2 py-2 rounded-l sm:rounded-l-none sm:rounded-t  border-2 border-sky-900 dark:border-sky-400 " v-on:click="counter.openTabpersonal(1); counter.setStatevaoLocalStorage1();" v-bind:class="{'bg-sky-900 text-white dark:bg-sky-400 dark:text-slate-900': counter.opentabpersonal == 1}" >
                <div><font-awesome-icon icon="fa-solid fa-id-badge" class="text-[17px]"/></div>
                <div class="hidden md:flex"><h1 v-if="counter.language==1">Thông tin cá nhân</h1><h1 v-if="counter.language==2">Personal information</h1></div>
            </div>
        </router-link>
        <router-link to="/personal/accuracy">
            <div class="flex  gap-1 px-2 py-2 border-2 border-sky-900 dark:border-sky-400"  v-bind:class="{'bg-sky-900 text-white dark:bg-sky-400 dark:text-slate-900 ': counter.opentabpersonal == 2}" v-on:click="counter.openTabpersonal(2); counter.setStatevaoLocalStorage1();">
                <div><font-awesome-icon icon="fa-solid fa-user-secret" class="text-[17px]"/></div>
                <div class="hidden md:flex"><h1 v-if="counter.language==1">Xác thực bảo mật 2 lớp</h1><h1 v-if="counter.language==2">2-factor authentication</h1></div>
            </div>
        </router-link>
        <router-link to="/personal/changepassword">
            <div class="flex gap-1 px-2 py-2 border-2 border-sky-900 dark:border-sky-400"  v-bind:class="{'bg-sky-900 text-white dark:bg-sky-400 dark:text-slate-900': counter.opentabpersonal == 3}" v-on:click="counter.openTabpersonal(3); counter.setStatevaoLocalStorage1();">
                <div><font-awesome-icon icon="fa-solid fa-key" class="text-[17px]"/></div>
                <div class="hidden md:flex"><h1 v-if="counter.language==1">Đổi mật khẩu</h1><h1 v-if="counter.language==2">Change Password</h1></div>
            </div>
        </router-link>
        <router-link to="/personal/recharge">
            <div class="flex gap-1 px-2 py-2  rounded-r  sm:rounded-r-none sm:rounded-b border-2 border-sky-900 dark:border-sky-400"  v-bind:class="{'bg-sky-900 text-white dark:bg-sky-400 dark:text-slate-900': counter.opentabpersonal == 4}" v-on:click="counter.openTabpersonal(4); counter.setStatevaoLocalStorage1();">
                <div><font-awesome-icon icon="fa-solid fa-credit-card" class="text-[17px]"/></div>
                <div class="hidden md:flex"><h1 v-if="counter.language==1">Nạp tiền</h1><h1 v-if="counter.language==2">Recharge</h1></div>
            </div>
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