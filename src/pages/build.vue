<template>
    <div>
        <div class="primaryCoverage3">
            <div class="leftTop">
                <div  @click="goto(1)">首页</div>
                <div @click="goto(2)">&gt;&gt;课程先知&gt;&gt;</div>
                <div class="title">    
                    <div>徽派建筑</div>
                </div>
            </div>
            <div class="back" @click="goto(3)">
                返回
            </div>
        </div>
        <div class="primaryCoverage">
            <div class="primaryCoverage2">
                <div class="leftBox">
                    <img src="../assets/parts/1.png" alt="" class="partsBox" @click="showObj(1)">
                    <img src="../assets/parts/2.png" alt="" class="partsBox" @click="showObj(2)">
                    <img src="../assets/parts/3.png" alt="" class="partsBox" @click="showObj(3)">
                    <img src="../assets/parts/4.png" alt="" class="partsBox" @click="showObj(4)">
                </div>
                <div class="obj">
                    <loadobj ref="obj"></loadobj>
                </div>
                <div class="rightBox">
                    <img src="../assets/parts/5.png" alt="" class="partsBox" @click="showObj(5)">
                    <img src="../assets/parts/6.png" alt="" class="partsBox" @click="showObj(6)">
                    <img src="../assets/parts/7.png" alt="" class="partsBox" @click="showObj(7)">
                    <img src="../assets/parts/8.png" alt="" class="partsBox" @click="showObj(8)">
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.clickquyu{
    border: 1px solid #6d4621;
}
.hideImg{
    position: absolute;
    right: 50px;
    bottom: 170px;
}
.hideImg img{
    width: 400px;
}
.hide{
    display: none;
}

.leftTop{
    float: left;
    position: relative;
    width: 600px;
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
.primaryCoverage2{
    position: relative;
    width: 1400px;
    height: 660px;
    top: 24px;
    left: 35px;
}
.leftBox,.rightBox{
    position: absolute;
    width: 300px;
    height: 660px;
    top: 0px;
    background: #c4a989;
}
.partsBox{
    position: relative;
    width: 214px;
    margin: 23.2px 43px;
    height: 116px;
    cursor: pointer;
}
.leftBox{
    left: 0px;
}
.rightBox{
    left: 1100px;
}
.primaryCoverage .obj{
    position: absolute;
    float: left;
    left: 300px;
    top: 0px;
    width: 800px;
    height: 650px;
    border-top:5px solid #c4a989;
    border-bottom:5px solid #c4a989;
}
.primaryCoverage .scroll{
    position: absolute;
    float: right;
    right: 25px;
    top: 25px;
    width: 600px;
    height: 660px;
    background: rgba(255,255,255,0.5);
}

.practice{
    width: 120px;
    height: 30px;
    float: right;
    position: relative;
    right:0px;
    top: 10px;
    cursor: pointer;
    color:#6d4621;
    font-size: 23px;
    background-image: url(../assets/title2.png);
    background-repeat:no-repeat;
    background-size:contain;
}
.practice a{
    line-height: 30px;
    margin: 0 17px;
}
.back{
    position: absolute;
    text-align: center;
    color: #6d4621;
    width: 117.6px;
    height: 43.2px;
    line-height: 43.2px;
    right: 10px;
    top: 5px;
    font-size: 23px;
    background-image: url(../assets/title2.png);
    background-repeat:no-repeat;
    background-size:cover;
    cursor: pointer;
}
</style>

<script>
import  pages from '../components/pages';
import loadobj from '../components/loadobj';
import  axios from 'axios'
export default {
    components: {
        pages,
        loadobj
    },
    data() {
        return {
            thisurl:'/build',
            light:[
            {
                type:'AmbientLight',
                color:0xffffff,
                intensity: 0.8,
            },{
                type: 'DirectionalLight',
                position: {x: 1, y: 1, z: 0.5},
                color: 0xffffff,
                intensity: 0.8,
            }],
            backgroundAlpha:0,
            timer:null,
            span:1,
        }
    },
    mounted() {
        if(this.$root.customerType==="2"){
            this.timer = setInterval(this.getOperation, 1000);
        }
        this.$parent.save('/build',0,0);
    },
    methods: {
        /*
        getOperation(){
            var _this=this;
            axios.get(_this.$root.baseurl+'/zhejiang/loadoperation')
            .then(function (response) {
                if(response.data.controller===1){
                    if(response.data.url!=_this.thisurl){
                        clearInterval(_this.timer);
                        _this.$router.push({path:response.data.url});
                    }
                    
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        */
        goto(number){
            clearInterval(this.timer);
            if(number===1){
                this.$router.push({path:'/index'})
            }else if(number===2){
                this.$router.push({path:'/preview'})
            }else if(number===3){
                this.$router.push({path:'/feature'})
            } 
        },
        showObj(number){
            this.$refs.obj.loadObj(number);
        }
    }
}
</script>