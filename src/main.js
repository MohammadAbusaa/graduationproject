import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import  axiosinst from "./axios";
import Vuex from "vuex";

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

  app.config.globalProperties.$http = axiosinst;
  app.config.globalProperties.token='hi';
  app.mount("#app");
