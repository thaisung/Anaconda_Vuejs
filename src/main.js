import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import './assets/tailwind.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueCookies from 'vue-cookies';

import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faEnvelope,faSquarePhone,faGlobe,faSun,faUserNinja,faWallet, faMoon,faCircleCheck,faArrowsDownToLine,faIdBadge,faUserSecret,faKey,faHouse,faClockRotateLeft,faCircleInfo,faTags,faShop,faSackDollar,faEye,faCopy,faLink,faCreditCard,faCheck,
        faBuildingColumns,faC,faMoneyBills,faMessage,faBell,faRightFromBracket,faUser,faSquarePlus,faLanguage,faShieldHalved,faCalendarCheck,faClock,faHeadset,faMagnifyingGlass,faCaretRight,faCaretLeft,faFileLines,faArrowRightLong,faArrowLeftLong,faCaretDown,} from '@fortawesome/free-solid-svg-icons'

import {faSquareFacebook,faTelegram,faTiktok,faGoogleWallet,faPython,faJava,faPhp,faJs,faHtml5,faCss3,} from '@fortawesome/free-brands-svg-icons'

import {faHandPointRight,} from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(
            faEnvelope,faSquarePhone,faGlobe,faSun,faMoon,faUserNinja,faWallet,faHouse,faClockRotateLeft,
            faSquareFacebook,faTelegram,faTiktok,
            faGoogleWallet,
            faCircleCheck,
            faArrowsDownToLine,
            faIdBadge,faUserSecret,faKey,
            faCircleInfo,faTags,faShop,faSackDollar,faEye,faCopy,
            faLink,faCreditCard,faBuildingColumns,faMoneyBills,faMessage,faBell,faCheck,faRightFromBracket,faUser,faSquarePlus,
            faLanguage,faShieldHalved,faCalendarCheck,faClock,faHeadset,faHandPointRight,faMagnifyingGlass,faCaretRight,faCaretLeft,faFileLines,
            faArrowRightLong,faArrowLeftLong,faPython,faJava,faPhp,faJs,faHtml5,faCss3,faCaretDown,faC,
            )

const app = createApp(App);

const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'vi',
        availableLocales: ["vi", "en"],
        messages,
        fallbackLocale: 'vi',
     })
    
app.use(i18n);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia());

app.use(router);

app.use(VueAxios, axios);

app.use(VueCookies);

app.mount("#app");
