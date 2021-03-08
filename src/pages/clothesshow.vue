<template>
    <div>
        <div class="primaryCoverage3">
            <div class="leftTop">
                <div  @click="goto(1)">首页</div>
                <div @click="goto(2)">&gt;&gt;课程先知</div>
                <div @click="goto(3)">&gt;&gt;徽派建筑&gt;&gt;</div>
                <div class="title">
                    <div>狄髻头面</div>
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
                <swiper :options="swiperOption" >
                    <swiper-slide  v-for='item of swiperList' :key="item.id">
                        <img :src="item.imgUrl" class="swiper-img">
                        <div class="swiper-name">{{item.name}}</div>
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div>
            <div class="back" @click="goback">
                <img src="../assets/dikeHead/2234.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.hide{
    display: none;
}
.swiper-container{
    position: absolute;
    right: 20px;
    bottom: 10px;
    width: 1000px;
    height:530px;
}
.swiper-wrapper{
    width: 100%;
    height: 100%;
}
.swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 620px;
    height: 458.7px;
}
.swiper-img{
    width: 620px;
}
.swiper-name{
    width: 620px;
    position: absolute;
    bottom: -10px;
    text-align: center;
    color: #6d4621;
    font-size: 25px;
    font-weight: 600;
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
    background-image: url(../assets/clothes/background2.png);
    background-repeat:no-repeat;
    background-size:cover;
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
.back {
    z-index: 1;
    position: absolute;
    right: 80px;
    bottom: 65px;
    width: 148px;
    cursor: pointer;
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
</style>

<script>
import  pages from '../components/pages';
import  axios from 'axios'
export default {
    components: {
        pages,
    },
    data() {
        return {
            thisurl:'/clothesshow',
            timer:null,
            swiperList:[{
                id:1,
                imgUrl:'./static/1.png',
                name:"交领琵琶袖马面裙"
            },{
                id:2,
                imgUrl:'./static/2.png',
                name:"对襟披风立领斜襟长衫马面裙"
            },{
                id:3,
                imgUrl:'./static/3.png',
                name:"立领斜襟长衫褶裙"
            },{
                id:4,
                imgUrl:'./static/4.png',
                name:"竖领斜襟大袖衫合领比甲马面裙"
            },{
                id:5,
                imgUrl:'./static/5.png',
                name:"比甲交领大袖襦裙"
            },{
                id:6,
                imgUrl:'./static/6.png',
                name:"竖领对襟直袖短衫马面裙"
            }],
            swiperOption: {
                loop: true,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows : false
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    mounted() {
        this.$refs.mychild.pageupdate(3);
        if(this.$root.customerType==="2"){
            this.timer = setInterval(this.getOperation, 1000);
        }
        this.$parent.save('/clothesshow',0,0);
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
                this.$router.push({path:'/pk'})
            }
        },
        goback() {
            this.$router.push('/clothes');
        },
        switchGender(){
            var _this=this
            if(_this.gender===1){
                _this.$refs.gimg.classList.add("hide");
                _this.$refs.bimg.classList.remove("hide");
                _this.$refs.gtext.classList.add("hide");
                _this.$refs.btext.classList.remove("hide");
                _this.gender=2;
            }else{
                _this.$refs.gimg.classList.remove("hide");
                _this.$refs.bimg.classList.add("hide");
                _this.$refs.gtext.classList.remove("hide");
                _this.$refs.btext.classList.add("hide");
                _this.gender=1;
            }
        }
    }
}
</script>