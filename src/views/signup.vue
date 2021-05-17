<template>
  <body>
    <div class="signup-box">
      <img :src=" newacountLogo" alt="" style="width:50px;height:50px;">
    <div>
      <input type="text" v-model="name" placeholder="اسم المستخدم" />
    </div>
    <div>
      <input
        type="text"
        size="15"
        v-model="email"
        id="email"
        name="em"
        placeholder="البريد الالكتروني"
      />
      <input
        type="text"
        size="15"
        v-model="password"
        id="password"
        name="em"
        placeholder="كلمة السر"
      />
      <span style="color:black">
        أنا
      </span>
              <div>
        <select  class="dropbtn" name="usertype" id="usertypes" @change="select" v-model="type">
          <option value="teacher" >معلم</option>
          <option value="student">طالب</option>
          <option value="parent">ولي أمر</option>
        </select>
      </div>
    </div>
    <input @click.prevent="signup" type="submit" class="save" name="" value="تسجيل" />
  </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "signup",
  data: function () {
    return {
             newacountLogo:require('@/assets/accounts.png'),
      name: "",
      email: "",
      password: "",
      usertype: "",
      options:["teacher","student","parent"],
    };
  },
  methods:{
    signup(){
      axios.put("http://localhost:8000/api/SignUpUser",{
        name:this.name,
        email:this.email,
        password:this.password,
        type:this.usertype,
      }).then((res)=>{
        this.$router.push(res.data);
      }).catch((err)=>{
        alert(err.data);
      })
    },
    select(){
      this.usertype=this.options.indexOf(this.type);
    }
  }
};
</script>
<style scoped>
.signup-box {
  height: 75%;
  width: 23%;
  padding: 40px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f4f4f480;
  text-align: center;
  border: 3px solid #939b62;
  border-radius: 10px;
}

.signup-box input[type="text"],
.signup-box input[type="password"] {
  border: 0;
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
.signup-box input[type="text"]:focus,
.signup-box input[type="password"]:focus {
  width: 80%;
  border-color: #ff7b54;
}
.signup-box input[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 50px auto;
  text-align: center;
  border: 2px solid #939b62;
  padding: 14px 40px;
  outline: none;
  color: rgb(12, 11, 11);
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}
.signup-box input[type="submit"]:hover {
  background: #939b62;
}

.dropbtn {
  border: 0;
  background: none;
  display: block;
  margin: 0px auto;
  text-align: center;
  border: 2px solid #939b62;
  padding: 14px 10px;
  width: 50%;
  outline: none;
  color: #00000080;
  border-radius: 24px;
  transition: 0.25s;
}
</style>
