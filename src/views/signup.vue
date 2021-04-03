<template>
  <div class="signup-box">
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
        placeholder="كلمة المرور"
      />
      <span style="color:black">
        أنا
      </span>
              <div>
        <select class="dropbtn" name="usertype" id="usertypes" @change="select" v-model="type">
          <option value="teacher">معلم</option>
          <option value="student">طالب</option>
          <option value="parent">ولي أمر</option>
        </select>
      </div>
    </div>
    <input @click.prevent="signup" type="submit" class="save" name="" value="تسجيل" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signup",
  data: function () {
    return {
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
<style>

.signup-box {
  height: 60%;
  width: 23%;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #08546c;
  text-align: center;
  border: 3px solid #022534;
  border-radius: 10px;
}

.signup-box input[type="text"],
.signup-box input[type="password"] {
  border: 0;
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
.signup-box input[type="text"]:focus,
.signup-box input[type="password"]:focus {
  width: 80%;
  border-color: #2ecc71;
}
.signup-box input[type="submit"] {
  border: 0;
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
.signup-box input[type="submit"]:hover {
  background: #2ecc71;
}

.dropbtn {
  border: 0;
  background: none;
  display: block;
  margin: 0px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 50%;
  outline: none;
  color: #22202080;
  border-radius: 24px;
  transition: 0.25s;
}
</style>
