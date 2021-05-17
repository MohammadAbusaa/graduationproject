<template>
<body>
   <div class="box">
  <img :src=" user" alt="" style="width:50px;height:50px;">

    <input type="text"  name="reg" placeholder="البريد الالكتروني" id="reg" v-model="email">
    <input type="password" name="password" placeholder="كلمة السر" v-model="password" required title="please fill the password field">
    
    <div class="options">
       <a href="#blackout" data-toggle="box" data-target="#blackout" style=" margin-left:60px;" >هل نسيت كلمة السر؟</a>
        <label class="remember-me" style="color:black; ">
              <span class="checkbox">
                <input type="checkbox" v-model="remember">
                <span class="checked"></span>
        حفظ الحساب
              </span>
            
        </label>
        
        
      
       

    </div>
    <input @click.prevent="login" type="submit" name="submit" value="تسجيل الدخول" >
</div >


<div id="blackout">
    <div id="box">
              <div class="exit">
          <a href="#">
                  <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
                </a>
                </div>
        نسيت كلمة المرور
        <form class="a" action="forget.php" method="post">
            <div>
            
                <input type="text"   placeholder="Regestration number">
            </div>
            <div>

                <input type="text" size=20 id="email" name="em"  placeholder="Email">
            </div>
            <input type="submit"  class="save" name="" value="verify" >

        </form>

       

        
    </div>
</div>

</body>

</template>

<script>
import axiosinst from '../axios';
//import axios from "axios";
//axios.defaults.withCredentials=true;

export default {
    name: 'LogIn',
    data:function(){
      return{
             user:require('@/assets/user.png'),
               cancelLogo:require('@/assets/cancel.png'),
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


<style scoped>

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
  background: #f4f4f480;
  text-align: center;
  border: 3px solid #939b62;
  border-radius: 10px;
}

.box input[type = "text"],.box input[type = "password"]{
  border:0;
  background: none;
  display: block;
  margin: 30px auto;
  text-align: center;
  border: 2px solid #939b62;
  padding: 14px 10px;
  width: 50%;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}
.box input[type = "text"]:focus,.box input[type = "password"]:focus{
  width: 80%;
  border-color: #ff7b54;
}
.box input[type = "submit"]{
  border:0;
  background: none;
  display: block;
  margin: 50px auto;
  text-align: center;
  border: 2px solid #939b62;
  padding: 14px 40px;
  outline: none;
  color: rgb(3, 3, 3);
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}
.box input[type = "submit"]:hover{
  background: #939b62;
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
        border: 3px solid #939b62;
        border-radius: 10px;
        color: black;
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        left: 10px;
        margin: auto;
        background: #ffd56b;
      }
      #blackout:target {display: block;}

.a input[type = "text"]{
  border:0;
  background: none;
  display: block;
  margin: 30px auto;
  text-align: center;
  border: 2px solid #939b62;
  padding: 14px 10px;
  width: 50%;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}
.a input[type = "text"]:focus{
  width: 80%;
  border-color: #ff7b54;
}
.save {
  background: none;
  display: block;
  margin: 30px auto;
  text-align: center;
  border: 2px solid #939b62;
  padding: 14px 40px;
  outline: none;
    color: black;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}
.save:hover {background: #939b62;}




/* visited link */
a:visited {
  color: blue;
}

/* mouse over link */
a:hover {
  color: red;
}

/* selected link */
 .exit {
    margin-left: 104%;
    margin-top: -40px;
  }

</style>