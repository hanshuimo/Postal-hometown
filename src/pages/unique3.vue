<template>
    <div>
        <div class="primaryCoverage3">
            <div class="leftTop">
                <div  @click="goto(1)">首页</div>
                <div @click="goto(2)">&gt;&gt;课程先知</div>
                <div @click="goto(3)">&gt;&gt;蒙古包</div>
                <div @click="goto(4)">&gt;&gt;蒙古服饰&gt;&gt;</div>
                <div class="title">    
                    <div>蒙古民歌</div>
                </div>
            </div>
            <pages ref="mychild"></pages>
        </div>
        

        <div class="primaryCoverage">
            <video controls="controls" autoplay="autoplay" class="video">
                <source src="../assets/video/mengguminge.mp4" type="video/mp4" />
            </video>
            <div class="scroll">
                
                <div class="feature" @click="show(1)">基本介绍</div>
                <div class="information hide" ref="inf1">
                    蒙古族民歌主要分为两大类：礼仪歌和牧歌。<br/>
                    蒙古族民歌以声音宏大雄厉，曲调高亢悠扬而闻名。<br/>
                    蒙古族民歌反映了蒙古的风土人情<br/>
                </div>
                <div class="feature" @click="show(2)">历史渊源</div>
                <div class="hide information" ref="inf2">
                    蒙古语有内蒙古、卫拉特、巴尔虎布利亚特三种方言<br/>
                    长调的历史可以追溯到2000年前<br/>
                    直至今日，长调仍保留着丰富的不同地域的风格。<br/>
                </div>
                <div class="feature" @click="show(3)">艺术特色</div>
                <div class="hide information" ref="inf3">
                    蒙古民歌从音乐特点来讲，<br/>
                    大致分为”长调“和”短调“两大类演唱形式<br/>
                    长调民歌是反映蒙古族游牧生活的牧歌式体裁<br/>
                    短调民歌篇幅较短小，曲调紧凑，节奏整齐、鲜明<br/>
                </div>
                <div class="feature" @click="show(4)">传承意义</div>
                <div class="hide information" ref="inf4">
                    “逐水草而居”<br/>
                    是蒙古族传统的生活方式<br/>
                    是游牧文化的基础<br/>
                    一部蒙古音乐史，从某种意义上说就是一部蒙古民歌的历史<br/>

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
    margin: 0 30px;
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
            thisurl:'/unique3',
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
        this.$refs.mychild.typeupdate(3);
        this.$refs.mychild.pageupdate(4);
        if(this.$root.customerType==="2"){
            this.timer = setInterval(this.getOperation, 1000);
        }
        this.$parent.save('/unique3',0,0);
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
            this.$parent.save('/unique3',1,number);
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
                this.$router.push({path:'/preview3'})
            }else if(number===3){
                this.$router.push({path:'/feature3'})
            }else if(number===4){
                this.$router.push({path:'/clothes3'})
            }
        },
    },
}
</script>