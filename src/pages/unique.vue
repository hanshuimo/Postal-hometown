<template>
    <div>
        <div class="primaryCoverage3">
            <div class="leftTop">
                <div  @click="goto(1)">首页</div>
                <div @click="goto(2)">&gt;&gt;课程先知</div>
                <div @click="goto(3)">&gt;&gt;徽派建筑</div>
                <div @click="goto(4)">&gt;&gt;汉族服饰&gt;&gt;</div>
                <div class="title">    
                    <div>徽州黄梅戏</div>
                </div>
            </div>
            <pages ref="mychild"></pages>
        </div>
        

        <div class="primaryCoverage">
            <video controls="controls" autoplay="autoplay" class="video">
                <source src="../assets/video/huangmeixi.mp4" type="video/mp4" />
            </video>
            <div class="scroll">
                
                <div class="feature" @click="show(1)">发展历史</div>
                <div class="information hide" ref="inf1">
                    原名黄梅调、采茶戏等<br/>
                    起源于湖北黄梅，发展壮大于安徽安庆<br/>
                    “中国五大戏曲剧种”之一<br/>
                    唱腔淳朴流畅，以明快抒情见长<br/>
                    表演质朴细致，以真实活泼著称<br/>
                </div>
                <div class="feature" @click="show(2)">伴奏乐器</div>
                <div class="hide information" ref="inf2">
                    黄梅戏最初只有打击乐器伴奏大锣、小锣、扁形圆鼓，即所谓“三打七唱”。<br/>
                    抗日战争时期，曾尝试用京胡托腔。<br/>
                    后又试用二胡伴奏，但都未能推广。<br/>
                    到建国初期，才逐渐确定用高胡作主要伴奏乐器，<br/>
                    并逐步建立起以民族乐器为主、西洋乐器为辅的混合乐队，以增强音乐表现力。<br/>
                </div>
                <div class="feature" @click="show(3)">唱腔行当</div>
                <div class="hide information" ref="inf3">
                    黄梅戏的唱腔属板式变化体，有花腔、彩腔、主调三大腔系。<br/>
                    花腔以演小戏为主，曲调健康朴实，优美欢快，具有浓厚的生活气息和民歌小调色彩。<br/>
                    上演整本大戏后，角色行当才逐渐发展成正旦、正生、小旦、小生、小丑、老旦、奶生、花脸诸行。<br/>
                </div>
                <div class="feature" @click="show(4)">服装</div>
                <div class="hide information" ref="inf4">
                    黄梅戏的服装是汉民族传统服饰的延续，不过是唐宋明时期的为多。<br/>
                    较之京剧戏服，少了浓墨重彩、华丽妖冶，多了清雅秀丽、自然隽永，自成一段风流。<br/>
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
            thisurl:'/unique',
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
        this.$refs.mychild.pageupdate(4);
        if(this.$root.customerType==="2"){
            this.timer = setInterval(this.getOperation, 1000);
        }
        this.$parent.save('/unique',0,0);
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
            this.$parent.save('/unique',1,number);
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
                this.$router.push({path:'/preview'})
            }else if(number===3){
                this.$router.push({path:'/feature'})
            }else if(number===4){
                this.$router.push({path:'/clothes'})
            }
        },
    },
}
</script>