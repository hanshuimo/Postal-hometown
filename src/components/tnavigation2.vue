<template>
    <div class="navigation">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <img class="code" src="../assets/code.png" @mouseover="showcode()" @mouseout="hidecode()" alt="">
        <div class="indexbtn" @click="goindex()">
            教学主页
        </div>
        <div class="questionbtn" @click="goquestion()">
            题库
        </div>
        
        
        <div id="Sprogram">
            扫描进入小程序
        </div>
        <div class="btn" id="personal" @click="topersonal()">
            个人中心
        </div>
        <div class="btn" id="control" @click="control()">
            屏幕控制
        </div>
        
    </div>
</template>


<style scoped>
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
.indexbtn{
    position: relative;
    left: 100px;
    width: 150px;
    height: 75px;
    line-height: 75px;
    font-size: 25px;
    color: #472e16;
    
    cursor: pointer;
}
.questionbtn{
    position: relative;
    left: 150px;
    width: 100px;
    height: 75px;
    line-height: 75px;
    font-size: 25px;
    color: #472e16;
    font-weight: 800;
    cursor: pointer;
}
#personal{
    float: right;
    right:75px;
}
#control{
    float: right;
    right:95px;
}
.navigation *{
    float: left;
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
        control(){
            var _this=this;
            if(this.$root.control===0){
                console.log(1);
                this.$root.control=1;
                axios.post(_this.$root.baseurl+'/zhejiang/saveoperation', {
                    url:'/index',
                    type:0,
                    operationId:0,
                    control:_this.$root.control
                })
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                });
            }else{
                console.log(0);
                this.$root.control=0;
                axios.post(_this.$root.baseurl+'/zhejiang/saveoperation', {
                    url:'/index',
                    type:0,
                    operationId:0,
                    controller:_this.$root.control
                })
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                });
            }
        },
        topersonal(){
            this.$parent.changeCategory(1);
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
            this.$parent.changeCategory(1);
            this.$router.push({path:'/index'});
        },
        goquestion(){
            this.$router.push({path:'/question'});
        }

    }
}
</script>