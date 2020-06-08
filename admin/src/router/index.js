import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/Main.vue"),
    children: [
      {
        path: "/products/edit",
        component: () => import("../views/ProductEdit.vue"),
        props: true,
      },
      {
        path: "/products/edit/:id",
        component: () => import("../views/ProductEdit.vue"),
        props: true,
      },
      {
        path: "/products/list",
        component: () => import("../views/ProductList.vue"),
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
