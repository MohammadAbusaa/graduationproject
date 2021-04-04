import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import  axiosinst from "./axios";
import Vuex from "vuex";
import Echo from "laravel-echo";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(Vuex);
const vxStore=new Vuex.Store({
  state:{
    userToken:"",
    users:{},
    lastUser:{},
    user:'',
  },
  mutations:{
    ChTok(state,payload){
      state.userToken=payload.token
    },
    roomUsers(state,payload){
      state.users=payload.users;
      state.lastUser=state.lastUser[Object.keys(state.users)[Object.keys(state.users).length - 1]];
    },
    User(state,payload){
      state.user=payload.user;
    }
  },
});
app.use(vxStore);
window.Pusher=require('pusher-js');
window.Echo=new Echo({
  broadcaster:'pusher',
  key:'1b6878a214bf043139cd',
  cluster:'eu',
  forceTLS:false,
  encrypted:false,
  authEndpoint:'http://localhost:8000/api/broadcasting/auth',
  auth:{
    headers:{
      "Authorization": "Bearer "+window.localStorage.getItem('userToken'),

    }
  }
});
  app.config.globalProperties.$http = axiosinst;
  app.config.globalProperties.token='hi';
  app.mount("#app");
