<template>
  <div class="min-h-screen min-w-screen bg-gray-200 dark:bg-slate-800  ">
    <div class="flex flex-col min-h-full max-w-[1200px] mx-auto rounded gap-2 bg-transparent " >
      <hea-der />
      <run-text />
      <logo-banner />
      <tab-page />
      <div class="flex flex-col sm:flex-row  bg-white dark:bg-slate-900 rounded drop-shadow-md py-2 px-2 gap-2 font-medium ">
        <side-bar/>
        <router-view class=" flex overflow-x-auto  scroll-pl-6 snap-x "/>
      </div>
      <foo-ter />
    </div>
  </div>
</template>


<script>
// Import thành phần (components) NavBar, SideBar, FooterBar để sử dụng
import HeaDer from '@/components/HeaDer.vue'
import RunText from '@/components/RunText.vue'
import LogoBanner from '@/components/LogoBanner.vue'
import TabPage from '@/components/TabPage.vue'
import FooTer from '@/components/FooTer.vue'
import SideBar from '@/components/Sidebar.vue'


import { useCounterStore } from '@/stores/counter';


// Để sử dụng được các thẻ (tag) của các component tương ứng
// <nav-bar />     -> component NavBar
// <side-bar />    -> component SideBar
// <footer-bar />  -> component FooterBar
// Chúng ta phải khai báo trong thuộc tính `components` của phần export default {}
export default {
  setup() {
  const counter = useCounterStore();
  return {counter}
},
  components: {
    HeaDer,
    RunText,
    LogoBanner,
    TabPage,
    FooTer,
    SideBar,
  }
}
</script>


