import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../layouts/HomeLayout.vue";
import SidebarLayout from "../layouts/SidebarLayout.vue";
import SettingAdminLayout from "../layouts/SettingAdminLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/",
      component: HomeLayout,
      children: [
        {
          path: "/",
          component: () => import("../views/HomeView.vue"),
        },
      ]
    },
    {
      path: "/personal",
      name: "personal",
      redirect: "/personal/information",
      component: SidebarLayout,
      children: [
        {
          path: "/personal/information",
          component: () => import("../views/SidebarView/PersonalView.vue"),
        },
        {
          path: "/personal/accuracy",
          component: () => import("../views/SidebarView/AccuracyView.vue"),
        },
        {
          path: "/personal/changepassword",
          component: () => import("../views/SidebarView/ChangePassword.vue"),
        },
        {
          path: "/personal/recharge",
          component: () => import("../views/SidebarView/RechargeView.vue"),
        },
      ]
    },
    {
      path: "/history",
      name: "history",
      redirect: "/history",
      component: HomeLayout,
      children: [
        {
          path: "/history",
          component: () => import("../views/HistoryView.vue"),
        },
      ]
    },
    {
      path: "/APIdocumentation",
      name: "documentation",
      redirect: "/APIdocumentation",
      component: HomeLayout,
      children: [
        {
          path: "/APIdocumentation",
          component: () => import("../views/APIdocumentationView.vue"),
        },
      ]
    },
    {
      path: "/StatisticalAdmin/Anaconda",
      name: "settingadmin",
      // redirect: "/settingAdmin",
      component: SettingAdminLayout,
      // children: [
      //   {
      //     path: "/APIdocumentation",
      //     component: () => import("../views/APIdocumentationView.vue"),
      //   },
      // ]
    },
  ],
  // scrollBehavior() {
  //   window.scrollTo(0,0);
  // },
});

export default router;
