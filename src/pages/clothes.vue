<template>
    <div>
        <div class="primaryCoverage3">
            <div class="leftTop">
                <div  @click="goto(1)">首页</div>
                <div @click="goto(2)">&gt;&gt;课程先知</div>
                <div @click="goto(3)">&gt;&gt;徽派建筑&gt;&gt;</div>
                <div class="title">
                    <div>汉族服饰</div>
                </div>
            </div>
            
            <pages ref="mychild"></pages>
            <div class="practice" @click="goto(6)">
                <a>练习</a>
            </div>
        </div>
        
        
        <div class="primaryCoverage">
            <div class="primaryCoverage2">
                <div class="gender">
                    <img src="../assets/clothes/girl.png" alt="" ref="gimg" class="genderimg" >
                    <img src="../assets/clothes/boy.png" alt=""  ref="bimg" class="genderimg hide">
                    <img src="../assets/clothes/switch.png" alt="" class="textBox" @click="switchGender()">
                    <img src="../assets/clothes/girltext.png" ref="gtext" class="genderText">
                    <img src="../assets/clothes/boytext.png" ref="btext" class="genderText hide">
                </div>
                <img src="../assets/clothes/glb.png" v-if="gender===1" alt="" class="glb">
                <img src="../assets/clothes/glb4.png" v-if="gender===2" alt="" class="glb">
                <img src="../assets/clothes/costume.png" alt="" id="hanchao">
                <img src="../assets/clothes/clothesbtn1.png" alt="" id="btn1" @click="goto(7)">
                <img src="../assets/clothes/clothesbtn3.png" alt="" id="btn3" @click="goto(9)">
                <img src="../assets/clothes/clothesbtn4.png" alt="" id="btn4" @click="goto(10)">
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    position: absolute;
    left: 45px;
    top: 34px;
    width:1381.7px;
    height:633.4px;
    background-image: url(../assets/clothes/background.png);
    background-repeat:no-repeat;
    background-size:cover;
}
.glb{
    position: absolute;
    width: 445px;
    left: 643px;
    top: -24px;
}
#btn1{
    position: absolute;
    width: 71px;
    left: 1015px;
    top: 40px;
    cursor: pointer;
}
#btn4{
    position: absolute;
    width: 71px;
    left: 585px;
    top: 200px;
    cursor: pointer;
}

#btn3{
    position: absolute;
    width: 95px;
    left: 1200px;
    top: 490px;
    cursor: pointer;
}

.practice{
    width: 120px;
    height: 30px;
    float: right;
    position: relative;
    right:10px;
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
.gender{
    width: 290px;
    height: 352px;
    position: absolute;
    left: 100px;
    top: 205px;
}
.genderimg{
    width: 100%;
    position: absolute;
    top: 0px;
}
.textBox{
    position: absolute;
    width: 158px;
    height: 43px;
    margin: 0 66px;
    bottom: 0px;
    cursor: pointer;
}
.genderText{
    position: absolute;
    margin: 0 95px;
    bottom: 0px;
    width:100px; 
}
#hanchao{
    position: absolute;
    left: 1040px;
    top: 350px;
}
</style>

<script>
import  pages from '../components/pages';
import vuescroll from 'vuescroll';
import photoProjection from '../components/photoProjection';
import  axios from 'axios'
export default {
    components: {
        pages,
        vuescroll,
        photoProjection
    },
    data() {
        return {
            thisurl:'/clothes',
            timer:null,
            gender:1
        }
    },
    mounted() {
        this.$refs.mychild.pageupdate(3);
        if(this.$root.customerType==="2"){
            this.timer = setInterval(this.getOperation, 1000);
        }
        this.$parent.save('/clothes',0,0);
    },
    methods: {
        getOperation(){
            var _this=this;
            axios.get(_this.$root.baseurl+'/zhejiang/loadoperation')
            .then(function (response) {
                console.log(response);
                if(response.data.controller===1){
                    if(response.data.url!=_this.thisurl){
                        clearInterval(_this.timer);
                        _this.$router.push({path:response.data.url});
                    }else if(response.data.type===1){
                        if(response.data.operationId===1) _this.switchGender1();
                        else _this.switchGender2();
                    }
                }
            })
            .catch(function (error) {
                console.log(error)
            });
        },
        goto(number){
            clearInterval(this.timer);
            if(number===1){
                this.$router.push({path:'/index'})
            }else if(number===2){
                this.$router.push({path:'/preview'})
            }else if(number===3){
                this.$router.push({path:'/feature'})
            }else if(number===6){
                this.$parent.save('/clothes',2,1);
                this.$router.push({path:'/pk'})
            }else if(number===7){
                if(this.gender===1){
                    this.$parent.save('/toushi',0,0);
                    this.$router.push({path:'/toushi'});
                }else{
                    this.$parent.save('/toushi2',0,0);
                    this.$router.push({path:'/toushi2'});
                }
                
            }else if(number===9){
                this.$parent.save('/clothesshow',0,0);
                this.$router.push({path:'/clothesshow'})
            }else if(number===10){
                this.$parent.save('/xingzhi',0,0);
                this.$router.push({path:'/xingzhi'})
            }
        },
        switchGender1(){
            this.$parent.save('/clothes',1,1);
            this.$refs.gimg.classList.add("hide");
            this.$refs.bimg.classList.remove("hide");
            this.$refs.gtext.classList.add("hide");
            this.$refs.btext.classList.remove("hide");
            this.gender=2;
        },
        switchGender2(){
            this.$parent.save('/clothes',1,2);
            this.$refs.gimg.classList.remove("hide");
            this.$refs.bimg.classList.add("hide");
            this.$refs.gtext.classList.remove("hide");
            this.$refs.btext.classList.add("hide");
            this.gender=1;
        },
        switchGender(){
            var _this=this;
            if(_this.gender===1){
                _this.switchGender1();
            }else{
                _this.switchGender2();
            }
        }
    }
}
</script>