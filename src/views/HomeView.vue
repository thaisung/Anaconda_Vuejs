<template>
  <div class="flex flex-col  rounded justify-center   bg-white dark:bg-slate-900 drop-shadow-md  px-2 py-2 gap-2 shadow-inner ">
      <div  v-for="item in counter.items" class="flex flex-col ">
          <div class="flex  h-full  bg-stone-200 dark:bg-slate-800 items-center rounded-t justify-between py-2 px-2 ">
            <div class="flex  gap-1  items-center justify-center">
                <div class="flex h-[50px] w-[50px] items-center justify-center text object-scale-down overflow-hidden"><img  alt="Image" class="bg-white rounded" :src ="counter.URLServer+item.Avatar" /></div>
                <div class="flex h-[50px]  items-center  text-[22px] text-sky-600 font-semibold antialiased"><h1 v-if="counter.language==1">{{ item.Name }}</h1><h1 v-if="counter.language==2">{{ item.Name_English }}</h1></div>
            </div>
            <div class="flex justify-center items-center h-full   text-sky-600 text-[15px] sm:text-[16px]  font-semibold antialiased gap-1 ">
                <div class="lg:flex w-[150px] gap-1 items-center justify-center bg-gray-300 dark:bg-slate-900 rounded-xl py-3 shadow-inner hidden"><div class="flex text-justify items-center"><font-awesome-icon icon="fa-solid fa-circle-info" /></div><div class="flex text-justify items-center"><h1 v-if="counter.language==1">Thông tin</h1><h1 v-if="counter.language==2">Information</h1></div></div>
                <div class="sm:flex w-[150px] gap-1 items-center justify-center bg-gray-300 dark:bg-slate-900 rounded-xl py-3 shadow-inner hidden"><div><font-awesome-icon icon="fa-solid fa-globe" /></div><div><h1 v-if="counter.language==1">Quốc gia</h1><h1 v-if="counter.language==2">Nation</h1></div></div>
                <div class="lg:flex w-[150px] gap-1 items-center justify-center bg-gray-300 dark:bg-slate-900 rounded-xl py-3 shadow-inner hidden"><div><font-awesome-icon icon="fa-solid fa-tags" /></div><div><h1 v-if="counter.language==1">Giá</h1><h1 v-if="counter.language==2">Price</h1></div></div>
                <div class="flex w-[80px] sm:w-[150px] gap-1 items-center justify-center bg-gray-300 dark:bg-slate-900 rounded-xl py-3 shadow-inner"><div><font-awesome-icon icon="fa-solid fa-shop" /></div><div class="hidden sm:flex"><h1 v-if="counter.language==1">Số lượng</h1><h1 v-if="counter.language==2">Quantity</h1></div></div>
                <div class="flex w-[80px] sm:w-[150px] gap-1 items-center justify-center bg-gray-300 dark:bg-slate-900 rounded-xl py-3 shadow-inner"><div><font-awesome-icon icon="fa-solid fa-sack-dollar" /></div><div class="hidden sm:flex"><h1 v-if="counter.language==1">Giao dịch</h1><h1 v-if="counter.language==2">Transaction</h1></div></div>
            </div>
          </div>
          <div v-for="iten in item.Categoryy" class="flex  justify-between bg-stone-200 dark:bg-slate-800 min-h-[55px] items-center text-[17px]   font-medium antialiased border-t-2 border-white dark:border-slate-900 px-2 ">
            <div class="flex dark:text-white "><h1 v-if="counter.language==1">{{iten.Name}}</h1><h1 v-if="counter.language==2">{{iten.Name_English}}</h1></div>
            <div class="flex  text-[15px] items-center  sm:pb-0 gap-1">
                <div v-on:click="counter.showBangthongtin(); counter.openInformation(iten.id); counter.openImage(item.id); add();" class="lg:flex hidden w-[150px] justify-center "><button type="button" class=" text-[18px] text-sky-600 hover:text-sky-500"><font-awesome-icon icon="fa-solid fa-circle-info" /></button></div>
                <div class="sm:flex hidden w-[150px] justify-center items-center "><div class="rounded"><img class="w-[40px] rounded" :src="counter.URLServer+iten.Nation"/></div></div>
                <div class="lg:flex hidden w-[150px] justify-center items-center dark:text-white">{{iten.Price}}</div>
                <div class="flex w-[80px] sm:w-[150px] justify-center items-center dark:text-white ">{{iten.Quantity}}</div>
                <div class="flex w-[80px] sm:w-[150px] justify-center" v-on:click="add()">
                  <button v-show="typeof counter.openthongtincanhan.username == 'string'" type="button" v-on:click="counter.showBangmuasanpham(); counter.openInformation(iten.id); counter.openImage(item.id)" class="bg-sky-600 hover:bg-sky-500 text-white  text-[15px] rounded-[5px] p-[3px] transition duration-100 ease select-none  focus:outline-none focus:shadow-outline px-4"><h1 v-if="counter.language==1">Mua</h1><h1 v-if="counter.language==2">Buy</h1></button>
                  <button v-show="typeof counter.openthongtincanhan.username == 'undefined'" type="button" v-on:click=" counter.showDangnhap();" class="bg-sky-600 hover:bg-sky-500  text-white  text-[15px] rounded-[5px] p-[3px] transition duration-100 ease select-none  focus:outline-none focus:shadow-outline px-4"><h1 v-if="counter.language==1">Mua</h1><h1 v-if="counter.language==2">Buy</h1></button>
                </div>
            </div>
          </div>
      </div>
  </div>

  <!-- III.Bảng thông tin của từng sản phẩm -->
  <div v-if="counter.showbangthongtin" class=" fixed  inset-0 z-40 dark:bg-gray-300 bg-black cursor-pointer opacity-60 dark:opacity-30" ></div>
  <div v-if="counter.showbangthongtin" v-on:click="counter.showBangthongtin(); remove()"  class=" fixed inset-0 z-50  justify-center items-center flex  cursor-pointer">
  <!-- Bảng thông tin sản phẩm -->
    <div class="  my-auto mx-auto rounded-3xl flex flex-col  w-[350px] px-2 py-2 text-sky-600  bg-white dark:bg-slate-900 gap-2 shadow-md font-semibold">
      <!--header-->
      <div v-for="item in counter.items" class="flex bg-gray-100 dark:bg-slate-800 dark:border-none border-solid border-2 border-gray-200 shadow-inner rounded-t-2xl rounded-b  items-center px-2 py-2 w-full" v-bind:class="{'hidden': counter.openimage !== item.id, 'block': counter.openimage === item.id}">
          <div class="flex  min-w-[50px] max-w-[50px] h-[50px] items-center justify-center text object-scale-down overflow-hidden " v-bind:class="{'hidden': counter.openimage !== item.id, 'block': counter.openimage === item.id}" ><img alt="Image" class="bg-white rounded " :src="counter.URLServer+item.Avatar" /></div>
          <div  v-for="iten in item.Categoryy" class="flex w-full h-[40px] items-center text-[17px]  border-2 border-sky-600 py-2 rounded px-16 ml-2 w-full justify-center " v-bind:class="{'hidden': counter.openinformation !== iten.id, 'block': counter.openinformation === iten.id}"><h1 v-if="counter.language==1">{{iten.Name}}</h1><h1 v-if="counter.language==2">{{iten.Name_English}}</h1></div>
      </div>
      <!--body-->
      <div class=" flex flex-col  items-center justify-center rounded-b-2xl rounded-t bg-gray-100 dark:bg-transparent dark:border-none border-solid border-2 border-gray-200 shadow-inner  font-medium px-2 py-2">
        <div class="flex items-center text-[16px] font-semibold "><h1 v-if="counter.language==1">Thông tin sản phẩm</h1><h1 v-if="counter.language==2">Product information</h1></div>
        <div class="flex flex-col items-center  text-[14px] ">
          <!-- <div v-for="item in counter.items"><pre v-for="iten in item.Categoryy" v-bind:class="{'hidden': counter.openinformation !== iten.id, 'block': counter.openinformation === iten.id}" class="text-center ">{{iten.Information}}</pre></div> -->
          <div v-for="item in counter.items"><div v-for="iten in item.Categoryy" v-bind:class="{'hidden': counter.openinformation !== iten.id, 'block': counter.openinformation === iten.id}" class="flex flex-col justify-center "><div v-for="ite in iten.Information.split('\r\n')" class="flex items-center gap-1"><font-awesome-icon icon="fa-solid fa-check" class="text-[15px]"/><h1>{{ ite }}</h1></div></div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- IV.Bảng mua sản phẩm  -->
  <div v-if="counter.showbangmuasanpham" v-on:click="counter.showBangmuasanpham(); counter.quantity_buy=null; remove();" class=" fixed  inset-0 z-40 dark:bg-gray-300 bg-black cursor-pointer opacity-60 dark:opacity-30"></div>
  <!-- Bảng mua sản phẩm-->
  <div v-if="counter.showbangmuasanpham"  class=" fixed z-50 inset-0 my-auto mx-auto rounded-3xl flex flex-col  w-[350px] h-[310px] text-sky-600  bg-white dark:bg-slate-900 shadow-md px-2 pt-2">
    <!--header-->
    <div v-for="item in counter.items" class="flex bg-gray-100 border-solid border-2 border-gray-200 dark:bg-slate-800 dark:border-none shadow-inner rounded-t-2xl rounded-b  py-2 items-center w-full justify-between px-2 " v-bind:class="{'hidden': counter.openimage !== item.id, 'block': counter.openimage === item.id}">
      <div class="flex min-w-[50px] max-w-[50px] h-[50px]  items-center justify-center text object-scale-down overflow-hidden "><img alt="Image" class="bg-white rounded " :src="counter.URLServer+item.Avatar" /></div>
      <div v-for="iten in item.Categoryy" class="flex w-full h-[40px]  items-center text-[17px]  border-2 border-sky-600 font-semibold rounded ml-2  justify-center font-medium" v-bind:class="{'hidden': counter.openinformation !== iten.id, 'block': counter.openinformation === iten.id}" ><h1 v-if="counter.language==1">{{iten.Name}}</h1><h1 v-if="counter.language==2">{{iten.Name_English}}</h1></div>
    </div>
    <!--body-->
    <div v-for="item in counter.items" class=" flex flex-col  items-center justify-center rounded bg-gray-100 dark:bg-transparent dark:border-none border-solid border-2 border-gray-200 mt-2 px-2 font-medium" v-bind:class="{'hidden': counter.openimage !== item.id, 'block': counter.openimage === item.id}">
      <div class="flex flex-col gap-0.5  py-1  w-full">
        <div class="flex text-[16px] py-2 items-center justify-between border-solid border-b-2 dark:border-slate-800 border-sky-600">
          <div class="flex justify-center mb-1 min-w-[140px]"><h1 v-if="counter.language==1">Số lượng cần mua:</h1><h1 v-if="counter.language==2">Quantity to buy:</h1></div>
          <div class="flex justify-center w-full " v-for="iten in item.Categoryy" v-on:click="counter.gantenmathang(iten.Name); counter.Return_Data_Type={'Vietnam':iten.Return_Data_Type,'English':iten.Return_Data_Type_English};" v-show="counter.openinformation === iten.id">
            <input
            type="number" 
            class=" w-full text-end bg-transparent rounded  outline-none h-[35px] dark:text-gray-200 text-gray-800"
            id="exampleFormControlInput1"
            v-bind:placeholder="$t('HomeView.Number')" min="0" v-model="counter.quantity_buy "
          /></div>
        </div>
        <!-- <div class="flex flex-col mt-5"><div class="flex justify-center items-center mt-6" v-for="iten in item.Categoryy" v-show="counter.openinformation === iten.id"><font-awesome-icon icon="fa-solid fa-link" /></div></div> -->
        <div class="flex text-[16px] py-2 items-center justify-between border-solid border-b-2 dark:border-slate-800 border-sky-600">
          <div class="flex justify-center min-w-[41px]"><h1 v-if="counter.language==1">Giá:</h1><h1 v-if="counter.language==2">Price:</h1></div>
          <div v-for="iten in item.Categoryy" v-show="counter.openinformation === iten.id" class="w-full" >
            <div class="flex justify-end bg-transparent rounded  w-full" ><label class="h-[35px] flex items-center justify-end text-end w-full" for="exampleCheck2">{{iten.Price}}</label></div>
          </div>
        </div>
        <div  class="flex  gap-1 text-[16px] pt-2 pb-3 items-center justify-between w-full border-solid border-b-2 dark:border-slate-800 border-sky-600 mb-1 dark:mb-0">
          <div class="flex justify-center min-w-[89px]"><h1 v-if="counter.language==1">Thành tiền:</h1><h1 v-if="counter.language==2">Into money:</h1></div>
          <div v-for="iten in item.Categoryy" class="flex justify-center bg-transparent rounded w-full" v-show="counter.openinformation === iten.id"  ><label class=" h-[35px] flex items-center justify-end w-full bg-transparent" for="exampleCheck2">{{counter.quantity_buy*iten.Price}}</label></div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="flex  justify-center  items-center h-full">
      <button type="button" v-on:click=" counter.showBangmuasanpham(); counter.MuaHang(); " class=" bg-sky-600  text-white font-medium  text-[15px] rounded-[5px] p-[3px] transition duration-300 ease select-none hover:bg-sky-500  focus:outline-none focus:shadow-outline px-4"><h1 v-if="counter.language==1">Mua</h1><h1 v-if="counter.language==2">Buy</h1></button>
    </div>
  </div>

  <!-- V.Thông báo mua thành công sản phẩm  -->
  <div v-if="counter.showbangmuathanhcongsanpham" v-on:click="counter.showBangmuathanhcongsanpham(); remove();" class=" fixed  inset-0 z-40 dark:bg-gray-300 bg-black cursor-pointer opacity-60 dark:opacity-30"></div>
  <div v-if="counter.showbangmuathanhcongsanpham" class="fixed inset-0 z-50 flex flex-col justify-between rounded w-[350px] sm:w-[600px] h-[500px] bg-white dark:bg-slate-900 mx-auto my-auto px-2 py-2 shadow-sm">
      <div class="flex bg-gray-200 dark:bg-slate-800 rounded shadow-inner justify-center py-2 text-[25px] text-sky-600 font-bold"><h1 v-if="counter.language==1">Bạn đã mua thành công</h1><h1 v-if="counter.language==2">You have successfully purchased</h1></div>
      <div class="flex flex-col gap-1 text-[15px] font-medium w-full h-full mt-3">
      <div class="flex gap-1 justify-center dark:text-gray-300">
          <div><h1  v-if="counter.language==1">Sản phẩm :</h1><h1  v-if="counter.language==2">Product :</h1></div>
          <div><h1>{{ counter.thongbaoloimuahang.data['Order details']['Product name buy'] }}</h1></div>
      </div>
      <div  class="flex gap-1 justify-center dark:text-gray-300">
          <div><h1  v-if="counter.language==1">Số lượng :</h1><h1  v-if="counter.language==2">Quantity :</h1></div>
          <div><h1>{{ counter.thongbaoloimuahang.data['Order details']['Quantity buy'] }}</h1></div>
      </div>
      <div  class="flex gap-1 justify-center dark:text-gray-300">
          <div><h1  v-if="counter.language==1">Thành tiền :</h1><h1  v-if="counter.language==2">Into money :</h1></div>
          <div><h1>{{ counter.thongbaoloimuahang.data['Order details']['Transaction amount'] }}</h1></div>
      </div>
      <div  class="flex gap-1 justify-center dark:text-gray-300">
          <div><h1  v-if="counter.language==1">Mã đơn hàng :</h1><h1  v-if="counter.language==2">Code orders :</h1></div>
          <div><h1>{{ counter.thongbaoloimuahang.data['Order details']['Code orders'] }}</h1></div>
      </div>
      <div  class="flex gap-1 justify-start items-center bg-gray-100 dark:bg-slate-800 rounded text-lime-600 text-[14px] py-3 px-1 shadow-inner overflow-auto ">
          <div class="shrink-0 text-gray-900 dark:text-gray-300"><h1  v-if="counter.language==1" class="shrink-0 underline">Kiểu dữ liệu trả về :</h1><h1  v-if="counter.language==2" class="shrink-0 underline">Return data type :</h1></div>
          <div class=" shrink-0">
            <h1  v-if="counter.language==1">{{ counter.Return_Data_Type.Vietnam }}</h1>
            <h1  v-if="counter.language==2">{{ counter.Return_Data_Type.English}}</h1>
          </div>
      </div>
      <div  class="flex gap-1 justify-center  mb-2 w-full h-full mt-2"><pre  id="myPre" class="  font-medium border-2 border-sky-600 rounded w-full h-full resize-none  overflow-auto px-1 py-1 dark:text-gray-300"><h1 v-for="i in counter.thongbaoloimuahang.data['Order details'].Data">{{ i+'\r\n' }}</h1></pre></div>
      </div>
      <div class="flex justify-center gap-2 bg-gray-200 dark:bg-slate-800 font-medium shadow-inner py-2 rounded items-center">
        <div class="flex justify-center items-center bg-sky-600 rounded  hover:bg-sky-500 "  v-on:click="counter.DownloadFileTxt(); counter.showBangmuathanhcongsanpham();"><button class=" text-white px-2 py-[3px]"><h1 v-if="counter.language==1">Tải file (.txt)</h1><h1 v-if="counter.language==2">Download files (.txt)</h1></button></div>
        <div v-on:click=" counter.Copythanhcong(); CopyPre();" class="flex justify-center items-center bg-sky-600 rounded w-[50px] h-[30px] hover:bg-sky-500 "><button class=""><font-awesome-icon icon="fa-solid fa-copy" class="text-white text-[20px]" v-show="counter.copythanhcong==1"/>
          <font-awesome-icon icon="fa-solid fa-check" v-show="counter.copythanhcong==2" class="text-white text-[20px]"/></button></div>
      </div>
  </div>

  <!-- V.Thông báo mua không thành công sản phẩm  -->
  <div v-if="counter.showbangmuakhongthanhcongsanpham" v-on:click="counter.showBangmuakhongthanhcongsanpham(); remove();" class=" fixed  inset-0 z-40 dark:bg-gray-300 bg-black cursor-pointer opacity-60 dark:opacity-30"></div>
  <div v-if="counter.showbangmuakhongthanhcongsanpham" class="fixed inset-0 z-50 flex justify-center items-center rounded w-[350px] sm:w-[600px] h-[100px] bg-white dark:bg-slate-900 mx-auto my-auto px-2 py-2 shadow-sm font-semibold text-red-500 text-[18px]">
    <h1 v-if="counter.language==1">{{ counter.thongbaoloimuahang.data['Error message'] }}</h1><h1 v-if="counter.language==2">{{ counter.thongbaoloimuahang.data['Error message English'] }}</h1>
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
      // items: null,
      username: null,
      password: null,
      iten:{Name:'th'}
      
    }
  },
  methods:{
    add() {document.body.classList.add('overflow-hidden')},
    remove() {document.body.classList.remove('overflow-hidden')},
    scrollBehavior(){window.scrollTo(0,0);},
    CopyPre() {
      let codeText = document.getElementById('myPre').textContent;
    // copying
      navigator.clipboard.writeText(codeText)
    }
  },
  mounted:function(){
    this.counter.refreshData();
    this.counter.getStatetuLocalStorage();
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
  pre{font-family: 'Quicksand', sans-serif;}
</style>