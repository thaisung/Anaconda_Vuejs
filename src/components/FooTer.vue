<template>
    <div class="flex flex-col   min-h-[100px] py-5  justify-center font-medium antialiased text-neutral-800 dark:text-neutral-200 rounded bg-white dark:bg-slate-900 gap-3 opacity-90" >
        <div class="flex items-center justify-center font-normal"><h1> Ha Noi, Viet Nam, 2023</h1></div>
        <div class="flex items-center justify-center  text-2xl text-[25px] gap-6 my-2">
            <font-awesome-icon icon="fa-brands fa-css3" />
            <font-awesome-icon icon="fa-brands fa-html5" />
            <font-awesome-icon icon="fa-brands fa-js" />
            <font-awesome-icon icon="fa-brands fa-python" />
            <font-awesome-icon icon="fa-brands fa-java" />
            <font-awesome-icon icon="fa-solid fa-c" />
        </div>
        <div class="flex items-center justify-center text-center text-[20px] font-semibold"><h1 v-if="counter.language==1">Mọi thông tin xin liên hệ:</h1><h1 v-if="counter.language==2">For further information please contact:</h1></div>
        <div class="flex flex-col md:flex-row gap-5 items-center justify-center">
            <h1>Email : vuthaind@gmail.com</h1>
            <h1>Hotline : 0866.558.626</h1>
            <h1>Website : <a :href="counter.admins[0]['Domain_Page']" target="_blank" class="underline decoration-cyan-600 text-cyan-600">{{ counter.admins[0]['Domain_Page'] }}</a></h1>
        </div>
    </div>
</template>


<script>
    import { useCounterStore } from '@/stores/counter';
    import axios from 'axios';
    import VueCookies from 'vue-cookies'


    export default {

    setup() {
        const counter = useCounterStore();
        return {counter}
    },
    }
</script>