<template>
    <div class="main">
        <div class="roomInfo">
            <h2>{{roomInf.name}}</h2>
            <h3>{{roomInf.teacher}}</h3>
            <h3>{{roomInf.subject}}</h3>
        </div>

        <div class="posts-div">
            <ul>
                <li v-for="post in posts" :key="post" class="post-item">{{post}}</li>
            </ul>
            <div class="msgDiv">
                <input type="text" placeholder="اكتب رسالتك هنا" v-model="studentMsg" class="msgBox"/>
                <input type="submit" value="أرسل" class="sendBtn"/>
            </div>

        </div>

        <div class="assignments">
            <div class="assignmentDiv">
                <span>
                    <ul>
                        <li v-for="assignment in assignments" :key="assignment" class="assignment-item">{{assignment}}</li>
                    </ul>
                    <button>اعرض المعلومات</button>
                </span>
            </div>
        </div>

    </div>
</template>

<script>
import axiosinst from '../axios';

export default {
    name:"stu_room",
    data:function(){
        return {
            assignments:[],
            posts:[],
            roomInf:[],
        }
    },
    methods:{

    },
    mounted(){
        axiosinst.post("http://localhost:8000/api/getRoomInfo",{},{
            headers:{
                    'Authorization': 'Bearer '+this.$store.state.userToken,
                }
        }).then((res)=>{
            this.roomInf=res.data.roomInf;
            console.info(res.data.roomInf);
        }).catch((err)=>{
            console.error(err);
        });
        axiosinst.post("http://localhost:8000/api/getPosts",{},{
            headers:{
                    'Authorization': 'Bearer '+this.$store.state.userToken,
                }
        }).then((res)=>{
            this.posts=res.data.posts;
            console.info(res.data.posts);
        }).catch((err)=>{
            console.error(err);
        });
        axiosinst.post("http://localhost:8000/api/getAssignments",{},{
            headers:{
                    'Authorization': 'Bearer '+this.$store.state.userToken,
                }
        }).then((res)=>{
            this.assignments=res.data.assignments;
            console.info(res.data.assignments);
        }).catch((err)=>{
            console.error(err);
        });
    }
}
</script>

<style>
.main{
    background-color: aqua;

}
.roomInfo{
    align-items: center;
    position: relative;
}
</style>