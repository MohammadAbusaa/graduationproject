<template>
    <div class="main">
        <span> welcome back , {{username}}</span>
        <button @click.prevent="logout">Log out!</button>
        <div class="userClasses">
            <ul>
                <li v-for="uClass in rooms" :key="uClass"><button @click="showRoom(uClass.id)">{{uClass.name}}</button></li>
            </ul>
        </div>
    </div>
</template>
<script>
import axiosinst from '../axios';
//import axios from 'axios'
//axios.defaults.withCredentials=true;
export default{
    name:'dashboard',
    data:function(){
        return{
        username:"",
        token:"",
        rooms:{},
        }
    },
    methods:{
        logout(){
            axiosinst.post('http://localhost:8000/api/logoutUser',{},{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),//this.$store.state.userToken,
                }
            }).then((res)=>{
                console.info(res);
                this.$router.push('/');
                window.localStorage.removeItem('userToken');
            }).catch((err)=>{
                console.error(err);
                if(err.response){
                    if(err.response.status==401 || err.response.status==419){
                        window.localStorage.removeItem('userToken');
                        this.$router.push('/LogIn');
                    }
                }
            })
        },
        showRoom(index){
            window.localStorage.setItem('roomIndex',index);
            this.$router.push('http://localhost:8000/stu_room');
        }
    },
    mounted(){
            axiosinst.post('http://localhost:8000/api/dashboard',{},{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken'),//this.$store.state.userToken,
                }
                
            }).then((res)=>{
                this.username=res.data.username;
                console.info(res.data);
            }).catch((err)=>{
                console.error(err);
               if(err.response){
                    if(err.response.status==401 || err.response.status==419){
                        window.localStorage.removeItem('userToken');
                        this.$router.push('/LogIn');
                    }
                }
            });
            axiosinst.post('http://localhost:8000/api/getStudentRooms',{},{
                headers:{
                    'Authorization': 'Bearer '+window.localStorage.getItem('userToken')//this.$store.state.userToken,
                }
                
            }).then((res)=>{
                this.rooms=res.data.rooms;
                console.info(res.data);
            }).catch((err)=>{
                console.error(err);
               if(err.response){
                    if(err.response.status==401 || err.response.status==419){
                        window.localStorage.removeItem('userToken');
                        this.$router.push('/LogIn');
                    }
                }
            });
        },
}
</script>
<style>
    .main{
        position: absolute 50%;
    }
    span{
        font-family: cursive;
        position: relative;
        text-align: center;
    }
    ul li{
        background-color: black;
        color: whitesmoke;
        padding: 3px;
    }

</style>
