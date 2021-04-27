import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AppShell from "../components/AppShell.vue";
import EmpSysRouter from "../emp-system/EmpSysRouter";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "",
    redirect: "emp-system/employees",
    component: AppShell,
    children: [...EmpSysRouter()],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
