import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import PostForm from "@/views/Post/Create.vue";
import PostDetail from "@/views/Post/Detail.vue";
import Tag from "@/views/Tag/Tag.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/posts/create",
    name: "post-create",
    component: PostForm,
  },
  {
    path: "/posts/detail/:id",
    name: "post-detail",
    component: PostDetail,
  },
  {
    path: "/tags/:tag",
    name: "tag",
    component: Tag,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
