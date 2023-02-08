<template>
    <div class="min-h-screen min-w-screen bg-gray-200 dark:bg-slate-800 relative" >
      <div class="flex flex-col min-h-full max-w-[1200px] mx-auto rounded gap-2 bg-transparent  " >
        <hea-der />
        <run-text />
        <logo-banner />
        <tab-page />
        <router-view />
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
  import Footer from '@/components/Footer.vue'

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
      Footer,
    }
  }
  </script>
  
  
  