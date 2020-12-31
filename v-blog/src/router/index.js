import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Detail from "@/views/Detail.vue";
import Create from "@/views/Create.vue";
import Tag from "@/views/Tag.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
