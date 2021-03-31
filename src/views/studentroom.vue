<template>
    <ul class="nav">
        <li>
            <div>
                <a>الرئيسية</a>
            </div>
        </li>
        <li>
            <div>|</div>
        </li>
        <li>
            <div>
                <a href="#scheduleD">جدول المواعيد</a>
            </div>
        </li>
        <li class="back">
            <div>
                <a @click.prevent="goBack">Back</a>
            </div>
        </li>
    </ul>
    <div class="main">
        
        
        <div class="roomInfo">
            <h2>{{roomInf.name}}</h2>
            <h3>{{roomInf.teacher}}, {{roomInf.subject}}</h3>
        </div>
        <div class="posts-div">
            <div v-if="Object.keys(posts).length!==0" >
                <ul>
                    <li v-for="post in posts" :key="post" class="post-item">
                        <div class="header">{{post.user_id}}</div>
                        <div>{{post.body}}</div>
                    </li>
                </ul>
            </div>
            <div v-else class="elseC">
                <strong>لا توجد أي رسائل لهذه الغرفة</strong>
            </div>
            <div class="msgDiv">
                <div>
                    <input type="text" placeholder="اكتب رسالتك هنا" v-model="studentMsg" class="msgBox"/>
                    <span><a @click="sendMsg">أرسل</a></span>
                </div>
            </div>

        </div>

        <div class="assignments">
            <ul v-if="assignments.length">
                <li v-for="assignment in assignments" :key="assignment" class="assignment-item">{{assignment}}<a href="#showMoreInfo">اعرض المعلومات</a><br><a href="#handAssignment">تسليم الواجب</a></li>

            </ul>
            <div v-else class="elseC">
                <strong>لا يوجد أي مهمات/واجبات حاليا</strong>
            </div>
        </div>

    </div>
    <div id="scheduleD" class="schedule">
        list
    </div>
    <div id="showMoreInfo">
        <div id="box1">
            <div class="exit">
                <a href="#">x</a>
            </div>
            <h2>{{assignmentMore.name}}</h2>
            <div class="inMiddle">
                <h3>{{assignmentMore.desc}}</h3>
            </div>
            <div class="atBottom">
                <h4>{{assignmentMore.duedate}}</h4>
                <button v-if="assignmentMore.attachment"><h4>تحميل</h4></button>
                <h4 v-else>لا يوجد ملفات مرفقة</h4>
            </div>
        </div>
    </div>
    <div id="handAssignment">
        <div id="handBox">
            <div class="exit">
                <a href="#" onclick="document.getElementById('handFile').value=''; document.getElementById('handNotes').value='';">x</a>
            </div>
            <div>
                
                <input type="text" name="handNotes" id="handNotes">
                <label for="handNotes">ملاحظات</label>
            </div>
            <div>
                <input type="file" name="handFile" id="handFile">
            </div>
        </div>
    </div>

</template>

<script>
import axiosinst from '../axios';

export default {
    name:"sturoom",
    data:function(){
        return {
            assignments:{},
            posts:{},
            roomInf:{},
            assignBox:{},
            assignmentMore:{},
            studentMsg:'',
        }
    },
    methods:{
        goBack(){
            this.$router.back();
        },
        storeAssignment(param){
            this.assignmentMore=param;
        },
        sendMsg(){
            axiosinst.post('http://localhost:8000/api/addPost/'+window.localStorage.getItem('roomIndex'),{
                'post':this.studentMsg,
            },{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
            }).then((res)=>{
                console.info(res);
                this.studentMsg='';
            }).catch((err)=>{
                console.error(err);
                if(err.response){
                    console.warn(err.response);
                    if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
                    console.warn(err.response.status);
                }
            });
        },
    },
    mounted(){
        console.warn(this.$route.name);
        axiosinst.post("http://localhost:8000/api/getRoomInfo/"+window.localStorage.getItem('roomIndex'),{},{
            headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),//this.$store.state.userToken,
                }
        }).then((res)=>{
            this.roomInf=res.data.roomInf;
            console.info(res.data.roomInf);
        }).catch((err)=>{
            console.error(err);
        });
        axiosinst.post("http://localhost:8000/api/getPosts/"+window.localStorage.getItem('roomIndex'),{},{
            headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),//this.$store.state.userToken,
                }
        }).then((res)=>{
            this.posts=res.data.posts;
            console.info(res.data.posts);
        }).catch((err)=>{
            console.error(err);
        });
        axiosinst.post("http://localhost:8000/api/getAssignments/"+window.localStorage.getItem('roomIndex'),{},{
            headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),//this.$store.state.userToken,
                }
        }).then((res)=>{
            this.assignments=res.data.assignments;
            console.info(res.data.assignments);
        }).catch((err)=>{
            console.error(err);
        });
        window.Echo.private('room').listen('PostSent',(e)=>{
            console.warn('event : '+e);
            this.posts.push({
                post:e.message.post,
                user:e.user,
            });
        });
    }
}
</script>

<style>
    #showMoreInfo{
        position: absolute;
        width: 100%;
        height: 70%;
        top: 0;
        left: 0;
        display: none;
    }
    #box1 {
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
    background: #022534;
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: auto auto auto auto;
  }
  #handAssignment{
    position: absolute;
        width: 40%;
        height: 30%;
        top: 50%;
        left: 50%;
        display: none;
    }
    #handAssignment label,input[type="file"]{
        color:whitesmoke;
    }
  #handBox{
      position: absolute;
      height: 80%;
      width: 50%;
      text-align: center;
      padding-top: 5px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
      border: 3px solid #a0bacc;
      margin: auto;
      top: 10px;
      right: 10px;
      bottom: 10px;
      left: 10px;
      background-color: #022534;
  }
    .exit{
        margin-left: 104%;
    }
    #showMoreInfo:target{
        display: block;
    }
    #handAssignment:target{
        display: block;
    }
    body{
        background-color: turquoise;
    }
    .nav{
        list-style-type: none;
        margin: 1%;
        padding: 1%;
        overflow: hidden;
        background-color: rgb(15, 176, 182);
    }
    .nav li{
        float: right;
    }
    .nav li div{
        display: block;
        color: white;
        text-align: center;
        margin: 6px;
        padding: 6px;
        text-decoration: none;
    }
    .active{
        background-color: white;
    }
    .nav li div a:hover:not(.active){
        background-color: darkgrey;
    }
    .nav li div a{
        margin: 5px;
    }
    .main{
        background-color: turquoise;
        display: grid;
        justify-content: center;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto;
        column-gap: 3px;
        grid-auto-rows: 150px;
    }
    .roomInfo{
        grid-column-end: span 2;
        grid-row-end: auto;
    }
    .posts-div{
        border: 1px solid grey;
        background-color: snow;
        display: grid;
        width: 230px;
        height: 200px;
        grid-template-rows: auto 19px;
        grid-template-columns: auto;
        border-bottom-right-radius:15px ;
        border-bottom-left-radius:15px ;
    }
    .posts-div div{
        grid-column-end: span 2;
    }
    .assignments{
        border: 1px solid grey;
        background-color: white;
    }
    
    button{
        background-color: white;
        border: 1px solid grey;
    }
    input{
        border: 1px solid grey;
    }
    .schedule{
        display: none;
    }
    ul{
        list-style-type: none;
        
    }
    .assignments  ul li{
        border: 1px solid black;
        margin: 5px;
        padding: 5px;
        text-align: center;
        transform: translate(-9%);
        
    }
    .atBottom{
        display: flex;
        justify-content: right;
    }
    .inMiddle{
        float: left;
    }
    .posts-div div ul{
        width: 100%;
        transform: translate(-18.5%);
    }
    .posts-div div ul li{
        border:1px solid grey;
        width: 100%;
        height: auto;
        float: left;
        text-align: center;
    }
    .msgDiv{
        border: 1px solid grey;
        border-radius: 18px;
        height: 24px;
        display: inline-block;
        position: relative;
        bottom: 6px;
    }
    .msgBox{
        border: none !important;
        background: transparent;
        height: 22px;
    }
    .msgBox:focus{
        background-color: lightblue;
    }
    .msgDiv div span  {
        border: 1px solid grey;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        height: 23px;
        width: 44px;
        float: right;
    }
    .elseC{
        
        margin-top: 30%;
    }
    .assignments{
        width: 300px;
    }
</style>