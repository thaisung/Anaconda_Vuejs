<template>
    <div class=" flex flex-col grow  bg-gray-200 rounded shadow-inner items-center  text-sky-900 w-full min-h-[330px]  dark:bg-transparent  dark:text-yellow-300 dark:border-2 dark:border-sky-400 ">
        <div class="flex flex-col sm:flex-row sm:gap-5 gap-1 font-bold text-[14px] mb-4 bg-gray-300 dark:bg-slate-800 shadow-inner rounded px-2 py-2 w-full justify-center" >
            <div v-for="Bank_Name in counter.bankinfor.data" class="flex rounded py-1 px-2 cursor-pointer justify-center " :style="{'color':Bank_Name.Background_Color}" v-bind:class="{'bg-white dark:bg-slate-900 text-[16px]': counter.tabnaptien == Bank_Name.id && counter.tabnaptien_CRYPTO==1}" v-on:click="counter.tabnaptien=Bank_Name.id; counter.tabnaptien_CRYPTO=1; counter.menu_CRYTOP=false; counter.BgCl= Bank_Name.Background_Color; counter.tabmaqr=Bank_Name.id;"><h1>{{ Bank_Name.Short_Name }}</h1></div>
            <div class=" flex flex-col relative items-center gap-1 rounded py-1 px-2 cursor-pointer shrink-0 " v-bind:class="{'bg-white dark:bg-slate-900 text-[16px] text-lime-700': counter.tabnaptien_CRYPTO == 2,}" v-on:click="counter.tabnaptien_CRYPTO=2">
              <div class="flex gap-1 shrink-0">
                <h1 class="shrink-0">CRYPTO</h1>
                <font-awesome-icon icon="fa-solid fa-caret-down" v-on:click="counter.menu_CRYTOP=!counter.menu_CRYTOP" class=" flex text-[22px] items-center bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-400  px-1 rounded shadow-inner" />
                <div class="flex gap-1 w-full  justify-start pl-0.5 pr-1 items-center text-[14px]">
                  <img :src="counter.URLServer + counter.infor_CRYPTO.Avatar_Logo" class="w-[20px] h-[20px]"/>
                  <h1>- {{ counter.infor_CRYPTO.Short_Name }} -</h1>
                  <h1>{{ counter.infor_CRYPTO.Crytop_Name }}</h1>
                </div>
              </div> 
              <div v-show="counter.menu_CRYTOP" class="flex flex-col gap-2 text-[13px] w-full items-center absolute top-[38px] bg-white dark:bg-slate-800 rounded py-2">
                <div v-for="cr in counter.cryptoinfor" v-on:click="counter.menu_CRYTOP=!counter.menu_CRYTOP; counter.infor_CRYPTO=cr" class="flex gap-1 hover:bg-gray-200 dark:hover:bg-slate-300 w-full  justify-start px-2 items-center text-[14px]">
                  <img :src="counter.URLServer + cr.Avatar_Logo" class="w-[20px] h-[20px]"/>
                  <h1>- {{ cr.Short_Name }} -</h1>
                  <h1>{{ cr.Crytop_Name }}</h1>
                </div>
              </div>
            </div>
        </div>
        <div class="flex flex-col grow w-full h-full ">
          <div v-for="Bank_NameS in counter.bankinfor.data" class="flex sm:flex-row sm:justify-center sm:gap-10 flex-col w-full h-full font-bold items-center" v-show="counter.tabnaptien==Bank_NameS.id && counter.tabnaptien_CRYPTO==1">
            <div class="flex  min-w-[200px] max-w-[200px] my-5">
              <div class=" flex "><img  alt="Image" class="" :src = "counter.URLServer + Bank_NameS.Avatar" /></div>
            </div>
            <div class="flex flex-col items-center">
              <div class="flex flex-col items-center  w-full text-[20px]"><h1 v-if="counter.language==1">Nạp tiền thông qua ngân hàng</h1><h1 v-if="counter.language==2">Recharge through the bank</h1><h1 class='ml-1' :style="{'color':Bank_NameS.Background_Color}">{{Bank_NameS.Short_Name}}</h1></div>
              <div class="flex flex-col  items-center justify-center mt-3 w-full">
                <div class="flex w-full text-[15px] justify-center"><h1 v-if="counter.language==1">Nhập số tiền cần nạp :</h1><h1 v-if="counter.language==2">Enter the amount to deposit :</h1></div>
                <div class="flex w-full justify-center" ><input
                  type="number" 
                  class="w-5/6 h-[35px] bg-white dark:bg-slate-800 outline-none rounded-l  text-blue-700 dark:text-gray-300  text-center "
                  id="exampleFormControlInput1"
                  placeholder="" min="0" v-model="counter.sotiencannap" v-on:click="counter.Manaptien(Bank_NameS.Short_Name);"/>
                <div :style="'background-color:' + Bank_NameS.Background_Color" class="flex justify-center px-2 text-white items-center text-[15px] rounded-r"><h1>VND</h1></div></div>
                <div class=" text-red-600 mt-1 text-[13px]" v-show="counter.thongbaoloinhaptien ==2">
                  <h1 v-if="counter.language==1">{{counter.thongbaoloiyeucaunaptien.data['Error message']}}</h1>
                  <h1 v-if="counter.language==2">{{counter.thongbaoloiyeucaunaptien.data['Error message English']}}</h1>
                </div>
                <div :style="{'background-color':counter.BgCl}"  @mouseover="counter.BgCl='#0ea5e9'" @mouseout="counter.BgCl=Bank_NameS.Background_Color" class='flex justify-center rounded my-4 py-1 px-2 text-[20px] text-white' v-on:click="counter.YeucauNaptien(); counter.showbangqr=2; counter.tabmaqr=Bank_Name.id;"><button v-on:click="add();"><h1 v-if="counter.language==1">Thanh toán</h1><h1 v-if="counter.language==2">Pay</h1></button></div>
              </div>
            </div>
          </div>
          <div v-for="crs in counter.cryptoinfor " v-show="counter.tabnaptien_CRYPTO==2 && crs.Crytop_Name == counter.infor_CRYPTO.Crytop_Name" class="flex flex-col grow w-full h-full justify-center items-center my-5">
            <h1 v-if="counter.language==1" class="mt-3 font-bold text-[20px]">Mã QR</h1>
            <h1 v-if="counter.language==2" class="mt-3 font-bold text-[20px]">COde QR</h1>
            <img :src="counter.URLServer + crs.Avatar_QR_Code" class="w-[150px] h-[150px] mt-2" />
            <h1 v-if="counter.language==1" class="mt-3 font-bold text-[20px]">Đại chỉ ví:</h1>
            <h1 v-if="counter.language==2" class="mt-3 font-bold text-[20px]">Wallet address:</h1>
            <h1>{{ crs.Wallet_Address }}</h1>
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
      isHovering: false,
    }
  },
  methods:{
    add() {document.body.classList.add('overflow-hidden')},
    remove() {document.body.classList.remove('overflow-hidden')},
    scrollBehavior(){window.scrollTo(0,0);},
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
  /* áp dụng class */
  .hover:hover{
    color:red;
  }
  /* áp dụng id */
  #tgh:hover{
    color: yellow;
    background-color: #000;
  }
  /* body {
   overflow: hidden;
  } */
</style>