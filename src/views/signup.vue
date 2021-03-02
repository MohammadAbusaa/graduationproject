<template>
  <form class="signup-box"  method="post" >
<a href="#manegerbox"   >  <div>انشاء حساب مدير
<img  src="../assets/manager.png" alt="" style="width:50px;height:50px;"> 
</div>
     </a>
     <br>
     <br>
     
     <a href="#teacherbox"   >  <div>انشاء حساب معلم
<img src="../assets/teacher.png" alt="" style="width:50px;height:50px;"> 
</div>
     </a>
     <br>
     <br>
         <a href="#studentbox"   >  <div>انشاء حساب طالب
<img src="../assets/student.png" alt="" style="width:50px;height:50px;"> 
</div>
     </a>
     <br>
     <br>
         <a href="#parentsbox"   >  <div>انشاء حساب ولي امر
<img src="../assets/parents.png" alt="" style="width:50px;height:50px;"> 
</div>
     </a>
     
   
</form >

<div id="manegerbox">
    <div id="box1">
        انشاء حساب جديد
        <form class="a" action="" method="post">
            <div>
            
                <input type="text"   v-model="manegername"  placeholder="اسم المستخدم">
            </div>
            <div>
  <input type="text" size=15  id="email" v-model="schoolname" name="em"  placeholder="اسم المدرسة">
                <input type="text" size=15 v-model="manegeremail"  id="email" name="em"  placeholder="البريد الالكتروني">
                 <input type="text" size=15 v-model="manegerpassword" id="password" name="em"  placeholder="كلمة المرور">
            </div>
            <input type="submit"  class="save" name="" value="تسجيل" >  

        </form> 
        <a href="#" class="close">Close window</a>
    </div>
</div>

<div id="teacherbox">
    <div id="box2">
        انشاء حساب جديد
        <form class="a" action="" method="post">
            <div>
            
                <input type="text" v-model="teachername"  placeholder="اسم المستخدم">
            </div>
            <div>
 <input type="text" size=20 id="email" v-model="teacherspecialization" name="em"  placeholder="التخصص">
                <input type="text" size=20 id="email" v-model="teacheremail" name="em"  placeholder="البريد الالكتروني">
                 <input type="text" size=20 id="email" v-model="teacherpassword" name="em"  placeholder="كلمة المرور">
            </div>
            <input type="submit"  class="save" name="" value="تسجيل" >
            
        </form>
        <a href="#" class="close">Close window</a>
    </div>
</div>

<div id="studentbox">
    <div id="box3">
        انشاء حساب جديد
        <form class="a" action="" method="post">
            <div>
            
                <input type="text" v-model="studentname"  placeholder="اسم المستخدم">
            </div>
            <div>
        <input type="text" size=20 id="email" v-model="studentclass" name="em"  placeholder="الصف">
                <input type="text" size=20 id="email" v-model="studentemail" name="em"  placeholder="البريد الالكتروني">
                 <input type="text" size=20 id="email" v-model="studentpassword" name="em"  placeholder="كلمة المرور">
            </div>
            <input type="submit"  class="save" name="" value="تسجيل" >
            
        </form>
        <a href="#" class="close">Close window</a>
    </div>
</div>

<div id="parentsbox">
    <div id="box4">
        انشاء حساب جديد
        <form class="a" action="" method="post">
            <div>
            
                <input type="text" v-model="parentname"  placeholder="اسم المستخدم">
            </div>
            <div>

              
                <input type="text" size=20 id="email" v-model="parentemail" name="em"  placeholder="البريد الالكتروني">
                 <input type="text" size=20  id="email" v-model="parentpassword" name="em"  placeholder="كلمة المرور">
            </div>
           
            <input type="submit"  class="save" name="" value="تسجيل" >
            
        </form>
        <a href="#" class="close">Close window</a>
    </div>
</div>

</template>

<script>
export default {
    name: 'signup' ,
    data:  function(){
     return {
     manegername: '' , 
     schoolname:'',
       manegeremail: '' , 
        manegerpassword: '' ,

        teachername:'' ,
        teacherspecialization:'',
        teacheremail:'',
        teacherpassword:'',

         studentname:'' ,
         studentclass:'',
        studentemail:'',
       studentpassword:'',

        parentname:'' ,
        parentemail:'',
        parentpassword:'',


      
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

img{
  width:100%;
  margin: -13px auto;
}
a{
  color: #f4f4f480;
  text-decoration:none
}
a:hover {
  color: #3498db;
}
a:active {
  color: blue;
}

.signup-box{
  height:40%;
  width: 23%;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #08546c;
  text-align: center;
  border: 3px solid  #022534;
  border-radius: 10px;
}

.options{
  margin-top: 15px;
  color: #022534;
  overflow: hidden;
  font-size: 14px;
}



      #manegerbox {
        background: rgba(102, 102, 102, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
      }
      #box1 {
        height:70%;
        width: 19%;
        text-align: center;
        padding: 50px;
        border: 3px solid  #A0BACC;
        border-radius: 10px;
        color:  #A0BACC;
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        left: 10px;
        margin: auto;
        background: #022534;
      }
      #manegerbox:target {display: block;}
      .close {
        background: none;
        display: block;
        margin: 30px auto;
        text-align: center;
        border: 2px solid #08546c;
        padding: 14px 40px;
        outline: none;
        color: white;
        border-radius: 24px;
        transition: 0.25s;
        cursor: pointer;
        width: 100px;
      }
      .close:hover {background: #08546c;}
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

#teacherbox {
        background: rgba(102, 102, 102, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
      }
      #box2 {
        height:70%;
        width: 19%;
        text-align: center;
        padding: 50px;
        border: 3px solid  #A0BACC;
        border-radius: 10px;
        color:  #A0BACC;
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        left: 10px;
        margin: auto;
        background:  #022534;
      }
      #teacherbox:target {display: block;}
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


     #studentbox {
        background: rgba(102, 102, 102, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
      }
      #box3 {
        height:70%;
        width: 19%;
        text-align: center;
        padding: 50px;
        border: 3px solid  #A0BACC;
        border-radius: 10px;
        color:  #A0BACC;
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        left: 10px;
        margin: auto;
        background: #022534;
      }
      #studentbox:target {display: block;}
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

#parentsbox {
        background: rgba(102, 102, 102, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
      }
      #box4 {
        height:70%;
        width: 19%;
        text-align: center;
        padding: 50px;
        border: 3px solid  #A0BACC;
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
      #parentsbox:target {display: block;}
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


      


</style>
