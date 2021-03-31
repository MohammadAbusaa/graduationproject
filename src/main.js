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
  },
  mutations:{
    ChTok(state,payload){
      state.userToken=payload.token
    },
  },
});
app.use(vxStore);
window.Pusher=require('pusher-js');
window.Echo=new Echo({
  broadcaster:'pusher',
  key:'1b6878a214bf043139cd',
  cluster:'eu',
  forceTLS:true,
  encrypted:true,
  authEndpoint:'http://localhost:8000/api/broadcasting/auth',
  auth:{
    headers:{
      Authorization: "Bearer "+window.localStorage.getItem('userToken'),
    }
  }
});
var ch=window.Echo.channel('room');
ch.listen('.PostSent',(data)=>{
  alert(JSON.stringify(data));
});
  app.config.globalProperties.$http = axiosinst;
  app.config.globalProperties.token='hi';
  app.mount("#app");
