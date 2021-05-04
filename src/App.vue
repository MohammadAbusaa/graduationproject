<template>
  <div id="nav" v-if="!['sturoom','teacher','student','chat','teacherroom'].includes($route.name)">
  <div id ="nav2">
    <router-link to="/" exact>الصفحة الرئيسة</router-link> |
    <router-link to="/about">حول الصفحة </router-link>|
    <router-link to="/signup">انشاء حساب </router-link>|
    <router-link to="/LogIn">تسجيل الدخول</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
.body {
background-color: #DBF9FC;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #474a4d;
  
}

#nav2 {
  
  padding: 2%;

margin-left: 70%;}

#nav {
  background:#08546c ;
  margin: -1%;
 
  

  a {
    font-weight: bold;
    color: #A0BACC;

    &.router-link-exact-active {
      color: #022534;
    }
  }
}
</style>
