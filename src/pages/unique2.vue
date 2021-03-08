<template>
    <div>
        <div class="primaryCoverage3">
            <div class="leftTop">
                <div  @click="goto(1)">首页</div>
                <div @click="goto(2)">&gt;&gt;课程先知</div>
                <div @click="goto(3)">&gt;&gt;吊脚楼</div>
                <div @click="goto(4)">&gt;&gt;苗族服饰&gt;&gt;</div>
                <div class="title">    
                    <div>苗族民歌</div>
                </div>
            </div>
            <pages ref="mychild"></pages>
        </div>
        

        <div class="primaryCoverage">
            <video controls="controls" autoplay="autoplay" class="video">
                <source src="../assets/video/miaozuminge.mp4" type="video/mp4" />
            </video>
            <div class="scroll">
                
                <div class="feature" @click="show(1)">特点</div>
                <div class="information hide" ref="inf1">
                    古歌浑厚、拍节分明<br/>
                    流行地区较普遍<br/>
                    唱时用真声，略带朗诵形式<br/>
                    情歌旋律优美、丧歌曲调悲戚<br/>
                    有些曲调相传至今<br/>
                </div>
                <div class="feature" @click="show(2)">内容载体</div>
                <div class="hide information" ref="inf2">
                    反映苗族人的日常生活。祭祀、祭神，还傩愿酬神。<br/>
                    叙述苗族英雄、讲述民间故事。<br/>
                    椎牛跳舞，风俗祭祀。<br/>
                    苗族人热情好客，拦门吃洒。<br/>
                    苗族人欢庆丰收，预祝来年风调雨顺<br/>
                </div>
                <div class="feature" @click="show(3)">演唱形式</div>
                <div class="hide information" ref="inf3">
                    湘西苗歌一般在演唱时都带有引子、插部和尾声，<br/>
                    节奏非常自由和复杂，<br/>
                    在一首歌曲中时常有不少停顿<br/>
                </div>
                <div class="feature" @click="show(4)">曲式结构</div>
                <div class="hide information" ref="inf4">
                    湘西苗族歌曲的曲式结构最为特殊，<br/>
                    它在曲式结构上以乐句为单位核心，<br/>
                    用乐句前、中、后来划分歌曲的曲式、段落。<br/>
                    多声部苗歌开始的部分往往被称为引子，<br/>
                    它是整部多声部歌乐的起腔。<br/>
                </div>
                
            </div>
        </div>
    </div>
</template>


<style scoped>
video{
    outline: none;
}
.hide{
    display: none;
}
.leftTop{
    float: left;
    position: relative;
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
.primaryCoverage .video{
    position: absolute;
    float: left;
    left: 25px;
    top: 25px;
    width: 820px;
    height: 660px;
    object-fit:fill;
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

.information{
    position: relative;
    width: 403px;
    margin: 15px 89.5px;
    padding-left: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 700;
    border:4px solid #420b02;
    color:#420b02;
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

</style>

<script>
import vuescroll from 'vuescroll';
import  pages from '../components/pages';
import  axios from 'axios'
export default {
    components: {
        pages,
        vuescroll
    },
    data() {
        return {
            thisurl:'/unique2',
            video:this.$root.baseurl+"/zhejiang/huangmeixi.mp4",
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
                    keepShow: false,
                },
                bar: {
                    showDelay: 500,
                    onlyShowBarOnScroll: true,
                    keepShow: false,
                    background: '#430902',
                    opacity: 1,
                    hoverStyle: false,
                    specifyBorderRadius: false,
                    minSize: false,
                    size: '6px',
                    disable: false,
                }
            },
            features:[
                {
                    id:1,
                    name:'发展历史',
                },{
                    id:2,
                    name:'伴奏乐器',
                },{
                    id:3,
                    name:'唱腔行当',
                },{
                    id:4,
                    name:'服装',
                }
            ],
            now:0,
            timer:null,
        }
    },
    mounted() {
        this.$refs.mychild.typeupdate(2);
        this.$refs.mychild.pageupdate(4);
        if(this.$root.customerType==="2"){
            this.timer = setInterval(this.getOperation, 1000);
        }
        this.$parent.save('/unique2',0,0);
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
                    }else if(response.data.type==1){
                        _this.show(response.data.operationId);
                    }
                }
            })
            .catch(function (error) {
                console.log(error)
            });
        },
        show(number){
            this.$parent.save('/unique2',1,number);
            if(this.now===1){
                this.$refs.inf1.classList.add("hide");
            }else if(this.now===2){
                this.$refs.inf2.classList.add("hide");
            }else if(this.now===3){
                this.$refs.inf3.classList.add("hide");
            }else if(this.now===4){
                this.$refs.inf4.classList.add("hide");
            }
            this.now=number;
            if(number===1){
                this.$refs.inf1.classList.remove("hide");
                this.$refs.inf1.classList.add("animated");
                this.$refs.inf1.classList.add("fadeInDown");
            }else if(this.now===2){
                this.$refs.inf2.classList.remove("hide");
                this.$refs.inf2.classList.add("animated");
                this.$refs.inf2.classList.add("fadeInDown");
            }else if(this.now===3){
                this.$refs.inf3.classList.remove("hide");
                this.$refs.inf3.classList.add("animated");
                this.$refs.inf3.classList.add("fadeInDown");
            }else if(this.now===4){
                this.$refs.inf4.classList.remove("hide");
                this.$refs.inf4.classList.add("animated");
                this.$refs.inf4.classList.add("fadeInDown");
            }
        },
        goto(number){
            clearInterval(this.timer);
            if(number===1){
                this.$router.push({path:'/index'})
            }else if(number===2){
                this.$router.push({path:'/preview2'})
            }else if(number===3){
                this.$router.push({path:'/feature2'})
            }else if(number===4){
                this.$router.push({path:'/clothes2'})
            }
        },
    },
}
</script>