<template>
    <div v-if="typeof counter.openthongtincanhan.username == 'string'" class=" flex flex-col scroll-ml-6 snap-start  items-center gap-5 justify-center bg-gray-200 rounded shadow-inner   text-sky-900 dark:text-sky-400 dark:bg-slate-900 dark:border-sky-400 dark:border-2 w-full ">
        <div class="text-[25px] font-bold mt-2"><h1 v-if="counter.language==1">Đổi mật khẩu</h1><h1 v-if="counter.language==2">Change Password</h1></div>
        <div class="flex flex-col  w-[350px] sm:w-[700px]">
            <div class="flex gap-1 py-3 border-b-2 border-sky-900 dark:border-slate-800">
                <div class="w-[238px]"><h1 class="w-full" v-if="counter.language==1">Tài khoản:</h1><h1 class="w-full" v-if="counter.language==2">Account:</h1></div>
                <div class="w-full text-center"><h1>{{counter.openthongtincanhan.username}}</h1></div>
            </div>
            <div class="flex gap-1 py-3 items-center border-b-2 border-sky-900 dark:border-slate-800">
                <div>
                    <div class="w-[180px]"><h1 class="" v-if="counter.language==1">Mật khẩu hiện tại:</h1><h1 class="" v-if="counter.language==2">Current password:</h1></div>
                </div>
                <div class="flex justify-center w-full "><input
                    type="password"
                    class="w-full text-center px-3 py-1.5  bg-white dark:bg-slate-800 outline-none  rounded  text-blue-700 dark:text-gray-300"
                    id="exampleFormControlInput1"
                    placeholder="Nhập mật khẩu hiện tại " v-model="counter.matkhaucu"
                /></div>
            </div>
            <div class="flex gap-1 py-3 items-center border-b-2 border-sky-900 dark:border-slate-800">
                <div class="flex flex-col">
                    <div class="w-[180px]"><h1 v-if="counter.language==1">Mật khẩu mới:</h1><h1 v-if="counter.language==2">A new password:</h1></div>
                </div>
                <div class="flex justify-center w-full "><input
                    type="password"
                    class="w-full text-center px-3 py-1.5  bg-white dark:bg-slate-800 outline-none  rounded dark:text-gray-300 text-blue-700"
                    id="exampleFormControlInput1"
                    placeholder="Nhập mật khẩu mới" v-model="counter.matkhaumoi"
                /></div>
            </div>
            <div class="flex gap-1 py-3 items-center border-b-2 border-sky-900 dark:border-slate-800">
                <div class="flex flex-col">
                    <div class="w-[180px]"><h1 v-if="counter.language==1">Nhập lại mật khẩu mới:</h1><h1 v-if="counter.language==2">Confirm new password:</h1></div>
                </div>
                <div class="flex justify-center w-full "><input
                    type="password"
                    class="w-full text-center px-3 py-1.5  bg-white dark:bg-slate-800 outline-none  rounded dark:text-gray-300 text-blue-700"
                    id="exampleFormControlInput1"
                    placeholder="Nhập lại mật khẩu mới" v-model="counter.nhaplaimatkhaumoi"
                /></div>
            </div>
            <div v-show="counter.thongbaodoimatkhauthanhcong.so == 1 && counter.language ==1" class="flex items-center  text-lime-600 text-[18px] py-2"><h1>{{ counter.thongbaodoimatkhauthanhcong.thongbao }}</h1></div>
            <div v-show="counter.thongbaodoimatkhauthanhcong.so == 1 && counter.language ==2" class="flex items-center  text-lime-600 text-[18px] py-2"><h1>{{ counter.thongbaodoimatkhauthanhcong.thongbaoenglish }}</h1></div>
            <div v-show="counter.thongbaodoimatkhauthanhcong.so == 2 && counter.language ==1" class="flex items-center  text-red-600 text-[14px]  py-2"><h1>{{ counter.thongbaodoimatkhauthanhcong.thongbao }}</h1></div>
            <div v-show="counter.thongbaodoimatkhauthanhcong.so == 2 && counter.language ==2" class="flex items-center  text-red-600 text-[14px]  py-2"><h1>{{ counter.thongbaodoimatkhauthanhcong.thongbaoenglish }}</h1></div>
            <div v-show="counter.showcaptcha.so == 2" class="pt-3"  id="g-recaptcha2" data-callback="recaptchaCallback"   style="transform: scale(0.9); -webkit-transform: scale(0.9); transform-origin: 0 0; -webkit-transform-origin: 0 0;" v-bind:data-theme="{'light':counter.openMoon==1,'dark':counter.openMoon==2}"  data-sitekey="6LfaruMjAAAAALdEG9aH6Q2qIvlqHeotuCWe2dJs"></div>
            <div v-show="counter.thongbaoloixacthuccaptcha.so == 2 && counter.language ==1"  class="text-[14px] text-red-600 "><h1>{{ counter.thongbaoloixacthuccaptcha.thongbao }}</h1></div>
            <div v-show="counter.thongbaoloixacthuccaptcha.so == 2 && counter.language ==2"  class="text-[14px] text-red-600 "><h1>{{ counter.thongbaoloixacthuccaptcha.thongbaoenglish }}</h1></div>
            <div class="flex gap-1 py-3">
                <button v-show="counter.showcaptcha.so==1" v-on:click="rendercaptchadoimatkhau(); counter.showcaptcha.so=2;" class="bg-sky-900 dark:bg-sky-400 text-white dark:text-slate-900 rounded px-2 py-1 hover:bg-sky-800 hover:dark:bg-sky-300 font-semibold"><h1 v-if="counter.language==1">Đổi mật khẩu</h1><h1 v-if="counter.language==2">Change Password</h1></button>
                <button v-show="counter.showcaptcha.so==2" v-on:click="counter.doimatkhaumoi();" class="bg-sky-900 dark:bg-sky-400 text-white dark:text-slate-900 rounded px-2 py-1 hover:bg-sky-800 hover:dark:bg-sky-300 font-semibold"><h1 v-if="counter.language==1">Đổi mật khẩu</h1><h1 v-if="counter.language==2">Change Password</h1></button>
            </div>
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
  methods:{
    rendercaptchadoimatkhau(){
      try{this.counter.rctc2 = grecaptcha.render('g-recaptcha2', {
        'sitekey' : '6LfaruMjAAAAALdEG9aH6Q2qIvlqHeotuCWe2dJs'
      });}
      catch{
        this.counter.showcaptcha={so:2,nut:'cursor-not-allowed'};
        grecaptcha.reset(this.counter.rctc2);
      } 
    },
    resetct(){
      grecaptcha.reset(this.counter.rctc2);
    }
  },
}
</script> 