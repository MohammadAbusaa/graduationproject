<template>
<link  href="https://www.w3schools.com/w3css/4/w3.css">
  <ul>
    <div class="nav3">
      <li style="margin-right:-56%;  background-color: #08546c;">
        <a  style="background-color:  #111;" class="active" @click="showRooms">
          <div>
            الصفوف التي انشأتها
            <img :src="calssesLogo" alt="" style="width:50px;height:50px;" />
          </div>
        </a>
      </li>
      <li style=" margin-right:-35%;  background-color: #08546c;">
        <a href="#newclasses" >
          <div>
            انشاء غرفة صفية
            <img :src="addeventLogo" alt="" style="width:50px;height:50px;" />
          </div>
        </a>
      </li>
      <li style=" margin-right:-14%;  background-color: #08546c;">
        <a href="#teachertinfo" @click="showInfo">
          <div>
            المعلومات الشخصية
            <img :src="infoLogo" alt="" style="width:50px;height:50px;" />
          </div>
        </a>
      </li>
       <li style="margin-right: 75%;  background-color: #08546c;"><a class="" @click="logoutUser">
                <div >تسجيل الخروج
                    <img :src="logoutLogo" alt="" style="width:25px;height:25px;">
                </div>
            </a></li>
    </div>
  </ul>
 
<div class="w3-container w3-hide-small w3-red" style=" height: 70%; width: 90%;  position: absolute; top: 55%; left: 50%; transform: translate(-50%, -50%); text-align: center; border: 3px solid #022534; border-radius: 10px;">
      <div style="display: flex;">     
           
  <a  class="" style="padding:30px"  >
    <img :src="classroomLogo" alt="" style="width:50px;height:50px;">
    <div><h4>اسم الغرفة الصفية  <img :src="privateLogo" alt="" style="width:20px;height:20px;"></h4></div>
  </a>

 
 
  <a  class="" style="padding:30px"    >
    <img :src="classroomLogo" alt="" style="width:50px;height:50px;">
    <div><h4>اسم الغرفة الصفية  <img :src="publicroomLogo" alt="" style="width:20px;height:20px;"></h4></div>
  </a>
  
  </div> 
</div>


 
  <div id="newclasses">
    <div id="boxcreate">
      <div class="exit">
        <a href="#">
          <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
        </a>
      </div>
      <div class="roomname">
        <input type="text" v-model="roomName" placeholder="اسم الغرفة" />
      </div>

      <label>: الصف</label>
      <select class="dropbtn" name="usertype" id="usertypes"  v-model="RoomClass">
        <option value="one">الأول</option>
        <option value="two">الثاني</option>
        <option value="three">الثالث</option>
        <option value="four">الرابع</option>
        <option value="five">الخامس</option>
        <option value="six">السادس</option>
        <option value="seven">السابع</option>
      </select>
      <label>: المادة</label>
      <select class="dropbtn" name="usertype" id="usertypes"  v-model="RoomSub">
        <option value="science">علوم</option>
        <option value="maths">رياضيات</option>
        <option value="arabic">اللغة العربية</option>
        <option value="english">اللغة الانجليزية</option>
        <option value="islamicCulture">التربية الاسلامية</option>
        <option value="socialStudies">اجتماعيات</option>
      </select>
      <p>:نوع الغرفة الصفية</p>
    
     <input type="radio" id="radio1" name="roomtype" value="public" @click="onChange($event)" />
      <label for="public">عام</label>
      <input type="radio" id="radio2" name="roomtype" value="private" @click="onChange($event)" />
      <label for="private">خاص</label>
      <input type="submit" id="private" @click.prevent="sendRoomData" class="save" name="" value="انشاء" />
    </div>
  </div>

  <div id="changedata">
    <div id="boxchange">
      <div class="exit">
        <a href="#">
          <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
        </a>
      </div>
      <div class="changeteacherdata">
       <div style="display: flex; border: 3px solid #A0BACC;  border-radius: 10px;">
         <input type="submit" @click.prevent="sendNewInfo" class="save" name="" value="save" />
        <input type="text" placeholder="الاسم الجديد" v-model="newName" />
        
       </div>
       <div style="display: flex; border: 3px solid #A0BACC;  border-radius: 10px;">
         <input type="submit" @click.prevent="sendNewInfo" class="save" name="" value="save" />
        <input type="text" placeholder="البريد الالكتروني الجديد" v-model="newEmail" />
         
       </div>
       <div style=" border: 3px solid #A0BACC;  border-radius: 10px;">
        <input
          type="password"
          name="password"
          placeholder="كلمة المرور القديمة"
          required
          title="please fill the password field"
          v-model="oldPass"
        />
        <input
          type="password"
          name="password"
          placeholder="كلمة المرور الجديدة"
          required
          title="please fill the password field"
          v-model="newPass"
        />
        <input
          type="password"
          name="password"
          placeholder="تأكيد كلمة المرور"
          required
          title="please fill the password field"
          v-model="confPass"
        />
    
        <input type="submit" @click.prevent="sendNewInfo" class="save" name="" value="save" />
           </div>
      </div>
    </div>
  </div>
  <div id="teachertinfo">
    <div id="boxt">
        <div class="exit"> <a href="#">
                <img :src="cancelLogo" alt="" style="width:30px;height:30px;">

            </a></div>

    <div>
            <div id="pic1" style=""> <img id="i1" width="100%" height="100"> </div>
            <div class="card">

                <div class="upload-btn-wrapper">
                    <button class="btn" type="submit" id="submit" name="submit">Upload your pic</button>
                    <input type="file">
                </div>
                  </div>
                  <div style=" border: 3px solid #A0BACC;border-radius: 10px;">
                  <div style=" display: flex;">
                  <div style="margin-left:15px;"><img :src="nameLogo" alt="" style="width:30px;height:30px; margin-top:11px;"></div><div><h3 style="margin-right:-20%;">محمد يحيى</h3></div>
                 
                  </div>

                  <div style=" display: flex;">
                  <div style="margin-left:15px;"><img :src="emailLogo" alt="" style="width:30px;height:30px; margin-top:11px;"></div><div><h3 style="margin-right:-20%;">Mohammadyahya.com</h3></div>
                  
                  </div>

                  <div style=" display: flex;">
                  <div style="margin-left:15px;"><img :src="jobLogo" alt="" style="width:30px;height:30px; margin-top:11px;"></div><div><h3 style="margin-right:-20%;"> طالب </h3></div>
                
                  </div>
                  <div style=" display: flex;">
                  <div style="margin-left:15px;"><img :src="passLogo" alt="" style="width:30px;height:30px; margin-top:11px;"></div><div><h3 style="margin-right:-20%;"> ************ </h3></div>
                
                  </div>

                  
                   </div>
                <a href="#changedata" class="changed  " >change data <img :src="editLogo" alt="" style="width:30px;height:30px; margin-top:11px;"></a>

            </div>
        </div>
    </div>

</template>

<script>
import axiosinst from '../axios';
  export default {
    name: "teacher",
    data:
      function() {
        return {
           logoutLogo:require('@/assets/logout.png'),
          addeventLogo:require('@/assets/add-event.png'),
          cancelLogo:require('@/assets/cancel.png'),
          infoLogo:require('@/assets/info.png'),
          calssesLogo:require('@/assets/calsses.png'),
           nameLogo:require('@/assets/name.png'),
           emailLogo:require('@/assets/email.png'),
             jobLogo:require('@/assets/job.png'),
             passLogo:require('@/assets/password.png'),
              editLogo:require('@/assets/edit.png'),
              backLogo:require('@/assets/back.png'),
               privateLogo:require('@/assets/privateroom.png'),
               classroomLogo:require('@/assets/classroom.png'),
               publicroomLogo:require('@/assets/publicroom.png'),

          rooms:{},
          EmailDB:"",
          NameDB:"",
          JobDB:"",
          newName:"",
          newEmail:"",
          newPass:"",
          confPass:"",
          oldPass:"",
          DBPass:"",
          roomName:"",
          RoomSub:"",
          RoomClass:"",
          roomType:"",
          errs:[],
          regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
          pic:'',
          allowedTypes:['image/png','image/jpg','image/jpeg'],
          img:'',

        };
      },
    methods: {
      onChange(event){
        this.roomType=event.target.value;
      },
      sendRoomData(){
        this.errs.length=0;
        if(this.roomName==""){
          this.errs.push("لم تقم بادخال اسم للغرفة");
        }
        if(this.RoomClass==""){
          this.errs.push("لم تقم باختيار الصف");
        }
        if(this.RoomSub==""){
          this.errs.push("لم تقم باختيار الموضوع");
        }
        if(this.roomType==""){
          this.errs.push("لم تقم باختيار نوع الغرفة");
        }
        if(this.errs.length)return;
        axiosinst.post('http://localhost:8000/api/makeRoom',{
          'name':this.roomName,
          'class':this.RoomClass,
          'subject':this.RoomSub,
          'type':this.roomType,
        },{
          headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
        }).then((res)=>{
          console.info(res.data);
        }).catch((err)=>{
          console.error(err);
          if(err.response){
            console.warn(err.response);
            if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
            console.warn(err.response.status);
          }
        });
      },
      sendNewInfo(){
        this.errs.length=0;
        if(this.confPass!==this.newPass){
          this.errs.push("كلمة السر الجديدة لا تتطابق");
        }
        if(!this.regex.test(this.newEmail)){
          this.errs.push("البريد الالكتروني غير صحيح");
        }
        if(this.newName==""){
          this.errs.push("لم تقم بادخال اسمك");
        }
        if(this.errs.length)return;
        axiosinst.post('http://localhost:8000/api/checkOldPass',{
          'password':this.oldPass,
        },{
          headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
        }).then((res)=>{
          console.info(res.data);
          if(!(res.data.flag))this.errs.push("كلمة السر القديمة غير صحيحة");
        }).catch((err)=>{
          console.error(err);
          if(err.response){
            console.warn(err.response);
            if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
            console.warn(err.response.status);
          }
        });
        if(this.errs.length)return;

        axiosinst.post('http://localhost:8000/api/updateInfo',{
          'name':this.newName,
          'email':this.newEmail,
          'password':this.newPass,
        },{
          headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
        }).then((res)=>{
          this.$router.push(res.data.link);
          console.info(res.data);
        }).catch((err)=>{
          console.error(err);
          if(err.response){
              console.warn(err.response);
              if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
              console.warn(err.response.status);
          }
        });
      },
      showRooms(){
        axiosinst.post('http://localhost:8000/api/showTRooms',{},{
          headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
        }).then((res)=>{
          console.info(res.data);
          this.rooms=res.data.rooms;
        }).catch((err)=>{
          console.error(err);
          if(err.response){
              console.warn(err.response);
              if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
              console.warn(err.response.status);
          }
        });
      },
      showInfo(){
        axiosinst.post('http://localhost:8000/api/showTInfo',{},{
          headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
        }).then((res)=>{
          console.info(res.data);
          this.NameDB=res.data.name;
          this.EmailDB=res.data.email;
          this.JobDB=res.data.major;
          document.getElementById('i1').src=res.data.picture;
        }).catch((err)=>{
          console.error(err);
          if(err.response){
              console.warn(err.response);
              if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
              console.warn(err.response.status);
          }
        });
      },
      logoutUser(){
        axiosinst.post('http://localhost:8000/api/logoutUser',{},{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
            }).then((res)=>{
                console.info(res);
                this.$router.push('/');
            }).catch((err)=>{
                console.error(err);
                if(err.response){
                  console.warn(err.response);
                  if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
                  console.warn(err.response.status);
                }
            });
      },
      personalPicChange(){
        this.errs.length=0;
        this.pic=this.$refs.personPic.files[0];
        if(!this.allowedTypes.includes(this.pic.type)){
          console.warn('not image!');
          this.errs.push('لم تقم باختيار صورة');
          return;
        }
        console.log(this.pic);
        let size=this.pic.size/1024/1024;
        if(size>2){
          console.warn('size is larger than 2! \t'+this.pic.size);
          this.errs.push('حجم الصورة اكبر من المسموح');
        }
        let o=document.getElementById('i1');
        o.src=URL.createObjectURL(this.pic);
        o.onload=()=>{URL.revokeObjectURL(o.src);}
        //this.img=URL.createObjectURL(this.pic);
      },

      uploadPic(){
        this.errs.length=0;
        this.pic=this.$refs.personPic.files[0];
        if(!this.allowedTypes.includes(this.pic.type)){
          console.warn('not image!');
          this.errs.push('لم تقم باختيار صورة');
          return;
        }
        console.log(this.pic);
        let size=this.pic.size/1024/1024;
        if(size>2){
          console.warn('size is larger than 2! \t'+this.pic.size);
          this.errs.push('حجم الصورة اكبر من المسموح');
        }
        let o=document.getElementById('i1');
        o.src=URL.createObjectURL(this.pic);
        o.onload=()=>{URL.revokeObjectURL(o.src);}
        //this.img=URL.createObjectURL(this.pic);
        let fd=new FormData();
        fd.append('image',this.pic);
        axiosinst.post('http://localhost:8000/api/changeProfilePic',fd,{
        headers:{
                  'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                  'Content-Type': 'multipart/form-data',
              }
      }).then((res)=>{
        console.info(res.data);
        this.pic='';
      }).catch((err)=>{
        console.error(err);
        if(err.response){
          console.warn(err.response);
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
          console.warn(err.response.status);
        }
      });
      }
    },
  };
</script>

<style>
body{
   background:#f6f9fa ;
}
  ul {
    list-style-type: none;
    margin: -1%;
    padding: 1%;
    overflow: hidden;
    background-color: #08546c;
  }
  .nav3 {
    margin-right: 35%;
  }

  li {
    float: right;
  }

  li a {
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }
  .exit {
    margin-left: 104%;
  }
  #teachertinfo {
    background: #f4f4f480;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
    #teachertinfo:target {
    display: block;
  }
  #boxt {
         height: 85%;
        width: 50%;
        text-align: center;
        padding-top: 5px;
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 5%;
        border: 3px solid #A0BACC;
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

  .changed {
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
  .changed:hover {
    background: #2ecc71;
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
  .save:hover {
    background: #2ecc71;
  }
  #pic1 {
    height: 25%;
    width: 25%;
    border: black;
    position: center;
    padding: 1%;
    margin: 1% auto;
  }
 

  .btn {
    border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
  }

  .upload-btn-wrapper input[type="file"] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
   .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }

  .boxcreate input[type="button"] {
    border: 0;
    background: none;
    display: block;
    margin: 11px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: #34495e;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }
  .boxcreate input[type="button"]:hover {
    background: #2ecc71;
  }
  .options {
    margin-top: 15px;
    color: #f4f4f480;
    overflow: hidden;
    font-size: 14px;
  }
  #creatnewclass {
    background: #f4f4f480;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  #creatnewclass:target {
    display: block;
  }
  #newclasses {
    background: #f4f4f480;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
 
  #newclasses:target {
    display: block;
  }

  .dropbtn {
    border: 0;
    margin-left: 40%;
    background: none;
    display: block;

    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 20%;
    outline: none;
    color: #22202080;
    border-radius: 24px;
    transition: 0.25s;
  }
  .newclass {
    height: 70%;
    width: 50%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border: 3px solid #022534;
    border-radius: 10px;
  }
  .roomname input[type="text"] {
    border: 0;
    background: none;
    display: block;
    margin: 30px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 30%;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
  }
  .roomname input[type="text"]:focus {
    width: 50%;
    border-color: #2ecc71;
  }
  ul {
   height: 60px;
     width: 99%;
        list-style-type: none;
        margin: -1%;
        padding: 1%;
        overflow: hidden;
        background-color: #08546c;
  }
 
  #myclasses {
    background: #f4f4f480;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
  #boxcreate {
    height: 80%;
    width: 50%;
    text-align: center;
    padding-top: 5px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    border: 3px solid #a0bacc;
    border-radius: 10px;
    color: #3498db;
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    margin: auto;
    background: #a0bacc;
  }
  #myclasses:target {
    display: block;
  }
  #changedata {
    background: #f4f4f480;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
  #boxchange {
    height: 70%;
    width: 40%;
    text-align: center;
    padding-top: 5px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    border: 3px solid #a0bacc;
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
  #changedata:target {
    display: block;
  }

  .changeteacherdata input[type="text"] {
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
  .changeteacherdata input[type="text"]:focus {
  
    border-color: #2ecc71;
  }
  .changeteacherdata input[type="password"] {
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
  .changeteacherdata input[type="password"]:focus {

    border-color: #2ecc71;
  }
  
  .newclass {
    height: 70%;
    width: 50%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;
    border: 3px solid #022534;
    border-radius: 10px;
  }
</style>