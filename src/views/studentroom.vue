<template>
  <ul
    class="roomvavul"
    style="
      height: 65px;
      width: 99.6%;
      list-style-type: none;
      margin: -1%;
      padding: 1%;
      overflow: hidden;
      background-color: #939b62;
    "
  >
    <div class="navroom" style="margin-right: 35%">
      <li style="margin-right: -50%; background-color: #939b62">
        <div style="display: flex">
          <h4 class="momo" style="padding:5px font-family: sans-serif; margin-right:10px;">
            {{userName}}
          </h4>
          <img src="" alt="" style="width: 50px; height: 50px; padding: 5px" />
        </div>
      </li>
      <li style="margin-right: -30%; background-color: #939b62">
        <a class="w" href="#notifec">
          <div>
            <img
              :src="notifecationlogo"
              alt=""
              style="width: 30px; height: 30px"
            />
            <div>الاشعارات</div>
          </div>
        </a>
      </li>

      <li style="margin-right: 25%; background-color: #939b62">
        <div style="border: 1px solid #939b62">
          <h1>{{ roomName }}</h1>
        </div>
      </li>

      <li style="margin-right: 55%; background-color: #939b62" @click.prevent="logout">
        <a class="w">
          <div>
            <img :src="logoutLogo" alt="" style="width: 30px; height: 30px" />
            <div>تسجيل الخروج</div>
          </div>
        </a>
      </li>
    </div>
  </ul>

  <ul
    class="v"
    style="position: fixed; height: 600px; background: none; margin-top: 5%"
  >
    <li class="d" margin>
      <a class="m" @click="goB">
        <div>
          <img :src="homelogo" alt="" style="width: 20px; height: 20px" />
          <div style="height: 50px">الصفحة الرئيسية</div>
        </div>
      </a>
    </li>
    <li class="d" margin>
      <a class="m" href="#pr">
        <div>
          <img :src="grouplogo" alt="" style="width: 20px; height: 20px" />
          <div>المستخدمين</div>
        </div>
      </a>
    </li>
    <li class="d" margin>
      <a href="#chat" class="m">
        <div>
          <img :src="chatlogo" alt="" style="width: 20px; height: 20px" />
          <div>الدردشة</div>
        </div>
      </a>
    </li>
  </ul>

  <div
    style="
      overflow: auto;
      height: 500px;
      width: 70%;
      border: 5px solid #ff7b54;
      padding: 8px;
      border-radius: 10px;
      background: #939b62;
      margin-left: 10%;
      margin-top: 2%;
    "
  >
  <pulse-loader v-if="loading" :loading='loading' :color="color" :size="size"></pulse-loader>
    <div style="margin-left: 47%">
      <div style="margin-right: 90%">
        <img
          :src="advertisementlogo"
          alt=""
          style="width: 30px; height: 30px; margin-left: 23px"
        />
        <div style="margin-right:10px;"><h2>المنشورات</h2></div>

        <a href="#abusa3" style="text-decoration: none">
          <input
            style="margin-left: -40px"
            type="submit"
            class="ad"
            name=""
            value="اضافة منشور"
          />
        </a>
      </div>
    </div>
    <div
      style="background: #eee; border-radius: 10px; margin-top:10px; height:170px;"
      v-for="post in roomPosts"
      :key="post"
    >
      <div style="display: flex; margin-left: 82%">
        <h4 class="momo" style="padding:5px font-family: sans-serif; margin-right:10px;">
          {{ post.user }}
        </h4>
        <img src="" alt="" style="width: 50px; height: 50px; padding: 5px" />
      </div>
      <div class="alert" style="text-align: right; margin-top: -7px;font-size:25px;font-style:italic;">
        <div>{{ post.body }}<br /></div>
        
      </div>
      <div style="text-align: right; margin-top:-20px;">{{ post.time }}</div>
    </div>
  </div>

  <div
    style="
      height: 500px;
      width: 70%;
      border: 5px solid #ff7b54;
      padding: 8px;
      border-radius: 10px;
      background: #939b62;
      margin-left: 10%;
      margin-top: 10px;
    "
  >
    <div style="margin-left: 45%">
      <div style="margin-right: 90%">
        <img
          :src="homework"
          alt=""
          style="width: 30px; height: 30px; margin-left: 12px"
        />
        <div><h2>الواجبات</h2></div>
      </div>
    </div>

    <div
      style="
        height: 250px;
        width: 100%;
        border: 1px solid #ff7b54;
        border-radius: 5px;
        background: #f8ede3;
        display: flex;
      "
    >
      <div
        style="
          margin-left: 50px;
          height: 150px;
          width: 120px;
          border: 1px solid #ff7b54;
          border-radius: 5px;
          background: #ffd3b4;
        "
        v-for="task in roomTasks"
        :key="task"
      >
        <div
          style="
            height: 50px;
            width: 119px;
            border: 1px solid #ff7b54;
            background: #f8ede3;
          "
        >
          <img
            :src="document"
            alt=""
            style="width: 30px; height: 30px; margin-left: 45px"
          />
        </div>
        <div style="height: 50px; text-align: right">{{ task.due_date }}</div>
        <div style="text-align: right">{{ task.assignment_details }}</div>
        <a href="#tasks" style="text-decoration: none" @click="chTask(task)">
          <input
            style="margin-left: -17px"
            type="submit"
            class="ad"
            name=""
            value="تسليم الملف"
          />
        </a>
      </div>
    </div>
  </div>

  <div
    style="
      height: 500px;
      width: 70%;
      border: 5px solid #ff7b54;
      padding: 8px;
      border-radius: 10px;
      background: #939b62;
      margin-left: 10%;
      margin-top: 10px;
    "
  >
    <div style="margin-left: 45%">
      <div style="margin-right: 90%">
        <img
          :src="speech"
          alt=""
          style="width: 30px; height: 30px; margin-left: 20px"
        />
        <div><h2>الشروحات</h2></div>
      </div>
    </div>

    <div
      style="
        height: 250px;
        width: 100%;
        border: 1px solid #ff7b54;
        border-radius: 5px;
        display: flex;
        background: #f8ede3;
      "
    >
      <div
        style="border: 1px solid #a0bacc; width: 90px; height: 90px;margin-left:20px;border-radius:10%;"
        v-for="circ in roomCirc"
        :key="circ"
        @click="downloadFile(circ.file_id)"
      >
        <img
          :src="multimedia"
          alt=""
          style="width: 30px; height: 30px; margin-left: 28px"
        />
        <div style="text-align: center">{{ circ.description }}</div>
      </div>
    </div>
  </div>

  <div
    style="
      height: 500px;
      width: 70%;
      border: 5px solid #ff7b54;
      padding: 8px;
      border-radius: 10px;
      background: #939b62;
      margin-left: 10%;
      margin-top: 10px;
    "
  >
    <div style="margin-left: 45%">
      <div style="margin-right: 90%">
        <img
          :src="test"
          alt=""
          style="width: 50px; height: 50px; margin-left: 9px"
        />
        <div><h2>الامتحانات</h2></div>
      </div>
    </div>

    <div
      style="
        height: 250px;
        width: 100%;
        border: 1px solid #a0bacc;
        border-radius: 5px;
        display: flex;
        background: #f8ede3;
      "
    >
      <div
        style="width: 90px; height: 90px"
        v-for="exam in roomExams"
        :key="exam"
        @click="currentExam = exam"
      >
        <img
          :src="pc"
          alt=""
          style="width: 50px; height: 50px; margin-left: 28px"
        />
        <a href="#startExam" style="text-decoration:none;color:black;">
          <div style="text-align: right; ">{{ exam.name }}</div>
        </a>
      </div>
    </div>
  </div>

  <div id="notifec">
    <div id="boxnotification">
      <div class="exit">
        <a href="#">
          <img :src="cancelLogo" alt="" style="width: 30px; height: 30px" />
        </a>
      </div>

      <div
        class="alert"
        style="border-radius: 10px;font-size:25px; font-style: italic"
        v-for="not in notifications"
        :key="not"
      >
        {{ not.body }}
        <div style="float: left">
          {{ not.created_at }}
        </div>
      </div>
    </div>
  </div>

  <div id="abusa3">
    <div id="boxabusa3">
      <div class="exit">
        <a href="#">
          <img :src="cancelLogo" alt="" style="width: 30px; height: 30px" />
        </a>
      </div>
      <div>
        <img
          :src="advertisementlogo"
          alt=""
          style="width: 30px; height: 30px; margin-left: 5px"
        />
        <div><h2>اضافة منشور</h2></div>
      </div>

      <textarea
        v-model="userText"
        name="w3review"
        rows="10"
        cols="50"
        style="text-align: right"
      >
      </textarea>
      <input
        type="submit"
        class="done"
        name=""
        value="حفظ"
        @click.prevent="sendPost"
      />
    </div>
  </div>

  <div id="tasks">
    <div id="boxtasks">
      <div class="exit">
        <a href="#">
          <img :src="cancelLogo" alt="" style="width: 30px; height: 30px" />
        </a>
      </div>
      <img
        :src="bar"
        alt=""
        style="width: 30px; height: 30px; margin-left: 10px"
      />
      <div
        style="
          width: 250px;
          height: 100px;
          border: 1px solid #a0bacc;
          margin-left: 32%;
          background: #f8ede3;
        "
      ></div>

      <div class="upload-btn-wrapper" style="margin-top: 3%">
        <button class="btn" type="submit" id="submit" name="submit">
          تسليم الملف
        </button>
        <input type="file" ref="handInFile" @change="chHandFile" />
      </div>
      <input
        type="submit"
        class="done"
        name=""
        value="حفظ"
        @click="handTask(currTask.id)"
      />
      <div style="">
        <h1>التقييم</h1>
        <div
          style="
            background: #e2ebf1;
            width: 300px;
            height: 70px;
            margin-left: 180px;
          "
        >
          <h1>50/50</h1>
        </div>
      </div>
      <div style="">
        <h1>العلامة</h1>
        <div
          style="
            background: #e2ebf1;
            width: 300px;
            height: 70px;
            margin-left: 180px;
          "
        >
          <h1>50/50</h1>
        </div>
      </div>
    </div>
  </div>

  <div id="pr">
    <div id="boxpart">
      <div class="" style="width: 300px">
        <div class="left" style="background-color: #bbb; border-radius: 10px">
          <div class="exit" style="margin-left: 88%">
            <a href="#">
              <img :src="cancelLogo" alt="" style="width: 30px; height: 30px" />
            </a>
          </div>

          <h2 style="margin-left: 1%">المستخدمين</h2>
          <div style="display: flex">
            <input
              style="margin-right: 0px"
              id="mySearch"
              placeholder="...بحث"
              title="Type in a category"
            />
          </div>
          <div style="height: 300px; overflow: auto">
            <ul id="myMenu" style="background-color: #bbb; height: 500px">
              <li
                style="background-color: #bbb"
                v-for="user in roomUsers"
                :key="user"
              >
                <a
                  style="
                    width: 300px;
                    background-color: #bbb;
                    text-align: right;
                  "
                  >{{ user.name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="startExam">
    <div class="boxExam">
      <div class="exit">
        <a href="#">
          <img :src="cancelLogo" alt="" style="width: 30px; height: 30px" />
        </a>
      </div>
      <div class="content">
        <h2>{{ currentExam.name }}:اسم الامتحان</h2>
        <h2>{{ currentExam.start_date }}:موعد الامتحان</h2>
        <h2>{{ currentExam.noOfQuestions }}:عدد الاسئلة</h2>

        <h1 v-if="currentExam.completed">
          {{ currentExam.all }} من {{ currentExam.mark }}:العلامة
        </h1>

        <a
          style="text-decoration: none"
          @click="chWind"
          v-else-if="Date.parse(currentExam.start_date) <= Date.now()"
        >
          <input
            style="margin-left: 250px"
            type="submit"
            class="ad"
            name=""
            value="بدء الامتحان"
          />
        </a>
        <div v-else><p>!لم يحن موعد الامتحان بعد</p></div>
      </div>
    </div>
  </div>

  <div id="chat">
    <div id="boxchat">
      <div class="exit">
        <a href="#">
          <img :src="cancelLogo" alt="" style="width: 30px; height: 30px" />
        </a>
      </div>

      <div class="messages">
        <div class="msg-header">
          <div style="display: flex; margin-left: 75%;margin-top:8px;">
            <h4
              class="momo"
              style="padding:5px font-family: sans-serif; color:black; margin-right:5px;"
            >
              اسم المستخدم
            </h4>
            <img
              src=""
              alt=""
              style="width: 50px; height: 50px; padding: 5px"
            />
          </div>
        </div>

        <div class="chat-page">
          <div class="msg-inbox">
            <div class="chats">
              <div class="msg-page">
                <div v-for="msg in activeChat" :key="msg">
                  <div class="received-chats" v-if="msg.user_id != user.id">
                    <div class="received-chats-img">
                      <img src="love.jpg" />
                    </div>
                    <div class="received-msg">
                      <div class="received-msg-inbox">
                        <p>
                          {{ msg.body }}
                        </p>
                        <span class="time">
                          {{ msg.created_at }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="outgoing-chats" v-else>
                    <div class="outgoing-chats-msg">
                      <p>
                        {{ msg.body }}
                      </p>
                      <span class="time">
                        {{ msg.created_at }}
                      </span>
                    </div>
                    <div class="outgoing-chats-img">
                      <img src="abojamal.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="msg-bottom">
            <div class="input-group">
              <span class="input-group-text">
                <img :src="sendLogo" @click="sendMsg" />
              </span>
              <input
                v-model="userMsg"
                style="color: black; background-color: #dddddd"
                type="text"
                name="userMsg"
                id="userMsg"
                class="form-control"
                placeholder="..اكتب رسالتك هنا"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="convo-container">
        <div class="back" @click="this.$router.back(-1)"></div>

        <div class="rownew">
          <div
            class="cont"
            style="
              background-color: #ff7b54;
              margin-left: 150px;
              overflow: auto;
              width: 350px;
              height: 400px;
              padding: 15px 0;
              margin-top: 20px;
            "
          >
            <h2 style="color: black">المستخدمين</h2>
            <input
              style="
                width: 90%;
                font-size: 18px;
                padding: 11px;
                border: 1px solid #ddd;
              "
              id="mySearchcont"
              onkeyup="myFunction()"
              placeholder="Search.."
              title="Type in a category"
            />
            <ul id="mycont" style="width: 300px">
              <li style="background-color: #ff7b54" v-for="convo in users" :key="convo" @click="changeChat(convo[0].id)">
                <a
                  style="
                    background-color: #ff7b54;
                    width: 300px;
                    padding: 12px;
                    text-align: reight;
                    text-decoration: none;
                    border: 1px solid #ddd;
                    color: rgb(90, 84, 84);
                    display: block;
                  "
                  >{{convo[0].name}}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosinst from "../axios";
import db from "../firebase";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
export default {
  name: "Sroom",
  data() {
    return {
      logoutLogo: require("@/assets/logout.png"),
      notifecationlogo: require("@/assets/notifecation.png"),
      homelogo: require("@/assets/home.png"),
      grouplogo: require("@/assets/group.png"),
      chatlogo: require("@/assets/chat.png"),
      advertisementlogo: require("@/assets/post.png"),
      homework: require("@/assets/homework.png"),
      folder: require("@/assets/folder.png"),
      speech: require("@/assets/speech.png"),
      files: require("@/assets/files.png"),
      document: require("@/assets/document.png"),
      multimedia: require("@/assets/multimedia.png"),
      cancelLogo: require("@/assets/cancel.png"),
      deleted: require("@/assets/delete.png"),
      gamepad: require("@/assets/gamepad.png"),
      test: require("@/assets/test.png"),
      pc: require("@/assets/pc.png"),
      bar: require("@/assets/bar.png"),
      sendLogo: require("@/assets/paper-plane.png"),
      roomName: "",
      userName: "",
      tName: "",
      roomUsers: [],
      roomPosts: [],
      roomTasks: [],
      roomCirc: [],
      handInFile: "",
      currTask: {},
      roomExams: [],
      currentExam: {},
      notifications: [],
                  msgs:[],
            users:[],
            user:{},
            activeChat:{},
            newMsgs:[],
            userMsg:'',
            NewPosts:[],
            loading:true,
    };
  },
  mounted() {
    axiosinst
      .post(
        "http://localhost:8000/api/getRoomInfo/" +
          window.localStorage.getItem("roomIndex"),
        {},
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("userToken"),
          },
        }
      )
      .then((res) => {
        this.roomName = res.data.roomInf.name;
        this.tName = res.data.roomInf.teacher;
        this.userName=res.data.roomInf.user;
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 401 || err.response.status == 419)
            this.$router.push("/LogIn");
        }
      });
    axiosinst
      .post(
        "http://localhost:8000/api/getPosts/" +
          window.localStorage.getItem("roomIndex"),
        {},
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("userToken"),
          },
        }
      )
      .then((res) => {
                this.loading=false;
        this.roomPosts = res.data.posts;
        for (let v in this.roomPosts) {
          var dt = this.roomPosts[v]["time"];
          var dta = dt.split("T");
          let str = dta[0] + " " + dta[1].split(".")[0];
          this.roomPosts[v]["time"] = new Date(str).getTime();
        }
        this.roomPosts.sort((a, b) => {
          if (a["time"] > b["time"]) return -1;
          if (a["time"] < b["time"]) return 1;
          return 0;
        });
        for (let k in this.roomPosts) {
          let smthing = this.roomPosts[k]["time"];
          this.roomPosts[k]["time"] = new Date(smthing).toLocaleString();
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 401 || err.response.status == 419)
            this.$router.push("/LogIn");
        }
      });
    axiosinst
      .post(
        "http://localhost:8000/api/getAssignments/" +
          window.localStorage.getItem("roomIndex"),
        {},
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("userToken"),
          },
        }
      )
      .then((res) => {
        this.roomTasks = res.data.assignments;
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 401 || err.response.status == 419)
            this.$router.push("/LogIn");
        }
      });
    db.ref("room-posts").on("value", (snap) => {
      snap.forEach((s) => {
        this.roomPosts.push(s.val());
      });
    });
    axiosinst
      .post(
        "http://localhost:8000/api/getRoomUsers/" +
          window.localStorage.getItem("roomIndex"),
        {},
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("userToken"),
          },
        }
      )
      .then((res) => {
        this.roomUsers = res.data.users;
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 401 || err.response.status == 419)
            this.$router.push("/LogIn");
        }
      });
    axiosinst
      .post(
        "http://localhost:8000/api/getCircs/" +
          window.localStorage.getItem("roomIndex"),
        {},
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("userToken"),
          },
        }
      )
      .then((res) => {
        this.roomCirc = res.data.circ;
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 401 || err.response.status == 419)
            this.$router.push("/LogIn");
        }
      });
    axiosinst
      .post(
        "http://localhost:8000/api/getRoomExams/" +
          window.localStorage.getItem("roomIndex"),
        {},
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("userToken"),
          },
        }
      )
      .then((res) => {
        this.roomExams = res.data;
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 401 || err.response.status == 419)
            this.$router.push("/LogIn");
        }
      });
    axiosinst
      .post(
        "http://localhost:8000/api/getUserNotifications",
        {},
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("userToken"),
          },
        }
      )
      .then((res) => {
        this.notifications = res.data;
                for(const somevar of this.notifications){
            var oldD=somevar.created_at;
            var spl=oldD.split('T');
            let newD=spl[0]+' '+spl[1].split('.')[0];
            somevar.created_at=new Date(newD).toLocaleDateString();
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 401 || err.response.status == 419)
            this.$router.push("/LogIn");
        }
      });
    db.ref("room-posts").on("value", (snap) => {
      snap.forEach((s) => {
        this.NewPosts.push(s.val());
      });
      this.roomPosts.splice(0,0,this.NewPosts[this.NewPosts.length-1]);
    });
     axiosinst.post('http://localhost:8000/api/getUserMessages',{},{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
            }).then((res)=>{
                console.log(res.data);
                this.msgs=res.data.msgs;
                this.users=res.data.users;
                this.user=res.data.user;
            //     let x=this;
            //     let ch=window.Echo.private('chat');
            //     let ch2=ch.listen('MessageSent',e=>{
            //   x.msgs[e.rec].push(e.msg);
            //   this.$store.commit('User',{user:'chat.'+this.user.id});
            //   console.warn('event : '+e.msg.body+' with user : '+e.user.name);
            // });
            // console.log(ch+'  ch' );
            // console.log(ch2+'  ch2')  ;
            // console.log(ch);
            // console.log(ch2) ;
            /*var dt=this.msgs[3][0]['created_at'];
            //console.log('wtf '+this.msgs[3][0]['created_at']);
            var dta=dt.split('T');
            let str=dta[0]+' '+dta[1].split('.')[0];
            console.warn('my string : '+str);
            console.log('time of 1st msg is : '+new Date(str).getTime());
            for(let x in this.msgs){
              x.forEach()
            }*/
            for(let k in this.msgs){
              for(let v in this.msgs[k] ){
            var dt=this.msgs[k][v]['created_at'];
            var dta=dt.split('T');
            let str=dta[0]+' '+dta[1].split('.')[0];
            this.msgs[k][v]['created_at']=new Date(str).getTime();
              }
            }
            for(let k in this.msgs){
              this.msgs[k].sort((a,b)=>{
                if(a['created_at']>b['created_at'])
                  return 1;
                if(a['created_at']<b['created_at'])
                  return -1;
                return 0;
              })
            }
            for(let k in this.msgs){
              for(let v in this.msgs[k] ){
                let smthing=this.msgs[k][v]['created_at'];
                this.msgs[k][v]['created_at']=new Date(smthing).toLocaleString();
              }
            }

            db.ref('chats').on('value',snap=>{
              console.log(snap.val());
              snap.forEach(s=>{
                this.newMsgs.push(s.val());
              });
              if(this.newMsgs.length){
                this.msgs[this.newMsgs[this.newMsgs.length-1]['receiver_id']].push({
                body:this.newMsgs[this.newMsgs.length-1]['body'],
                user_id:this.newMsgs[this.newMsgs.length-1]['user_id'],
                receiver_id:this.newMsgs[this.newMsgs.length-1]['receiver_id'],
                created_at:new Date(this.newMsgs[this.newMsgs.length-1]['timestamp']).toDateString(),
                });
              }
              console.info('new msgs');
              console.log(this.newMsgs);
              console.info('msgs');
              console.warn(this.msgs);
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
  methods: {
    goB() {
      this.$router.push("/student");
    },
    chHandFile() {
      this.handInFile = this.$refs.handInFile.files[0];
    },
    handTask(id) {
      var fd = new FormData();
      if (this.handInFile != "") fd.append("stuFile", this.handInFile);

      axiosinst
        .post("http://localhost:8000/api/sendTask/" + id, fd, {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("userToken"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data == "added") this.$router.go(0);
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status == 401 || err.response.status == 419)
              this.$router.push("/LogIn");
          }
        });
    },
    chTask(task) {
      this.currTask = task;
    },
    downloadFile(id) {
      axiosinst
        .post(
          "http://localhost:8000/api/downloadFile/" + id,
          {},
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("userToken"),
            },
            responseType: "arraybuffer",
          }
        )
        .then((res) => {
          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "file.pdf"); //or any other extension
          document.body.appendChild(link);
          link.style.display = "none";
          link.click();
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status == 401 || err.response.status == 419)
              this.$router.push("/LogIn");
          }
        });
    },
    chWind() {
      window.localStorage.setItem("stuEx", this.currentExam.id);
      this.$router.push("/stugame");
    },
    sendPost() {
      axiosinst
        .post(
          "http://localhost:8000/api/addPost/" +
            window.localStorage.getItem("roomIndex"),
          {
            post: this.userText,
          },
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("userToken"),
            },
          }
        )
        .then(() => {
          db.ref("room-posts").push({
            body: this.userText,
            user:this.userName,
            time: new Date().toString(),
          });
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status == 401 || err.response.status == 419)
              this.$router.push("/LogIn");
          }
        });
    },
    changeChat(id){
        this.activeChat=this.msgs[id];
        console.info(this.activeChat);
      },
      sendMsg(){
        axiosinst.post('http://localhost:8000/api/storeMsg',{
          'body':this.userMsg,
          'rec':this.activeChat[0]['receiver_id'],
        },{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),
                }
            }).then((res)=>{
                console.info(res);
                db.ref('chats').push({
                  body:this.userMsg,
                  timestamp:new Date().getTime(),
                  user_id:this.user.id,
                  receiver_id:this.activeChat[0]['receiver_id'],
                });
                this.userMsg='';
            }).catch((err)=>{
                console.error(err);
                if(err.response){
                    console.warn(err.response);
                    if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
                    console.warn(err.response.status);
                }
            });
      },
      logout() {
      axiosinst
        .post(
          "http://localhost:8000/api/logoutUser",
          {},
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("userToken"),
            },
          }
        )
        .then(() => {
          window.localStorage.clear();
          this.$router.push("/");
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status == 401 || err.response.status == 419)
              this.$router.push("/LogIn");
          }
        });
    },
  },
  components:{
    PulseLoader,
  }
};
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
  background-color: #ffb26b;
}

.v {
  list-style-type: none;
  margin-left: 89%;
  padding: 0;
  width: 10%;
}

li .m {
  text-align: center;
  width: 50px;
  border-radius: 10px;
  background-color: #ff7b54;
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li .m:hover:not(.active) {
  background-color: #555;
  color: white;
}
.d {
  border-radius: 10px;
  height: 90px;
  background-color: #ff7b54;
}

#notifec {
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
  color: #3498db;
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  margin: auto;
  background: #ffd56b;
}
.exit {
  margin-left: 104%;
}

.alert {
  padding: 20px;
  margin: 30px;
  background-color: #eee;
  color: rgb(14, 12, 12);
}

.ad {
  background: none;
  display: block;
  margin: 30px auto;
  text-align: center;
  border: 2px solid #ffb26b;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
  color: #111;
}
.ad:hover {
  background: #ffb26b;
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

#tasks {
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
#boxtasks {
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

  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  margin: auto;
  background: #ffd56b;
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
  margin-left: 80px;
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
  margin-left: 80px;
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
  margin-left: 100px;
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

#pr {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

#pr:target {
  display: block;
}
#boxpart {
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
  display: block;
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
#startExam {
  background: #f4f4f480;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
#startExam:target {
  display: block;
}

#chat {
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
  height: 80%;
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
  background: #ffd56b;
}
.msg-header {
  border: 1px solid #ccc;
  width: 600px;
  height: 15%;
  border-bottom: none;
  margin-left: -7%;
  background-color: #ff7b54;
}
.msg-header-img {
  border-radius: 50%;
  width: 50px;
  margin-left: 7%;
  margin-top: 15px;
  float: left;
}
.activeMsg {
  width: 120px;
  float: left;
  margin-top: 10px;
}
.activeMsg h4 {
  font-size: 10px;
  margin-left: 10px;
  color: #fff;
}
.chat-page {
  padding: 0 0 50px 0;
  position: relative;
}
.msg-inbox {
  border: 1px solid grey;
  overflow: hidden;
  margin-left: -7%;
  width: 600px;
}

.msg-page {
  height: 400px;
  overflow-y: auto;
  background-color: #e6e9c49f;
  margin-left: -7%;
}
.received-chats-img {
  display: block;
  width: 20px;
  float: left;
  margin-left:50px;
}
.received-msg {
  padding: 0 0 0 10px;
  margin-left: 50px;
}
.received-msg-inbox {
  width: 57%;
}
.received-msg-inbox p {
  background: #efefef none repeat scroll 0 0;
  border-radius: 10px;
  color: #646464;
  font-size: 14px;
  margin-left: 30px;
  padding: 5px 10px 5px 12px;
  width: 50%;
}
.time {
  display: inline-block;
  font-size: 12px;
  color: #777;
  margin: 8px 0 0;
}
.outgoing-chats {
  overflow: hidden;
  margin: 26px 20px;
  
}
.outgoing-chats-msg p {
  background: #ff7b54 none repeat scroll 0 0;
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  margin: 0;
  margin-left: 40%;
  padding: 5px 10px 5px 12px;
  width: 50%;
}
.outgoing-chats-msg {
  float: left;
  width: 50%;
  margin-left: 40%;
}
.outgoing-chats-img {
  display: inline-block;
  width: 20px;

}
.outgoing-chats-msg span {
  margin-left: 41%;
}
.msg-bottom {
  position: relative;
  height: 10%;
  background-color: #ff7b54;
}
.input-group {
  position: relative;
  margin-left: -110%;
  outline: none !important;
  border-radius: 20px;
  width: 1300px !important;
  background-color: #ff7b54;
}
.form-control {
  border: none !important;
  border-radius: 20px;
  height: 10px;
  float: right;

  padding-left: 50px;
}
.input-group-text {
  background: transparent !important;
  border: none;
  background-color: #777;
}
.input-group-text img {
  height: 32px;
  float: right;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.convo-container {
  position: relative;
  float: right;
  width: 500px;
  height: 450px;
  bottom: 520px;
}
.conversations-list {
  margin-top: 30px;
  margin-left: 170px;
  border: 1px solid #777;
  background-color: #afaeae;
  width: 300px;
  height: 450px;
  overflow-y: scroll;
  overflow-x: none;
}
.convo {
  border-bottom: 1px solid black;
  padding-bottom: 10px;
}
.convo-img {
  margin-top: 10px;
  float: left;
}
.convo-info {
  margin-left: 60px;
  border-bottom: none;
}
.messages {
  width: 750px;
  height: 500px;
}
#abusa3 {
  background: #f4f4f480;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

#abusa3:target {
  display: block;
}
#boxabusa3 {
  overflow: auto;
  height: 65%;
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
.boxExam {
  overflow: auto;
  height: 35%;
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
</style>