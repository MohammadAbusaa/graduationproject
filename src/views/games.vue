<template>
  <div class="container">
    <div class="back" @click="$router.push('/teacherroom')">
      <img :src="backLogo" alt="bl" />
    </div>
    <div class="main">
      <table class="table-view">
        <tr>
          <th>عرض علامات الطلاب</th>
          <th>تعديل معلومات الامتحان</th>
          <th>عرض الامتحان</th>
          <th>عدد الاسئلة</th>
          <th>وقت الامتحان</th>
          <th>اسم الامتحان</th>
        </tr>
        <tr v-for="exam in roomExams" :key="exam">
          <td>
            <a href="#showMarks"
              ><input @click="showMarks(exam.id)" type="button" value="عرض"
            /></a>
          </td>
          <td>
            <a href="#editExam"
              ><input
                @click="changeCurrExam(exam.id)"
                type="button"
                value="تعديل"
            /></a>
          </td>
          <td>
            <a href="#showExam"
              ><input @click="showExam(exam.id)" type="button" value="عرض"
            /></a>
          </td>
          <td>{{ exam.noOfQuestions }}</td>
          <td>{{ exam.start_date }}</td>
          <td>{{ exam.name }}</td>
        </tr>
      </table>
      <div class="newExamButton">
        <a href="#newExam">
          <input class="done" value="انشئ امتحان جديد" type="button" />
        </a>
      </div>
    </div>
  </div>

  <div id="showExam">
    <div class="exit">
      <a href="#">
        <img :src="cancelLogo" alt="" style="width: 30px; height: 30px" />
      </a>
    </div>
    <div class="b" id="b">
      <div class="head">
        <h3>
          هنا توجد قائمة بالاسئلة التي اضفتها، يمكنك اضافة سؤال جديد من خلال
          الضغط على الصورة بالاسفل
        </h3>
      </div>
      <div class="addedList">
        <div
          class="qItem"
          v-for="question in examQuestions"
          :key="question"
          @click="showQuestion(question.id)"
        >
          <h5>{{ question.body }}</h5>
        </div>
        <div class="addItem qItem">
          <img :src="plusLogo" alt="plus" />
        </div>
      </div>
    </div>
  </div>

  <div id="showMarks">
    <div id="marksBox">
      <div class="exit">
        <a href="#">
          <img :src="cancelLogo" alt="" style="width: 30px; height: 30px" />
        </a>
      </div>
      <table>
        <tr>
          <th>العلامة</th>
          <th>اسم المستخدم</th>
        </tr>
        <tr v-for="mark in studentsMarks" :key="mark">
          <td>{{mark.mark}}</td>
          <td>{{mark.name}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axiosinst from "../axios";
export default {
  name: "games",
  data() {
    return {
      backLogo: require("@/assets/backInv.png"),
      cancelLogo: require("@/assets/cancel.png"),
      plusLogo: require("@/assets/plus.png"),
      roomExams: [],
      currExamId: 0,
      examQuestions: [],
      studentsMarks:[],
    };
  },
  mounted() {
    axiosinst
      .post(
        "http://localhost:8000/api/getRoomExams/" +
          window.localStorage.getItem("troomid"),
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
  },
  methods: {
    showMarks(id) {
      this.changeCurrExam(id);
      axiosinst.post('http://localhost:8000/api/getStudentsExamMarks/'+this.currExamId,{},{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        this.studentsMarks=res.data;
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
    },
    changeCurrExam(id) {
      this.currExamId = id;
    },
    showExam(id) {
      this.changeCurrExam(id);
      axiosinst
        .post(
          "http://localhost:8000/api/getExamQuestions/" + this.currExamId,
          {},
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("userToken"),
            },
          }
        )
        .then((res) => {
          this.examQuestions = res.data;
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status == 401 || err.response.status == 419)
              this.$router.push("/LogIn");
          }
        });
    },
  },
};
</script>

<style scoped>
.container {
  width: 99%;
}
.back {
  width: 50px;
  height: 50px;
  float: right;
}
.back img {
  width: 50px;
  height: 50px;
}
.main {
  position: absolute;
  top: 30%;
  left: 30%;
}
.table-view {
  width: 500px;
  background-color: rgb(168, 96, 47);
  text-align: center;
}
.table-view,
.table-view th,
.table-view td {
  border: 1px solid black;
}
.table-view th {
  background-color: orange;
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
#showExam {
  display: none;
  position: absolute;
  top: 50px;
  left: 100px;
  width: 80%;
  height: 81%;
  background-color: orange;
}
#showExam:target {
  display: block;
}
.exit {
  margin-top: 2%;
  margin-left: 95%;
}
.addedList {
  width: 99.9%;
  border: 1px solid black;
  height: 220px;
  border-radius: 20px;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-top: 10%;
}
.qItem {
  border: 1px solid black;
  border-radius: 10px;
  float: right;
  height: 170px;
  margin: 15px;
  width: 120px;
  text-align: right;
  background-color: white;
}
.addItem {
  cursor: pointer;
}
.addItem img {
  margin-top: 20%;
  max-width: 120px;
}
.head {
  margin-top: 10%;
  text-align: right;
}
#showMarks{
  display: none;
  width: 100%;
  height: 100%;
}
#marksBox{
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: orange;
  top: 20%;
  left: 20%;
  text-align: center;
}
#showMarks:target{
  display: block;
}
#showMarks table{
  margin-left: 40%;
}
#showMarks table, #showMarks table th, #showMarks table td{
  border: 1px solid black;
}
</style>