<template>
<link  href="https://www.w3schools.com/w3css/4/w3.css">
<ul style=" height:50px;   list-style-type: none; margin: -1%; padding: 1%; overflow: hidden;  background-color: #939b62;">
    <div class="navs" style="">

        <div style="">
            <li style="margin-right:-41%;  background-color:#939b62; "><a href="#studentinfo">
                    <div style="display:flex;">
                        <div style="margin-top:15px;">المعلومات الشخصية</div>
                        <img :src="s1Logo" alt="" style="width:35px;height:35px;">
                    </div>
                </a></li>
        </div>
        <li style=" margin-right:-23%;  background-color: #939b62;">
                <a @click="this.$router.push('http://localhost:8080/chat')">
                
                    <div style="display:flex;"> 
                       <div style="margin-top:15px;">  المحادثات</div>
                        <img :src="chat" alt="" style="width:35px;height:35px;" >
                       
                    </div>
                    
                </a>
            </li>
        <li style="margin-right: 85%;  background-color: #939b62;"><a class="" @click.prevent="logout">
                <div style="display:flex;" >
                    <div style="margin-top:8px;">تسجيل الخروج</div>
                    <img :src="logoutLogo" alt="" style="width:25px;height:25px;">
                </div>
            </a></li>
            

    </div>
</ul>
<div id="st" class="findclass"
    style="  height:100%;  width: 70%;  text-align: center;  border: 3px solid #939b62;border-radius: 10px; color:#3498db;  margin-top: 4%; margin-left:14%;">

    <div>
        <img :src="s2Logo" alt="" style="width:50px;height:50px;">
        <h3>اختيار صف</h3>
    </div>

    <input type="text" placeholder="البحث من خلال اسم الصف" style=" padding:10px;  " v-model="roomName" @change="searchRooms">
    <div style=" margin-top:-4%; width: 100%;  display: flex;">
        <div style=" flex-grow: 3; margin-right: 10%;">
            <label style="margin-right:4%;">البحث حسب المادة</label>
            <select class="dropbtn" name="usertype" id="usertypes" style="width:50% ;  margin-left: 20%;  " v-model="roomSubject" @change="searchRooms">
                <option value="science">علوم</option>
                <option value="maths">رياضيات</option>
                <option value="arabic">اللغة العربية</option>
                <option value="english">اللغة الانجليزية</option>
                <option value="islamicCulture">التربية الاسلامية</option>
                <option value="socialStudies">اجتماعيات</option>

            </select>
        </div>
        <div style=" flex-grow: 3;   ">
            <label style="margin-right:-7%;">البحث حسب الصف</label>
            <select class="dropbtn" name="usertype" id="usertypes " style="width:50%  ;  margin-left: 30%;" v-model="roomClass" @change="searchRooms">
                <option value="one">الأول</option>
                <option value="two">الثاني</option>
                <option value="three">الثالث</option>
                <option value="four">الرابع</option>
                <option value="five">الخامس</option>
                <option value="six">السادس</option>
                <option value="seven">السابع</option>
            </select>
 
        </div>
    </div>
           <div class="w3-container w3-hide-small w3-red" >
      <div style="display: flex;" v-for="DBroom in roomsDB" :key="DBroom" @click="registerStudent(DBroom.id)">     
           
    
  <a  class="" style="padding:30px" v-if="DBroom.type"   >
    <img :src="classroomLogo" alt="" style="width:50px;height:50px;">
    <div><h4>{{DBroom.name}} <img :src="privateLogo" alt="" style="width:20px;height:20px;"></h4></div>
  </a>


 
  <a  class="" style="padding:30px" v-else   >
    <img :src="classroomLogo" alt="" style="width:50px;height:50px;">
    <div><h4>{{DBroom.name}}  <img :src="publicroomLogo" alt="" style="width:20px;height:20px;"></h4></div>
  </a>
  
  </div> 
</div> 
</div>
<div id="st2" style=" height:100%;  width: 70%;  text-align: center; border: 3px solid #939b62;  border-radius: 10px;color: #3498db;  margin-top: 4%; margin-left:14%; ">
    <div>
        <img :src="s3Logo" alt="" style="width:50px;height:50px;">
        <h3>الصفوف التي اخترتها</h3>
        
    </div>
        <div style="display: flex;" class="w3-container w3-hide-small w3-red" >
      <div style="display: flex;" v-for="room in rooms" :key="room" @click="showRoom(room.room_id)">     
           
  <a  class="" style="padding:30px" v-if="!room.type"  >
    <img :src="classroomLogo" alt="" style="width:50px;height:50px;">
    <div><h4>{{room.name}} <img :src="privateLogo" alt="" style="width:20px;height:20px;"></h4></div>
  </a>

 
  <a  class="" style="padding:30px;"  v-else  >
    <img :src="classroomLogo" alt="" style="width:50px;height:50px;">
    <div><h4>{{room.name}} <img :src="publicroomLogo" alt="" style="width:20px;height:20px;"></h4></div>
  </a>
  </div> 
</div>

</div>
<div id="changedata">
    <div id="boxchange">
        <div style="display: flex;">
            <div style="margin-right:1%"><a href="#studentinfo"><img :src="backLogo" alt="" style="width:32px;height:32px; margin-left:-65px"></a></div>
        <div  class="exit"> <a href="#">
                <img :src="cancelLogo" alt="" style="width:30px;height:30px;">
            </a></div>
             
        </div>
        <div class="studentnewdata">
<div style="display: flex; border: 3px solid #939b62;  border-radius: 10px;">
     <input type="submit" class="save" name="" value="save">
            <input type="text" placeholder="الاسم الجديد">
            
</div>
<div style="display: flex; border: 3px solid #939b62;  border-radius: 10px;">
    <input type="submit" class="save" name="" value="save">
            <input type="text" placeholder="البريد الالكتروني الجديد">
</div>
<div style=" border: 3px solid #939b62;  border-radius: 10px;">
            <input type="password" name="password" placeholder="كلمة المرور القديمة" required
                title="please fill the password field">
            <input type="password" name="password" placeholder="كلمة المرور الجديدة" required
                title="please fill the password field">
            <input type="password" name="password" placeholder="تأكيد كلمة المرور" required
                title="please fill the password field">
            <input type="submit" class="save" name="" value="save">
</div>
        </div>

    </div>
</div>
<div id="studentinfo">
    <div id="boxs">
        <div class="exit"> <a href="#">
                <img :src="cancelLogo" alt="" style="width:30px;height:30px;">

            </a></div>

    <div>
            <div id="pic1" style="width=100px; height=100px;"> <img id="i1" > </div>
            <div class="card">

                <div class="upload-btn-wrapper">
                    <button class="btn" >Upload your pic</button>
                    <input type="file" @change="uploadPic" ref="personPic">
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
                <a href="#changedata" class="changed " style="margin-top:4px;">change data <img :src="editLogo" alt="" style="width:30px;height:30px; margin-top:11px;"></a>

            </div>
        </div>
    </div>


</template>


<script>
import axiosinst from '../axios';
export default {
    name:"student",
    data() {
        return {
            logoutLogo:require('@/assets/logout.png'),
            cancelLogo:require('@/assets/cancel.png'),
            s3Logo:require('@/assets/s3.png'),
            s1Logo:require('@/assets/s1.png'),
            s2Logo:require('@/assets/s2.png'),
            nameLogo:require('@/assets/name.png'),
            emailLogo:require('@/assets/email.png'),
             jobLogo:require('@/assets/job.png'),
             passLogo:require('@/assets/password.png'),
              editLogo:require('@/assets/edit.png'),
              backLogo:require('@/assets/back.png'),
              privateLogo:require('@/assets/privateroom.png'),
               classroomLogo:require('@/assets/classroom.png'),
                  publicroomLogo:require('@/assets/publicroom.png'),
            chat:require('@/assets/chat.png'),
            rooms:{},
            nameDB:'',
            classDB:'',
            emailDB:'',
            roomName:'',
            roomClass:'',
            roomSubject:'',
            roomsDB:{},
            pic:'',
            errs:[],
            allowedTypes:['image/png','image/jpg','image/jpeg'],
            imgDB:'',
        }
    },
    methods: {
        logout(){
            axiosinst.post('http://localhost:8000/api/logoutUser',{},{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
            }).then((res)=>{
                console.info(res);
                window.localStorage.clear();
                window.Echo.disconnect();
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
        showRoom(id){
            window.localStorage.setItem('roomIndex',id);
            this.$router.push('/studentroom');
        },
        getInfo(){
            axiosinst.post('http://localhost:8000/api/showSInfo',{},{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
            }).then((res)=>{
                console.info(res);
                this.nameDB=res.data.name;
                this.emailDB=res.data.email;
                this.classDB=res.data.class;
                //this.imgDB=res.data.image;
                axiosinst.post('http://localhost:8000/api/showProfilePic',{},{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
            }).then((res)=>{
                console.info(res);
                console.info(res.headers['content-type'].split('/')[1]);
                this.imgDB='data:image/'+res.headers['content-type'].split('/')[1]+';base64,' + btoa(
                        new Uint8Array(this.imgDB)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                    );
            }).catch((err)=>{
                console.error(err);
                if(err.response){
                    console.warn(err.response);
                    if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
                    console.warn(err.response.status);
                }
            });
            }).catch((err)=>{
                console.error(err);
                if(err.response){
                    console.warn(err.response);
                    if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
                    console.warn(err.response.status);
                }
            });
        },
        searchRooms(){
            axiosinst.post('http://localhost:8000/api/searchRooms',{
                'name':this.roomName,
                'class':this.roomClass,
                'subject':this.roomSubject,
            },{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
            }).then((res)=>{
                console.info(res);
                this.roomsDB=res.data;
            }).catch((err)=>{
                console.error(err);
                if(err.response){
                    console.warn(err.response);
                    if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
                    console.warn(err.response.status);
                }
            });
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
      registerStudent(id){
          axiosinst.post('http://localhost:8000/api/registerStudent/'+id,{},{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
            }).then((res)=>{
                console.info(res);
                this.$store.commit('roomUsers',{users:res.data});
                this.$router.go(0);
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
    mounted() {
        axiosinst.post('http://localhost:8000/api/getStudentRooms',{},{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
            }).then((res)=>{
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
}
</script>


<style scoped>

    .navs {
        margin-right: 30%;
    }
    li {
        float: right;
    }
    li a {
        display: block;
        color: white;
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
    #studentinfo {
        background: #f4f4f480;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }
    #boxs {
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
    #studentinfo:target {
        display: block;
    }
    .changed {
        width: 130px;
        height: 50px;
         background: none;
        display: block;
        margin: 30px auto;
        text-align: center;
        border: 2px solid #939b62;
        padding: 14px 40px;
        outline: none;
        color: rgb(46, 44, 44);
        border-radius: 24px;
        transition: 0.25s;
        cursor: pointer;
        text-decoration:none;
    }
    .changed:hover {
        background:#939b62;
    }
       .save {
        background: none;
        display: block;
        margin: 30px auto;
        text-align: center;
        border: 2px solid #939b62;
        padding: 14px 40px;
        outline: none;
        color: rgb(7, 6, 6);
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
    .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
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
    .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
    .box input[type="button"] {
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
    .box input[type="button"]:hover {
        background: #2ecc71;
    }
    .options {
        margin-top: 15px;
        color: #f4f4f480;
        overflow: hidden;
        font-size: 14px;
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
 
    .studentnewdata input[type="text"] {
        border: 0;
        background: none;
        display: block;
        margin: 30px auto;
        text-align: center;
        border: 2px solid #939b62;
        padding: 14px 10px;
        width: 50%;
        outline: none;
        color: black;
        border-radius: 24px;
        transition: 0.25s;
    }
    .studentnewdata input[type="text"]:focus {
        
        border-color: #ff7b54;
    }
    .studentnewdata input[type="password"] {
        border: 0;
        background: none;
        display: block;
        margin: 30px auto;
        text-align: center;
        border: 2px solid #939b62;
        padding: 14px 10px;
        width: 50%;
        outline: none;
        color: black;
        border-radius: 24px;
        transition: 0.25s;
    }
    .studentnewdata input[type="password"]:focus {
        
        border-color: #ff7b54;
    }
    .dropbtn {
        border: 0;
        background: none;
        display: block;
        text-align: center;
        border: 2px solid #939b62;
        padding: 14px 10px;
        width: 20%;
        outline: none;
        color: #3498db;
        border-radius: 24px;
        transition: 0.25s;
    }
    .findclass input[type="text"] {
        border: 0;
        background: none;
        display: block;
        margin: 30px auto;
        text-align: center;
        border: 2px solid #939b62;
        padding: 14px 10px;
        width: 30%;
        outline: none;
        color: black;
        border-radius: 24px;
        transition: 0.25s;
    }
    .findclass input[type="text"]:focus {
        width: 40%;
        border-color: #ff7b54;
    }
      #st{ background-image: url('../assets/green.jpg');
   background-repeat: no-repeat;}
    #st2{ background-image: url('../assets/black.jpg');
   background-repeat: no-repeat;}
</style>
