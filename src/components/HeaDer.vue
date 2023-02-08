<template>
  <div class="flex flex-col lg:fixed z-20 lg:inset-x-0 md:flex-row max-w-[1200px] w-full mx-auto sm:min-h-[46px] text-slate-800 dark:text-gray-200 rounded justify-between py-1 text-[22px]  gap-2 bg-white dark:bg-slate-900 drop-shadow-md ">
    <div v-for="admin in counter.admins" class="flex flex-row gap-2 justify-center sm:ml-2 font-medium antialiased">
      <div class="flex justify-center items-center gap-0.5"><div><font-awesome-icon icon="fa-solid fa-envelope" /></div><div><h1 class="text-[17px]">{{ admin.Email }}</h1></div></div>
      <div class="flex justify-center items-center gap-0.5"><div><font-awesome-icon icon="fa-solid fa-square-phone" /></div><div><h1 class="text-[17px]">{{ admin.Phone }}</h1></div></div>
    </div>
    <div class="flex gap-2 justify-center items-center">
      <div class="flex  items-center gap-0.5 justify-center ">
        <div class="flex justify-center items-center"><font-awesome-icon icon="fa-solid fa-globe" class="text-[25px] text-sky-600 "/></div>
        <div class="flex text-[14px] font-bold rounded-lg cursor-pointer">   
          <div v-on:click="counter.language=1" class="px-2 py-[1px]  text-sky-600  rounded-l-lg border-2 border-sky-600 " v-bind:class="{'bg-sky-600 text-white':counter.language==1,'hover:text-sky-500 hover:border-sky-500':counter.language!=1}">VI</div>
          <div v-on:click="counter.language=2" class="px-2 py-[1px]  text-sky-600  rounded-r-lg border-2 border-sky-600 "  v-bind:class="{'bg-sky-600 text-white':counter.language==2,'hover:text-sky-500 hover:border-sky-500':counter.language!=2}">EN</div>
        </div>
      </div>
      <div class="flex items-center gap-0.5 ">
        <div v-on:click="counter.BrightDark(2,'dark');" v-bind:class="{'hidden': counter.openMoon !== 1, 'block': counter.openMoon === 1}"  class="h-[25px] w-[30px] flex justify-center items-center bg-sky-600 hover:bg-sky-500  rounded"><button type="button"  class=" text-white  text-[15px] rounded-[5px]  transition duration-300 ease select-none  focus:shadow-outline  flex items-center "><font-awesome-icon icon="fa-solid fa-sun" class="text-[17px]"/></button></div>
        <div v-on:click="counter.BrightDark(1,'darkk');" v-bind:class="{'hidden': counter.openMoon !== 2, 'block': counter.openMoon === 2}" class="h-[25px] w-[30px] flex justify-center items-center bg-sky-600 hover:bg-sky-500 rounded"><button type="button"  class="   text-white text-[15px] rounded-[5px]  transition duration-300 ease select-none focus:outline-none focus:shadow-outline  flex items-center "><font-awesome-icon icon="fa-solid fa-moon" class="text-[17px]" /></button></div>
      </div>
    </div>
    
    <div v-if="typeof counter.opentokenuser == 'object'" class="flex justify-center md:mr-2 font-medium antialiased" >
      <div class="flex gap-2 justify-center text-orange-600" v-bind:class="{'hidden': counter.opentieudedangnhap !== 2, 'block': counter.opentieudedangnhap === 2}">
        <div class="flex items-center gap-0.5"><div><font-awesome-icon icon="fa-solid fa-user-ninja" /></div><div><h1 class="text-[17px]">{{counter.openthongtincanhan.username}}</h1></div></div>
        <div class="flex items-center gap-0.5"><div><font-awesome-icon icon="fa-solid fa-wallet" /></div><div><h1 class="text-[17px]">{{counter.openthongtincanhan.Money}}</h1></div></div>
        <div class="flex items-center " v-on:click="counter.openTab(2);  counter.setStatevaoLocalStorage(); counter.opentabpersonal = 4; counter.setStatevaoLocalStorage1();"><button type="button" class="bg-sky-600  text-white  text-[15px] rounded-[5px] p-[3px] transition  ease select-none duration-100 hover:bg-sky-500  focus:outline-none focus:shadow-outline px-2   flex  justify-center items-center"><router-link to="/personal/recharge" class="flex justify-center items-center"><font-awesome-icon icon="fa-solid fa-credit-card" class="mr-1 text-[17px]"/><h1 class="hidden lg:flex" v-if="counter.language==1">Nạp tiền</h1><h1 class="hidden lg:flex" v-if="counter.language==2">Recharge</h1></router-link></button></div>
        <div v-on:click=" counter.dangxuattaikhoan1('th');" class="flex items-center justify-center"><button type="button" class="bg-sky-600  text-white  text-[15px] rounded-[5px] p-[3px] transition duration-100 ease select-none hover:bg-sky-500  focus:outline-none focus:shadow-outline px-2   flex  justify-center items-center" ><router-link to="/" class="flex justify-center items-center " ><font-awesome-icon icon="fa-solid fa-right-from-bracket" class="mr-1 text-[17px]"/><h1 class="hidden lg:flex" v-if="counter.language==1">Đăng xuất</h1><h1 class="hidden lg:flex" v-if="counter.language==2">Log out</h1></router-link></button></div>
      </div>
      <div class="flex gap-2 justify-center items-center" v-bind:class="{'hidden': counter.opentieudedangnhap !== 1, 'block': counter.opentieudedangnhap === 1}">
        <div v-on:click="counter.showDangnhap();" class="flex items-center "><button type="button" class=" bg-sky-600  text-white  text-[15px] rounded-[5px] p-[3px] transition duration-300 ease select-none hover:bg-sky-500  focus:outline-none focus:shadow-outline px-2 flex gap-1 justify-center items-center"><font-awesome-icon icon="fa-solid fa-user" /><h1 v-if="counter.language==1">Đăng nhập</h1><h1 v-if="counter.language==2">Log in</h1></button></div>
        <div class="flex items-center "><button type="button" v-on:click="counter.showDangnhap(); counter.openDangki(2); counter.openBgdangki(2);" class=" bg-sky-600  text-white  text-[15px] rounded-[5px] p-[3px] transition duration-300 ease select-none hover:bg-sky-500  focus:outline-none focus:shadow-outline px-2 flex gap-1 justify-center items-center"><font-awesome-icon icon="fa-solid fa-square-plus" /><h1 v-if="counter.language==1">Đăng kí</h1><h1 v-if="counter.language==2">Register</h1></button></div>
      </div>   
    </div>

    <div v-if="typeof counter.opentokenuser == 'string'" class="flex justify-center md:mr-2 font-medium antialiased">
      <div class="flex gap-2 justify-center text-orange-600 " v-bind:class="{'hidden': counter.opentieudedangnhapp !== 1, 'block': counter.opentieudedangnhapp === 1}">
        <div class="flex items-center gap-0.5"><div><font-awesome-icon icon="fa-solid fa-user-ninja" /></div><div><h1 class="text-[17px]">{{counter.openthongtincanhan.username}}</h1></div></div>
        <div class="flex items-center gap-0.5"><div><font-awesome-icon icon="fa-solid fa-wallet" /></div><div><h1 class="text-[17px]">{{counter.openthongtincanhan.Money}}</h1></div></div>
        <div class="flex items-center " v-on:click="counter.openTab(2);  counter.setStatevaoLocalStorage(); counter.opentabpersonal = 4; counter.setStatevaoLocalStorage1();"><button type="button" class="flex bg-sky-600  text-white  text-[15px] rounded-[5px] p-[3px] transition  ease select-none duration-100 hover:bg-sky-500  focus:outline-none focus:shadow-outline px-2  justify-center items-center"><router-link to="/personal/recharge" class="flex justify-center items-center"><font-awesome-icon icon="fa-solid fa-credit-card" class="mr-1 text-[17px]"/><h1 class="hidden lg:flex" v-if="counter.language==1">Nạp tiền</h1><h1 class="hidden lg:flex" v-if="counter.language==2">Recharge</h1></router-link></button></div>
        <div v-on:click=" counter.dangxuattaikhoan1('th');" class="flex items-center justify-center"><button type="button" class="bg-sky-600  text-white  text-[15px] rounded-[5px] p-[3px] transition duration-100 ease select-none hover:bg-sky-500  focus:outline-none focus:shadow-outline px-2 flex  justify-center items-center" ><router-link to="/" class="flex justify-center items-center"><font-awesome-icon icon="fa-solid fa-right-from-bracket" class="mr-1 text-[17px]"/><h1 class="hidden lg:flex" v-if="counter.language==1">Đăng xuất</h1><h1 class="hidden lg:flex" v-if="counter.language==2">Log out</h1></router-link></button></div>
      </div>
      <div class="flex gap-2 justify-center items-center" v-bind:class="{'hidden': counter.opentieudedangnhapp !== 2, 'block': counter.opentieudedangnhapp === 2}">
        <div v-on:click="counter.showDangnhap();" class="flex items-center "><button type="button" class=" bg-sky-600  text-white  text-[15px] rounded-[5px] p-[3px] transition duration-300 ease select-none hover:bg-sky-500  focus:outline-none focus:shadow-outline px-2 flex gap-1 justify-center items-center"><font-awesome-icon icon="fa-solid fa-user" /><h1 v-if="counter.language==1">Đăng nhập</h1><h1 v-if="counter.language==2">Log in</h1></button></div>
        <div class="flex items-center "><button type="button" v-on:click="counter.showDangnhap(); counter.openDangki(2); counter.openBgdangki(2);" class=" bg-sky-600  text-white  text-[15px] rounded-[5px] p-[3px] transition duration-300 ease select-none hover:bg-sky-500 focus:outline-none focus:shadow-outline px-2 flex gap-1 justify-center items-center"><font-awesome-icon icon="fa-solid fa-square-plus" /><h1 v-if="counter.language==1">Đăng kí</h1><h1 v-if="counter.language==2">Register</h1></button></div>
      </div>   
    </div>
  </div>

  <!-- Các loại bảng hiện ra màn hình -->

  <!-- I.Bảng đăng nhập , đăng kí -->
  <div v-if="counter.showdangnhap" class=" flex opacity-60 fixed inset-0 z-20 bg-black dark:bg-gray-300 dark:opacity-30 cursor-pointer" v-on:click="counter.showDangnhap(); counter.openDangki(1); counter.openBgdangki(1); counter.openDangkithanhcong(1); counter.openemail = null; grecaptcha.reset(this.counter.rctc1); grecaptcha.reset(this.counter.rctc);" ></div>
  <div v-if="counter.showdangnhap" class=" fixed  z-30 inset-0 flex flex-col gap-2 justify-center  sm:flex-row  min-h-[480px] max-h-[550px] sm:min-h-[480px] sm:max-h-[520px] sm:w-[645px] w-[320px] mx-auto my-auto bg-white dark:bg-slate-900 object-cover rounded-3xl drop-shadow-md px-2 py-2 ">
    <!-- Form login and register-->
    <div class="flex flex-col  w-full h-full mx-auto bg-gray-100 dark:bg-slate-800 dark:border-slate-900 border-solid border-2 border-gray-200 shadow-inner rounded-3xl px-2 py-2">
      <!-- Logo and cap -->
      <div class="flex flex-col items-center py-3">
        <div v-for="admin in counter.admins" class="" v-on:click=""><img class="w-[150px]" alt="Image" :src="admin.Avatar"/></div>
      </div>
      <!-- Form login -->
      <div class="flex flex-col justify-evenly w-full h-full " v-bind:class="{'hidden': counter.opendangki != 1, 'block': counter.opendangki == 1}">
        <div class="flex justify-center items-center   text-sky-600 dark:text-gray-200 font-bold text-[24px] antialiased " ><h1 v-if="counter.language==1">Đăng nhập tài khoản</h1><h1 v-if="counter.language==2">Log in to your account</h1></div>
        <div class="">
          <input
            type="text"
            class=" w-full px-3 py-1.5  bg-white dark:bg-slate-800 dark:text-gray-300 border-solid border-2 border-sky-600 rounded font-medium antialiased outline-none"
            id="exampleFormControlInput1"
            v-bind:placeholder="{'T':counter.language==1,'Username':counter.language==2}" v-model="counter.openusername"
          />
        </div>
        <div class="">
          <input
            type="password"
            class=" w-full px-3 py-1.5  bg-white dark:bg-slate-800 dark:text-gray-300 border-solid border-2 border-sky-600 rounded  font-medium antialiased outline-none"
            id="exampleFormControlInput1"
            placeholder="Password" v-model="counter.openpassword"
          />
        </div>
        <div v-show="counter.openthongbaoloidangnhap.so ==1 && counter.language ==1"  class="text-[13px] text-red-600 "><h1>{{ counter.openthongbaoloidangnhap.thongbao }}</h1></div>
        <div v-show="counter.openthongbaoloidangnhap.so ==1 && counter.language ==2"  class="text-[13px] text-red-600 "><h1>{{ counter.openthongbaoloidangnhap.thongbaoenglish }}</h1></div>
        <div v-show="counter.showcaptcha.so == 2"  id="g-recaptcha" data-callback="recaptchaCallback"   style="transform: scale(0.9); -webkit-transform: scale(0.9); transform-origin: 0 0; -webkit-transform-origin: 0 0;" v-bind:data-theme="{'light':counter.openMoon==1,'dark':counter.openMoon==2}"  data-sitekey="6LfaruMjAAAAALdEG9aH6Q2qIvlqHeotuCWe2dJs"></div>
        <div v-show="counter.thongbaoloixacthuccaptcha.so == 2 && counter.language ==1"  class="text-[13px] text-red-600 "><h1>{{ counter.thongbaoloixacthuccaptcha.thongbao }}</h1></div>
        <div v-show="counter.thongbaoloixacthuccaptcha.so == 2 && counter.language ==2"  class="text-[13px] text-red-600 "><h1>{{ counter.thongbaoloixacthuccaptcha.thongbaoenglish }}</h1></div>
        <div class="flex justify-between">
          <div class="flex gap-1 item-center">
            <div class="flex justify-center items-center" ><input type="checkbox"  v-model="counter.check_box" class="h-4 w-4  rounded accent-sky-600 cursor-pointer" id="Miss_me"/></div>
            <div v-on:click="resetct(); " class="text-gray-800 "><label class=" font-medium antialiased dark:text-gray-300" for="Miss_me"><h1 v-if="counter.language==1">Nhớ tôi</h1><h1 v-if="counter.language==2">Miss me</h1></label></div>
          </div>
          <div v-on:click="counter.showDoimatkhau(); counter.showDangnhap(); " class="flex items-center justify-center text-[13px]"><a class="text-slate-800 dark:text-gray-300 hover:text-[15px]  underline font-medium antialiased" href="#!"><h1 v-if="counter.language==1">Quên mật khẩu ?</h1><h1 v-if="counter.language==2">Forgot password ?</h1></a></div>
        </div>
        <div v-show="counter.showcaptcha.so==1" v-on:click="rendercaptchadangnhap(); counter.showcaptcha.so=2;"  id="submit-btn" class=" font-bold text-[14px] " ><button  class=" py-1.5 bg-sky-600  text-white  uppercase rounded hover:bg-sky-500   duration-100 w-full " type="button"><h1 v-if="counter.language==1">Đăng nhập</h1><h1 v-if="counter.language==2">Log in</h1></button></div>
        <div v-show="counter.showcaptcha.so==2" v-on:click="counter.dangnhaptaikhoanvataocookie();"  id="submit-btn" class=" font-bold text-[14px] " ><button  class=" py-1.5 bg-sky-600  text-white  uppercase rounded hover:bg-sky-500   duration-100 w-full " type="button"><h1 v-if="counter.language==1">Đăng nhập</h1><h1 v-if="counter.language==2">Log in</h1></button></div>
      </div>
      <!-- Form register -->
      <div class="flex flex-col justify-evenly h-full " v-bind:class="{'hidden': counter.opendangki != 2, 'block': counter.opendangki == 2}">
        <div class="flex justify-center items-center  text-sky-600  font-bold antialiased text-[24px]"><h1 v-if="counter.language==1">Đăng kí tài khoản</h1><h1 v-if="counter.language==2">Sign up for an account</h1></div>
        <div class="flex flex-col  ">
          <input
            type="text"
            class=" w-full px-3 py-1.5  bg-white dark:bg-slate-800 dark:text-gray-300 rounded border-solid border-2 border-sky-600 outline-none font-medium antialiased"
            id="exampleFormControlInput1"
            placeholder="Email address" v-model="counter.openemail"
          />
        </div>
        <div class=" flex flex-col ">
          <input
            type="text"
            class=" w-full px-3 py-1.5  bg-white dark:bg-slate-800 dark:text-gray-300 rounded border-solid border-2 border-sky-600 outline-none font-medium antialiased"
            id="exampleFormControlInput1"
            placeholder="Username" v-model="counter.openusername"
          />
        </div>
        <div class=" flex flex-col">
          <input
            type="password"
            class=" w-full px-3 py-1.5  bg-white dark:bg-slate-800 dark:text-gray-300 rounded border-solid border-2 border-sky-600 outline-none font-medium antialiased"
            id="exampleFormControlInput1"
            placeholder="Password" v-model="counter.openpassword"
          />
        </div>
        <div v-show="counter.thongbaoloidangkitaikhoan.so == 2 && counter.language == 1"  class=" flex text-[13px] text-red-600  font-medium"><h1>{{ counter.thongbaoloidangkitaikhoan.thongbao }}</h1></div>
        <div v-show="counter.thongbaoloidangkitaikhoan.so == 2 && counter.language == 2"  class=" flex text-[13px] text-red-600  font-medium"><h1>{{ counter.thongbaoloidangkitaikhoan.thongbaoenglish }}</h1></div>
        <div v-show="counter.showcaptcha.so == 2"  id="g-recaptcha1" data-callback="recaptchaCallback"   style="transform: scale(0.9); -webkit-transform: scale(0.9); transform-origin: 0 0; -webkit-transform-origin: 0 0;" data-theme="light" data-sitekey="6LfaruMjAAAAALdEG9aH6Q2qIvlqHeotuCWe2dJs"></div>
        <div v-show="counter.thongbaoloixacthuccaptcha.so == 2 && counter.language == 1"  class="text-[13px] text-red-600 "><h1>{{ counter.thongbaoloixacthuccaptcha.thongbao }}</h1></div>
        <div v-show="counter.thongbaoloixacthuccaptcha.so == 2 && counter.language == 2"  class="text-[13px] text-red-600 "><h1>{{ counter.thongbaoloixacthuccaptcha.thongbaoenglish }}</h1></div>
        <div v-show="counter.showcaptcha.so==1" class=" font-bold text-[14px]"><button v-on:click="rendercaptchadangki(); counter.showcaptcha.so=2;" class=" py-1.5 bg-sky-600  text-white  uppercase rounded hover:bg-sky-500    duration-100 w-full " type="button"><h1 v-if="counter.language==1">Đăng kí</h1><h1 v-if="counter.language==2">Register</h1></button></div>
        <div v-show="counter.showcaptcha.so==2" class=" font-bold text-[14px]"><button v-on:click="  counter.dangkitaikhoan();" class=" py-1.5 bg-sky-600  text-white  uppercase rounded hover:bg-sky-500    duration-100 w-full " type="button"><h1 v-if="counter.language==1">Đăng kí</h1><h1 v-if="counter.language==2">Register</h1></button></div>
      </div>
      <!-- thông báo đăng kí thành công tài khoản -->
      <div class="flex flex-col  gap-2 py-12" v-show="counter.opendangkithanhcong == 2" >
        <div class="flex justify-center items-center mb-1 text-lime-600 text-[23px] font-bold"><h1 v-if="counter.language==1">Đăng kí thành công !</h1><h1 v-if="counter.language==2">Sign Up Success !</h1></div>
        <div class=" flex justify-center items-center mt-2 font-bold  text-lime-600 "><font-awesome-icon icon="fa-solid fa-circle-check" class="text-5xl"/></div>
      </div>
      <!-- Background Register and Login khi < sm  -->
      <div class="flex flex-col mt-5 gap-1 sm:hidden">
        <div class="flex justify-center items-center gap-1" v-bind:class="{'hidden': counter.openbgdangki !== 1 , 'block': counter.openbgdangki === 1 }">
          <div class="text-[14px] text-lime-900 hover:text-lime-700 dark:text-lime-600 dark:hover:text-lime-600  font-semibold antialiased"><h1 v-if="counter.language==1">Đăng kí tài khoản tại đây !</h1><h1 v-if="counter.language==2">Sign up for an account here !</h1></div>
          <div v-on:click="counter.openDangki(2); counter.openBgdangki(2); grecaptcha.reset(this.ciunter.rctc);" class=" flex items-center justify-center text-[11px]  font-bold bg-sky-600  h-[25px] w-[70px] rounded hover:bg-sky-500  cussor-pointer duration-300"><button class=" text-white  uppercase rounded " type="button"><h1 v-if="counter.language==1">Đăng kí</h1><h1 v-if="counter.language==2">Register</h1></button></div>
        </div>
        <div class="flex gap-1 items-center justify-center" v-bind:class="{'hidden': counter.openbgdangki !== 2, 'block':counter.openbgdangki === 2}">
          <div class="text-[14px] text-lime-900 hover:text-lime-700 dark:text-lime-600 dark:hover:text-lime-600  font-semibold antialiased"><h1 v-if="counter.language==1">Đăng nhập tài khoản tại đây !</h1><h1 v-if="counter.language==2">Log in to your account here !</h1></div>
          <div v-on:click="counter.openDangki(1); counter.openBgdangki(1); counter.openDangkithanhcong(1); grecaptcha.reset(this.counter.rctc1);" class=" flex items-center justify-center text-[11px]  font-bold bg-sky-600  h-[25px] w-[70px] rounded hover:bg-sky-500  cussor-pointer duration-300"><button class=" text-white  uppercase rounded " type="button"><h1 v-if="counter.language==1">Đăng nhập</h1><h1 v-if="counter.language==2">Log in</h1></button></div>
        </div>
      </div>
    </div>
    <!-- Background Register and Login -->
    <div class=" flex-col   items-center justify-evenly  min-w-[300px] max-w-[300px]  hidden sm:flex  ">
        <div class="flex flex-col text-[18px]  mb-2 text-sky-600  font-medium antialiased text-justify gap-2 ">
          <div class="text-[23px] mb-3 font-bold"><h1 v-if="counter.language==1">Tại sao chọn chúng tôi ?</h1><h1 v-if="counter.language==2">Why choose us ?</h1></div>
          <div class="text-[18px] flex gap-1  font-semibold">
            <font-awesome-icon icon="fa-solid fa-circle-check" class="text-[22px] mt-0.5"/>
            <div class="flex flex-col"><h1 v-if="counter.language==1">Giá rẻ nhất trên thị trường</h1><h1 v-if="counter.language==2">Cheapest on the market</h1><h1 class="text-[13px] font-medium" v-if="counter.language==1">Ở đâu bán rẻ - chúng tôi sẽ bán rẻ hơn</h1><h1 class="text-[13px] font-medium" v-if="counter.language==2">Where to sell cheap - we will sell cheaper</h1></div>
          </div>
          <div class="text-[18px] flex gap-1  font-semibold">
            <font-awesome-icon icon="fa-solid fa-shield-halved" class="text-[22px] mt-0.5"/>
            <div class="flex flex-col"><h1 v-if="counter.language==1">An toàn an ninh</h1><h1 v-if="counter.language==2">Safety and security</h1><h1 class="text-[13px] font-medium" v-if="counter.language==1">Không bán lại, dữ liệu  sau khi bán sẽ bị xóa hoàn toàn khỏi hệ thống</h1><h1 class="text-[13px] font-medium" v-if="counter.language==2">Do not resell, data after sale will be completely deleted from the system</h1></div>
          </div>
          <div class="text-[18px] flex gap-1  font-semibold">
            <font-awesome-icon icon="fa-solid fa-calendar-check" class="text-[22px] mt-0.5"/>
            <div class="flex flex-col"><h1 v-if="counter.language==1">Hỗ trợ đầy đủ các API</h1><h1 v-if="counter.language==2">Full API support</h1><h1 class="text-[13px] font-medium" v-if="counter.language==1">Dễ dàng tích hợp vào các công cụ của bạn thông qua các API được cung cấp</h1><h1 class="text-[13px] font-medium" v-if="counter.language==2">Easily integrate into your tools via provided API</h1></div>
          </div>
          <div class="text-[18px] flex gap-1  font-semibold">
            <font-awesome-icon icon="fa-solid fa-clock"  class="text-[22px] mt-0.5"/>
            <div class="flex flex-col"><h1 v-if="counter.language==1">Thời gian 99% hoạt động</h1><h1 v-if="counter.language==2">99% uptime</h1><h1 class="text-[13px] font-medium" v-if="counter.language==1">Dịch vụ hoàn toàn tự động và ổn định 100%</h1><h1 class="text-[13px] font-medium" v-if="counter.language==2">Fully automatic and 100% stable service</h1></div>
          </div>
          <div class="text-[18px] flex gap-1  font-semibold">
            <font-awesome-icon icon="fa-solid fa-headset" class="text-[22px] mt-0.5"/>
            <div class="flex flex-col"><h1 v-if="counter.language==1">Hỗ trợ 24/7</h1><h1 v-if="counter.language==2">24/7 support</h1><h1 class="text-[13px] font-medium" v-if="counter.language==1">Đội ngũ hỗ trợ kỹ thuật sẽ hỗ trợ bạn 24/7 khi gặp sự cố</h1><h1 class="text-[13px] font-medium" v-if="counter.language==2">Technical support team will support you 24/7 in case of problems</h1></div>
          </div>
          <!-- <div class="text-[18px] flex"><h1>Công cụ tiện ích miễn phí</h1></div> -->
        </div>
        <div v-bind:class="{'hidden': counter.openbgdangki !== 1, 'block': counter.openbgdangki === 1}" class="flex flex-col justify-center items-center">
          <div v-on:click="counter.openDangki(2); counter.openBgdangki(2); grecaptcha.reset(this.counter.rctc);" class="flex gap-1 select-none cursor-pointer justify-center items-center mx-5 text-center text-green-900 dark:text-green-600 hover:text-green-700 dark:hover:text-green-500  font-semibold antialiased"><font-awesome-icon icon="fa-regular fa-hand-point-right" class="text-[25px]"/><h1 class="text-[20px] font-bold underline" v-if="counter.language==1">Đăng kí tài khoản !</h1><h1 class="text-[20px] font-bold underline" v-if="counter.language==2">Sign up for an account !</h1></div>
          <!-- <div v-on:click="counter.openDangki(2); counter.openBgdangki(2);" class=" flex items-center justify-center text-[14px] mx-5 mt-3.5 font-bold bg-sky-600 dark:bg-yellow-300 h-[33px] w-[100px] rounded hover:bg-orange-600 dark:hover:bg-lime-400 cussor-pointer"><button class=" text-white dark:text-blue-700 uppercase rounded duration-100" type="button">Đăng kí</button></div> -->
        </div>
        <div v-bind:class="{'hidden': counter.openbgdangki !== 2, 'block': counter.openbgdangki === 2}" class="flex flex-col justify-center items-center">
          <div v-on:click="counter.openDangki(1); counter.openBgdangki(1); counter.openDangkithanhcong(1); grecaptcha.reset(this.counter.rctc1);" class="flex gap-1 cursor-pointer select-none justify-center items-center mx-5 text-center text-green-900 dark:text-green-600 hover:text-green-700 dark:hover:text-green-500  font-semibold antialiased"><font-awesome-icon icon="fa-regular fa-hand-point-right" class="text-[25px]"/><h1 v-if="counter.language==1" class="text-[20px] font-bold underline">Đăng nhập tài khoản !</h1><h1 v-if="counter.language==2" class="text-[20px] font-bold underline">Login account !</h1></div>
          <!-- <div v-on:click="counter.openDangki(1); counter.openBgdangki(1); counter.openDangkithanhcong(1);" class=" flex items-center justify-center text-[14px] mx-5 mt-3.5 font-bold bg-sky-600 dark:bg-yellow-300 h-[33px] w-[100px] rounded hover:bg-orange-600 dark:hover:bg-lime-400 cussor-pointer"><button class=" text-white dark:text-blue-700 uppercase rounded duration-100" type="button">Đăng nhập</button></div> -->
        </div>
    </div>
  </div>

  <!-- II.Bảng lấy lại mật khẩu -->
  <div v-if="counter.showdoimatkhau" class=" flex opacity-50 fixed inset-0 z-40 bg-black dark:bg-gray-300 dark:opacity-30 cursor-pointer" v-on:click="counter.showDoimatkhau(); counter.openDoimatkhau(1);" ></div>
  <div v-if="counter.showdoimatkhau" class="fixed inset-0 z-50 flex flex-col justify-between items-center shadow-md text-sky-600  rounded-3xl bg-white dark:bg-slate-900  object-cover w-[330px] h-[260px] mx-auto my-auto px-2 pt-2 ">
    <!-- Header -->
    <div class="flex  bg-gray-100 dark:bg-slate-800 dark:border-none border-solid border-2 border-gray-200 rounded-t-3xl rounded-b shadow-inner px-2 py-2 w-full justify-center items-center">
      <div class="font-semibold antialiased"><h1 v-if="counter.language==1">Chúng tôi sẽ giúp bạn lấy lại mật khẩu</h1><h1 v-if="counter.language==2">We will help you recover your password</h1></div>
    </div>
    <!-- Body -->
    <!-- Nhap Email -->
    <div v-if="counter.opendoimatkhau == 1"  class="flex mt-2 flex-col dark:bg-slate-800 dark:border-none  bg-gray-100 border-solid border-2 border-gray-200 shadow-inner items-center   w-full rounded  min-h-[150px] max-h-[150px] justify-evenly">
      <div class="text-center font-semibold antialiased w-full"><h1 v-if="counter.language==1">Nhập địa chỉ "Email" đã liên kết tài khoản </h1><h1 v-if="counter.language==2">Enter the "Email" address associated with the account </h1></div>
      <div class="flex flex-col items-center justify-center "><input
            type="text"
            class="font-medium text-center antialiased w-8/9 px-3 py-1.5  bg-white dark:bg-slate-900  rounded outline-none text-black dark:text-gray-300 border-solid border-2 border-sky-600"
            id="exampleFormControlInput1"
            placeholder="Email address" v-model="counter.openemailcheck"
          />
          <div v-show="counter.thongbaocheckmail.so == 1 && counter.language == 1"><h1 class="text-red-600 text-[13px] mt-1 font-medium antialiased">{{ counter.thongbaocheckmail.thongbao }}</h1></div>
          <div v-show="counter.thongbaocheckmail.so == 1 && counter.language == 2"><h1 class="text-red-600 text-[13px] mt-1 font-medium antialiased">{{ counter.thongbaocheckmail.thongbaoenglish }}</h1></div>
        </div>
        <!-- <div><h1 class="text-red-600 text-[13px]">Email cung cấp không hợp lệ !</h1></div> -->
    </div>
    <!-- Chon tk  -->
    <div v-if="counter.opendoimatkhau == 2" class="flex mt-2 flex-col dark:bg-slate-800 dark:border-none  bg-gray-100 border-solid border-2 border-gray-200 shadow-inner items-center   w-full rounded  min-h-[150px] max-h-[150px] justify-evenly font-semibold">
      <div class="text-center"><h1 v-if="counter.language==1">Chọn tài khoản cần lấy lại mật khẩu</h1><h1 v-if="counter.language==2">Select the account to recover the password</h1></div>
      <div class="flex flex-col  justify-center gap-2">
        <div v-for="usitem in counter.ketquacheckmail.data" class="flex items-center font-medium antialiased">
          <div class="form-check">
            <input type="radio" :value=usitem.username v-model="counter.userlinkemail" class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-600 bg-white checked:bg-sky-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" >
          </div>
          <div class="flex items-center justify-center"><h1 class="text-[15px]">{{ usitem.username }}</h1></div>
          <div v-show="counter.opentab == 100" class="flex items-center justify-center"><h1 class="text-[15px]">{{ usitem.id }}</h1></div>
        </div>
      </div>
    </div>
    <!-- Nhap ma otp on your Email -->
    <div v-if="counter.opendoimatkhau == 3" class="flex mt-2 flex-col dark:bg-slate-800 dark:border-none  bg-gray-100 border-solid border-2 border-gray-200 shadow-inner items-center   w-full rounded  min-h-[150px] max-h-[150px] justify-evenly font-semibold">
      <div class="text-center font-semibold antialiased"><h1 v-if="counter.language==1">Nhập mã chúng tôi đã gửi đến địa chỉ "Email" của bạn.</h1><h1 v-if="counter.language==2">Enter the code we sent to your "Email" address.</h1></div>
      <div class="flex flex-col justify-center items-center gap-1 ">
        <div class="flex items-center justify-center"><input
            type="number"
            class="font-medium text-center antialiased w-1/2 px-3 py-1.5  bg-white dark:bg-slate-900 dark:text-gray-300 border-solid border-2 border-sky-600 rounded outline-none text-black"
            id="exampleFormControlInput1"
            placeholder="Code" v-model="counter.codeOTP"
          /></div>
        <div v-show="counter.thongbaoloiOTP.so==1 && counter.language == 1" class="cursor-default font-medium antialiased text-red-600 text-[13px] flex flex-col items-center justify-center"><h1>{{ counter.thongbaoloiOTP.thongbao }}</h1><a class="font-medium antialiased text-slate-800  hover:text-slate-900  underline " v-on:click="counter.guiOTPdenEmail();"><h1 v-if="counter.language==1">Gửi lại mã xác nhận !</h1><h1 v-if="counter.language==2">Resend confirmation code !</h1></a></div>
        <div v-show="counter.thongbaoloiOTP.so==1 && counter.language == 2" class="cursor-default font-medium antialiased text-red-600 text-[13px] flex flex-col items-center justify-center"><h1>{{ counter.thongbaoloiOTP.thongbaoenglish }}</h1><a class="font-medium antialiased text-slate-800  hover:text-slate-900  underline " v-on:click="counter.guiOTPdenEmail();"><h1 v-if="counter.language==1">Gửi lại mã xác nhận !</h1><h1 v-if="counter.language==2">Resend confirmation code !</h1></a></div>
      </div>
    </div>
    <!-- Nhap mk mơi  -->
    <div v-if="counter.opendoimatkhau == 4" class="flex mt-2 flex-col dark:bg-slate-800 dark:border-none  bg-gray-100 border-solid border-2 border-gray-200 shadow-inner items-center   w-full rounded  min-h-[150px] max-h-[150px] justify-evenly font-semibold">
      <div class="text-center font-semibold antialiased"><h1 v-if="counter.language==1">Vui lòng tạo một mật khẩu mới.</h1><h1 v-if="counter.language==2">Please create a new password.</h1></div>
      <div class="flex flex-col gap-1 justify-center items-center">
        <div class="flex justify-center "><input
              type="password"
              class="font-medium text-center antialiased w-8/9 px-3 py-1.5  bg-white dark:bg-slate-900 dark:text-gray-300 rounded outline-none  text-black border-solid border-2 border-sky-600"
              id="exampleFormControlInput1"
              placeholder="A new password" v-model="counter.resetpassword"
            /></div>
          <div  class="font-medium antialiased text-[13px] text-red-600" v-show="counter.ketquaresetpassword.so == 1 && counter.language == 1"><h1>{{ counter.ketquaresetpassword.thongbao }}</h1></div>
          <div  class="font-medium antialiased text-[13px] text-red-600" v-show="counter.ketquaresetpassword.so == 1 && counter.language == 2"><h1>{{ counter.ketquaresetpassword.thongbaoenglish }}</h1></div>
        </div>
    </div>
    <!-- thong bao doi mk thanh cong -->
    <div v-if="counter.opendoimatkhau == 5" class="flex flex-col h-[950px] py-4 items-center text-[14px] border-b-2 rounded border-lime-900 x-12 text-lime-600 justify-center">
      <div class="text-center"><h1 v-if="counter.language==1">Đổi mật khẩu thành công.</h1><h1 v-if="counter.language==2">Change password successfully.</h1></div>
      <div class="flex justify-center "><font-awesome-icon icon="fa-solid fa-circle-check" class="text-4xl"/></div>
    </div>
    <!-- Footer -->
    <div v-on:click=" counter.usercheckmail();" v-if="counter.opendoimatkhau == 1" class=" flex justify-center items-center w-full h-full font-semibold text-[14px] my-auto  antialiased"><button class=" antialiased py-1 px-2 bg-sky-600 text-white rounded  hover:bg-sky-500  duration-100  " type="button"><h1 v-if="counter.language==1">Tiếp theo</h1><h1 v-if="counter.language==2">Next</h1></button></div>
    <div v-on:click="counter.openDoimatkhau(3); counter.guiOTPdenEmail();" v-if="counter.opendoimatkhau == 2" class=" flex justify-center items-center w-full h-full font-semibold text-[14px] my-auto  antialiased"><button class=" antialiased py-1 px-2 bg-sky-600 text-white rounded  hover:bg-sky-500  duration-100  " type="button"><h1 v-if="counter.language==1">Tiếp theo</h1><h1 v-if="counter.language==2">Next</h1></button></div>
    <div v-on:click=" counter.SosanhOTP();" v-if="counter.opendoimatkhau == 3" class=" flex justify-center items-center w-full h-full font-semibold text-[14px] my-auto  antialiased"><button class=" antialiased py-1 px-2 bg-sky-600 text-white rounded  hover:bg-sky-500  duration-100  " type="button"><h1 v-if="counter.language==1">Tiếp theo</h1><h1 v-if="counter.language==2">Next</h1></button></div>
    <div v-on:click=" counter.ResetPassword();" v-if="counter.opendoimatkhau == 4" class=" flex justify-center items-center w-full h-full font-semibold text-[14px] my-auto  antialiased"><button class=" antialiased py-1 px-2 bg-sky-600 text-white rounded  hover:bg-sky-500  duration-100  " type="button"><h1 v-if="counter.language==1">Tiếp theo</h1><h1 v-if="counter.language==2">Next</h1></button></div>
    <div v-on:click="counter.showDoimatkhau(); counter.openDoimatkhau(1);" v-if="counter.opendoimatkhau == 5" class=" flex justify-center items-center w-full h-full font-semibold text-[14px] my-auto  antialiased"><button class=" antialiased py-1 px-2 bg-sky-600 text-white rounded  hover:bg-sky-500  duration-100  " type="button"><h1 v-if="counter.language==1">Tiếp theo</h1><h1 v-if="counter.language==2">Next</h1></button></div>
  </div>


  <!-- Bảng quét mã QR để thanh toán -->
  <div v-show="counter.showbangqr == 2" class=" flex opacity-60 fixed inset-0 z-20 bg-black dark:bg-gray-300 dark:opacity-30 cursor-pointer" v-on:click=" counter.Showbangqr (1); counter.Manaptien(); counter.thongbaoloinhaptien=1; counter.sotiencannap=null;" ></div>
  <div v-show="counter.showbangqr == 2" class=" fixed inset-0 z-30 bg-white dark:bg-slate-900 w-[350px] sm:w-[700px] h-[600px] mx-auto my-auto flex flex-col  rounded drop-shadow-md overflow-auto">
    <div class="flex flex-col sm:flex-row">
      <div v-show="counter.tabmaqr==Bank_Name.id" v-for="Bank_Name in counter.bankinfor.data" class=" bg-gray-200 dark:bg-slate-800 mx-2 my-2 rounded shadow-inner  flex flex-col items-center sm:w-1/2 sm:mr-1 sm:justify-center ">
        <div class="w-[150px] h-[150px] mt-2"><img  alt="Image" class="" :src = "counter.URLServer + Bank_Name.Avatar" /></div>
        <div class="font-bold text-[20px] text-sky-900 dark:text-gray-200"><h1 v-if="counter.language==1">THÔNG TIN NẠP TIỀN</h1><h1 v-if="counter.language==2">DEPOSIT INFORMATION</h1></div>
        <div class="px-1 w-full flex flex-col text-sky-900 dark:text-gray-200 font-semibold mb-2">
          <div class="flex justify-between  py-3 border-b-2 border-sky-900 mx-2">
            <div class="flex gap-1"><div><font-awesome-icon icon="fa-solid fa-building-columns" /></div><div><h1 v-if="counter.language==1">Ngân hàng : </h1><h1 v-if="counter.language==2">Bank : </h1></div></div>
            <div :class="'text-' + Bank_Name.Main_Color"><h1>{{Bank_Name.Short_Name}}</h1></div>
          </div>
          <div class="flex justify-between  py-3 border-b-2 border-sky-900 mx-2">
            <div class="flex gap-1"><div><font-awesome-icon icon="fa-solid fa-credit-card" /></div><div><h1 v-if="counter.language==1">Số tài khoản : </h1><h1 v-if="counter.language==2">Account number : </h1></div></div>
            <div><h1>{{Bank_Name.Account_Number}}</h1></div>
          </div>
          <div class="flex justify-between  py-3 border-b-2 border-sky-900 mx-2">
            <div class="flex gap-1"><div><font-awesome-icon icon="fa-solid fa-user-ninja" /></div><div><h1 v-if="counter.language==1">Chủ tài khoản : </h1><h1 v-if="counter.language==2">Account holder : </h1></div></div>
            <div><h1>{{Bank_Name.Account_Name}}</h1></div>
          </div>
          <div class="flex justify-between  py-3 border-b-2 border-sky-900 mx-2">
            <div class="flex gap-1"><div><font-awesome-icon icon="fa-solid fa-money-bills" /></div><div><h1 v-if="counter.language==1">Số tiền cần thanh toán : </h1><h1 v-if="counter.language==2">Amount to be paid : </h1></div></div>
            <div><h1>{{counter.sotiencannap}}</h1></div>
          </div>
          <div class="flex justify-between  py-3 border-b-2 border-sky-900 mx-2">
            <div class="flex gap-1"><div><font-awesome-icon icon="fa-solid fa-message" /></div><div><h1 v-if="counter.language==1">Nội dung CK : </h1><h1 v-if="counter.language==2">Transfer contents : </h1></div></div>
            <div><h1>{{counter.manaptien}}</h1></div>
          </div>
          <div class="flex justify-between  py-3 border-b-2 border-sky-900 mx-2">
            <div class="flex gap-1"><div><font-awesome-icon icon="fa-solid fa-bell" /></div><div><h1>Trạng thái : </h1></div></div>
            <div><h1>ĐANG CHỜ THANH TOÁN</h1></div>
          </div>
        </div>
      </div>
      <div v-show="counter.tabmaqr==Bank_Name.id" v-for="Bank_Name in counter.bankinfor.data" class=" bg-gray-200 dark:bg-slate-800 dark:text-gray-200 mx-2 mb-1 rounded shadow-inner text-sky-900 flex flex-col items-center sm:w-1/2 sm:my-2 sm:ml-1 sm:justify-center">
        <div class="font-bold text-[20px] flex justify-center mb-2 mt-2"><h1 v-if="counter.language==1">QUÉT MÃ QR ĐỂ THANH TOÁN</h1><h1 v-if="counter.language==2">SCAN QR CODE TO PAY</h1></div>
        <div class="font-semibold text-center text-[14px] flex justify-center mx-2"><h1 v-if="counter.language==1">Sử dụng App Internet Banking hoặc ứng dụng camera hỗ trợ QR code để quét mã</h1><h1 v-if="counter.language==2">Use the Internet Banking App or a camera app that supports QR code to scan the code</h1></div>
        <div class="mx-1 my-1"><img  alt="Image" class="" :src ="Bank_Name.QR_Code_Link + 'accountName='+Bank_Name.Account_Name+'&amount='+counter.sotiencannap+'&addInfo='+counter.manaptien" /></div>
      </div>
    </div>
    <div class=" flex justify-center items-center font-semibold text-justify text-sky-900 dark:bg-slate-800 dark:text-gray-200 mx-2 mb-2 bg-gray-200 round shadow-inner rounded px-2 py-2"><h1 v-if="counter.language==1">Vui lòng nhập chính xác nội dung chuyển khoản để hệ thống kiểm tra và kích hoạt tự động. Tài khoản của bạn sẽ được cộng tiền sau 1 đến 5 phút.
      Nếu quá 5p tiền chưa vào tài khoản, bạn vui lòng liên hệ tại fanpage VANTHAI để được hỗ trợ.</h1><h1 v-if="counter.language==2">Please enter the exact transfer content for the system to check and activate automatically. Your account will be credited in 1 to 5 minutes.
      If more than 5p money has not been in your account, please contact VANTHAI fanpage for support.</h1></div>
  </div>

  <!-- Bảng thông báo nạp tiền thành công -->
  <div v-show="counter.showbangqr == 3" class=" flex opacity-60 fixed inset-0 z-20 bg-black dark:bg-gray-300 dark:opacity-30 cursor-pointer" v-on:click="counter.showbangqr=1; counter.Manaptien();" ></div>
  <div v-show="counter.showbangqr == 3" class=" fixed inset-0 z-30 bg-white dark:bg-slate-900 w-[350px]  h-[400px] mx-auto my-auto flex flex-col sm:flex-row rounded drop-shadow-md px-2 py-2">
    <div class="bg-gray-200 rounded  h-full w-full shadow-inner flex flex-col justify-center items-center px-2 py-2">
      <div class="flex flex-col justify-center text-[28px] font-bold text-lime-600 items-center mb-5 gap-1"><h1 v-if="counter.language==1">Nạp tiền thành công</h1><h1 v-if="counter.language==2">Recharge successful</h1><font-awesome-icon icon="fa-solid fa-circle-check" class="text-5xl"/></div>
      <div class="flex flex-col font-semibold w-full">
        <div class="flex w-full  items-center justify-between border-b-2 py-3 border-sky-900 text-sky-900"><h1 v-if="counter.language==1">Tài khoản :</h1><h1 v-if="counter.language==2">Account :</h1><h1>{{counter.thongbaoloiyeucaunaptien.data['Recharge data']['username']}}</h1></div>
        <div class="flex w-full  items-center justify-between border-b-2 py-3 border-sky-900 text-sky-900"><h1 v-if="counter.language==1">Mã đơn hàng :</h1><h1 v-if="counter.language==2">Code orders :</h1><h1>{{counter.thongbaoloiyeucaunaptien.data['Recharge data']['Code orders']}}</h1></div>
        <div class="flex w-full  items-center justify-between border-b-2 py-3 border-sky-900 text-sky-900"><h1 v-if="counter.language==1">Số tiền trước khi nạp :</h1><h1 v-if="counter.language==2">Amount before deposit :</h1><h1>{{counter.thongbaoloiyeucaunaptien.data['Recharge data']['Old amount']}}</h1></div>
        <div class="flex w-full  items-center justify-between border-b-2 py-3 border-sky-900 text-sky-900"><h1 v-if="counter.language==1">Số tiền đã nạp :</h1><h1 v-if="counter.language==2">Amount deposited :</h1><h1>+{{counter.thongbaoloiyeucaunaptien.data['Recharge data']['Amount deposited']}}</h1></div>
        <div class="flex w-full  items-center justify-between border-b-2 py-3 border-sky-900 text-sky-900"><h1 v-if="counter.language==1">Số tiền sau khi nạp :</h1><h1 v-if="counter.language==2">Amount after deposit :</h1><h1>{{counter.thongbaoloiyeucaunaptien.data['Recharge data']['New amount']}}</h1></div>
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
      username: null,
      password: null,
      datauser: null,
      
      
    }
  },
  methods:{
    rendercaptchadangnhap(){
      try{this.counter.rctc = grecaptcha.render('g-recaptcha', {
        'sitekey' : '6LfaruMjAAAAALdEG9aH6Q2qIvlqHeotuCWe2dJs'
      });}
      catch{
        this.counter.showcaptcha={so:2,nut:'cursor-not-allowed'};
        grecaptcha.reset(this.counter.rctc);
      } 
    },
    rendercaptchadangki(){
      try{this.counter.rctc1 = grecaptcha.render('g-recaptcha1', {
        'sitekey' : '6LfaruMjAAAAALdEG9aH6Q2qIvlqHeotuCWe2dJs'
      });}
      catch{
        this.counter.showcaptcha={so:2,nut:'cursor-not-allowed'};
        grecaptcha.reset(this.counter.rctc1)
      }
    },
    resetct(){
      grecaptcha.reset(this.counter.rctc);
    }
  },
  mounted:function(){
    this.counter.getCookievadangnhaptaikhoan();
    this.counter.dataAdmin();
  }

}
</script> 

<style >

</style>
<!-- <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async defer>
</script> -->
<!-- <script>
// For captcha
var onloadCallback = function() {
    grecaptcha.render('g-recaptcha', {
        'sitekey' : '6LfaruMjAAAAALdEG9aH6Q2qIvlqHeotuCWe2dJs'
    });
};
var recaptchaCallback = function () {
    let submit = document.getElementById('submit-btn')
    submit.classList.remove('disabled');
}
form = document.getElementById('dmca-report-form');
form.addEventListener('submit', function (e){
    if (grecaptcha && grecaptcha.getResponse().length !== 0) {
        this.submit();
    } else {
        alert('Please check captcha');
    }
    e.preventDefault();
})
</script> -->