
<template>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" >
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
  <div class="text" style="  font-style: oblique; height:250px; width:70%; border: 8px solid #939b62;  padding:8px;  border-radius: 30px;  margin-left:15%; margin-top:2%;">
<h1 style="color:black; font-weight: bold; margin-left:65%;">حول الموقع  <img :src=" inform" alt="" style="width:50px;height:50px;"></h1>
     
<p style="    font-style: italic; font-size:30px; color:#02475e;"> هذا الموقع يهدف لتسهيل العملية التعليمية وسهولة التواصل بين المعلم والطالب</p>

</div>

</div>

 <div class="w3-container w3-content w3-padding-64" style="max-width:800px" id="contact">
    <h2 class="w3-wide w3-center" style="color:black; " > تواصل معنا</h2>
  
    <div class="w3-row w3-padding-32">
      <div class="w3-col m6 w3-large w3-margin-bottom" style="color:black">
        <i class="fa fa-map-marker" style="width:30px ;color:black;" ></i> Nablus, ps<br>
        <i class="fa fa-phone" style="width:30px ;color:black;"></i> Phone: 0097592126868<br>
        <i class="fa fa-envelope" style="width:30px; color:black;"> </i> Email: mail@mail.com<br>
      </div>
      <div class="w3-col m6">
        <form action="/action_page.php" target="_blank">
          <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
            <div class="w3-half">
              <input  id="em" type="text" placeholder="Name" required name="Name"  style="  border: 0; background: none; display: block; margin: 30px auto; text-align: center; border: 2px solid #939b62; padding: 14px 10px; width: 60%; outline: none; color: black; border-radius: 24px; transition: 0.25s;">
            </div>
            <div class="w3-half">
              <input id="em" type="text" placeholder="Email" required name="Email"  style="  border: 0; background: none; display: block; margin: 30px auto; text-align: center; border: 2px solid #939b62; padding: 14px 10px; width: 60%; outline: none; color: black; border-radius: 24px; transition: 0.25s;">
            </div>
          </div>
          <div> <button class="w3-button w3-black w3-section w3-right" type="submit" style="color:black ">SEND</button>
               <input id="em" type="text" placeholder="Message" required name="Message" style="  border: 0; background: none; display: block; margin: 30px auto; text-align: center; border: 2px solid #939b62; padding: 14px 10px; width: 60%; outline: none; color: black; border-radius: 24px; transition: 0.25s;">
          </div>
     
         
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home',
      data: function () {
    return {
             inform:require('@/assets/inform.png')
  
    };
  },
}

</script>

<style>

body{
  background-image: url('../assets/myc.jpg');
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: cover;
  width: 100%;

}
#em
 {
  border: 0;
  background: none;
  display: block;
  margin: 30px auto;
  text-align: center;
  border: 2px solid #939b62;
  padding: 14px 10px;
  width: 60%;
  outline: none;
 
  border-radius: 24px;
  transition: 0.25s;
}
#em:focus
{

  border-color: #ff7b54;
}

</style>
