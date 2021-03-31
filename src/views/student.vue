<template>
<ul>
    <div class="navs" style="">

        <div style="">
            <li style="margin-right:-40%;"><a href="#studentinfo">
                    <div>المعلومات الشخصية
                        <img :src="s1Logo" alt="" style="width:35px;height:35px;">
                    </div>
                </a></li>
        </div>
        <li style="margin-right: 85%;"><a class="" @click.prevent="logout">
                <div >تسجيل الخروج
                    <img :src="logoutLogo" alt="" style="width:25px;height:25px;">
                </div>
            </a></li>

    </div>
</ul>
<div class="findclass"
    style="  height:100%;  width: 70%;  text-align: center;  border: 3px solid #A0BACC;border-radius: 10px; color: #3498db;  position: absolute;top: 14%;right: 0%;  margin: auto;">

    <div>الدخول الي الصف
        <img :src="s2Logo" alt="" style="width:50px;height:50px;">
    </div>

    <input type="text" placeholder="البحث من خلال اسم الصف" style=" padding:10px;  ">
    <div style=" margin-top:-4%; width: 100%;  display: flex;">
        <div style=" flex-grow: 3; margin-right: 10%;">
            <label style="margin-right:4%;">البحث حسب المادة</label>
            <select class="dropbtn" name="usertype" id="usertypes" style="width:50% ;  margin-left: 20%;  ">
                <option value="teacher">علوم</option>
                <option value="student">رياضيات</option>
                <option value="teacher">اللغة العربية</option>
                <option value="student">اللغة الانجليزية</option>
                <option value="teacher">التربية الاسلامية</option>
                <option value="student">اجتماعيات</option>

            </select>
        </div>
        <div style=" flex-grow: 3;   ">
            <label style="margin-right:-7%;">البحث حسب الصف</label>
            <select class="dropbtn" name="usertype" id="usertypes " style="width:50%  ;  margin-left: 30%;">
                <option value="teacher">الأول</option>
                <option value="student">الثاني</option>
                <option value="student">الثالث</option>
                <option value="student">الرابع</option>
                <option value="student">الخامس</option>
                <option value="student">السادس</option>
                <option value="student">السابع</option>
            </select>

        </div>
    </div>
</div>
<div
    style="height:100%;  width: 25%;  text-align: center; border: 3px solid #A0BACC;  border-radius: 10px;color: #3498db;  position: absolute;  top: 14%; left: 0%; margin: auto; ">
    <div>الصفوف التي اخترتها
        <img :src="s3Logo" alt="" style="width:50px;height:50px;">
    </div>
    <ul>
        <li v-for="room in rooms" :key="room"><button @click="showRoom(room.room_id)">{{room.name}}</button></li>
    </ul>
</div>
<div id="changedata">
    <div id="boxchange">
        <div class="exit"> <a href="#">
                <img :src="cancelLogo" alt="" style="width:30px;height:30px;">

            </a></div>
        <div class="a">

            <input type="text" placeholder="الاسم الجديد">
            <input type="text" placeholder="البريد الالكتروني الجديد">
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
<div id="studentinfo">
    <div id="boxs">
        <div class="exit"> <a href="#">
                <img :src="cancelLogo" alt="" style="width:30px;height:30px;">

            </a></div>

        <div class="box" method="post" enctype="multipart/form-data">
            <div id="pic1" style=""> <img id="i1" width="100%" height="100"> </div>
            <div class="card">

                <div class="upload-btn-wrapper">
                    <button class="btn" type="submit" id="submit" name="submit">Upload your pic</button>
                    <input type="file">
                </div>

                <table>
                    <tr>
                        <th>:اسم المستخدم</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>:الوظيفة</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>:البريد الالكتروني </th>
                        <td> </td>

                    </tr>

                </table>
                <a href="#changedata" class="changed">change data</a>

            </div>
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
            rooms:{},
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
            window.localStorage.setItem('roomIndex',''+id);
            this.$router.push('/studentroom');
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


<style>
 ul {
        list-style-type: none;
        margin: -1%;
        padding: 1%;
        overflow: hidden;
        background-color: #08546c;

    }

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
        background-color: #111;
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
        height: 80%;
        width: 50%;
        text-align: center;
        padding-top: 5px;
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 5%;

        border: 3px solid #A0BACC;
        ;
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

    #studentinfo:target {
        display: block;
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


    .box table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        padding: 3%;
        text-align: right;
        border-bottom: 1px solid #ddd;
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

    .close:hover {
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

    .close:hover {
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
        border: 3px solid #A0BACC;
        ;
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

    .close:hover {
        background: #2ecc71;
    }

    .a input[type="text"] {
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

    .a input[type="text"]:focus {
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

    .save:hover {
        background: #2ecc71;
    }

    .a input[type="password"] {
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

    .a input[type="password"]:focus {
        width: 80%;
        border-color: #2ecc71;
    }

    .dropbtn {
        border: 0;
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

    .findclass input[type="text"] {
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

    .findclass input[type="text"]:focus {
        width: 40%;
        border-color: #2ecc71;
    }
</style>