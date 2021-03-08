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
            <pages ref="mychild"></pages>
            <div class="practice" @click="goto(10)">
                <a>练习</a>    
            </div>
        </div>
        
        
        <div class="primaryCoverage">
            <img src="../assets/mainbox2.png" alt="" class="primaryCoverage2">
            <div class="obj">
               <model-obj
               src="./static/徽派.obj"
               mtl="./static/徽派.mtl"
               :lights="light"
               :backgroundAlpha="backgroundAlpha"></model-obj>
            </div>
            <img src="../assets/parts/btn1.png" alt="" @click="showmtq()" ref="clickcircle" id="clickRange" class="hide">

            <img src="../assets/parts/matouqiang.png" alt="" class="leftImformation hide" ref="imformation" @click="showspan()">
            <img src="../assets/parts/span1.png" alt="" class="hide span" ref="span1" id="span1">
            <img src="../assets/parts/span2.png" alt="" class="hide span" ref="span2" id="span2">
            <img src="../assets/parts/span3.png" alt="" class="hide span" ref="span3" id="span3">
            <img src="../assets/parts/span4.png" alt="" class="hide span" ref="span4" id="span4">
            <img src="../assets/parts/span5.png" alt="" class="hide span" ref="span5" id="span5">
            <img src="../assets/parts/span6.png" alt="" class="hide span" ref="span6" id="span6">

            <div class="hideImg hide" ref="img1">
                <img src="../../public/static/徽派2.jpg" alt="">
            </div>
            <div class="hideImg hide" ref="img2">
                <img src="../../public/static/徽派3.jpg" alt="">
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
#clickRange{
    width: 50px;
    height: 50px;
    position: absolute;
    left: 549px;
    top: 144px;
    cursor: pointer;
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
    width: 544px;
    height: 659px;
    left: 40px;
    top: 40px;
}


.leftTop{
    float: left;
    position: relative;
    width: 600px;
    height: 22px;
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
.span{
    position: absolute;
    z-index: 1;
    left: 132px;
}
#span1{
    top: 411px;
}
#span2{
    top: 443px;
}
#span3{
    top: 479px;
}
#span4{
    top: 531px;
}
#span5{
    top: 562px;
}
#span6{
    top: 596px;
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
            thisurl:'/feature',
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
            timer2:null,
            span:1,
        }
    },
    mounted() {
        this.$refs.mychild.pageupdate(2);
        if(this.$root.customerType==="2"){
            this.timer = setInterval(this.getOperation, 1000);
        }
        this.timer = setTimeout(this.show1,10000);
        this.$parent.save('/feature',0,0);
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
                    else if(response.data.type===1){
                        _this.showmtq();
                    }else if(response.data.type===2){
                        if(response.data.operationId>=_this.span) _this.showspan();
                    }
                }
            })
            .catch(function (error) {
                console.log(error)
            });
        },
        show(number){
            this.$parent.save('/feature',1,number);
            if(number===1){
                this.$refs.img1.classList.remove("hide");
            }else if(number===2){
                this.$refs.img2.classList.remove("hide");
            }
        },
        show1(){
            this.$refs.clickcircle.classList.remove("hide");
            this.$refs.imformation.classList.add("animated");
            this.$refs.imformation.classList.add("fadeIn");
        },
        hide(number){
            this.$parent.save('/feature',2,number);
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
                this.$router.push({path:'/preview'})
            }else if(number===10){
                this.$router.push({path:'/build'})
            }
        },
        showmtq(){
            this.$parent.save('/feature',1,1);
            this.$refs.imformation.classList.remove("hide");
            this.$refs.imformation.classList.add("animated");
            this.$refs.imformation.classList.add("fadeIn");
            //this.$refs.clickcircle.classList.add("clickquyu");
        },
        showspan(){
            this.$parent.save('/feature',2,this.span);
            if(this.span===1){
                this.$refs.span1.classList.remove("hide");
                this.$refs.span1.classList.add("animated");
                this.$refs.span1.classList.add("fadeIn");
                this.span=2;
            }else if(this.span===2){
                this.$refs.span2.classList.remove("hide");
                this.$refs.span2.classList.add("animated");
                this.$refs.span2.classList.add("fadeIn");
                this.span=3;
            }else if(this.span===3){
                this.$refs.span3.classList.remove("hide");
                this.$refs.span3.classList.add("animated");
                this.$refs.span3.classList.add("fadeIn");
                this.span=4;
            }else if(this.span===4){
                this.$refs.span4.classList.remove("hide");
                this.$refs.span4.classList.add("animated");
                this.$refs.span4.classList.add("fadeIn");
                this.span=5;
            }else if(this.span===5){
                this.$refs.span5.classList.remove("hide");
                this.$refs.span5.classList.add("animated");
                this.$refs.span5.classList.add("fadeIn");
                this.span=6;
            }else if(this.span===6){
                this.$refs.span6.classList.remove("hide");
                this.$refs.span6.classList.add("animated");
                this.$refs.span6.classList.add("fadeIn");
                this.span=7;
            }
        }
        
    }
}
</script>
