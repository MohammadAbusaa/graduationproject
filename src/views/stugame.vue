<template>
  <div v-if="questions.length" class="container">
    <div class="container-box">
      <div class="timer">{{questions[index].question.time}}</div>
    <div class="question">
      <h1>{{questions[index].question.body}}</h1>
    </div>
    <div class="answers">
      <div v-if="questions[index].question.type == 'mc'">
        <div class="info">
          <h3>select correct answer</h3>
        </div>
        <div class="choices">
          <div class="choice" @click="answer=questions[index].answer[0].body">{{questions[index].answer[0].body}}</div>
          <div class="choice" @click="answer=questions[index].answer[1].body">{{questions[index].answer[1].body}}</div>
          <div class="choice" @click="answer=questions[index].answer[2].body">{{questions[index].answer[2].body}}</div>
          <div class="choice" @click="answer=questions[index].answer[3].body">{{questions[index].answer[3].body}}</div>
        </div>
      </div>
      <div v-else-if="questions[index].question.type == 'tf'">
        <div class="info">
          <h3>select correct answer</h3>
        </div>
        <div class="choices">
          <div class="choice" @click="answer='true'">true</div>
          <div class="choice" @click="answer='false'">false</div>
        </div>
      </div>
      <div v-else>
        <h3>enter correct answer</h3>
        <input type="text" name="Fanswer" id="Fanswer" v-model="answer" />
      </div>
    </div>
    <div v-if="index < questions.length-1">
      <a href="" style="text-decoration: none">
        <input
          type="submit"
          class="ad"
          name=""
          value="السؤال التالي"
          @click.prevent="nextQ()"
        />
      </a>
    </div>
    <div v-else>
      <a href="" style="text-decoration: none" >
        <input
          type="submit"
          class="ad"
          name=""
          value="finish"
          @click.prevent="sendAnswer()"
        />
      </a>
    </div>
    </div>
  </div>
</template>

<script>
import axiosinst from "../axios";
export default {
  name: "stugame",
  data() {
    return {
      questions: [],
      answers: [],
      answer:'',
      dbAnswers:[],
      index:0,
      qTimer:0,
      intID:0,
    };
  },
  mounted() {
    axiosinst
      .post(
        "http://localhost:8000/api/initExam/" +
          window.localStorage.getItem("stuEx"),
        {},
        {
          headers: {
            'Authorization': "Bearer " + window.localStorage.getItem("userToken"),
          },
        }
      )
      .then((res) => {
        this.questions = res.data;
        this.answer='';
        this.qTimer=this.questions[this.index].question.time;
        //this.intID=setInterval(this.timerHandler,this.qTimer*1000);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status == 401 || err.response.status == 419)
            this.$router.push("/LogIn");
        }
      });
  },
  methods: {
    sendAnswer() {
      this.nextQ();
      axiosinst
        .post(
          "http://localhost:8000/api/sendExamAnswer/" +
            window.localStorage.getItem("stuEx"),
          {
            'answers': this.answers,
          },
          {
            headers: {
              'Authorization':
                "Bearer " + window.localStorage.getItem("userToken"),
            },
          }
        )
        .then(() => {
          this.$router.back();
          //this.$router.push('/sturoom');
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status == 401 || err.response.status == 419)
              this.$router.push("/LogIn");
          }
        });
    },
    nextQ(){
      this.answers.push({
        'answer':this.answer,
        'qid':this.questions[this.index].question.id,
      });
      this.index++;
      //clearInterval(this.intID);
      //this.intID=setInterval(this.timerHandler,this.qTimer*1000);
    },
    timerHandler(){
      if (this.qTimer>=0) {
        this.qTimer--;
      }
      else {
        this.nextQ();
        clearInterval(this.intID);
      }
    }
  },
};
</script>

<style scoped>
.container {
    background: #f4f4f480;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.container-box{
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

.timer {
  border: 1px solid black;
  border-radius: 20px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  position: relative;
  float: left;
  text-align: center;
}

.question {
  margin-left: 30%;
}

.answers {
  position: relative;
  bottom: -50px;
  text-align: center;
}
.choices {
  position: relative;
  float: left;
  left: 10%;
}
.choice {
  border: 2px solid black;
  border-radius: 10px;
  margin-left: 20px;
  text-align: center;
  position: relative;
  float: left;
  width: 250px;
  height: 250px;
}
.ad {
    background: none;
    margin-top: 60px;
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
</style>