<template>
 <div class="box">


    <input type="text"  name="reg" placeholder="Email Address" id="reg" v-model="email">
    <input type="password" name="password" placeholder="Password" v-model="password" required title="please fill the password field">
    <div class="options">
        <label class="remember-me">
              <span class="checkbox">
                <input type="checkbox" v-model="remember">
                <span class="checked"></span>
              </span>
            Remember me
        </label>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <a href="#blackout" data-toggle="box" data-target="#blackout"  >Forgot Your Password !</a>

    </div>
    <input @click.prevent="login" type="submit" name="submit" value="Login" >
</div >


<div id="blackout">
    <div id="box">
        Forget your Password!
        <form class="a" action="forget.php" method="post">
            <div>
            
                <input type="text"   placeholder="Regestration number">
            </div>
            <div>

                <input type="text" size=20 id="email" name="em"  placeholder="Email">
            </div>
            <input type="submit"  class="save" name="" value="verify" >

        </form>

       

        <a href="#" class="close">Close window</a>
    </div>
</div>


</template>

<script>
import axiosinst from '../axios';
//import axios from "axios";
//axios.defaults.withCredentials=true;

export default {
    name: 'LogIn',
    data:function(){
      return{
        remember:false,
        email:"",
        password:"",
      }
    },
    methods:{
      login(){
        axiosinst.post("http://127.0.0.1:8000/api/loginUser",{
            email:this.email,
            password:this.password,
            remember:this.remember,
          }).then((res)=>{
            this.$router.push(res.data.link);
            this.token=res.data.token;
            this.$store.commit('ChTok',{token:res.data.token});
            window.localStorage.setItem('userToken',res.data.token);
            console.warn(window.localStorage.getItem('xx'));
            console.warn(window.localStorage.removeItem('xx'));
            window.localStorage.setItem('userToken',res.data.token);
            //this.$emit('token',res.data.token);
            console.info(res.data.token);
          }).catch((err)=>{
            console.error(err);
          });
      }
    }
}
</script>


<style>

body{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  
}


.box{
  height:60%;
  width: 23%;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #08546c;
  text-align: center;
  border: 3px solid #022534;
  border-radius: 10px;
}

.box input[type = "text"],.box input[type = "password"]{
  border:0;
  background: none;
  display: block;
  margin: 30px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 50%;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}
.box input[type = "text"]:focus,.box input[type = "password"]:focus{
  width: 80%;
  border-color: #2ecc71;
}
.box input[type = "submit"]{
  border:0;
  background: none;
  display: block;
  margin: 50px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}
.box input[type = "submit"]:hover{
  background: #2ecc71;
}
.options{
  margin-top: 15px;
  color: #f4f4f480;
  overflow: hidden;
  font-size: 14px;
}



      #blackout {
        background: rgba(102, 102, 102, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
      }
      #box {
        height:45%;
        width: 19%;
        text-align: center;
        padding: 50px;
        border: 3px solid #A0BACC;;
        border-radius: 10px;
        color: #3498db;
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        left: 10px;
        margin: auto;
        background: #022534;
      }
      #blackout:target {display: block;}
      .close {
        background: none;
        display: block;
        margin: 30px auto;
        text-align: center;
        border: 2px solid #2ecc71;
        padding: 14px 40px;
        outline: none;
        color: white;
        border-radius: 24px;
        transition: 0.25s;
        cursor: pointer;
        width: 100px;
      }
      .close:hover {background: #2ecc71;}
.a input[type = "text"]{
  border:0;
  background: none;
  display: block;
  margin: 30px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 50%;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}
.a input[type = "text"]:focus{
  width: 80%;
  border-color: #2ecc71;
}
.save {
  background: none;
  display: block;
  margin: 30px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}
.save:hover {background: #2ecc71;}
</style>