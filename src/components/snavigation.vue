<template>
    <div class="navigation">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <img class="code" src="../assets/code.png" @mouseover="showcode()" @mouseout="hidecode()" alt="">
        <div class="indexbtn" @click="goindex()">
            教学主页
        </div>
        
        <div id="Sprogram">
            扫描进入小程序
        </div>
        <div class="btn" id="personal" @click="topersonal()">
            个人中心
        </div>
        
    </div>
</template>


<style scoped>
.topbtn{
    position: relative;

}
.btn{
    position: relative;
    color: aliceblue;
    background-color: #472e16;
    width: 100px;
    height: 25px;
    cursor: pointer;
    top: 25px;
    border-radius: 5px;
    text-align: center;
    line-height: 25px;
}
#personal{
    float: right;
    right:75px;
}
.navigation *{
    float: left;
}
.indexbtn{
    position: relative;
    font-weight: 800;
    left: 100px;
    width: 150px;
    height: 75px;
    line-height: 75px;
    font-size: 25px;
    color: #472e16;
    cursor: pointer;
}
#Sprogram{
    float: right;
    position: relative;
    line-height: 40px;
    padding: 0 10px;
    border-radius: 10px;
    right: 50px;
    top: 20px;
    color: white;
    background-color: rgb(75, 36, 10);
}

.code{
    float: right;
    position: relative;
    width: 40px;
    height: 40px;
    right: 40px;
    top: 20px;
    cursor: pointer;
}
</style>


<script>
import axios from 'axios'
export default {
    data:function(){
        return {

        }
    },
    methods:{
        topersonal(){
            this.$router.push({path:'/personal'});
        },
        addActive($event){
            $event.currentTarget.firstElementChild.className="active";
        },
        removeActive($event){
            $event.currentTarget.firstElementChild.className="";
        },
        showcode(){
            this.$parent.Scode();
        },
        hidecode(){
            this.$parent.Hcode();
        },
        goindex(){
            this.$router.push({path:'/index'});
        }

    }
}
</script>