<template>
  <ul class="roomvavul" style="height:65px;  width: 99.6%; list-style-type: none;  margin: -1%; padding: 1%; overflow: hidden; background-color:#08546c ;">

    <div class="navroom" style="  margin-right: 35%;">
      <li  style="margin-right:-50%;  background-color: #08546c; "> <div style="display: flex; ">
  <h4 style="padding:5px">{{tName}}</h4>
      <img src="" alt="" style="width:50px;height:50px; padding:5px; ">
      </div>
      </li >
      <li style="margin-right:-30%;  background-color: #08546c;"><a class="w" href="#notifec" >  <div >
      <img :src="notifecationlogo" alt="" style="width:30px;height:30px;">
      <div>الاشعارات</div>
      </div>
      </a></li>

      <li style="margin-right:15%;  background-color: #08546c;" >  <div>
    <h1>{{roomName}}</h1>

      </div>
    </li>


      <li style="margin-right:49%;  background-color: #08546c;" @click="logout"><a class="w" >  <div>
      <img :src="logoutLogo" alt="" style="width:30px;height:30px;">
      <div>تسجيل الخروج</div>
      </div>
      </a></li>

</div>

</ul>



<ul class="v"  style=" position: fixed; height:600px; background:none;   margin-top: 5%;">

  <li class="d" margin ><a class="m" @click="goB" >  <div >
  <img :src="homelogo" alt="" style="width:20px;height:20px;">
  <div style="height:50px;">الصفحة الرئيسية</div>
  </div>
  </a></li>
  <li class="d" margin ><a class="m" href="#pr" >  <div >
  <img :src="grouplogo" alt="" style="width:20px;height:20px;">
  <div>المستخدمين</div>
  </div>
  </a></li>
  <li class="d" margin ><a class="m" >  <div >
  <img :src="chatlogo" alt="" style="width:20px;height:20px;">
  <div>الدردشة</div>
  </div>
  </a></li>
  <li class="d" margin ><a class="m" >  <div >
  <img :src="gamepad" alt="" style="width:20px;height:20px;">
  <div>الامتحانات</div>
  </div>
  </a></li>

</ul>


<div ref="postsDiv" id="postsDiv" style="  overflow: auto; height:500px; width:70%; border: 5px solid #A0BACC;  padding:8px;  border-radius: 10px; background:#2f5d62; margin-left:10%; margin-top:2%;">
  <div style="margin-left:47%;">
    <div style="margin-right:90%;" >
    <img :src="advertisementlogo" alt="" style="width:30px;height:30px; margin-left:12px;">
    <div ><h2>الاعلانات</h2></div>
    </div>
</div>
<div v-if="roomPosts.length">
<div v-for="post in roomPosts" :key="post" class="alert" style="border-radius: 10px;  text-align: right;  background:#f8ede3  display: flex;"><div> <img @click="deletePost" :src="deleted" alt="" style="width:30px;height:30px; margin-right:97%;" />{{post.user}}<br>{{post.body}}<br>{{post.time}}</div></div>
</div>
 
 <div v-else> no ads yet</div>
 
<a href="#newad" style="text-decoration: none;">
<input   type="submit" class="ad" name="" value="اضافة اعلان" />
</a>
</div>

<div style=" height:500px; width:70%; border: 5px solid #A0BACC;  padding:8px;  border-radius: 10px; background:#2f5d62; margin-left:10%;margin-top:10px;">
  <div style="margin-left:45%;">
    <div style="margin-right:90%;">
    <img :src="homework" alt="" style="width:30px;height:30px; margin-left:12px;">
    <div ><h2>الواجبات </h2></div>
    </div>
</div>

<div style=" height:250px; width:100%; border: 1px solid #A0BACC;  border-radius: 5px;      background:#f8ede3; display: flex; ">

<div v-for="assignment in roomAssignments" :key="assignment" style=" height:150px; width:120px; border: 1px solid #A0BACC;  border-radius: 5px;  background:#ffd3b4   ">
<div style=" height:50px; width:119px; border: 1px solid #A0BACC;   background:#f8ede3">     <img :src="document" alt="" style="width:30px;height:30px; margin-left:45px;"></div>
<div style=" height:50px;  text-align: right;  "> {{assignment.due_date}} التاريخ</div>
<div style="text-align: right; "> {{assignment.assignment_details}} الوصف</div>
<a href="#tasks" style="text-decoration: none;">
<input   type="submit" class="ad" name="" value="التسليمات" @click="chHandedWindow(assignment.id)" />
</a>
</div>

</div>
<a href="#newHw" style="text-decoration: none;">
<input   type="submit" class="ad" name="" value="اضافة واجب" />
</a>
</div>

<div style=" height:500px; width:70%; border: 5px solid #A0BACC;  padding:8px;  border-radius: 10px; background:#2f5d62; margin-left:10%;margin-top:10px;">
  <div style="margin-left:45%;">
    <div style="margin-right:90%;" >
    <img :src="speech" alt="" style="width:30px;height:30px; margin-left:20px;">
    <div ><h2>الشروحات</h2></div>
    </div>
</div>

<div style=" height:250px; width:100%; border: 1px solid #A0BACC;  border-radius: 5px; display: flex;    background:#f8ede3">

  <div style="border: 1px solid #A0BACC; width:90px;  height:90px;" >
  <img :src="multimedia" alt="" style="width:30px;height:30px; margin-left:28px;">
  <div style="text-align: right;" >الوصف</div>
  </div>
</div>
<a href="#newsub" style="text-decoration: none;">
<input   type="submit" class="ad" name="" value="اضافة شرح" />
</a>
</div>


<div style=" height:500px; width:70%; border: 5px solid #A0BACC;  padding:8px;  border-radius: 10px; background:#2f5d62; margin-left:10%;margin-top:10px;">
  <div style="margin-left:45%;">
    <div style="margin-right:90%;" >
    <img :src="folder" alt="" style="width:30px;height:30px; margin-left:9px;">
    <div ><h2>المواد </h2></div>
    </div>
</div>

<div style=" height:250px; width:100%; border: 1px solid #A0BACC;  border-radius: 5px; display: flex;    background:#f8ede3">

  <div style="border: 1px solid #A0BACC; width:90px;  height:90px;" >
  <img :src="files" alt="" style="width:30px;height:30px; margin-left:28px;">
  <div style="text-align: right;" >الوصف</div>
  </div>
</div>
<a href="#newfile" style="text-decoration: none;">
<input   type="submit" class="ad" name="" value="اضافة مادة" />
</a>
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

  <div id="newad" >
      <div id="boxad"  >
        <div class="exit">
          <a href="#">
            <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
          </a>
        </div>
        <div >
        <img :src="advertisementlogo" alt="" style="width:30px;height:30px; margin-left:5px;">
        <div ><h2>اضافة اعلان</h2></div>
        </div>

        <textarea v-model="userText" @change="test"  name="w3review" rows="10" cols="50" style="text-align: right;">

          </textarea>
<input   type="submit" class="done" name="" value="حفظ" @click.prevent="sendPost" />

      </div>
    </div>


    <div id="newHw" >
        <div id="boxHw"  >
          <div class="exit">
            <a href="#">
              <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
            </a>
          </div>
          <div >
          <img :src="homework" alt="" style="width:30px;height:30px; margin-left:10px;">
          <div ><h2>اضافة واجب</h2></div>
          </div>

            <div style=" width:250px;height:100px; border: 1px solid #A0BACC; margin-left:32%;  background:#f8ede3"></div>
          <div class="upload-btn-wrapper " style="margin-top:3%;">
                   <button class="btn" type="submit" id="submit" name="submit">تحميل ملف</button>
                   <input type="file" ref="hwFile" @change="chFile">
               </div>
               
               <div style=" margin-left:15%; width:70% ; height:150px; margin-top:10px; border: 5px solid #A0BACC;  border-radius: 70px;">
                   <div>  <label for="birthday">موعد التسليم</label></div>
               <input type="date" id="birthday" name="birthday" v-model="hwDate" style="margin-right:67px;" >
             <input type="time" id="appt" name="appt" v-model="hwTime" style="margin-right:67px; margin-top:10px;">
        </div>
  
  
<div style="margin-top:10px; margin-left:-80px;">
        <input type="text" placeholder="الوصف" v-model="hwDesc" />

  </div>
  <input   type="submit" class="done" name="" value="حفظ" @click.prevent="sendHW" />

        </div>
      </div>




          <div id="tasks" >
              <div id="boxtasks"  >
                <div class="exit">
                  <a href="#">
                    <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
                  </a>
                </div>

                <table>
  <tr>
      <th>الملفات</th>
      <th>اسم الطالب</th>
  </tr>
  <tr v-for="task in HandedStudents" :key="task">
    <td><a @click="dlHandedFile(task.file_id)">الملف</a></td>
      <td>{{task.StudentName}}</td>

  </tr>

</table>




              </div>
            </div>




      <div id="newsub" >
          <div id="boxsub"  >
            <div class="exit">
              <a href="#">
                <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
              </a>
            </div>
            <div >
            <img :src="speech" alt="" style="width:30px;height:30px; margin-left:0px;">
            <div ><h2>اضافة شرح</h2></div>
            </div>

              <div style=" width:250px;height:100px; border: 1px solid #A0BACC; margin-left:32%;  background:#f8ede3"></div>
            <div class="upload-btn-wrapper " style="margin-top:3%;">
                     <button class="btn" type="submit" id="submit" name="submit">تحميل ملف</button>
                     <input type="file">
                 </div>
                 <div style="margin-top:10px; margin-left:-80px;">
                         <input type="text" placeholder="الوصف" />

                   </div>

    <input   type="submit" class="done" name="" value="حفظ" />

          </div>
        </div>



        <div id="newfile" >
            <div id="boxfile"  >
              <div class="exit">
                <a href="#">
                  <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
                </a>
              </div>
              <div >
              <img :src="folder" alt="" style="width:30px;height:30px; margin-left:0px;">
              <div ><h2>اضافة مادة</h2></div>
              </div>

                <div style=" width:250px;height:100px; border: 1px solid #A0BACC; margin-left:32%;  background:#f8ede3"></div>
              <div class="upload-btn-wrapper " style="margin-top:3%;">
                       <button class="btn" type="submit" id="submit" name="submit">تحميل ملف</button>
                       <input type="file">
                   </div>
                   <div style="margin-top:10px; margin-left:-80px;">
                           <input type="text" placeholder="الوصف" />

                     </div>

      <input   type="submit" class="done" name="" value="حفظ" />

            </div>
          </div>


          <div id="pr">
                <div id="boxpart"   >
          <div class="" style="width:300px; ">
            <div class="left" style="background-color:#bbb; border-radius: 10px;">
            <div class="exit" style="margin-left:88%"><a href="#">
          <img :src="cancelLogo" alt="" style="width:30px;height:30px;" />
                          </a>
                        </div>

              <h2 style="margin-left:1%">المستخدمين</h2>
              <div style="display: flex;">
          <div ><a href="#"><img :src="deleted" alt="" style="width:30px;height:30px;" />  </a>  </div>

              <input style="margin-right:20px;"  id="mySearch"  placeholder="...بحث" title="Type in a category">
              </div>
              <div style="  height:300px;     overflow: auto;">
              <ul id="myMenu" style="background-color:#bbb; ">
                <li style="background-color:#bbb"><a  style="width:300px; background-color:#bbb;   text-align: right;" href="#">محمد جمال يحيى</a></li>

              </ul>
              </div>
            </div>
          </div>
          </div>

          </div>
</template>

<script>
import axiosinst from '../axios';
import db from '../firebase';
export default {
    name: 'Teacherclassroom' ,
        data() {
        return {
            logoutLogo:require('@/assets/logout.png'),
            notifecationlogo:require('@/assets/notifecation.png'),
            homelogo:require('@/assets/home.png'),
            grouplogo:require('@/assets/group.png'),
            chatlogo:require('@/assets/chat.png'),
            advertisementlogo:require('@/assets/advertisement.png'),
            homework:require('@/assets/homework.png'),
            folder:require('@/assets/folder.png'),
            speech:require('@/assets/speech.png'),
            files:require('@/assets/files.png'),
            document:require('@/assets/document.png'),
            multimedia:require('@/assets/multimedia.png'),
            cancelLogo:require('@/assets/cancel.png'),
            deleted:require('@/assets/delete.png'),
            gamepad:require('@/assets/gamepad.png'),
            roomName:'',
            tName:'',
            roomAssignments:[],
            roomPosts:[],
            roomCirc:[],
            userText:'',
            hwFile:'',
            hwDate:'',
            hwTime:'',
            hwDesc:'',
            HandedStudents:[],
                           
      
        }
    },
    mounted(){
      axiosinst.post('http://localhost:8000/api/getRoomInfo/'+window.localStorage.getItem('troomid'),{},{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        this.roomName=res.data.roomInf.name;
        this.tName=res.data.roomInf.teacher;
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
      axiosinst.post('http://localhost:8000/api/getPosts/'+window.localStorage.getItem('troomid'),{},{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        this.roomPosts=res.data.posts;
              for(let v in this.roomPosts ){
                var dt=this.roomPosts[v]['time'];
                var dta=dt.split('T');
                let str=dta[0]+' '+dta[1].split('.')[0];
                this.roomPosts[v]['time']=new Date(str).getTime();
              }
              this.roomPosts.sort((a,b)=>{
                if(a['time']>b['time'])
                  return 1;
                if(a['time']<b['time'])
                  return -1;
                return 0;
              })
            for(let k in this.roomPosts){
                let smthing=this.roomPosts[k]['time'];
                this.roomPosts[k]['time']=new Date(smthing).toLocaleString();
            }
            var c=this.$refs.postsDiv;
            c.scrollTop=10000;
            console.log(c);
            c.addEventListener('resize',(event)=>{console.log(event)});
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
      axiosinst.post('http://localhost:8000/api/getAssignments/'+window.localStorage.getItem('troomid'),{},{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        this.roomAssignments=res.data.assignments;
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
      db.ref('room-posts').on('value',(snap)=>{
        snap.forEach(s=>{
          this.roomPosts.push(s.val());
        });
      });
    },
    methods:{
      goB(){
      this.$router.push('http://localhost:8080/teacher');
    },
    test(){
      console.log(this.userText);
    },
    sendPost(){
      axiosinst.post('http://localhost:8000/api/addPost/'+window.localStorage.getItem('troomid'),{
        'post':this.userText,
      },{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        this.userText=res.data;
        this.userText='';
        db.ref('room-posts').push({
          body:this.userText,
          room_id:window.localStorage.getItem('troomid'),
          time:new Date().toString(),
        })
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
    },
    sendHW(){
      let fd=new FormData();
      if(this.hwFile!='')fd.append('hwFile',this.hwFile);
      console.log(this.hwDate);
      console.log(this.hwTime);
      //var timetemp=new Date();
      fd.append('dueDate',this.hwDate+' '+this.hwTime);
      fd.append('hwDesc',this.hwDesc);
      axiosinst.post('http://localhost:8000/api/sendHW/'+window.localStorage.getItem('troomid'),fd,{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
          'Content-Type':'multipart/form-data',
        }
      }).then(()=>{
        this.hwFile='';
        this.hwDate='';
        this.hwTime='';
        this.hwDesc='';

      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
    },
    chFile(){
      this.hwFile=this.$refs.hwFile.files[0];
    },
    chHandedWindow(id){
      axiosinst.post('http://localhost:8000/api/getHandedStu/'+id,{},{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        this.HandedStudents=res.data.info;
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
    },
    dlHandedFile(id){
      axiosinst.post('http://localhost:8000/api/downloadFile/'+id,{},{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
    }
    },
}
</script>

<style scoped>


li {

  float: right;
}

li .w {

  display: block;
  color: white;
  text-align: center;
  padding: 3px 16px;
  text-decoration: none;
}

li .w:hover:not(.active) {
  background-color: #111;

}

.v {

  list-style-type: none;
  margin-left: 89%;
  padding: 0;
  width: 10%;
}

li .m {
    text-align: center;
  width:50px;
border-radius: 10px;
  background-color: #2ecc71;
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}



li .m:hover:not(.active) {
  background-color: #555;
  color: white;
}
 .d{
   border-radius: 10px;
   height:90px;
     background-color: #2ecc71;
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
 .exit {
    margin-left: 104%;
  }

  .alert {

  padding: 20px;
  margin:30px;
  background-color: #eee;
  color: rgb(14, 12, 12);
}

.ad {
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
      color: #111;
  }
  .ad:hover {
    background: #2ecc71;
  }


  #newad{
     background: #f4f4f480;
     width: 100%;
     height: 100%;
     position: absolute;
     top: 0;
     left: 0;
     display: none;

   }

   #newad:target {
     display: block;
   }
   #boxad {

    height: 60%;
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
  background:#2f5d62
  }
  .done {
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
        color: #111;
    }
    .done:hover {
      background: #2ecc71;
    }

    #newHw{
       background: #f4f4f480;
       width: 100%;
       height: 100%;
       position: absolute;
       top: 0;
       left: 0;
       display: none;

     }

     #newHw:target {
       display: block;
     }
     #boxHw {

      height: 90%;
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
    background:#2f5d62
    }
    #tasks{
       background: #f4f4f480;
       width: 100%;
       height: 100%;
       position: absolute;
       top: 0;
       left: 0;
       display: none;

     }

     #tasks:target {
       display: block;
     }
     #boxtasks{
     overflow: auto;
      height: 70%;
      width: 50%;
      text-align: center;
      padding-top: 5px;
      padding-left: 5%;
      padding-right: 5%;
      padding-bottom: 5%;
      border: 3px solid #a0bacc;
      border-radius: 10px;
  
      position: absolute;
      top: 10px;
      right: 10px;
      bottom: 10px;
      left: 10px;
      margin: auto;
    background:#2f5d62
    }

    #newsub{
       background: #f4f4f480;
       width: 100%;
       height: 100%;
       position: absolute;
       top: 0;
       left: 0;
       display: none;

     }
    #newsub:target {
      display: block;
    }
    #boxsub {

     height: 65%;
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
    background:#2f5d62
    }

    #newfile{
       background: #f4f4f480;
       width: 100%;
       height: 100%;
       position: absolute;
       top: 0;
       left: 0;
       display: none;

     }
    #newfile:target {
      display: block;
    }
    #boxfile {

     height: 65%;
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
    background:#2f5d62
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

input[type="date"] {
 background: none;
margin-left:80px;
 text-align: center;
 border: 2px solid #3498db;
 padding: 14px 10px;
 width: 30%;
 outline: none;
 color: white;
 border-radius: 24px;
 transition: 0.25s;
}
 input[type="date"]:focus {

 border-color: #2ecc71;
}

input[type="time"] {
 background: none;
margin-left:80px;
 text-align: center;
 border: 2px solid #3498db;
 padding: 14px 10px;
 width: 30%;
 outline: none;
 color: white;
 border-radius: 24px;
 transition: 0.25s;
}
 input[type="time"]:focus {

 border-color: #2ecc71;
}
input[type="text"] {
 background: none;
margin-left:100px;
 text-align: center;
 border: 2px solid #3498db;
 padding: 14px 10px;
 width: 30%;
 outline: none;
 color: white;
 border-radius: 24px;
 transition: 0.25s;
}
 input[type="text"]:focus {

 border-color: #2ecc71;
}

#pr{
  position: absolute;
  top: 0;
  left: 0;
   display: none;

 }

 #pr:target {
   display: block;
 }
 #boxpart{
   padding-top: 5px;
   padding-left: 5%;
   padding-right: 5%;
   padding-bottom: 5%;
   position: fixed;
   top: 110px;
   right: 10px;
   bottom: 10px;
   left: 800px;
   margin: auto;

}


.left {
flex: 35%;
padding: 15px 0;
}

#mySearch {
width: 100%;
font-size: 18px;
padding: 11px;
border: 1px solid #ddd;
text-align: right;
}

#myMenu {
list-style-type: none;
padding: 0;
margin: 0;

}

#myMenu li a {

padding: 12px;
text-decoration: none;
color: black;
display: block
}

#myMenu li a:hover {

background-color: #eee;

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