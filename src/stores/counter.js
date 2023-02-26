import { defineStore } from 'pinia';
import axios from 'axios';

import VueCookies from 'vue-cookies'
import { fa0 } from '@fortawesome/free-solid-svg-icons';

import {useRoute} from 'vue-router';

const Route = useRoute();
    

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { URLServer:'https://todayserver.store',URLServerF:'http://127.0.0.1',openMoon:1, openDark:'darkk', opentieudedangnhap:1, showdangnhap:false, opendangki:1, openbgdangki:1, 
             showdoimatkhau: false, opendoimatkhau:1, showbangthongtin: false,opendangkithanhcong:1,
             showbangmuasanpham:false, showbangmuathanhcongsanpham:false,showbangmuakhongthanhcongsanpham:false,openinformation:0,openimage:0,
             opensoluong:null,openthongtincanhan:{token:'th'},openemail:null,openusername:null,openpassword:null,openmoney:0,openiduser:null,
             cookie:null,opentokenuser:{},usertokenid:null,items:null,opentieudedangnhapp:1,datauser:null,admins:null,trangthaidangki:{"data":{"email":["e"],"username":["u"],"password":["p"]}},
             openthongbaoloiemail:{thongbao:'thong bao e',so:2},openthongbaoloiusername:{thongbao:'thong bao u',so:2},openthongbaoloipassword:{thongbao:'thong bao p',so:2},Statusdangnhap:'th',
             openthongbaoloidangnhap:{thongbaoenglish:'thong bao dn',thongbao:'thong bao dn',so:2},matkhaucu:null,matkhaumoi:null,nhaplaimatkhaumoi:null,
             thongbaodoimatkhauthanhcong:{thongbao:'thong bao tc',so:3,thongbaoenglish:'th'},openthongtincanhan1:{data:{status:100}},openemailcheck:null,ketquacheckmail:[{username:1}],thongbaocheckmail:{thongbao:'thong bao p',so:2},userlinkemail:null,
             noichuoi:'((thai))',codeOTP:null,ketquasosanhOTP:{data:[]},thongbaoloiOTP:{thongbao:'thong bao u',so:2},resetpassword:'',ketquaresetpassword:{thongbao:'th',so:2,status:'th'},dulieulichsugiaodich:{data:{Data:[{Content:'','Buy_Data':'\r\n','Payment_Amount':'','Code_Orders':''}]}},
             product_name_buy:null,quantity_buy:null,thongbaoloidangkitaikhoan:{so:1,thongbao:'th'},thongtindoimatkhau:null,tabnaptien_CRYPTO:1,menu_CRYTOP:false,BgCl:'',
             loithongbaomua:{thongbao:'thong bao u',so:2},iten:{Name:'th'},thongbaoloimuahang:{thongbao:'thong bao u',so:2},thongbaoloitaifileTxt:null,tabnaptien:1,quetmaqr:1,bankinfor:{data:'th'},cryptoinfor:[],infor_CRYPTO:{},manaptien:null,manganhang:null,sotiencannap:null,showbangqr:1,tabmaqr:null,
             thongbaoloiyeucaunaptien:{data:{"Error message":'th',"Recharge data":{"username":'th',"Old amount":0,"Amount deposited":0,"New amount":0},}},thongbaoloinhaptien:1,matxemtoken:true,copythanhcong:1,
             showbangchitietdonhang:'th',CodeOderHistory:null,NamePoductHistory:null,prehistory:null,showcaptcha:{so:1,nut:'cursor-not-allowed'},thongbaoloixacthuccaptcha:{so:1,thongbao:'th',thongbaoenglish:'th'},reponseCaptcha:'',rctc:null,rctc1:null,rctc2:null,pagehistory:1,seachcode:null,sttlsgd:1,language:1,
             tabapi:2,tabadmin:1,thongkethanhvien:[],stv:'',stvlg:'',thongketaichinh:[],stc:'',stctt:'',check_box:false,site_key_captcha2:'6LfaruMjAAAAAPFwSCuW4-Yda-D-CN8JqZWq6M9O',ON_OFF:'OFF',data_on_off:'',showbangmatkhaucap2:1,showbangloadingmatkhaucap2:1,Password_Level_2:'',thongbaoloimatkhaucap2:{thongbao:'',so:1},
             Route:useRoute(),tab_parent:{home_page:'/',
                                      personal_page_information:'/personal/information',
                                      personal_page_accuracy:'/personal/accuracy',
                                      personal_page_changepassword:'/personal/changepassword',
                                      personal_recharge:'/personal/recharge',
                                      personal_history:'/history',
                                      personal_APIdocumentation:'/APIdocumentation',
                                     },

                              
                              
             
  }
  },

  getters: {
    cookievalue: (state) => state.openthongtincanhan.token + "(Theta)" + state.openthongtincanhan.id,
  },

  actions: {
    BrightDark(aa,bb) {
      this.openMoon = aa;
      this.openDark = bb;
    },
    openTieudedangnhap(aa) {
      this.opentieudedangnhap = aa;
    },
    openTieudedangnhapp(aa) {
      this.opentieudedangnhapp = aa;
    },
    get_unpw(){
      if(VueCookies.get("missme_checkbox")=='true'){
        this.check_box = VueCookies.get("missme_checkbox");
        this.openusername = VueCookies.get("unpw").split("eab42d241cad8d")[0];
        this.openpassword = VueCookies.get("unpw").split("eab42d241cad8d")[1];
      }
      else{
        this.openusername = null;
        this.openpassword = null;
      }
    }
    ,
    // remove_unpw(){
    //   if(this.check_box==false){
    //     VueCookies.set(this.check_box,'false');
    //     VueCookies.remove("unpw",this.URLServerF);
    //   }
    // },
    showDangnhap() {
      this.showdangnhap = !this.showdangnhap;
      this.openthongbaoloidangnhap = {thongbao:'thong bao dn',so:2};
      // this.Statusdangnhap = null;

      this.openemail = null;
      // this.openusername = null;
      // this.openpassword = null;
      this.get_unpw();
      this.thongbaoloidangkitaikhoan = {so:1,thongbao:'th'}
      this.opendangkithanhcong = 1;
      this.showcaptcha.so = 1;

      this.showcaptcha={so:1,nut:'cursor-not-allowed'};
      this.thongbaoloixacthuccaptcha={so:1,thongbao:'th'};
      // grecaptcha.reset('g-recaptcha');
    },
    openDangki(aa) {
      this.opendangki = aa;

      this.openemail = null;
      this.openusername = null;
      this.openpassword = null;
      this.thongbaoloidangkitaikhoan = {so:1,thongbao:'th'}
      this.opendangkithanhcong = 1;
      this.showcaptcha.so = 1;

      this.showcaptcha={so:1,nut:'cursor-not-allowed'};
      this.thongbaoloixacthuccaptcha={so:1,thongbao:'th'};
      // grecaptcha.reset('g-recaptcha');
    },
    openBgdangki(aa) {
      this.openbgdangki = aa;
      this.openthongbaoloidangnhap={thongbao:'thong bao dn',so:2};
      // this.Statusdangnhap = null;
    },
    showDoimatkhau() {
      this.showdoimatkhau = !this.showdoimatkhau;
      this.thongbaocheckmail = {thongbao:'thong bao p',so:2}
    },
    openDoimatkhau(aa) {
      this.opendoimatkhau = aa;
    },
    openTab() {
      this.thongbaodoimatkhauthanhcong = {thongbao:'thong bao o_p',thongbaoenglish:'thong bao o_p',so:3};
      this.matkhaucu = null;
      this.matkhaumoi = null;
      this.nhaplaimatkhaumoi =  null;
      this.setStatevaoLocalStorage1();
      this.setStatevaoLocalStorage();

    },
    showBangthongtin() {
      this.showbangthongtin = !this.showbangthongtin;
    },
    openDangkithanhcong(aa) {
      this.opendangkithanhcong = aa;
    },
    showBangmuasanpham() {
      this.showbangmuasanpham = !this.showbangmuasanpham;
    },
    showBangmuathanhcongsanpham() {
      this.showbangmuathanhcongsanpham = !this.showbangmuathanhcongsanpham;
    },
    showBangmuakhongthanhcongsanpham() {
      this.showbangmuakhongthanhcongsanpham = !this.showbangmuakhongthanhcongsanpham;
    },
    openTabpersonal() {
      this.thongbaodoimatkhauthanhcong = {thongbao:'thong bao o_p',thongbaoenglish:'thong bao o_p',so:3};
      this.matkhaucu = null;
      this.matkhaumoi = null;
      this.nhaplaimatkhaumoi =  null;
    },
    openInformation(aa) {
      this.openinformation = aa;
    },
    openImage(aa) {
      this.openimage = aa;
    },
    openSoluong(aa) {
      this.opensoluong = aa;
    },
    async refreshData(){
      await axios.get(this.URLServer+'/product_home_page/').then((response) => {this.items=response.data});
      setTimeout(this.refreshData, 60000);
    },
    dataAdmin(){
      axios.get(this.URLServer+'/admininfor/?format=json').then((response) => {this.admins=response.data});
      this.get_unpw();
    },
    async dangkitaikhoan(){
      try{
        this.reponseCaptcha = grecaptcha.getResponse(this.rctc1);
        if (this.reponseCaptcha.length != 0){
          this.thongbaoloixacthuccaptcha={so:1,thongbao:'Chưa xác thực Captcha !'}
          this.thongbaoloidangkitaikhoan = {so:1,thongbao:'th'}
          this.trangthaidangki = await axios({method:'post',url: this.URLServer+'/createuser/',data:{"email":this.openemail,"username":this.openusername,"password":this.openpassword,"captchav2":this.reponseCaptcha}});
          this.thongbaoloidangkitaikhoan = {so:1,thongbao:'th'}
          this.openemail = null;
          this.openusername = null;
          this.openpassword = null;
          this.opendangki = 3;
          this.opendangkithanhcong = 2;
        }else{this.thongbaoloixacthuccaptcha={so:2,thongbao:'Chưa xác thực Captcha !',thongbaoenglish:'Captcha not authenticated !'}}
      }
      catch (error) {
        this.trangthaidangki = error.response; 
        this.thongbaoloidangkitaikhoan.so = 2;
        this.thongbaoloidangkitaikhoan.thongbao = this.trangthaidangki.data['Error message'];
        this.thongbaoloidangkitaikhoan.thongbaoenglish = this.trangthaidangki.data['Error message English'];
        this.opendangkithanhcong = 1;
        grecaptcha.reset(this.rctc1);
      }
    },
    async dangxuattaikhoan(aa){
      this.datauser = await axios({method:'post',url: this.URLServer+'/user/auth/logoutall/',headers: {Authorization: 'Token ' + this.openthongtincanhan.token }});
      this.datauser = await this.datauser.data;
      this.openthongtincanhan = aa;
      this.openthongbaoloidangnhap={thongbao:'thong bao dn',so:2};
      this.openthongbaoloiemail = {thongbao:'thong bao e',so:2};
      this.openthongbaoloiusername = {thongbao:'thong bao u',so:2};
      this.openthongbaoloipassword = {thongbao:'thong bao p',so:2};
      // this.Statusdangnhap = null;
      VueCookies.remove("username");
      this.opentokenuser = {};
      this.opentieudedangnhap = 1;
      this.opentieudedangnhapp = 1;
      this.thongbaodoimatkhauthanhcong = {thongbao:'thong bao o_p',thongbaoenglish:'thong bao o_p',so:3};
      this.matkhaucu = null;
      this.matkhaumoi = null;
      this.nhaplaimatkhaumoi =  null;
    },
    async dangxuattaikhoan1(aa){
      this.datauser = await axios({method:'post',url: this.URLServer+'/user/auth/logoutall/',headers: {Authorization: 'Token ' + this.openthongtincanhan.token }});
      this.datauser = await this.datauser.data;
      this.openthongtincanhan  = aa;
      this.openthongbaoloidangnhap={thongbao:'thong bao dn',so:2};
      this.openthongbaoloiemail = {thongbao:'thong bao e',so:2};
      this.openthongbaoloiusername = {thongbao:'thong bao u',so:2};
      this.openthongbaoloipassword = {thongbao:'thong bao p',so:2};
      // this.Statusdangnhap = null;
      VueCookies.remove("username");
      this.opentokenuser = {};
      this.opentieudedangnhap = 1;
      this.opentieudedangnhapp = 1;
      this.thongbaodoimatkhauthanhcong = {thongbao:'thong bao o_p',thongbaoenglish:'thong bao o_p',so:3};
      this.matkhaucu = null;
      this.matkhaumoi = null;
      this.nhaplaimatkhaumoi =  null;
    },
    openThongtincanhan(aa){
      this.openthongtincanhan = aa
    },
    setCookie(){
      VueCookies.set("username", this.openthongtincanhan.token + "eab42d241cad8d" + this.openthongtincanhan.id,"7d");
    },
    async dangnhaptaikhoanvataocookie(){
      try{
        this.reponseCaptcha = grecaptcha.getResponse(this.rctc);
        if (this.reponseCaptcha.length != 0){
          this.thongbaoloixacthuccaptcha={so:1,thongbao:'th'};
          this.showdangnhap =! this.showdangnhap;
          this.showbangloadingmatkhaucap2 = 2;
          this.openthongtincanhan = await axios({method:'post',url: this.URLServer+'/login/',data: {"username": this.openusername,"password": this.openpassword,"captchav2":this.reponseCaptcha}});
          this.showbangloadingmatkhaucap2 = 1;
          this.Statusdangnhap = this.openthongtincanhan.status;
          if(this.Statusdangnhap==200){
            this.openthongtincanhan = await this.openthongtincanhan.data;
            if(this.check_box==true){
              VueCookies.set("missme_checkbox","true","15d");
              VueCookies.set("unpw",this.openusername+"eab42d241cad8d"+this.openpassword,"15d");
            }
            else{
              VueCookies.set("missme_checkbox","false","15d");
              VueCookies.set("unpw",'null'+"eab42d241cad8d"+'null',"15d");
            }
            this.showbangloadingmatkhaucap2 = 1;
            this.openTieudedangnhap(2);
            this.setCookie();
            this.opentieudedangnhapp = 1;
            this.TransactionHistory();
            this.openthongbaoloidangnhap.so = 2;
          }
          if(this.Statusdangnhap==201){
            this.openthongtincanhan = await this.openthongtincanhan.data;
            if(this.check_box==true){
              VueCookies.set("missme_checkbox","true","15d");
              VueCookies.set("unpw",this.openusername+"eab42d241cad8d"+this.openpassword,"15d");
            }
            else{
              VueCookies.set("missme_checkbox","false","15d");
              VueCookies.set("unpw",'null'+"eab42d241cad8d"+'null',"15d");
            }
            this.showbangloadingmatkhaucap2 = 1;
            this.showbangmatkhaucap2 = 2;
          }
        }else{this.thongbaoloixacthuccaptcha={so:2,thongbao:'Chưa xác thực Captcha !',thongbaoenglish:'Captcha not authenticated !'}}
      }
      catch(error){
        this.openthongtincanhan = error.response;
        this.Statusdangnhap = this.openthongtincanhan.status;
        if(this.Statusdangnhap==400){
          this.openthongbaoloidangnhap.thongbao = this.openthongtincanhan.data['Error message'];
          this.openthongbaoloidangnhap.thongbaoenglish = this.openthongtincanhan.data['Error message English'];
          this.openthongbaoloidangnhap.so = 1;
          this.openthongtincanhan = {token:'th'};
          grecaptcha.reset(this.rctc);
        }
        else if(this.Statusdangnhap==500){
          this.openthongbaoloidangnhap.thongbao = "Hệ thống cho rằng bạn là người máy, đăng nhập không thành công. Yêu cầu đăng nhập lại!";
          this.openthongbaoloidangnhap.thongbaoenglish = "The system thinks you are a robot, login failed. Login again required !";
          this.openthongbaoloidangnhap.so = 1;
          this.openthongtincanhan = {token:'th'};
          grecaptcha.reset(this.rctc);
        }
      }
    },
    async getCookievadangnhaptaikhoan_cap2(){
      try{
        this.openthongtincanhan = await axios({method:'post',url: this.URLServer+'/login_Two_factor_authentication/',data: {"username": this.openusername,"password": this.openpassword,"Password_Level_2":this.Password_Level_2}});
        this.openthongtincanhan = await this.openthongtincanhan.data;
        this.showbangmatkhaucap2 = 1;
        this.openTieudedangnhap(2);
        this.setCookie();
        this.opentieudedangnhapp = 1;
        this.TransactionHistory();
        this.openthongbaoloidangnhap.so = 2;
        this.thongbaoloimatkhaucap2 ={thongbao:'',so:1};
      }
      catch(error){
        this.thongbaoloimatkhaucap2 = {thongbao:error.response.data,so:2}
      }
    },
    async getCookievadangnhaptaikhoan(){
      try{
        this.usertokenid = await VueCookies.get("username").split("eab42d241cad8d");
        this.opentokenuser = await this.usertokenid[0];
        this.openiduser = await this.usertokenid[1];
        this.openthongtincanhan = await axios({method:'post',url: this.URLServer+'/keeplogin/',data:{"id":this.openiduser,"token":this.opentokenuser},headers: {Authorization: 'Token ' + this.opentokenuser }});
        this.openthongtincanhan =  await this.openthongtincanhan.data.data_user;
        this.opentieudedangnhap = 1;
        this.TransactionHistory();
      }
      catch{
        this.opentokenuser = {}
      }
    },
    async on_off_2_factor_authentication(){
      this.data_on_off = await axios({method:'post',url: this.URLServer+'/on_off_2_factor_authentication/',data:{"id":this.openiduser,"token":this.opentokenuser,"ON_OFF":this.ON_OFF},headers: {Authorization: 'Token ' + this.openthongtincanhan.token }});
      await this.getCookievadangnhaptaikhoan();
      this.data_on_off = this.data_on_off.data.ON_OFF;
    },
    setStatevaoLocalStorage(){
      localStorage.setItem('opentab', this.opentab);
    },
    setStatevaoLocalStorage1(){
      localStorage.setItem('opentabpersonal', this.opentabpersonal);
    },
    getStatetuLocalStorage(){
        this.opentab = localStorage.getItem('opentab');
        this.opentabpersonal = localStorage.getItem('opentabpersonal');
    },
    async doimatkhaumoi(){
      try{
        this.reponseCaptcha = grecaptcha.getResponse(this.rctc2);
        if (this.reponseCaptcha.length != 0){
          this.thongbaoloixacthuccaptcha={so:1,thongbao:'th'};
          this.thongtindoimatkhau = await axios({method:'patch',url: this.URLServer+'/changepassword/',data: {"username": this.openthongtincanhan.username,"password": this.matkhaucu,token:this.openthongtincanhan.token,new_password:this.matkhaumoi,confirm_new_password:this.nhaplaimatkhaumoi,"captchav2":this.reponseCaptcha},headers:{Authorization: 'Token ' + this.opentokenuser }});
          if(this.thongtindoimatkhau.status==200){
            this.thongbaodoimatkhauthanhcong.so = 1;
            this.thongbaodoimatkhauthanhcong.thongbao = this.thongtindoimatkhau.data['Update information'];
            this.thongbaodoimatkhauthanhcong.thongbaoenglish = this.thongtindoimatkhau.data['Update information English'];
          }
        }else{this.thongbaoloixacthuccaptcha={so:2,thongbao:'Chưa xác thực Captcha !',thongbaoenglish:'Captcha not authenticated !'}}
      }
      catch(error){
        this.thongtindoimatkhau = error.response;
        if(this.thongtindoimatkhau.status==400){
          this.thongbaodoimatkhauthanhcong.so = 2;
          this.thongbaodoimatkhauthanhcong.thongbao = this.thongtindoimatkhau.data['Error message'];
          this.thongbaodoimatkhauthanhcong.thongbaoenglish = this.thongtindoimatkhau.data['Error message English'];
          if(this.thongtindoimatkhau.data['non_field_errors'] != null && this.thongtindoimatkhau.data['non_field_errors'] != ''){
            this.thongbaodoimatkhauthanhcong.thongbao = 'Thông tin xác thực không hợp lệ !';
            this.thongbaodoimatkhauthanhcong.thongbaoenglish = 'Invalid credentials !';
          }
          grecaptcha.reset(this.rctc2);
        }
        // else if(this.opentieudedangnhapp.data.password[0]=='This field may not be blank.'){
        //   this.openthongbaoloidangnhap.thongbao = "Thông tin đăng nhập không hợp lệ !";
        //   this.openthongbaoloidangnhap.so = 1;
        //   this.openthongtincanhan = {token:'th'}; 
        // }
        else if(this.thongtindoimatkhau.status==401){
          this.thongbaodoimatkhauthanhcong.so = 2;
          this.thongbaodoimatkhauthanhcong.thongbao = 'Thông tin đăng nhập xác thực không được cung cấp !'
          this.thongbaodoimatkhauthanhcong.thongbaoenglish = 'Authentication credentials were not provided !'
          grecaptcha.reset(this.rctc2);
        }
        else if(this.thongtindoimatkhau.status==500){
          this.thongbaodoimatkhauthanhcong.so = 2;
          this.thongbaodoimatkhauthanhcong.thongbao = this.thongtindoimatkhau.data['Error message'];
          this.thongbaodoimatkhauthanhcong.thongbaoenglish = this.thongtindoimatkhau.data['Error message English'];
          grecaptcha.reset(this.rctc2);
        }
      }
    },
    async usercheckmail(){
      try{
        this.ketquacheckmail = await axios({method:'post',url: this.URLServer+'/filteruser/',data:{"email":this.openemailcheck}});
        this.thongbaocheckmail = {thongbao:"Email cung cấp có tồn tại trong hệ thống !",thongbaoenglish:"Email provided exists in the system !",so:2}
        this.opendoimatkhau = 2;  
      }
      catch(error){
        this.ketquacheckmail = error.response;
        this.thongbaocheckmail = {thongbao:"Email không hợp lệ !",thongbaoenglish:"Invalid email !",so:1};
      }
    },
    async guiOTPdenEmail(){
      await axios({method:'patch',url: this.URLServer+'/sendotp/',data:{"email":this.openemailcheck,"username":this.userlinkemail}});
    },
    async SosanhOTP(){
      try{
        await axios({method:'post',url: this.URLServer+'/compareotp/',data:{"email":this.openemailcheck,"username":this.userlinkemail,"OTP":this.codeOTP}});
        this.openDoimatkhau(4);
        thongbaoloiOTP = {thongbao:'thong bao u',so:2};
      }
      catch(error){
        this.thongbaoloiOTP = {thongbao:'Mã OTP không chính xác!',thongbaoenglish:'Incorrect OTP code !',so:1}
      }      
    },
    async ResetPassword(){
      try{
        this.ketquaresetpassword = await axios({method:'patch',url: this.URLServer+'/resetpassword/',data: {"email":this.openemailcheck,"username": this.userlinkemail,"OTP":this.codeOTP,"password": this.resetpassword}});
        this.openDoimatkhau(5);
        this.ketquaresetpassword = {thongbao:'th',so:2}
      }
      catch (error) {
        this.ketquaresetpassword = {thongbao:error.response.data["Error message"],thongbaoenglish:error.response.data["Error message English"],so:1}
      }      
    },
    async TransactionHistory(){
      try{
        this.dulieulichsugiaodich = await axios({method:'post',url: this.URLServer+'/transactionhistoryuser/',data:{"username":this.openthongtincanhan.username,"token":this.openthongtincanhan.token,"pagehistory":this.pagehistory,"seachcode":this.seachcode},headers:{Authorization: 'Token ' + this.openthongtincanhan.token }});
      }
      catch (error) {
        this.dulieulichsugiaodich = error.response;  
      }      
    },
    async MuaHang(){
      try{
        this.thongbaoloimuahang = await axios({method:'get',url: this.URLServer+'/buydata/',params:{"product_name_buy":this.product_name_buy,"quantity_buy":this.quantity_buy,"user_buy":this.openthongtincanhan.username,"token":this.openthongtincanhan.token}});
        this.showBangmuathanhcongsanpham();
        this.quantity_buy = null;
        this.product_name_buy = null;
        this.getCookievadangnhaptaikhoan();
      }
      catch (error) {
        this.thongbaoloimuahang = error.response;
        this.showBangmuakhongthanhcongsanpham();
        this.quantity_buy = null;
        this.product_name_buy = null;  
      }      
    },
    gantenmathang(aa){
      this.product_name_buy = aa;
    },
    async DownloadFileTxt(){
      try{
        this.thongbaoloitaifileTxt = await axios({method:'post',url: this.URLServer+'/downloadfiletxt/',data:{"CodeOrders":this.thongbaoloimuahang.data["Order details"]["Code orders"],"token":this.openthongtincanhan.token},headers: {Authorization: 'Token ' + this.openthongtincanhan.token },responseType: 'blob'}).then((response) => {
          // create file link in browser's memory
          const href = URL.createObjectURL(response.data);
      
          // create "a" HTML element with href to file & click
          const link = document.createElement('a');
          link.href = href;
          link.setAttribute('download', this.thongbaoloimuahang.data["Order details"]["Product name buy"]+'_'+this.thongbaoloimuahang.data["Order details"]["Code orders"]+'.txt'); //or any other extension 'Product name buy'
          document.body.appendChild(link);
          link.click();
      
          // clean up "a" element & remove ObjectURL
          document.body.removeChild(link);
          URL.revokeObjectURL(href);
      });
        
      }
      catch (error) {
        this.thongbaoloitaifileTxt = error.response;
      }      
    },
    async DownloadFileTxt1(aa){
      try{
        this.thongbaoloitaifileTxt = await axios({method:'post',url: this.URLServer+'/downloadfiletxt/',data:{"CodeOrders":this.CodeOderHistory,"token":this.openthongtincanhan.token},headers: {Authorization: 'Token ' + this.openthongtincanhan.token },responseType: 'blob'}).then((response) => {
          // create file link in browser's memory
          const href = URL.createObjectURL(response.data);
      
          // create "a" HTML element with href to file & click
          const link = document.createElement('a');
          link.href = href;
          link.setAttribute('download', aa +'_'+this.CodeOderHistory +'.txt'); //or any other extension
          document.body.appendChild(link);
          link.click();
      
          // clean up "a" element & remove ObjectURL
          document.body.removeChild(link);
          URL.revokeObjectURL(href);
      });
        
      }
      catch (error) {
        this.thongbaoloitaifileTxt = error.response;
      }      
    },
    TabNaptien(aa){
      this.tabnaptien = aa;
    },
    Showbangqr(aa){
      this.showbangqr = 1;
    },
    async BankInfor(){
      await axios.get(this.URLServer+'/bankinfor/').then((response) => {this.bankinfor=response});
      this.tabnaptien = this.bankinfor.data[0].id;
      this.BgCl = this.bankinfor.data[0].Background_Color
    },
    async CryptoInfor(){
      await axios.get(this.URLServer+'/cryptoinfor/').then((response) => {this.cryptoinfor=response.data});
      this.infor_CRYPTO = this.cryptoinfor[0];
    },
    async YeucauNaptien(){
      try{
        this.thongbaoloiyeucaunaptien = await axios({method:'post',url: this.URLServer+'/sendrechargedata/',data:{"Code_Orders":this.manaptien, "Payment_Amount":this.sotiencannap,"username":this.openthongtincanhan.username},headers:{Authorization:'Token ' + this.openthongtincanhan.token}});
        this.showbangqr = 3;
        this.thongbaoloinhaptien = 1;
        this.sotiencannap = null;
        this.getCookievadangnhaptaikhoan();
      }
      catch (error) {
        this.thongbaoloiyeucaunaptien = {data:{"Error message":'th',"Recharge data":{"username":'th',"Old amount":0,"Amount deposited":0,"New amount":0}}}
        this.thongbaoloiyeucaunaptien.data['Error message'] = error.response.data['Error message'];
        this.thongbaoloinhaptien = 2;
        this.showbangqr = 1;
      }      
    },
    Manganhang(aa){
      this.manganhang = aa
    },
    async Manaptien(aa){
      this.manganhang = aa;
      var char_list = "0123456789";
      var code =""
      for(var i=0; i < 8 ; i++ ){  
      code += char_list.charAt(Math.floor(Math.random() * char_list.length));
      }
      if( String(this.manganhang) == 'VIETINBANK'){ this.manganhang = 'VTB' ; this.manaptien = this.manganhang  + code ;}
      if( String(this.manganhang) == 'VIETCOMBANK'){ this.manganhang = 'VCB' ; this.manaptien = this.manganhang  + code ;}
      if( String(this.manganhang) == 'ACB'){ this.manganhang = 'ACB' ; this.manaptien = this.manganhang  + code ;}
    },
    // async ThongtinNganhang(){
    //   try{
    //     this.thongtinnganhang = await axios({method:'get',url: 'https://oauth.casso.vn/v2/accounts/123',headers:{Authorization:'Apikey ' + 'AK_CS.dbc1b9408b8911eda17e354cdb928ab8.cVRDj9wUBk84YUQpRW9mPJ3ZwRkVTMOL3f5U8OweoNcyOuCIek8mJoBXD8HuWumkuCatos7c'}});
    //   }
    //   catch (error) {
    //     this.thongtinnganhang = error.response;
    //   }
    // },
    Copythanhcongg(){
      this.copythanhcong = 1;
    },
    Copythanhcong(){
      this.copythanhcong = 2;
      setTimeout(this.Copythanhcongg, 1000);
    },
    // captcha(){
    //   this.rctc = grecaptcha.render('g-recaptcha', {
    //     'sitekey' : '6LfaruMjAAAAALdEG9aH6Q2qIvlqHeotuCWe2dJs'
    // });
    // },
    // reponseCaptcha(){
    //   this.reponseCaptcha = grecaptcha.getResponse(this.rctc);
    // }, 
    async Thongkethanhvien(){
      this.thongkethanhvien = await axios({method:'get',url: this.URLServer+'/statistical_server_user/'});
      this.thongkethanhvien = this.thongkethanhvien.data;
    },
    async Thongketaichinh(){
      this.thongketaichinh = await axios({method:'get',url: this.URLServer+'/statistical_server_money/'});
      this.thongketaichinh = this.thongketaichinh.data;
    },
  },
})

  
