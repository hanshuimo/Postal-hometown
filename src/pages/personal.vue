<template>
    <div>
        <div class="primaryCoverage3">
            <div class="leftTop">
                <div  @click="goto(1)">首页&gt;&gt;</div>
                <div class="title">    
                    <div>个人中心</div>
                </div>
            </div>
        </div>
        <div class="primaryCoverage">
            <div class="lefttab">
                <button class="addbutton"><img src="../assets/add.png" alt="">添加班级</button>
                <div class="option">
                    <div class="options active" @click="choose(1)" ref="choice1">班级管理</div>
                    <div class="options notactive" @click="choose(2)" ref="choice2">个人中心</div>
                </div>
                
            </div>
            <component :is="dataName" class="com"></component>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import classmanagement from '../components/classmanagement'
import person from '../components/person'
export default {
    components: {
        classmanagement,
        person
    },
    data() {
        return {
            dataName:"classmanagement",
        }
    },
    mounted() {
        if(this.$root.customerType==="2"){
            this.timer = setInterval(this.getOperation, 1000);
        }
    },
    methods: {
        getOperation(){
            var _this=this;
            axios.get(_this.$root.baseurl+'/zhejiang/loadoperation')
            .then(function (response) {
                console.log(response);
                if(response.data.controller===1){
                    if(response.data.url!=_this.thisurl){
                        _this.$router.push({path:response.data.url});
                    }
                }
            })
            .catch(function (error) {
                console.log(error)
            });
        },
        choose(number){
            if(number===1){
                this.$refs.choice1.classList.remove("notactive");
                this.$refs.choice1.classList.add("active");
                this.$refs.choice2.classList.add("notactive");
                this.$refs.choice2.classList.remove("active");
                this.dataName="classmanagement";
            }else if(number===2){
                this.$refs.choice2.classList.remove("notactive");
                this.$refs.choice2.classList.add("active");
                this.$refs.choice1.classList.add("notactive");
                this.$refs.choice1.classList.remove("active");
                this.dataName="person";
            }
            
        },
        goto(number){
            clearInterval(this.timer);
            if(number===1){
                this.$router.push({path:'/index'})
            }
        }
    },
}
</script>

<style scoped>
.leftTop{
    float: left;
    position: absolute;
    width: 800px;
    height: 50px;
    left: 22px;
    color:#6d4621;
}
.leftTop *{
    float: left;
    line-height: 50px;
    font-size: 25px;
    cursor: pointer;
}
.title{
    width: 200px;
    height: 50px;
    position: relative;
    color:#6d4621;
    left: 20px;
    font-size: 23px;
    background-image: url(../assets/title.png);
    background-repeat:no-repeat;
    background-size:contain;
}
.title div{
    
    position: relative;
    line-height: 50px;
    margin: 0 50px;
}
.primaryCoverage3{
    width: 1470px;
    position: relative;
    top: 18px;
    height: 50px;
    margin: 0 auto;
}
.primaryCoverage{
    width: 1470px;
    height: 710px;
    position: relative;
    top: 30px;
    margin: 0 auto;
    background-image: url(../assets/mainbox.png);
    background-repeat:no-repeat;
    background-size:cover;
}
.lefttab{
    position: relative;
    top: 17px;
    left: 25px;
    width: 300px;
    height: 674px;
    border-right:3px solid #420b02;
    background-color:#f5ece4;
}
.option{
    position: relative;
    top: 30px;
    left: 25px;
    width: 250px;
    height: 615px;
}
.addbutton{
    position: absolute;
    border: none;
    outline: none;
    background:none;
    cursor: pointer;
    line-height: 20px;
    height: 20px;
    left: 212px;
    top: 4px;
    color: #420b02;
}
.addbutton img{
    position: relative;
    top: 2px;
}
.com{
    position: absolute;
    width: 1121px;
    height: 674px;
    left: 327px;
    top:17px;
    background-color:#f5ece4;
}
.options{
    position: relative;
    margin:15px 16.5px;
    width: 217px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-weight: 800;
    font-size: 30px;
    cursor: pointer;
}
.active{
    background: url(../assets/PersonalActive.png);
    color: white;
}
.notactive{
    box-sizing: border-box;
    border: 3px solid #420b02;
    color: #420b02;
}
</style>
