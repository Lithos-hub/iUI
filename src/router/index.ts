import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("@/views/index.vue"),
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
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
