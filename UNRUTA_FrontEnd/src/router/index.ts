import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/registro",
    name: "RegistroUsuario",
    component: () => import("@/components/registro.vue"),
  },
  {
    path: "/login",
    name: "LoginUsuario",
    component: () => import("@/components/login.vue"),
  },
  {
    path: "/",
    name: "HomeUsuario",
    component: () => import("@/components/home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;