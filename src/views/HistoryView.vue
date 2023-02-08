<template>
    <div v-if="typeof counter.openthongtincanhan.username == 'string'" class="bg-white dark:bg-slate-900 rounded px-2 py-2 drop-shadow-md text-sky-900 dark:text-sky-400 font-medium">
        <div class="flex flex-col bg-gray-200 dark:bg-slate-800 w-full  shadow-inner rounded">
            <div class="bg-sky-900 dark:bg-slate-800 border-white dark:border-slate-900 border-b-2 py-2 gap-2 rounded-t flex flex-col  items-center px-2 justify-between md:flex-row">
                <div class="flex bg-white dark:bg-slate-900 items-center rounded h-[40px] w-full md:w-[320px] px-1 py-1  ">
                    <div class="px-2"><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-sky-900 text-[16px]"/></div>
                    <div class="grow"><input class="rounded outline-none w-full dark:bg-slate-900 dark:text-gray-200" placeholder="Mã hóa đơn" v-model="counter.seachcode"/></div>
                    <div v-on:click="counter.TransactionHistory();"><button class="bg-gray-600 hover:bg-gray-500 rounded text-white px-2 py-1 text-[15px]"><h1 v-if="counter.language==1">Tìm kiếm</h1><h1 v-if="counter.language==2">Seach</h1></button></div>
                </div>
                <div class="text-white flex gap-3 items-center justify-center">
                    <div class="flex justify-center items-center cursor-pointer" v-on:click="if(counter.pagehistory>1){counter.pagehistory-=1}; counter.sttlsgd=1; counter.TransactionHistory(); "><font-awesome-icon icon="fa-solid fa-caret-left" class="bg-gray-200 hover:dark:bg-white rounded   text-sky-900 px-2 py-1 text-[20px]" /></div>
                    <div class="rounded border-white border-2  px-2 flex justify-center items-center text-[16px]"><input v-model="counter.pagehistory" class="bg-sky-900 dark:bg-slate-800 w-[20px] text-center pointer-events-none select-none" /></div>
                    <div class="flex justify-center items-center cursor-pointer" v-on:click="counter.pagehistory+=1; counter.sttlsgd=1; counter.TransactionHistory(); "><font-awesome-icon icon="fa-solid fa-caret-right" class="bg-gray-200 hover:dark:bg-white rounded   text-sky-900 px-2 py-1 text-[20px]" /></div>
                </div>
            </div>
            <div class="grid grid-cols-7  justify-items-center py-4 font-bold text-[18px] border-b-2 border-sky-900 dark:border-slate-900 bg-sky-900 dark:bg-slate-800 text-white ">
                <div class="flex items-center col-span-2 lg:col-span-1 "><h1 v-if="counter.language==1">STT</h1><h1 v-if="counter.language==2">Number</h1></div>
                <div class="col-span-2 items-center hidden lg:flex"><h1 v-if="counter.language==1">Mã đơn hàng</h1><h1 v-if="counter.language==2">Code orders</h1></div>
                <div class="col-span-2 items-center hidden lg:flex"><h1 v-if="counter.language==1">Thời gian</h1><h1 v-if="counter.language==2">Time</h1></div>
                <div class="flex items-center col-span-3 lg:col-span-1 "><h1 v-if="counter.language==1">Số tiền</h1><h1 v-if="counter.language==2">Amount of money</h1></div>
                <div class="col-span-2 lg:col-span-1 "><h1 v-if="counter.language==1">Chi tiết</h1><h1 v-if="counter.language==2">Detail</h1></div>
            </div>
            <div class="flex flex-col divide-y-2 divide-white dark:divide-slate-900">
                <div v-for="(dh,index) in counter.dulieulichsugiaodich.data.Data" class="grid grid-cols-7 justify-items-center py-2 ">
                    <div class="flex items-center col-span-2 lg:col-span-1 "><h1>{{ index+=1 }}</h1></div>
                    <div class="col-span-4 sm:col-span-2  items-center hidden lg:flex"><h1>{{ dh.Code_Orders }}</h1></div>
                    <div class="col-span-2 sm:col-span-2  items-center hidden lg:flex"><h1>{{ dh.Transaction_Time }}</h1></div>
                    <div class="items-center col-span-3 lg:col-span-1"><h1>{{ dh.Payment_Amount }}</h1></div>
                    <div class="flex items-center col-span-2 lg:col-span-1" v-on:click="counter.showbangchitietdonhang = dh.id; counter.CodeOderHistory=dh.Code_Orders; counter.prehistory='myPrehistory'+dh.id"><button  class="bg-sky-900 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-900 rounded px-2 py-1 hover:bg-sky-800"><h1 v-if="counter.language==1">Chi tiết</h1><h1 v-if="counter.language==2">Detail</h1></button></div>
                </div>
            </div>
        </div>
    </div>

    <!-- V.Bảng chi tiết sản phẩm  -->
    <div v-for="dh in counter.dulieulichsugiaodich.data.Data" v-show="counter.showbangchitietdonhang == dh.id" v-on:click="counter.showbangchitietdonhang = null" class=" fixed  inset-0 z-40 dark:bg-gray-300 bg-black cursor-pointer opacity-60 dark:opacity-30"></div>
    <div v-for="dh in counter.dulieulichsugiaodich.data.Data" v-show="counter.showbangchitietdonhang == dh.id && dh['Code_Orders'].length > 15" class="fixed inset-0 z-50 flex flex-col justify-between rounded w-[350px] sm:w-[600px] h-[500px] bg-white dark:bg-slate-900 mx-auto my-auto px-2 py-2 shadow-sm">
        <div class="flex bg-gray-200 dark:bg-slate-800 rounded shadow-inner justify-center py-2 text-[25px] text-sky-600 font-bold"><h1>Chi tiết đơn hàng</h1></div>
        <div class="flex flex-col gap-1 text-[15px] font-medium w-full h-full mt-3 dark:text-gray-200">
            <div class="flex gap-1 justify-center">
                <div><h1 v-if="counter.language==1">Sản phẩm :</h1><h1 v-if="counter.language==2">Product :</h1></div>
                <div><h1>{{ dh.Content }}</h1></div>
            </div>
            <div  class="flex gap-1 justify-center">
                <div><h1 v-if="counter.language==1">Số lượng :</h1><h1 v-if="counter.language==2">Quantity :</h1></div>
                <div><h1>{{dh['Buy_Data'].split('\r\n').length -1  }}</h1></div>
            </div>
            <div  class="flex gap-1 justify-center">
                <div><h1 v-if="counter.language==1">Thành tiền :</h1><h1 v-if="counter.language==2">Into money :</h1></div>
                <div><h1>{{ dh['Payment_Amount'] }}</h1></div>
            </div>
            <div  class="flex gap-1 justify-center">
                <div><h1 v-if="counter.language==1">Mã đơn hàng :</h1><h1 v-if="counter.language==2">Code orders :</h1></div>
                <div><h1>{{ dh['Code_Orders'] }}</h1></div>
            </div>
            <div  class="flex gap-1 justify-center  mb-2 w-full h-full mt-2"><pre  :id="'myPrehistory'+dh.id" class="  font-medium border-2 border-sky-600 rounded w-full h-full resize-none  overflow-auto px-1 py-1"><h1 >{{ dh['Buy_Data'] }}</h1></pre></div>
        </div>
        <div class="flex justify-center gap-2  font-medium shadow-inner py-2 rounded items-center">
            <div class="flex justify-center items-center bg-sky-600 rounded w-[100px] h-[30px] dark:hover:bg-sky-500"  v-on:click="counter.DownloadFileTxt1();"><button class=" text-white">Tải file (.txt)</button></div>
            <div v-on:click=" counter.Copythanhcong(); CopyPrehistory();" class="flex justify-center items-center bg-sky-600 rounded w-[50px] h-[30px]  dark:hover:bg-sky-500"><button class=""><font-awesome-icon icon="fa-solid fa-copy" class="text-white text-[20px]" v-show="counter.copythanhcong==1"/>
            <font-awesome-icon icon="fa-solid fa-check" v-show="counter.copythanhcong==2" class="text-white text-[20px]"/></button></div>
        </div>
    </div>

    <div v-for="dh in counter.dulieulichsugiaodich.data.Data" v-show="counter.showbangchitietdonhang == dh.id && dh['Code_Orders'].length < 15" class="fixed inset-0 z-50 flex flex-col justify-between rounded w-[350px] sm:w-[600px] h-[200px] bg-white dark:bg-slate-900 mx-auto my-auto px-2 py-2 shadow-sm">
        <div class="flex bg-gray-200 dark:bg-slate-800 rounded shadow-inner justify-center py-2 text-[25px] text-sky-600 font-bold"><h1 v-if="counter.language==1">Chi tiết đơn hàng</h1><h1 v-if="counter.language==2">Order details</h1></div>
        <div class="flex flex-col gap-1 text-[20px] font-medium w-full h-full mt-2  dark:bg-transparent dark:text-gray-200 shadow-inner rounded justify-center items-center ">
            <div class="flex gap-1 justify-center mt-2">
                <div><h1 v-if="counter.language==1">Nội dung :</h1><h1 v-if="counter.language==2">Content :</h1></div>
                <div><h1 v-if="counter.language==1">Nạp tiền</h1><h1 v-if="counter.language==2">Recharge</h1></div>
            </div>
            <div  class="flex gap-1 justify-center">
                <div><h1 v-if="counter.language==1">Thành tiền :</h1><h1 v-if="counter.language==2">Into money :</h1></div>
                <div><h1>{{ dh['Payment_Amount'] }}</h1></div>
            </div>
            <div  class="flex gap-1 justify-center">
                <div><h1 v-if="counter.language==1">Mã đơn hàng :</h1><h1 v-if="counter.language==2">Code orders :</h1></div>
                <div><h1>{{ dh['Code_Orders'] }}</h1></div>
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
    CopyPrehistory() {
      let codeTexthistory = document.getElementById(this.counter.prehistory).textContent;
    // copying
      navigator.clipboard.writeText(codeTexthistory)
    }
    },
    mounted:function(){
       this.counter.getStatetuLocalStorage();
    // this.counter.refreshData();
    // this.counter.ThongtinNganhang();
    }
}
</script> 