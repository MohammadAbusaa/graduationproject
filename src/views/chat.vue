<template>
    <div class="container">
    <div class="messages">
      <div class="msg-header">
        <div class="msg-header-img">
          <img src="love.jpg">
        </div>
        <div class="active">
          <h4>
            name
          </h4>
        </div>
      </div>
      <div class="chat-page">
        <div class="msg-inbox">
          <div class="chats">
              <div class="msg-page">
                <div>
                  <div class="received-chats">
                    <div class="received-chats-img">
                      <img src="love.jpg">
                    </div>
                    <div class="received-msg">
                      <div class="received-msg-inbox">
                        <p>
                          hi bitch
                        </p>
                        <span class="time">
                          time of msg
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="outgoing-chats">
                    <div class="outgoing-chats-msg">
                      <p>
                        hala
                      </p>
                      <span class="time">
                        time of msg
                      </span>
                    </div>
                      <div class="outgoing-chats-img">
                        <img src="abojamal.png">
                      </div>
                  </div>
                </div>
                <div>
                  <div class="received-chats">
                    <div class="received-chats-img">
                      <img src="love.jpg">
                    </div>
                    <div class="received-msg">
                      <div class="received-msg-inbox">
                        <p>
                          hi bitch
                        </p>
                        <span class="time">
                          time of msg
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="outgoing-chats">
                    <div class="outgoing-chats-msg">
                      <p>
                        hala
                      </p>
                      <span class="time">
                        time of msg
                      </span>
                    </div>
                      <div class="outgoing-chats-img">
                        <img src="abojamal.png">
                      </div>
                  </div>
                </div>
                <div>
                  <div class="received-chats">
                    <div class="received-chats-img">
                      <img src="love.jpg">
                    </div>
                    <div class="received-msg">
                      <div class="received-msg-inbox">
                        <p>
                          hi bitch
                        </p>
                        <span class="time">
                          time of msg
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="outgoing-chats">
                    <div class="outgoing-chats-msg">
                      <p>
                        hala
                      </p>
                      <span class="time">
                        time of msg
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
              <img src="paper-plane.png">
            </span>
            <input type="text" name="userMsg" id="userMsg" class="form-control" placeholder="..اكتب رسالتك هنا">
          </div>
        </div>
      </div>
    </div>
    <div class="conversations-list">
      <div class="convo">
        <div class="convo-img">
          <img src="love.jpg">
        </div>
        <div class="convo-info">
          <p>
            user name
          </p>
          <span>
            last message sent
          </span>
        </div>
      </div>
      <div class="convo">
        <div class="convo-img">
          <img src="love.jpg">
        </div>
        <div class="convo-info">
          <p>
            user name
          </p>
          <span>
            last message sent
          </span>
        </div>
      </div>
      <div class="convo">
        <div class="convo-img">
          <img src="love.jpg">
        </div>
        <div class="convo-info">
          <p>
            user name
          </p>
          <span>
            last message sent
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .container{
    margin: auto;
    font-family: sans-serif;
    letter-spacing: 0.5px;
  }
  img{
    max-width: 50px;
    border-radius: 50%;
  }
  .msg-header{
    border: 1px solid #ccc;
    width: 750px;
    height: 10%;
    border-bottom: none;
    display: inline-block;
    background-color: #007bff;
  }
  .msg-header-img{
    border-radius: 50%;
    width: 50px;
    margin-left: 5%;
    margin-top: 12px;
    float: left;
  }
  .active{
    width: 120px;
    float: left;
    margin-top: 10px;
  }
  .active h4{
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
    padding-bottom: 30px;
    width: 750px;
  }
  .chats{
    padding: 30px 15px 0 25px;
    
  }
  .msg-page{
    height: 400px;
    overflow-y: auto;
    background-color: #e6e9c49f;
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
  .conversations-list{
    border: 1px solid #777;
    background-color: #afaeae;
    width: 500px;
    height: 450px;
    float: right;
    position: relative;
    bottom: 495px;
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
</style>