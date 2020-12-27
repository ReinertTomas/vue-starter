import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ProjectAdd from "@/views/ProjectAdd.vue";
import ProjectEdit from "@/views/ProjectEdit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "ProjectAdd",
    component: ProjectAdd,
  },
  {
    path: "/edit/:id",
    name: "ProjectEdit",
    component: ProjectEdit,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
