import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import signup from "../views/signup.vue";
import About from "../views/About.vue";
import LogIn from "../views/LogIn.vue";
import dashboard from "../views/dashboard.vue";
import teacher from "../views/teacher.vue";
import sturoom from "../views/studentroom.vue";
import student from "../views/student.vue";
import chat from "../views/chat.vue";
import teacherroom from "../views/teacherroom.vue";
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
  {
    path:"/studentroom",
    name:"sturoom",
    component:sturoom,
  },
  {
    path:"/student",
    name:"student",
    component:student,
  },
  {
    path:"/chat",
    name:"chat",
    component:chat,
  },
  {
    path:"/teacherroom",
    name:"teacherroom",
    component:teacherroom,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
