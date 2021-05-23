<template>
  <div id="nav" v-if="!['sturoom','teacher','student','chat','teacherroom','games','stugame','parents'].includes($route.name)">
<div id ="nav2">
    <router-link to="/" exact style=" font-size: 20px; margin-left:30px;">الصفحة الرئيسة</router-link> |
    <router-link to="/signup" style=" font-size: 20px; margin-right:40px; margin-left:30px;">انشاء حساب </router-link>|
    <router-link to="/LogIn" style=" font-size: 20px;  margin-right:40px;">تسجيل الدخول</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss" scoped >
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
  width:700px;
  
  padding: 2%;

margin-left: 50%;}

#nav {
  margin: -1%;
 
  

  a {
    font-weight: bold;
    color: #939b62;
    text-decoration: none;

    &.router-link-exact-active {
      color: #022534;
    }
  }
}
</style>
