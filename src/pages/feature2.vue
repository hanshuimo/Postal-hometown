<template>
    <div>
        <div class="primaryCoverage3">
            <div class="leftTop">
                <div  @click="goto(1)">首页</div>
                <div @click="goto(2)">&gt;&gt;课程先知&gt;&gt;</div>
                <div class="title">    
                    <div>吊脚楼</div>
                </div>
            </div>
            <pages ref="mychild"></pages>
            <div class="practice" @click="goto(10)">
                <a>练习</a>    
            </div>
        </div>
        <div class="primaryCoverage">
            <img src="../assets/mainbox2.png" alt="" class="primaryCoverage2">
            <div class="obj">
               <model-obj
               src="./static/吊脚楼.obj"
               mtl="./static/吊脚楼.mtl"
               :lights="light"
               :backgroundAlpha="backgroundAlpha"></model-obj>
            </div>
            <div class="hideImg hide" ref="img1">
                <img src="../../public/static/吊脚楼2.jpg" alt="">
            </div>
            <div class="hideImg hide" ref="img2">
                <img src="../../public/static/吊脚楼3.jpg" alt="">
            </div>
            <div class="rightBtn">
                <img src="../../public/static/terrain.png" @mouseover="show(1)" @mouseleave="hide(1)"/>
                <img src="../../public/static/weather.png" @mouseover="show(2)" @mouseleave="hide(2)"/>
            </div>
        </div>
    </div>
</template>


<style scoped>
.primaryCoverage2{
    width: 1400px;
    height: 660px;
    position: absolute;
    left: 40px;
    top: 27px;
}
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
.rightBtn{
    position: absolute;
    width: 244px;
    height: 120px;
    right: 20px;
    bottom: 20px;
}
.rightBtn img{
    position: relative;
    margin: 0 20px;
}
.leftImformation{
    position: relative;
    width: 460px;
    height: 630px;
    left: 40px;
    top: 40px;
    color: #6d4621;
}
.leftImformation img{
    position: absolute;
    width: 375px;
    left: 75px;
    top: 25px;
    cursor: pointer;
}
.span1,.span2,.span3,.span4,.span5,.span6,.span7,.span8{
    position: relative;
    width: 280px;
    margin: 0 90px;
    line-height: 30px;
}
.span1{
    top: 120px;
}
.span2{
    top: 120px;
}
.span3{
    top: 120px;
}
.span4{
    top: 120px;
}
.span5{
    top: 120px;
}
.span6{
    top: 140px;
}
.span7{
    top: 140px;
}
.span8{
    top: 140px;
}

.lefttitle{
    position: relative;
    width: 30px;
    font-size: 25px;
    font-weight: 700;
    left: 30px;
    top: 25px;
    line-height: 45px;
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
    margin: 0 60px;
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

.primaryCoverage .obj{
    position: absolute;
    float: left;
    left: 400px;
    top: 25px;
    width: 790px;
    height: 660px;
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

.feature{
    height: 86px;
    width: 421px;
    line-height: 86px;
    position:relative;
    margin-top: 30px;
    left: 89.5px;
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    color:#3f260e;
    background-image: url(../assets/feature.png);
    background-repeat:no-repeat;
    background-size:cover;
    cursor: pointer;
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

</style>

<script>
import  pages from '../components/pages';
import { ModelObj } from 'vue-3d-model';
import  axios from 'axios'
export default {
    components: {
        pages,
        ModelObj
    },
    data() {
        return {
            thisurl:'/feature2',
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
        this.$refs.mychild.typeupdate(2);
        this.$refs.mychild.pageupdate(2);
        if(this.$root.customerType==="2"){
            this.timer = setInterval(this.getOperation, 1000);
        }
        this.$parent.save('/feature2',0,0);
    },
    methods: {
        getOperation(){
            var _this=this;
            axios.get(_this.$root.baseurl+'/zhejiang/loadoperation')
            .then(function (response) {
                if(response.data.controller===1){
                    if(response.data.url!=_this.thisurl){
                        clearInterval(_this.timer);
                        _this.$router.push({path:response.data.url});
                    }
                    /*else if(response.data.type===1){
                        _this.show(response.data.operationId);
                    }else if(response.data.type===2){
                        _this.hide(response.data.operationId);
                    }*/
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        show(number){
            this.$parent.save('/feature2',1,number);
            if(number===1){
                this.$refs.img1.classList.remove("hide");
            }else if(number===2){
                this.$refs.img2.classList.remove("hide");
            }
        },
        hide(number){
            this.$parent.save('/feature2',2,number);
            if(number===1){
                this.$refs.img1.classList.add("hide");
            }else if(number===2){
                this.$refs.img2.classList.add("hide");
            }
        },
        goto(number){
            clearInterval(this.timer);
            if(number===1){
                this.$router.push({path:'/index'})
            }else if(number===2){
                this.$router.push({path:'/preview2'})
            }else if(number===10){
                this.$router.push({path:'/build2'})
            }
        },
    }
}
</script>