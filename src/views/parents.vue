
<template>

  <ul style="    list-style-type: none; margin: -1%; padding: 1%; overflow: hidden;  background-color: #939b62;"> 
    <div class="nav5" >
  
      <li style=" margin-right:-56%;  background-color: #939b62;">
        <a href="#teachertinfo" @click="showInfo">
          <div style="">
            
            <img :src="infoLogo" alt="" style="width:30px;height:30px;" />
                <div style="">المعلومات الشخصية</div>
          </div>
        </a>
      </li>
        <li style="margin-right:-41%;  background-color: #939b62;"><a class="w" href="#notifec" >  <div >
      <img :src="notifecationlogo" alt="" style="width:30px;height:30px;">
      <div>الاشعارات</div>
      </div>
      </a></li>
       <li style=" margin-right:-26%;  background-color: #939b62;">
                <a href="#chat">
                
                    <div style=""> 
                      
                        <img :src="chat" alt="" style="width:35px;height:35px;" >
                        <div style="">  المحادثات</div>
                    </div>
                    
                </a>
            </li>

                <li style=" margin-right:-11%;  background-color: #939b62;">
                <a href="#grades">
                    <div style="">
                        <img :src="exam" alt="" style="width:35px;height:35px;" >
                        <div style="">  العلامات</div>
                    </div>
                    
                </a>
            </li>
       <li style="margin-right: 82%;  background-color: #939b62;"><a class="" @click="logoutUser">
                <div >تسجيل الخروج
                    <img :src="logoutLogo" alt="" style="width:25px;height:25px;">
                </div>
            </a></li>
    </div>
  </ul>
 

 
  <div id="grades">
    <div id="boxgrades">
      <div class="exit">
        <a href="#">
          <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
        </a>
      </div>
    

      <label>: اختيار الابن</label>
      <select class="dropbtn" name="usertype" id="usertypes"  v-model="RoomClass">
        <option value="one">ابو صاع</option>
        <option value="two">ام صاع</option>
        
      </select>
     <table style="margin-top:50px;">
  <tr>
    <th>الملاحظات</th>
        <th>العلامة</th>
      <th>الوظيفة/الامتحان</th>
      <th>المادة</th>
         
  </tr>
  <tr>
      
  <td style=""> زفت </td>
    <td>1000/100</td>
      <td>امتحان اول</td>
       <td>علوم</td>

  </tr>
  

</table>
    
     
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
       <div style="display: flex; border: 3px solid #939b62;  border-radius: 10px;">
         <input type="submit" @click.prevent="sendNewInfo" class="save" name="" value="save" />
        <input type="text" placeholder="الاسم الجديد" v-model="newName" />
        
       </div>
       <div style="display: flex; border: 3px solid #939b62;  border-radius: 10px;">
         <input type="submit" @click.prevent="sendNewInfo" class="save" name="" value="save" />
        <input type="text" placeholder="البريد الالكتروني الجديد" v-model="newEmail" />
         
       </div>
       <div style=" border: 3px solid #939b62;  border-radius: 10px;">
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
            
    <img src="" alt="" style="width:150px;height:100px; padding:5px; margin-left:-90px ">
    <div>
        
            <div class="card">

                <div class="upload-btn-wrapper">
                    <button class="btn" type="submit" id="submit" name="submit">Upload your pic</button>
                    <input type="file">
                </div>
                  </div>
                  <div style=" border: 3px solid #939b62;border-radius: 10px;">
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
<div id="chat">
    <div id="boxchat">
        <div class="exit"> <a href="#">
                <img :src="cancelLogo" alt="" style="width:30px;height:30px;">

            </a></div>


             <div class="messages">
      <div class="msg-header" >
        <div style="display: flex; margin-left:77%; ">
          <h4 class="momo" style="padding:5px font-family: sans-serif; color:black;">اسم المستخدم</h4>
      <img src="" alt="" style="width:50px;height:50px; padding:5px; ">
      
      </div>  
      </div>

      <div class="chat-page">
        <div class="msg-inbox">
          <div class="chats">
              <div class="msg-page">
                <div v-for="msg in activeChat" :key="msg">
                  <div class="received-chats" v-if="msg.user_id!=user.id">
                    <div class="received-chats-img">
                      <img src="love.jpg">
                    </div>
                    <div class="received-msg">
                      <div class="received-msg-inbox">
                        <p>
                          {{msg.body}}
                        </p>
                        <span class="time">
                          {{msg.created_at}}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="outgoing-chats" v-else>
                    <div class="outgoing-chats-msg">
                      <p>
                        {{msg.body}}
                      </p>
                      <span class="time">
                        {{msg.created_at}}
                      </span>
                    </div>
                      <div class="outgoing-chats-img">
                        <img src="abojamal.png">
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="msg-bottom" >
          <div class="input-group" >
            <span class="input-group-text">
              <img :src="sendLogo" @click="sendMsg">
            </span>
            <input v-model="userMsg" style="color: black; background-color: #dddddd; " type="text" name="userMsg" id="userMsg" class="form-control" placeholder="..اكتب رسالتك هنا">
          </div>
        </div>
      </div>
    </div>
     <div class="convo-container">
      <div class="back" @click="this.$router.back(-1)">
      
      </div>
      
    <div class="rownew" >
  <div class="cont" style="background-color:#ff7b54;   margin-left: 150px; overflow: auto; width: 310px; height: 400px; padding: 15px 0; margin-top: 20px;">
    <h2 style="color:black;">المستخدمين</h2>
    <input style="  width:90%; font-size: 18px; padding: 11px; border: 1px solid #ddd;"  id="mySearchcont" onkeyup="myFunction()" placeholder="Search.." title="Type in a category">
    <ul id="mycont" style=" margin-left:4px; width: 300px; height:200px; background-color:#ff7b54;" >
      <li style=" width:300px;   background-color: #ff7b54;"><a href="#" style="  background-color: #ff7b54; width: 250px;text-align: reight;text-decoration: none;border: 1px solid #ddd;color: rgb(90, 84, 84);display: block">ابو صاع</a></li>
      
       
      
    </ul>
  </div>

</div>

  </div>
        </div>
    </div>


    

<div id="notifec" >
    <div id="boxnotification"  >
      <div class="exit">
        <a href="#">
          <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
        </a>
      </div>

      <div class="alert" style="border-radius: 10px;">

      </div>
      <div class="alert" style="border-radius: 10px;">

      </div>
      <div class="alert" style="border-radius: 10px;">

      </div>
      <div class="alert" style="border-radius: 10px;">

      </div>

    </div>
  </div>


  <div id="child" >
    <div id="boxchild"  >
      <div class="exit">
        <a href="#" @click="closewind"  >
          <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
        </a>
      </div>
      <h2>اختيار الابن</h2>
<div class="mychild">
      <input type="text" placeholder="اسم الابن" v-model="newName" />
        <input type="text" placeholder="بريد الابن الالكتروني" v-model="newName" />
<input  @click="closewind"  type="submit" class="done" name="" value="حفظ" />
   
</div>
    </div>
  </div>
</template>

<script>
import axiosinst from '../axios';
  export default {
    name: "parents",
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
                     notifecationlogo:require('@/assets/notifecation.png'),
                     chat:require('@/assets/chat.png'),
                     exam:require('@/assets/exam.png'),
                     sendLogo:require('@/assets/paper-plane.png'),
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
      },
      closewind(){
        document.getElementById("child").style.display="none";
      }

    },
  };
</script>

<style scoped >


  .nav5 {
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
    background-color: #ffb26b;
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
        border: 3px solid #939b62;
        border-radius: 10px;
        color: #2c2828;
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        left: 10px;
        margin: auto;
      background: #ffd56b;
  }
 
  .changed {
    background: none;
    display: block;
    margin: 30px auto;
    text-align: center;
    border: 2px solid #939b62;
    padding: 14px 40px;
    outline: none;
    color: rgb(15, 15, 15);
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
    width: 100px;
  }
  .changed:hover {
    background: #939b62;
  }
  .save {
    background: none;
    display: block;
    margin: 30px auto;
    text-align: center;
    border: 2px solid #939b62;
    padding: 14px 40px;
    outline: none;
    color: rgb(46, 42, 42);
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }
  .save:hover {
    background: #939b62;
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
  .boxgrades input[type="button"] {
    border: 0;
    background: none;
    display: block;
    margin: 11px auto;
    text-align: center;
    border: 2px solid #939b62;
    padding: 14px 40px;
    outline: none;
    color: #34495e;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }
  .boxgrades input[type="button"]:hover {
    background: #939b62;
  }
  .options {
    margin-top: 15px;
    color: #f4f4f480;
    overflow: hidden;
    font-size: 14px;
  }
 
  #grades {
    background: #f4f4f480;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
 
  #grades:target {
    display: block;
  }
  .dropbtn {
    border: 0;
    margin-left: 40%;
    background: none;
    display: block;
    text-align: center;
    border: 2px solid #939b62;
    padding: 14px 10px;
    width: 20%;
    outline: none;
    color: #22202080;
    border-radius: 24px;
    transition: 0.25s;
  }
 
  
  ul {
   height: 60px;
     width: 99%;
        list-style-type: none;
        margin: -1%;
        padding: 1%;
        overflow: hidden;
        background-color: #939b62;
  }
 
.changeteacherdata input[type="text"] {
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
  .changeteacherdata input[type="text"]:focus {
  
    border-color: #ff7b54;
  }
  .changeteacherdata input[type="password"] {
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
  .changeteacherdata input[type="password"]:focus {
    border-color: #ff7b54;
  }
  
  #boxgrades {
    height: 60%;
    width: 40%;
    text-align: center;
    padding-top: 5px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    border: 3px solid #939b62;
    border-radius: 10px;
    color: #2e3133;
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    margin: auto;
    background: #ffd56b;
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
    height: 85%;
    width: 40%;
    text-align: center;
    padding-top: 5px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    border: 3px solid #939b62;
    border-radius: 10px;
    color: #1e1f20;
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    margin: auto;
    background: #ffd56b;
  }
  #changedata:target {
    display: block;
  }
  .mychild input[type="text"] {
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
  .mychild input[type="text"]:focus {
  
    border-color: #ff7b54;
  }
  .mychild input[type="password"] {
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
  .mychild input[type="password"]:focus {
    border-color: #ff7b54;
  }
   #chat{
       background: #f4f4f480;
       width: 100%;
       height: 100%;
       position: absolute;
       top: 0;
       left: 0;
       display: none;

     }

     #chat:target {
       display: block;
     }
     #boxchat {

      height: 75%;
      width: 70%;
      text-align: center;
      padding-top: 5px;
      padding-left: 5%;
      padding-right: 5%;
      padding-bottom: 5%;
      border: 3px solid #939b62;
      border-radius: 10px;
      color: #939b62;
      position: absolute;
      top: 10px;
      right: 10px;
      bottom: 10px;
      left: 10px;
      margin: auto;
    background:#ffd56b;
    }
    .msg-header{
    border: 1px solid #ccc;
    width: 600px;
    height: 12%;
    border-bottom: none;
  margin-left: -7%;
    background-color: #ff7b54;
  }
  .msg-header-img{
    border-radius: 50%;
    width: 50px;
    margin-left: 7%;
    margin-top: 12px;
    float: left;
  }
  .activeMsg{
    width: 120px;
    float: left;
    margin-top: 10px;
  }
  .activeMsg h4{
    font-size: 10px;
    margin-left: 10px;
    color: #fff;
  }
  .chat-page{
    padding: 0 0 50px 0;
    position: relative;
  }
  .msg-inbox{
    border: 1px solid grey;
    overflow: hidden;
  margin-left: -7%;
    width: 600px;
  }

  .msg-page{
    height: 400px;
    overflow-y: auto;
    background-color: #e6e9c49f;
      margin-left: -7%;
  }
  .received-chats-img{
    display: block;
    width: 20px;
    float: left;
  }
  .received-msg{
    padding: 0 0 0 10px;
    margin-left: 50px;
  }
  .received-msg-inbox{
    width: 57%;
  }
  .received-msg-inbox p{
    background: #efefef none repeat scroll 0 0;
    border-radius: 10px;
    color: #646464;
    font-size: 14px;
    margin: 0;
    padding: 5px 10px 5px 12px;
    width: 50%;
  }
  .time{
    display: inline-block;
    font-size: 12px;
    color: #777;
    margin: 8px 0 0;
  }
  .outgoing-chats{
    overflow: hidden;
    margin: 26px 20px;
  }
  .outgoing-chats-msg p{
    background: #ff7b54 none repeat scroll 0 0;
    color: #fff;
    border-radius: 10px;
    font-size: 14px;
    margin: 0;
    margin-left: 40%;
    padding: 5px 10px 5px 12px;
    width: 50%;
  }
  .outgoing-chats-msg{
    float: left;
    width: 50%;
    margin-left: 40%;
  }
  .outgoing-chats-img{
    display: inline-block;
    width: 20px;
  }
  .outgoing-chats-msg span{
    margin-left: 41%;
  }
  .msg-bottom{
  
    position: relative;
    height: 10%;
    background-color: #ff7b54;
    
  }
  .input-group{
    
    position: relative;
    margin-left:-110%;
    outline: none !important;
    border-radius: 20px;
    width: 1300px!important;
    background-color: #ff7b54;
  }
  .form-control{
  
    border: none !important;
    border-radius: 20px;
    height: 30px;
    width:300px;
    float: right;
    
    padding-left: 50px;
  }
  .input-group-text{
    background: transparent !important;
    border: none;
    background-color: #777;
  }
  .input-group-text img{
    height: 32px;
    float: right;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .convo-container{
    position: relative;
    float: right;
    width: 500px;
    height: 450px;
    bottom: 520px;
  }
  .conversations-list{
    margin-top:30px;
    margin-left:170px;
    border: 1px solid #777;
    background-color: #afaeae;
    width: 300px;
    height: 450px;
    overflow-y: scroll;
    overflow-x: none;
  }
  .convo{
    border-bottom: 1px solid black;
    padding-bottom: 10px;
  }
  .convo-img{
    margin-top: 10px;
    float: left;
  }
  .convo-info{
    margin-left: 60px;
    border-bottom: none;
  }
  .messages{
    width: 750px;
    height: 500px;
  }
  #notifec{
    background: #f4f4f480;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;

  }

  #notifec:target {
    display: block;
  }
  #boxnotification {
     overflow: auto;
   height: 80%;
   width: 50%;
   text-align: center;
   padding-top: 5px;
   padding-left: 5%;
   padding-right: 5%;
   padding-bottom: 5%;
   border: 3px solid #939b62;
   border-radius: 10px;
   color: #939b62;
   position: absolute;
   top: 10px;
   right: 10px;
   bottom: 10px;
   left: 10px;
   margin: auto;
   background: #ffd56b;
 }
 .alert {

  padding: 20px;
  margin:30px;
  background-color: #eee;
  color: rgb(14, 12, 12);
}

 #child{
    
    width: 60%;
    height: 60%;
    top: 0;
    left: 0;
   
    

  }

  #child:target {
    display: block;
  }
  #boxchild {
     
   height: 40%;
   width: 50%;
   text-align: center;
   padding-top: 5px;
   padding-left: 5%;
   padding-right: 5%;
   padding-bottom: 5%;
   border: 3px solid #939b62;
   border-radius: 10px;
   color: #939b62;
   position: absolute;
   top: 10px;
   right: 10px;
   bottom: 10px;
   left: 10px;
   margin: auto;
   background: #ffd56b;
 }
 .done {
      background: none;
      display: block;
      margin: 30px auto;
      text-align: center;
      border: 2px solid #939b62;
      padding: 14px 40px;
      outline: none;
      color: white;
      border-radius: 24px;
      transition: 0.25s;
      cursor: pointer;
        color: #111;
    }
    .done:hover {
      background: #939b62;
    }
    
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

 th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}
td {
  border: 1px solid #dddddd;
  text-align: right;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}


  
</style>
