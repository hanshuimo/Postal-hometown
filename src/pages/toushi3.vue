<template>
    <div>
        <div class="primaryCoverage4">
            <div class="leftTop">
                <div  @click="goto(1)">首页</div>
                <div @click="goto(2)">&gt;&gt;课程先知</div>
                <div @click="goto(3)">&gt;&gt;吊脚楼&gt;&gt;</div>
                <div class="title">
                    <div>苗银头饰</div>
                </div>
            </div>
            <pages ref="mychild"></pages>
            <div class="practice" @click="goto(6)">
                <a>练习</a>
            </div>
        </div>
        
        <div class="primaryCoverage">
            <img src="../assets/mainbox3.png" alt="" class="primaryCoverage2">
            <div class="primaryCoverage3">
                <vuescroll :ops="ops">
                    <img
                    v-for="photo in photoes"
                    :key="photo.id"
                    :src="photo.img"
                    class="scrollimg"
                    @click="changePhoto(photo.id)"
                    >
                </vuescroll>
            </div>
            <img src="" alt="" class="">
            <photo-projection :selectedPhoto="selected"></photo-projection>
        </div>

    </div>
</template>

<style scoped>
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
.primaryCoverage4{
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
    width: 1400px;
    height: 660px;
    position: absolute;
    left: 40px;
    top: 27px;
}
.primaryCoverage3{
    position: absolute;
    width: 325px;
    height: 632px;
    left: 49px;
    top: 35px;
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
.scrollimg{
    position: relative;
    margin: 25px 35px 0 35px;
    width: 255px;
    cursor: pointer;
    overflow: hidden;
}
</style>

<script>
import  pages from '../components/pages';
import vuescroll from 'vuescroll';
import photoProjection from '../components/photoProjection4';
import  axios from 'axios'
export default {
    components: {
        pages,
        vuescroll,
        photoProjection
    },
    data() {
        return {
            thisurl:'/toushi3',
            dataname:'',
            ops:{
                vuescroll: {},
                scrollPanel: {},
                rail: {
                    background: '#946f38',
                    opacity: 1,
                    size: '12px',
                    specifyBorderRadius: false,
                    gutterOfEnds: null,
                    gutterOfSide: '2px',
                    keepShow: false
                },
                bar: {
                    showDelay: 500,
                    onlyShowBarOnScroll: true,
                    keepShow: true,
                    background: '#430902',
                    opacity: 1,
                    hoverStyle: false,
                    specifyBorderRadius: false,
                    minSize: false,
                    size: '6px',
                    disable: false,
                }
            },
            photoes: [{
                id: 1,
                img: require('../assets/silver/1.png')
            }, {
                id: 2,
                img: require('../assets/silver/2.png')
            }, {
                id: 3,
                img: require('../assets/silver/3.png')
            }, {
                id: 4,
                img: require('../assets/silver/4.png')
            }],
            selected: {
                id: 1,
                img: require('../assets/silver/1.png')
            },
            timer:null,
        }
    },
    mounted() {
        this.$refs.mychild.typeupdate(2);
        this.$refs.mychild.pageupdate(3);
        if(this.$root.customerType==="2"){
            this.timer = setInterval(this.getOperation, 1000);
        }
        this.$parent.save('/toushi3',0,0);
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
                        _this.changePhoto(response.data.operationId)
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
                this.$router.push({path:'/preview3'})
            }else if(number===3){
                this.$router.push({path:'/feature3'})
            }else if(number===6){
                this.$router.push({path:'/pk'})
            }
        },
        changePhoto(photoId) {
            this.$parent.save('/toushi3',1,photoId);
            
            this.selected = this.photoes[photoId-1];
        }
    }
}
</script>