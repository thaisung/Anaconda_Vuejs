<template>
    <div class="flex rounded bg-white dark:bg-slate-900   drop-shadow-md  px-2 py-2 gap-2 shadow-inner ">
        <div class="hidden lg:flex lg:flex-col font-semibold shadow-inner  text-gray-800 dark:text-sky-400 bg-gray-100 dark:bg-slate-800 px-2  py-2 gap-2 rounded text-[16px] cursor-pointer min-w-[200px] max-w-[200px]">
            <div class="py-1 font-bold border-b-2 border-gray-300 dark:border-sky-600" ><h1 v-if="counter.language==1">TÀI LIỆU API</h1><h1 v-if="counter.language==2">APIS DOCUMENTATION</h1></div>
            <div class="py-1 px-2" v-bind:class="{'bg-sky-200 dark:bg-slate-600 dark:text-gray-200 rounded  text-sky-600':counter.tabapi==2}" v-on:click="counter.tabapi=2"><h1 v-if="counter.language==1">Kiểu dữ liệu</h1><h1 v-if="counter.language==2">Data type</h1></div>
            <div class="py-1 px-2" v-bind:class="{'bg-sky-200 dark:bg-slate-600 dark:text-gray-200 rounded  text-sky-600':counter.tabapi==3}" v-on:click="counter.tabapi=3"><h1 v-if="counter.language==1">Kiểm tra số dư</h1><h1 v-if="counter.language==2">Check balance</h1></div>
            <div class="py-1 px-2" v-bind:class="{'bg-sky-200 dark:bg-slate-600 dark:text-gray-200 rounded  text-sky-600':counter.tabapi==4}" v-on:click="counter.tabapi=4"><h1 v-if="counter.language==1">Mua dữ liệu</h1><h1 v-if="counter.language==2">Buy data</h1></div>
        </div>
        <div class="bg-gray-100 dark:bg-slate-800 rounded w-full shadow-inner font-medium px-2 py-2 select-text dark:text-sky-400 ">
            <!-- <div v-if="counter.tabapi == 1"><h1 v-if="counter.language==1">Tài liệu API</h1><h1 v-if="counter.language==2">API Documentation</h1></div> -->
            <div v-if="counter.tabapi == 2" class="flex flex-col gap-3 max-w-[960px]">
                <div class="text-[25px] font-bold"><h1 v-if="counter.language==1">Kiểu dữ liệu</h1><h1 v-if="counter.language==2">Data type</h1></div>
                <div class="flex flex-col gap-2 ">
                    <div class="font-bold text-[20px]"><h1>API</h1></div>
                    <div class="flex flex-col gap-1">
                        <div class="text-[18px] font-semibold"><h1 v-if="counter.language==1">1.Tra cứu danh mục</h1><h1 v-if="counter.language==2">1.Catalog lookup</h1></div>
                        <div class="flex gap-2 border-l-4 border-gray-400 px-1 overflow-x-auto lg:mx-6 "><h1>GET</h1><pre class="bg-gray-200 dark:bg-slate-700 px-2 rounded ">{{ counter.URLServer+'/api.check_list_category'}}</pre></div>
                        <div class="flex flex-col gap-2 bg-gray-200 dark:bg-slate-700 px-2 py-2 rounded overflow-x-auto lg:mx-6">
                            <div class="text-gray-600 dark:text-sky-200"><h1>Reponse</h1></div>
                            <div class="flex gap-2"><pre class="">[{"id":1,"Name":"Facebook"},{"id":2,"Name":"Hotmail"},{"id":3,"Name":"Yahoo"},{"id":4,"Name":"Garena"},{"id":5,"Name":"Intagram"},{"id":6,"Name":"Tiktok"}]</pre></div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="text-[18px] font-semibold"><h1 v-if="counter.language==1">2.Tra cứu sản phẩm trong danh mục</h1><h1 v-if="counter.language==2">2.Look up products in the catalog</h1></div>
                        <div class="flex gap-2 border-l-4 border-gray-400 px-1 overflow-x-auto lg:mx-6"><h1>GET</h1><pre class="bg-gray-200 dark:bg-slate-700 px-2 rounded ">{{ counter.URLServer+'/api.check_list_product?id_category=<ID_CATEGORY>' }}</pre></div>
                        <div class="flex flex-col gap-2 bg-gray-200 dark:bg-slate-700 px-2 py-2 rounded overflow-x-auto lg:mx-6">
                            <div class="text-gray-600 dark:text-sky-300"><h1>Reponse</h1></div>
                            <div class="flex gap-2"><pre class="">[{"id":2,"Name":"Hotmail 1","Price":2000,"Quantity":5},{"id":7,"Name":"gt","Price":100,"Quantity":4},{"id":8,"Name":"gt1","Price":100,"Quantity":0}]</pre></div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="text-[18px] font-semibold"><h1 v-if="counter.language==1">3.Tra cứu sản phẩm </h1><h1 v-if="counter.language==2">3.Look up products</h1></div>
                        <div class="flex gap-2 border-l-4 border-gray-400 px-1 overflow-x-auto lg:mx-6"><h1>GET</h1><pre class="bg-gray-200 dark:bg-slate-700 px-2 rounded ">{{ counter.URLServer+'/api.check_list_product_one?id_category=<ID_CATEGORY>&id_product=<ID_PRODUCT>' }}</pre></div>
                        <div class="flex flex-col gap-2 bg-gray-200 dark:bg-slate-700 px-2 py-2 rounded overflow-x-auto lg:mx-6">
                            <div class="text-gray-600 dark:text-sky-300"><h1>Reponse</h1></div>
                            <div class="flex gap-2"><pre class="">{"id":2,"Name":"Hotmail 1","Price":2000,"Quantity":5}</pre></div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="counter.tabapi == 3" class="flex flex-col gap-3 max-w-[960px]">
                <div class="text-[25px] font-bold"><h1 v-if="counter.language==1">Kiểm tra số dư tài khoản</h1><h1 v-if="counter.language==2">Checking account balance</h1></div>
                <div class="flex flex-col gap-2 ">
                    <div class="font-bold text-[20px]"><h1>API</h1></div>
                    <div class="flex gap-2 border-l-4 border-gray-400 px-1 overflow-x-auto lg:mx-6"><h1>GET</h1><pre class="bg-gray-200 dark:bg-slate-700 px-2 rounded ">{{ counter.URLServer+'/api.check_money_user?username=<USERNAME>&token=<YOUR_TOKEN>' }}</pre></div>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="font-bold text-[20px]"><h1 v-if="counter.language==1">Ví dụ</h1><h1 v-if="counter.language==2">Example</h1></div>
                    <div class="flex flex-col gap-2 bg-gray-200 dark:bg-slate-700 px-2 py-2 rounded overflow-x-auto lg:mx-6">
                        <div class="text-gray-600 dark:text-sky-300"><h1>Request</h1></div>
                        <div class="flex gap-2"><h1>GET</h1><pre class="">{{counter.URLServer+'/api.check_money_user?username=ban&token=2914a37d451b5fa14577f75e1d26033a39a87d925424725a3782639d5fef7d33'}}</pre></div>
                    </div>
                    <div class="flex flex-col gap-2 bg-gray-200 dark:bg-slate-700 px-2 py-2 rounded overflow-x-auto lg:mx-6">
                        <div class="text-gray-600 dark:text-sky-300"><h1>Reponse</h1></div>
                        <div class="flex gap-2"><pre class="">{"username": "ban","Money": 376100}</pre></div>
                    </div>
                </div>
            </div>
            <div v-if="counter.tabapi == 4" class="flex flex-col gap-3 max-w-[960px]">
                <div class="text-[25px] font-bold"><h1 v-if="counter.language==1">Mua dữ liệu</h1><h1 v-if="counter.language==2">Buy data</h1></div>
                <div class="flex flex-col gap-2 ">
                    <div class="font-bold text-[20px]"><h1>API</h1></div>
                    <div class="flex gap-2 border-l-4 border-gray-400 px-1 overflow-x-auto lg:mx-6"><h1>GET</h1><pre class="bg-gray-200 dark:bg-slate-700 px-2 rounded ">{{ counter.URLServer+'/buydata/?product_name_buy=<NAME_PRODUCT>&quantity_buy=<QUANTITY>&user_buy=<USER_NAME>&token=<YOUR_TOKEN>' }}</pre></div>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="font-bold text-[20px]"><h1 v-if="counter.language==1">Ví dụ</h1><h1 v-if="counter.language==2">Example</h1></div>
                    <div class="flex flex-col gap-2 bg-gray-200 dark:bg-slate-700 px-2 py-2 rounded overflow-x-auto lg:mx-6">
                        <div class="text-gray-600 dark:text-sky-300"><h1>Request</h1></div>
                        <div class="flex gap-2"><h1>GET</h1><pre class="">{{counter.URLServer+'/buydata/?product_name_buy=Hotmail+1&quantity_buy=1&user_buy=ban&token=be4d69a5ac106ae79f3df86f43663aeaf634b74748bec8a1e034336d6dc6c1ec'}}</pre></div>
                    </div>
                    <div class="flex flex-col gap-2 bg-gray-200 dark:bg-slate-700 px-2 py-2 rounded overflow-x-auto lg:mx-6">
                        <div class="text-gray-600 dark:text-sky-300"><h1>Reponse</h1></div>
                        <div class="flex gap-2"><pre class="">{"Purchase information":"Successfully purchase !","Order details":{"Account":"ban","Product name buy":"Facebook _1","Code orders":"d1105c8babf944d","Quantity buy":"5","Transaction amount":"-50","Data":["dare3llaford@onet.pl|StOj8vEJve","zottel1970@t-online.de|nimgr516","annzowe@rediffmail.com|rahul1234","haichen.haichen@eyou.com|haichen123","raquel.maria74@yahoo.it|wgcdjyppaupgrytl123"]}}</pre></div>
                    </div>
                </div>
            </div>
            <div class="lg:hidden flex justify-center mt-5 cursor-pointer">
                <div class="flex border-2 border-gray-200 rounded px-2 py-2  justify-between items-center font-semibold w-full" v-if="counter.tabapi == 2" v-on:click="counter.tabapi=3">
                    <div class="flex flex-col"><h1 v-if="counter.language==1" class="text-[14px] text-gray-500">Tiếp theo - Tài liệu API</h1><h1 v-if="counter.language==1">Kiểm tra số dư</h1><h1 v-if="counter.language==2" class="text-[14px] text-gray-500">Next - API Document</h1><h1 v-if="counter.language==2">Check balance</h1></div>
                    <div class="text-gray-500"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /></div>
                </div>
                <div class="flex flex-col w-full md:flex-row" v-if="counter.tabapi == 3">
                    <div class="flex border-2 border-gray-200 rounded px-2 py-2  justify-between items-center font-semibold w-full md:w-1/2" v-on:click="counter.tabapi=2">
                        <div class="text-gray-500"><font-awesome-icon icon="fa-solid fa-arrow-left-long" /></div>
                        <div class="flex flex-col"><h1 v-if="counter.language==1" class="text-[14px] text-gray-500">Trước - Tài liệu API</h1><h1 v-if="counter.language==1">Kiểu dữ liệu</h1><h1 v-if="counter.language==2" class="text-[14px] text-gray-500">Previous - API Document</h1><h1 v-if="counter.language==2">Data type</h1></div>
                    </div>
                    <div class="flex border-2 border-gray-200 rounded px-2 py-2  justify-between items-center font-semibold w-full md:w-1/2" v-on:click="counter.tabapi=4">
                        <div class="flex flex-col"><h1 v-if="counter.language==1" class="text-[14px] text-gray-500">Tiếp theo - Tài liệu API</h1><h1 v-if="counter.language==1">Mua dữ liệu</h1><h1 v-if="counter.language==2" class="text-[14px] text-gray-500">Next - API Document</h1><h1 v-if="counter.language==2">Buy data</h1></div>
                        <div class="text-gray-500"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /></div>
                    </div>
                </div>
                <div class="flex border-2 border-gray-200 rounded px-2 py-2  justify-between items-center font-semibold w-full" v-if="counter.tabapi == 4" v-on:click="counter.tabapi=3">
                    <div class="text-gray-500"><font-awesome-icon icon="fa-solid fa-arrow-left-long" /></div>
                    <div class="flex flex-col"><h1 v-if="counter.language==1" class="text-[14px] text-gray-500">Trước - Tài liệu API</h1><h1 v-if="counter.language==1">Kiểm tra số dư</h1><h1 v-if="counter.language==2" class="text-[14px] text-gray-500">Previous - API Document</h1><h1 v-if="counter.language==2">Check balance</h1></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script >
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';
import axios from 'axios'

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
    
  }
}
</script> 
