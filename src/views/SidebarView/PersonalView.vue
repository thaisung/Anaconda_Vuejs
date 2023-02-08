<template>
    <div v-if="typeof counter.openthongtincanhan.username == 'string'" class=" flex flex-col grow items-center gap-5 justify-center bg-gray-200 dark:bg-slate-900 dark:border-sky-400 dark:border-2 rounded shadow-inner   text-sky-900 dark:text-sky-400 w-full ">
        <div class="text-[25px] font-bold mt-2"><h1 v-if="counter.language==1">Thông tin cá nhân</h1><h1 v-if="counter.language==2">Personal information</h1></div>
        <div class="flex flex-col  w-[350px] sm:w-[700px] mb-2">
            <div class="flex gap-1 justify-between py-3 border-b-2 border-sky-900 ">
                <div><h1 v-if="counter.language==1">Tài khoản:</h1><h1 v-if="counter.language==2">Account:</h1></div>
                <div><h1>{{ counter.openthongtincanhan.username }}</h1></div>
            </div>
            <div class="flex gap-1 justify-between py-3 border-b-2 border-sky-900 ">
                <div><h1 v-if="counter.language==1">Email:</h1><h1 v-if="counter.language==2">Email:</h1></div>
                <div><h1>{{ counter.openthongtincanhan.email }}</h1></div>
            </div>
            <div class="flex gap-1 justify-between py-3 border-b-2 border-sky-900 ">
                <div><h1 v-if="counter.language==1">Số tiền:</h1><h1 v-if="counter.language==2">Amount of money:</h1></div>
                <div><h1>{{ counter.openthongtincanhan.Money }}</h1></div>
            </div>
            <div class="flex items-center gap-1 justify-between py-3 border-b-2 border-sky-900 ">
                <div><h1>Token:</h1></div>
                <div class="flex ml-3 gap-1 items-center w-full">
                    <div class="w-full">
                        <input class="w-full bg-gray-200 dark:bg-transparent outline-none  flex text-end " type="password" v-if="counter.matxemtoken==true" v-model="counter.openthongtincanhan.token" readonly id="myInput" >
                        <input class="w-full bg-gray-200 dark:bg-transparent outline-none  flex text-end " type="text" v-if="counter.matxemtoken==false" v-model="counter.openthongtincanhan.token" readonly id="myInput" >
                    </div>
                    <div class="flex justify-center" v-on:click="counter.matxemtoken =! counter.matxemtoken;"><button type="button" class=" bg-sky-900 dark:bg-sky-400 text-white dark:text-slate-900  text-[15px] rounded-[5px] p-[3px] transition duration-100 ease select-none hover:bg-sky-800 dark:hover:bg-sky-300  focus:outline-none focus:shadow-outline px-2"><font-awesome-icon icon="fa-solid fa-eye" /></button></div>
                    <div class="flex justify-center" v-on:click=" counter.Copythanhcong(); Copy();">
                        <button class=" bg-sky-900 dark:bg-sky-400  text-white dark:text-slate-900   text-[15px] rounded-[5px] p-[3px] transition duration-100 ease select-none hover:bg-sky-800 dark:hover:bg-sky-300  focus:outline-none focus:shadow-outline px-2"><font-awesome-icon icon="fa-solid fa-copy" class=" text-[20px]" v-show="counter.copythanhcong==1"/>
                        <font-awesome-icon icon="fa-solid fa-check" v-show="counter.copythanhcong==2" class=""/></button>
                    </div>
                </div>
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
    methods: {
    Copy() {
    // Get the text field
    var copyText = document.getElementById("myInput");
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
    }        
    },
}
</script> 

<style>
::-moz-selection { /* Code for Firefox */
  /* color: red; */
  background:none;
}
::selection {
  /* color: red; */
  background:none;
}
</style>