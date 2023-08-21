import { createRouter, createWebHistory } from "vue-router";
import { componentsRoutes } from "./componentsRoutes";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/about.vue"),
  },
  {
    path: "/iui",
    name: "iui",
    component: () => import("@/layouts/Default.vue"),
    redirect: {
      name: "iui:summary",
    },
    children: [
      {
        path: "/iui/summary",
        name: "iui:summary",
        component: () => import("@/views/summary.vue"),
      },
      ...componentsRoutes.map(({ component, path, name }) => ({
        path,
        name,
        component: () => import(`@/view/${component}`),
      })),
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
