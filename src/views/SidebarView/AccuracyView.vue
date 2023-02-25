<template>
    <div v-if="typeof counter.openthongtincanhan.username == 'string'" class=" flex flex-col grow justify-start scroll-ml-6 snap-start px-2 py-3  items-center gap-5  bg-gray-200 rounded shadow-inner   text-sky-900 dark:text-sky-400 dark:bg-slate-900 dark:border-sky-400 dark:border-2 w-full h-full">
      <div class="flex font-semibold">
        <div class="border-2 px-3 py-2 rounded-l-lg border-sky-900 cursor-pointer" v-bind:class="{'bg-sky-900 text-white':counter.openthongtincanhan.Two_factor_authentication=='ON'}" v-on:click="counter.ON_OFF='ON'; counter.on_off_2_factor_authentication();"><h1 v-if="counter.language==1">BẬT</h1><h1 v-if="counter.language==2">TURN ON</h1></div>
        <div class="border-2 px-3 py-2 rounded-r-lg border-sky-900 cursor-pointer" v-bind:class="{'bg-sky-900 text-white':counter.openthongtincanhan.Two_factor_authentication=='OFF'}" v-on:click="counter.ON_OFF='OFF'; counter.on_off_2_factor_authentication();"><h1 v-if="counter.language==1">TẮT</h1><h1 v-if="counter.language==2">TURN OFF</h1></div>
      </div>
      <div>
        <div v-if="counter.openthongtincanhan.Two_factor_authentication=='ON'" class="flex justify-center items-center gap-2 font-semibold text-[18px]"><h1 class="bg-sky-900 h-[2px] w-[30px]"></h1><h1 v-if="counter.language==1">Đã bật xác thực bảo mật 2 lớp</h1><h1 v-if="counter.language==2">2-factor authentication enabled</h1><h1 class="bg-sky-900 h-[2px] w-[30px]"></h1></div>
        <div v-if="counter.openthongtincanhan.Two_factor_authentication=='OFF'" class="flex justify-center items-center gap-2 font-semibold text-[18px]"><h1 class="bg-sky-900 h-[2px] w-[30px]"></h1><h1 v-if="counter.language==1">Đã tắt xác thực bảo mật 2 lớp</h1><h1 v-if="counter.language==2">2-factor authentication disabled</h1><h1 class="bg-sky-900 h-[2px] w-[30px]"></h1></div>
      </div>
      <div class="text-justify">
        <h1 v-if="counter.language==1">Sau khi bật chức năng xác thực bảo mật 2 lớp, quý khách đăng nhập như bình thường,sau đó quý khách sẽ nhận được mật khẩu cấp 2 được gửi về Email đã đăng kí.Tiếp theo nhập mật khẩu cấp 2 để hoàn tất việc đăng nhập.</h1>
        <h1 v-if="counter.language==2">After turning on the 2-factor authentication function, you log in as usual, then you will receive a level 2 password sent to your registered email. Next enter the level 2 password to complete the process. log in.</h1>
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