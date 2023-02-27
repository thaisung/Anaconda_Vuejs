<template>
    <div class="w-screen h-screen bg-gray-100">
        <div class="w-full h-[120px] bg-white shadow-md text-sky-600 flex items-center justify-center text-[25px] font-bold flex-col">
            <div><h1 v-if="counter.language==1">THỐNG KÊ</h1><h1 v-if="counter.language==2">Statistical</h1></div>
            <div class="flex text-[14px] font-bold rounded-lg cursor-pointer">   
                <div v-on:click="counter.language=1" class="px-2  text-sky-600  rounded-l-lg border-2 border-sky-600 " v-bind:class="{'bg-sky-600 text-white':counter.language==1,'hover:text-sky-500 hover:border-sky-500':counter.language!=1}">VI</div>
                <div v-on:click="counter.language=2" class="px-2  text-sky-600  rounded-r-lg border-2 border-sky-600 "  v-bind:class="{'bg-sky-600 text-white':counter.language==2,'hover:text-sky-500 hover:border-sky-500':counter.language!=2}">EN</div>
            </div>
            <div class="flex text-[18px] font-semibold mt-3 cursor-pointer">
                <div class="px-2 rounded" v-bind:class="{'bg-sky-200':counter.tabadmin==1}" v-on:click="counter.tabadmin=1"><h1 v-if="counter.language==1">Thành viên</h1><h1 v-if="counter.language==2">Member</h1></div>
                <div class="px-2 rounded" v-bind:class="{'bg-sky-200':counter.tabadmin==2}" v-on:click="counter.tabadmin=2"><h1 v-if="counter.language==1">Tài chính</h1><h1 v-if="counter.language==2">Finance</h1></div>
            </div>
        </div>
        <div class="text-gray-700 mx-2 my-2">
            <div v-if="counter.tabadmin==1" class="flex flex-col gap-3">
                <div  class="flex gap-1 flex-col">
                    <div class="font-bold text-[19px]"><h1 v-if="counter.language==1">Thống kê các thành viên đã đăng kí trên máy chủ</h1><h1 v-if="counter.language==2">Statistics of registered members on the server</h1></div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr class="uppercase">
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Hôm nay</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Today</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Tháng này</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">This month</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Năm này </th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">This year</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Năm trước </th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Last year</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Máy chủ</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Server</th>
                                </tr>
                                <tr class="text-[12px] font-medium  text-gray-500">
                                    <th v-for="tv in counter.thongkethanhvien[0]" scope="col" class="px-6 pb-3" >{{ tv.time }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td v-for="tv in counter.thongkethanhvien[0]"  class=" px-6 py-4 font-medium text-gray-900  dark:text-white  ">{{ tv.quantity }}<button v-if="counter.language==1" class="rounded bg-sky-500 hover:bg-sky-400 px-1 ml-2 text-white relative" v-on:click="counter.stv=tv.time">Chi tiết</button><button v-if="counter.language==2" class="rounded bg-sky-500 hover:bg-sky-400 px-1 ml-2 text-white relative" v-on:click="counter.stv=tv.time">Detail</button></td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td v-for="tv in counter.thongkethanhvien[0]"  class=" px-2 py-2 font-medium text-gray-900  dark:text-white  text-center-none " ><pre class="bg-gray-100 rounded px-2 py-2 max-h-[200px] overflow-auto max-w-[250px]" v-show="counter.stv==tv.time">{{ tv.user }}</pre></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div  class="flex gap-1 flex-col">
                    <div class="font-bold text-[19px]"><h1 v-if="counter.language==1">Thống kê các thành viên đã đăng nhập trên máy chủ</h1><h1 v-if="counter.language==2">Statistics of members logged in on the server</h1></div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr class="uppercase">
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Hôm nay</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Today</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Tháng này</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">This month</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Năm này </th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">This year</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Năm trước </th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Last year</th>
                                    <!-- <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Máy chủ</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Server</th> -->
                                </tr>
                                <tr class="text-[12px] font-medium  text-gray-500">
                                    <th v-for="tvlg in counter.thongkethanhvien[1]" scope="col" class="px-6 pb-3" >{{ tvlg.time }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td v-for="tvlg in counter.thongkethanhvien[1]"  class=" px-6 py-4 font-medium text-gray-900  dark:text-white  ">{{ tvlg.quantity }}<button v-if="counter.language==1" class="rounded bg-sky-500 hover:bg-sky-400 px-1 ml-2 text-white relative" v-on:click="counter.stvlg=tvlg.time">Chi tiết</button><button v-if="counter.language==2" class="rounded bg-sky-500 hover:bg-sky-400 px-1 ml-2 text-white relative" v-on:click="counter.stvlg=tvlg.time">Detail</button></td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td v-for="tvlg in counter.thongkethanhvien[1]"  class=" px-2 py-2 font-medium text-gray-900  dark:text-white  text-center-none " ><pre class="bg-gray-100 rounded px-2 py-2 max-h-[200px] overflow-auto max-w-[250px]" v-show="counter.stvlg==tvlg.time">{{ tvlg.user }}</pre></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div v-if="counter.tabadmin==2" class="flex flex-col gap-3">
                <div class="flex gap-1 flex-col">
                    <div class="font-bold text-[19px]"><h1 v-if="counter.language==1">Thống kê số tiền đã nạp trên máy chủ</h1><h1 v-if="counter.language==2">Statistics of the amount loaded on the server</h1></div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr class="uppercase">
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Hôm nay</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Today</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Tháng này</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">This month</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Năm này </th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">This year</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Năm trước </th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Last year</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Máy chủ</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Server</th>
                                </tr>
                                <tr class="text-[12px] font-medium  text-gray-500">
                                    <th v-for="tc in counter.thongketaichinh[0]" scope="col" class="px-6 pb-3" >{{ tc.time }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td v-for="tc in counter.thongketaichinh[0]"  class=" px-6 py-4 font-medium text-gray-900  dark:text-white  ">{{ tc.quantity }}<button v-if="counter.language==1" class="rounded bg-sky-500 hover:bg-sky-400 px-1 ml-2 text-white relative" v-on:click="counter.stc=tc.time">Chi tiết</button><button v-if="counter.language==2" class="rounded bg-sky-500 hover:bg-sky-400 px-1 ml-2 text-white relative" v-on:click="counter.stc=tc.time">Detail</button></td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td v-for="tc in counter.thongketaichinh[0]"  class=" px-2 py-2 font-medium text-gray-900  dark:text-white  text-center-none " ><pre class="bg-gray-100 rounded px-2 py-2 max-h-[200px] overflow-auto max-w-[250px]" v-show="counter.stc==tc.time">{{ tc.user }}</pre></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div  class="flex gap-1 flex-col">
                    <div class="font-bold text-[19px]"><h1 v-if="counter.language==1">Thống kê số tiền đã trừ trên máy chủ</h1><h1 v-if="counter.language==2">Statistics of the amount deducted on the server</h1></div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr class="uppercase">
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Hôm nay</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Today</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Tháng này</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">This month</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Năm này </th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">This year</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Năm trước </th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Last year</th>
                                    <th scope="col" class="px-6 pt-3" v-if="counter.language==1">Máy chủ</th><th scope="col" class="px-6 pt-3" v-if="counter.language==2">Server</th>
                                </tr>
                                <tr class="text-[12px] font-medium  text-gray-500">
                                    <th v-for="tctt in counter.thongketaichinh[1]" scope="col" class="px-6 pb-3" >{{ tctt.time }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td v-for="tctt in counter.thongketaichinh[1]"  class=" px-6 py-4 font-medium text-gray-900  dark:text-white  ">{{ tctt.quantity }}<button v-if="counter.language==1" class="rounded bg-sky-500 hover:bg-sky-400 px-1 ml-2 text-white relative" v-on:click="counter.stctt=tctt.time">Chi tiết</button><button v-if="counter.language==2" class="rounded bg-sky-500 hover:bg-sky-400 px-1 ml-2 text-white relative" v-on:click="counter.stctt=tctt.time">Detail</button></td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td v-for="tctt in counter.thongketaichinh[1]"  class=" px-2 py-2 font-medium text-gray-900  dark:text-white  text-center-none " ><pre class="bg-gray-100 rounded px-2 py-2 max-h-[200px] overflow-auto max-w-[250px]" v-show="counter.stctt==tctt.time">{{ tctt.user }}</pre></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div><pre class="fixed bg-gray-400 inset-0 mx-auto my-10 rounded px-2 py-2 w-[300px] overflow-auto">{{ tv.user }}</pre></div> -->
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
    this.counter.Thongkethanhvien();
    this.counter.Thongketaichinh();
  }

}
</script> 