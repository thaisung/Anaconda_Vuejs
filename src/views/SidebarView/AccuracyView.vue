<template>
    <div v-if="typeof counter.openthongtincanhan.username == 'string'" class="bg-gray-200 rounded shadow-inner  text-sky-900 grow ">Xác thực 2 lớp( dag cập nhật)</div>
</template>

<script >

import { useCounterStore } from '@/stores/counter';

export default {

  setup() {
    const counter = useCounterStore();
    return {counter}
  },
}
</script> 