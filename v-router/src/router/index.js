import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Job from "@/views/job/Job.vue";
import JobDetail from "@/views/job/JobDetail.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/job",
    name: "Job",
    component: Job,
  },
  {
    path: "/job/:id",
    name: "JobDetail",
    component: JobDetail,
    props: true,
  },
  {
    // redirect
    path: "/all-jobs",
    redirect: "/job",
  },
  {
    // Not Found - 404
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
