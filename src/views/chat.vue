<template>
    <div class="container">
    <div class="messages">
      <div class="chat-page">
        <div class="msg-inbox">
          <div class="chats" >
              <div class="msg-page" ref="myEl">
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
        <div class="msg-bottom">
          <div class="input-group">
            <span class="input-group-text">
              <img :src="sendLogo" @click="sendMsg">
            </span>
            <input v-model="userMsg" type="text" name="userMsg" id="userMsg" class="form-control" placeholder="..اكتب رسالتك هنا">
          </div>
        </div>
      </div>
    </div>
     <div class="convo-container">
      <div class="back" @click="$router.back(-1)">
        <a>
          <img :src="backLogo">
        </a>
      </div>
      
    <div class="conversations-list" >
      <div v-if="users.length">
      <div class="convo" v-for="convo in users" :key="convo" @click="changeChat(convo[0].id)"  >
        <div class="convo-img">
          <img src="love.jpg">
        </div>
        <div class="convo-info">
          <p>
            {{convo[0].name}}
          </p>
          <span>
            {{convo[1]}}
          </span>
        </div>
      </div>
      </div>
      <div v-else style="text-align: center;">
        <p>
          !لا يوجد رسائل
        </p>
      </div>
      
    </div>
  </div>
  </div>
</template>

<script>
import axiosinst from '../axios'
import db from '../firebase'
export default {
    name:'chat',
    data() {
        return {
            msgs:[],
            users:[],
            user:{},
            activeChat:{},
            newMsgs:[],
            userMsg:'',
            realNewMsgs:[],
            backLogo:require('@/assets/backInv.png'),
            sendLogo:require('@/assets/paper-plane.png'),
        }
    },
    methods:{
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
      }
    },
    mounted() {
            
    },
    created(){
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
              this.msgs[this.newMsgs[this.newMsgs.length-1]['receiver_id']].push({
                body:this.newMsgs[this.newMsgs.length-1]['body'],
                user_id:this.newMsgs[this.newMsgs.length-1]['user_id'],
                receiver_id:this.newMsgs[this.newMsgs.length-1]['receiver_id'],
                created_at:new Date(this.newMsgs[this.newMsgs.length-1]['timestamp']).toDateString(),
                });
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
    }

}
</script>

<style scoped>
  .container{
    margin: auto;
    font-family: sans-serif;
    letter-spacing: 0.5px;
    max-width:99%;
    text-align: start;
    margin-top: 50px;
  }
  img{
    max-width: 50px;
    
  }
  .chat-page{
    padding: 0 0 50px 0;
    position: relative;
  }
  .msg-inbox{
    border: 1px solid grey;
    overflow: hidden;
    padding-bottom: 30px;
    width: 750px;
  }
  .chats{
    padding: 30px 15px 0 25px;
    
  }
  .msg-page{
    height: 400px;
    overflow-y: auto;
    background-color: #a7e2ec9f;
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
    background: #007bff none repeat scroll 0 0;
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
    background-color: #007bff;
  }
  .input-group{
    position: relative;
    float: right;
    outline: none !important;
    border-radius: 20px;
    width: 100% !important;
    background-color: #007bff;
  }
  .form-control{
    border: none !important;
    border-radius: 20px;
    height: 30px;
    float: right;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 50%;
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
    border: 1px solid #777;
    background-color: #afaeae;
    width: 500px;
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
    margin-top: 20px;
  }
  .back{
    float: right;
  }
</style>