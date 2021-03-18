import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import signup from "../views/signup.vue";
import About from "../views/About.vue";
import LogIn from "../views/LogIn.vue";
import dashboard from "../views/dashboard.vue";
import teacher from "../views/teacher.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  
  } ,
  {
    path: "/signup",
    name: "signup",
    component: signup
  } ,
  {
    path: "/LogIn",
    name: "LogIn",
    component: LogIn
  } ,
  {
    path:"/dashboard",
    name:"dashboard",
    component: dashboard
  },
  {
    path:"/teacher",
    name:"teacher",
    component:teacher
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
