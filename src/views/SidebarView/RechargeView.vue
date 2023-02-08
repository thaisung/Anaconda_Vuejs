<template>
    <div class=" flex flex-col grow  bg-gray-200 rounded shadow-inner items-center  text-sky-900 w-full dark:bg-transparent  dark:text-yellow-300 dark:border-2 dark:border-sky-400 ">
        <div class="flex sm:gap-5 gap-1 font-bold text-[14px] my-4" >
            <div v-for="Bank_Name in counter.bankinfor.data" class="rounded py-1 px-2 cursor-pointer " v-bind:class="{['bg-white dark:bg-slate-200 text-[16px] text-'+ Bank_Name.Main_Color]: counter.tabnaptien == Bank_Name.id}" v-on:click="counter.tabnaptien=Bank_Name.id"><h1>{{ Bank_Name.Short_Name }}</h1></div>
        </div>
        <div class="flex flex-col w-full ">
          <div v-for="Bank_Name in counter.bankinfor.data" class="flex sm:flex-row sm:justify-center sm:gap-10 flex-col w-full h-full font-bold items-center" v-show="counter.tabnaptien==Bank_Name.id">
            <div class="flex  min-w-[200px] max-w-[200px] my-5">
              <div class=" flex "><img  alt="Image" class="" :src = "counter.URLServer + Bank_Name.Avatar" /></div>
            </div>
            <div class="flex flex-col items-center">
              <div class="flex flex-col items-center  w-full text-[20px]"><h1 v-if="counter.language==1">Nạp tiền thông qua ngân hàng</h1><h1 v-if="counter.language==2">Recharge through the bank</h1><h1 :class="'ml-1 text-'+ Bank_Name.Main_Color">{{Bank_Name.Short_Name}}</h1></div>
              <div class="flex flex-col  items-center justify-center mt-3 w-full">
                <div class="flex w-full text-[15px] justify-center"><h1 v-if="counter.language==1">Nhập số tiền cần nạp :</h1><h1 v-if="counter.language==2">Enter the amount to deposit :</h1></div>
                <div class="flex w-full justify-center" ><input
                  type="number" 
                  class="w-5/6 h-[35px] bg-white dark:bg-slate-800 outline-none rounded-l  text-blue-700 dark:text-gray-300  text-center "
                  id="exampleFormControlInput1"
                  placeholder="" min="0" v-model="counter.sotiencannap" v-on:click="counter.Manaptien(Bank_Name.Short_Name);"
                /><div :class="'flex justify-center px-2 text-white items-center text-[15px] rounded-r bg-'+Bank_Name.Main_Color"><h1>VND</h1></div></div>
                <div class=" text-red-600 mt-1 text-[13px]" v-show="counter.thongbaoloinhaptien ==2"><h1>{{counter.thongbaoloiyeucaunaptien.data['Error message']}}</h1></div>
                <div v-bind:class="{['flex justify-center rounded my-4 py-1 px-2 text-[20px] text-white hover:bg-sky-500 bg-'+Bank_Name.Main_Color]:counter.tabnaptien == Bank_Name.id}" v-on:click="counter.YeucauNaptien(); counter.showbangqr=2; counter.tabmaqr=Bank_Name.id"><button><h1 v-if="counter.language==1">Thanh toán</h1><h1 v-if="counter.language==2">Pay</h1></button></div>
              </div>
            </div>
          </div>
        </div>
    </div>
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
  mounted:function(){
    this.counter.BankInfor();
    // this.counter.ThongtinNganhang();
  }
}
</script> 

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>