<template>
     <div class="container" id="container">
        <div class="header">
            <div class="back">
                <a href="#" onclick="document.getElementById('container').style.display='none'; document.getElementById('b').style.display='block';">
                    <img :src="backLogo" alt="back" style="max-width: 50px; max-height: 50px;">
                </a>
            </div>
            <div class="header-text">
                <h1 class="text">
                    choose one of the template available below
                </h1>
            </div>
        </div>
        <div class="templates">
            <div class="templates-grid">
                <a href="#addMCT" class="RefTemp">
                    <div class="temp">
                        template 1
                        <div class="TempImage">
                            <img :src="multLogo" alt="multiple-choice">
                        </div>
                    </div>
                </a>
                <a href="#addTF" class="RefTemp">
                    <div class="temp">
                        template 2
                        <div class="TempImage">
                            <img :src="tfLogo" alt="multiple-choice">
                        </div>
                    </div>
                </a>
                <a href="#addFA" class="RefTemp">
                    <div class="temp">
                        template 3
                        <div class="TempImage">
                            <img :src="inputLogo" alt="input">
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div id="addMCT" class="addMCT" >
        <div class="exit">
            <a href="#">
                <img :src="closeLogo" alt="x">
            </a>
        </div>
        <div class="fields">
            <p>
                قالب لسؤال اختيار من متعدد، أضف السؤال وأجوبته هنا
            </p>
            <br>
            <div>
            <input type="text" class="input" name="MCquestion" id="MCquestion" v-model="T1Q">
            <label for="MCquestion">السؤال</label>
            </div>
            <br>
            <div class="answers">
                <div class="ans">
                    <div class="ansCBoxes">
                        <label for="ans1C">اجابة صحيحة؟</label>
                        <input type="checkbox" name="ans1C" id="ans1C" v-model="T1CA1">
                        <br>
                        <label for="ans1E">تفعيل الاجابة؟</label>
                        <input type="checkbox" name="ans1E" id="ans1E" v-model="T1EA1">
                        <br>
                    </div>
                    <div class="ansText">
                        <input type="text" class="input" name="ans1Val" id="ans1Val" v-model="T1A1">
                        <label for="ans1Val">اجابة 1</label>
                        
                    </div>
                </div>
                <div class="ans">
                    <div class="ansCBoxes">
                        <label for="ans2C">اجابة صحيحة؟</label>
                        <input type="checkbox" name="ans2C" id="ans2C" v-model="T1CA2">
                        <br>
                        <label for="ans2E">تفعيل الاجابة؟</label>
                        <input type="checkbox" name="ans2E" id="ans2E" v-model="T1EA2">
                    </div>
                    <div class="ansText">
                        <input type="text" class="input" name="ans2Val" id="ans2Val" v-model="T1A2">
                        <label for="ans2Val">اجابة 2</label>
                    </div>
                </div>
                <div class="ans">
                    <div class="ansCBoxes">
                        <label for="ans3C">اجابة صحيحة؟</label>
                        <input type="checkbox" name="ans3C" id="ans3C" v-model="T1CA3">
                        <br>
                        <label for="ans3E">تفعيل الاجابة؟</label>
                        <input type="checkbox" name="ans3E" id="ans3E" v-model="T1EA3">
                    </div>
                    <div class="ansText">
                        <input type="text" class="input" name="ans3Val" id="ans3Val" v-model="T1A3">
                        <label for="ans3Val">اجابة 3</label>
                    </div>
                </div>
                <div class="ans">
                    <div class="ansCBoxes">
                        <label for="ans4C">اجابة صحيحة؟</label>
                        <input type="checkbox" name="ans4C" id="ans4C" v-model="T1CA4">
                        <br>
                        <label for="ans4E">تفعيل الاجابة؟</label>
                        <input type="checkbox" name="ans4E" id="ans4E" v-model="T1EA4">
                        <br>
                    </div>
                    <div class="ansText">
                        <input type="text" class="input" name="ans4Val" id="ans4Val" v-model="T1A4">
                        <label for="ans4Val">اجابة 4</label>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <div class="time">
                <h4>أدخل وقتا للسؤال</h4>
                <div>
                    <input type="number" name="secs" id="secs" min="0" max="60" step="5"  style="margin-right: 18px;" v-model="T1Secs">
                    <label for="secs">الثواني</label>
                    <br>
                    <input type="number" name="mins" id="mins" style="margin-right: 20px;" min="0" max="60" step="1" v-model="T1Mins">
                    <label for="mins">الدقائق</label>
                    <br>
                    <input type="number" name="hrs" id="hrs"  style="margin-right: 10px;" min="0" max="24" step="1" v-model="T1Hrs">
                    <label for="hrs">الساعات</label>
                    <br>
                </div>
            </div>
            <a href="#" @click="sendQ1">
                <div class="saveBut" style="margin-left: 25%;">
                    تخزين
                </div>
            </a>
        </div>
    </div>

    <div class="addTF" id="addTF">
        <div class="exit">
            <a href="#">
                <img :src="closeLogo" alt="x" style="max-width: 50px; max-height: 50px;">
            </a>
        </div>
        <div style="margin-left: 25%;">
            <p>
                قالب لسؤال صحيح/خاطئ، أضف السؤال واجابته
            </p>
            <label for="TFquestion">: السؤال</label>
            <input type="text" class="input" name="TFquestion" id="TFquestion" v-model="T2Q">
            <br>

            <div style="position: relative; float: left; margin-left: 50px;">
                <label for="TrueC">صحيح</label>
                <input type="radio" name="radG" id="TrueC" value="true" @change="onChange($event)">
            </div>
            <div style="position: relative; float: left; margin-left: 20px;">
                <label for="FalseC">خاطئ</label>
                <input type="radio" name="radG" id="FalseC" value="false" @change="onChange($event)">
            </div>
            <br>
            <div class="time">
                <h4>أدخل وقتا للسؤال</h4>
                <div>
                    <input type="number" name="secs" id="secs" min="0" max="60" step="5" style="margin-right: 18px;" v-model="T2Secs">
                    <label for="secs">الثواني</label>
                    <br>
                    <input type="number" name="mins" id="mins" min="0" max="60" step="1" style="margin-right: 19px;" v-model="T2Mins">
                    <label for="mins">الدقائق</label>
                    <br>
                    <input type="number" name="hrs" id="hrs" min="0" max="24" step="1" style="margin-right: 10px;" v-model="T2Hrs">
                    <label for="hrs">الساعات</label>
                    <br>
                </div>
            </div>
        </div>
        <div @click="sendQ2">
            <a href="#">
                <div class="saveBut" style="margin-left: 45%;">
                    تخزين
                </div>
            </a>
        </div>
    </div>

    <div class="addFA" id="addFA">
        <div class="exit">
            <a href="#">
                <img :src="closeLogo" alt="x">
            </a>
        </div>
        <div class="fields">
            <p>
                أضف سؤالا واجابة صحيحة 
             </p>
            <input type="text" class="input" name="FAquestion" id="FAquestion" v-model="T3Q">
            <label for="FAquestion">
                السؤال
            </label>
            <br>
            <input type="text" class="input" name="FAanswer" id="FAanswer" v-model="T3A">
            <label for="FAanswer">
                الاجابة
            </label>
            <br>
            <div class="time">
                <h4>أدخل وقتا للسؤال</h4>
                <div>
                    <input type="number" min="0" max="60" step="5" name="secs" id="secs" style="margin-right: 18px;" v-model="T3Secs">
                    <label for="secs">الثواني</label>
                    <br>
                    <input type="number" min="0" max="60" step="1" name="mins" id="mins" style="margin-right: 20px;"  v-model="T3Mins">
                    <label for="mins">الدقائق</label>
                    <br>
                    <input type="number" min="0" max="24" step="1" name="hrs" id="hrs" style="margin-right: 10px;"  v-model="T3Hrs">
                    <label for="hrs">الساعات</label>
                    <br>
                </div>
            </div>
            <a href="#" @click="sendQ3">
                <div class="saveBut">
                    تخزين
                </div>
            </a>
        </div>
    </div>

    <div class="b" id="b">
        <div class="back">
                <a href="#" @click="hideb">
                    <img :src="backLogo" alt="back" style="max-width: 50px; max-height: 50px;">
                </a>
            </div>
        <div class="head">
            <h3>
                هنا توجد قائمة بالاسئلة التي اضفتها، يمكنك اضافة سؤال جديد من خلال الضغط على الصورة بالاسفل
            </h3>
        </div>
        <div class="addedList">
            <div class="qItem" v-for="question in ExamQuestions" :key="question">
                <h5>{{question.body}}</h5>
            </div>
            <div class="addItem qItem" onclick="document.getElementById('b').style.display='none'; document.getElementById('container').style.display='block';">
                <img :src="plusLogo" alt="plus">
            </div>
        </div>
    </div>
    <div class="exams" id="exams">
        <div class="back" @click.prevent="$router.push('/teacherroom')">
                <a href="#" >
                    <img :src="backLogo" alt="back" style="max-width: 50px; max-height: 50px;">
                </a>
            </div>
        <div class="head">
            <h3>
                هنا توجد قائمة بالامتحانات التي اضفتها، يمكنك اضافة امتحان جديد من خلال الضغط على الصورة بالاسفل
            </h3>
        </div>
        <div class="addedList">
            <div class="qItem" v-for="exam in roomExams" :key="exam" style="color:white;" @click="showb(exam.id)">
                <h5>{{exam.name}}</h5>
                <h5>{{exam.noOfQuestions}}</h5>
            </div>
            <a href="#addExam">
                <div class="addItem qItem" >
                    <img :src="plusLogo" alt="plus">
                </div>
            </a>
        </div>
    </div>
    <div class="addExam" id="addExam">
        <a href="#">
            <div class="cancel">
                <img :src="cancelLogo" alt="cancel">
            </div>
        </a>
        <div class="inputs">
            <input type="text" name="examName" id="examName" v-model="examName">
            <label for="examName">:أدخل اسما للامتحان</label>

            <br>
            <h3>أدخل وقت و تاريخ بدء الامتحان</h3>
            <div>
                <input type="date" name="examDate" id="examDate" v-model="examDate">
                <br>
                <input type="time" name="examTime" id="examTime" v-model="examTime">
            </div>
        </div>
        <div class="save-button">
            <input type="submit" @click.prevent="sendExam" class="del">
        </div>
    </div>
</template>

<script>
import axiosinst from '../axios'
export default {
    name:'games',
    data(){
        return{
            plusLogo:require('@/assets/plus.png'),
            closeLogo:require('@/assets/cancel.png'),
            multLogo:require('@/assets/multiple-choice-icon-9.png'),
            tfLogo:require('@/assets/true-false-icon.png'),
            inputLogo:require('@/assets/inputF.png'),
            backLogo:require('@/assets/backInv.png'),
            roomExams:[],
            T1Q:'',
            T1CA1:true,
            T1EA1:false,
            T1A1:'',
            T1CA2:true,
            T1EA2:false,
            T1A2:'',
            T1CA3:true,
            T1EA3:false,
            T1A3:'',
            T1CA4:true,
            T1EA4:false,
            T1A4:'',
            T1Secs:10,T1Mins:0,T1Hrs:0,
            T2Q:'',
            T2A:'',
            T2Secs:10,T2Mins:0,T2Hrs:0,
            T3Q:'',
            T3A:'',
            T3Secs:10,T3Mins:0,T3Hrs:0,
            cancelLogo:require('@/assets/cancel.png'),
            examName:'',
            examDate:'',
            examTime:'',
            ExamQuestions:[],

        }
    },
    mounted() {
        axiosinst.post('http://localhost:8000/api/getRoomExams/'+window.localStorage.getItem('troomid'),{},{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        this.roomExams=res.data;
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });  
    },
    methods: {
        sendQ1(){
            var t=this.T1Secs+(this.T1Mins*60)+(this.T1Hrs*60*60);
            axiosinst.put('http://localhost:8000/api/sendQ1/'+window.localStorage.getItem('eid'),{
        'question':this.T1Q,
        'answers':{
            'a1':this.T1A1,
            'a2':this.T1A2,
            'a3':this.T1A3,
            'a4':this.T1A4,
        },
        'AnswersConf':{
            'a1e':this.T1EA1,
            'a1c':this.T1CA1,
            'a2e':this.T1EA2,
            'a2c':this.T1CA2,
            'a3e':this.T1EA3,
            'a3c':this.T1CA3,
            'a4e':this.T1EA4,
            'a4c':this.T1CA4,
            'time':t,
        }
      },{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        if(res.data.status=='OK')this.$router.go(0);
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
        },
        sendQ2(){
            var t=this.T2Secs+(this.T2Mins*60)+(this.T2Hrs*60*60);
            axiosinst.put('http://localhost:8000/api/sendQ23/'+window.localStorage.getItem('eid'),{
        'question':this.T2Q,
        'answer':this.T2A,
        'time':t,
      },{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        if(res.data.status=='OK')this.$router.go(0);
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
        },
        sendQ3(){
            var t=this.T3Secs+(this.T3Mins*60)+(this.T3Hrs*60*60);
            axiosinst.post('http://localhost:8000/api/sendQ23/'+window.localStorage.getItem('eid'),{
        'question':this.T3Q,
        'answer':this.T3A,
        'time':t,
      },{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        if(res.data.status=='OK')this.$router.go(0);
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
        },
        onChange(event){
            this.T2A=event.target.value;
        },
        sendExam(){
            axiosinst.post('http://localhost:8000/api/sendExam/'+window.localStorage.getItem('troomid'),{
        'name':this.examName,
        'time':this.examDate+' '+this.examTime,
      },{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        if(res.data.status=='OK')this.$router.go(0);
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
        },
        showb(id){
            axiosinst.post('http://localhost:8000/api/getExamQuestions/'+id,{},{
        headers:{
          'Authorization':'Bearer '+window.localStorage.getItem('userToken'),
        }
      }).then((res)=>{
        this.ExamQuestions=res.data;
        document.getElementById('exams').style.display='none';
        document.getElementById('b').style.display='block';
        window.localStorage.setItem('eid',id);
      }).catch((err)=>{
        if(err.response){
          if(err.response.status==401||err.response.status==419)this.$router.push('/LogIn');
        }
      });
        },
        hideb(){
            document.getElementById('b').style.display='none';
            document.getElementById('exams').style.display='block';
            window.localStorage.removeItem('eid');
        }
    },
}
</script>

<style scoped>
    .container{
        position: relative;
        display: none;

    }
    .container:target{
        display: block;
    }
    .header{
        text-align: center;
        margin-top: 50px;
    }
    .back{
        position: relative;
        float: left;
    }
    .templates{
        margin-top: 100px;
    }
    .temp{
        border: 1px solid rgb(53, 51, 51);
        border-radius: 20px;
        text-align: center;
        width: 300px;
        height: 200px;
        position: relative;
        float: right;
        margin-left: 10px;
    }
    .temp:hover{
        background-color: rgb(121, 198, 228);
    }
    .TempImage img{
        display: block;
        width: 50%;
        margin: auto;
    }
    .RefTemp{
        text-decoration: none;
    }
    .addMCT{
        width: 600px;
        height: 500px;
        background-color: aquamarine;
        margin: 50px;
        margin-top: 0;
        display: none;
        position: absolute;
        right: 30%;
        bottom: 20px;
    }
    .addMCT:target{
        display: block;
    }
    .answers{
        margin-left: -10%;
    }
    .exit{
        margin-left:   90%;
    }
    .exit img{
        max-width: 50px;
        max-height: 50px;
    }
    .ans{
        border: 1px solid black;
        width: 200px;
        position: relative;
        float: left;
        margin: 10px;
    }
    .ansCBoxes{
        position: relative;
        float: right;
    }
    .ans input[type="text"]{
        border: transparent;
        width: 156px;
    }
    .fields{
        margin-left: 20%;
        text-align: center;
    }
    .ansText{
        position: relative;
        float: right;
    }
    .addTF{
        display: none;
        width: 500px;
        height: 350px;
        background-color: aquamarine;
        position: absolute;
        right: 0;
        margin: 50px;
        margin-top: 0;
        bottom: 100px;
        right: 30%;
    }
    .addTF:target{
        display: block;
    }
    .addFA{
        position: absolute;
        width: 450px;
        height: 400px;
        background-color: aquamarine;
        display: none;
        right: 0;
        margin: 50px;
        margin-top: 0;
        bottom: 100px;
        right: 30%;
    }
    .addFA:target{
        display: block;
    }
    .input{
        width: 75%;
        border: 1px solid black;
        border-radius: 20px;
        height: 20px;
        float: left;
    }
    .saveBut{
        border: 1px solid black;
        margin-top: 10px;
        text-align: center;
        text-decoration: none;
        border-radius: 20px;
        width: 100px;
        margin-left: 20%;
        float: left;
        height: 25px;
    }
    .saveBut:hover{
        background-color: turquoise;
    }
    .time{
        margin-top: 40px;
        margin-left: -100px;
        text-align: center;
    }
    .b{
        display: none;
    }
    .b:target{
        display: block;
    }
    .addedList{
        width: 100%;
        border: 1px solid black;
        height: 220px;
        border-radius: 20px;
        overflow-y: hidden;
        overflow-x: scroll;
        margin-top: 10%;
    }
    .qItem{
        border: 1px solid black;
        border-radius: 10px;
        float: right;
        height: 170px;
        margin: 15px;
        width: 120px;
        text-align: right;
    }
    .addItem{
        cursor: pointer;
    }
    .addItem img{
        margin-top: 20%;
        max-width: 120px;
    }
    .head{
        margin-top: 10%;
        text-align: right;
    }
    .exams{
        display: block;
    }
    .addExam{
        display: none;
        width: 50%;
        height: 50%;
        position: absolute;
        top: 50px;
        right: 50px;
        background-color: blanchedalmond;
    }
    .addExam:target{
        display: block;
    }
    .del {
  background: none;
  display: block;
  margin: 30px auto;
  text-align: center;
  border: 2px solid green;
  padding: 14px 40px;
  outline: none;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
    color: #111;
}
.del:hover {
  background: green;
}
.cancel{
    margin-left:90%;
}
.inputs{
    margin-left: 35%;
}
</style>