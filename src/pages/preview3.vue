<template>
    <div>
        <div class="primaryCoverage3">
            <div class="leftTop">
                <div  @click="goto(1)">首页&gt;&gt;</div>
                <div class="title">    
                    <div>课程先知</div>
                </div>
            </div>
            <pages ref="mychild"></pages>
        </div>
        
        <div class="primaryCoverage">
            <video controls="controls" autoplay="autoplay" class="video">
                <source src="../assets/video/mengguzu.mp4" type="video/mp4" />
            </video>

            <div class="scroll">
                <myscroll :ops="ops">
                    <div class="result" v-for="result in results" :key="result.id">
                        <span class="id">{{result.id}}</span>
                        <div class="subject">{{result.title}}</div>
                        <div class="answer">A.{{result.answer1}}</div>
                        <div class="answer">B.{{result.answer2}}</div>
                        <div class="answer">C.{{result.answer3}}</div>
                        <div class="answer">D.{{result.answer4}}</div>
                        <div class="line"></div>
                        <div class="bottom">
                            <span class="right">正确答案: {{result.trueanswer}}</span>
                            <span class="truenumber">正确人数:{{results.truenumber}}</span>
                            <span class="wrongnumber">错误人数:{{results.wrongnumber}}</span>
                            <span class="rate">正确率: {{result.truewrong}} | <span class="check">查看解析</span></span>
                        </div>
                    </div>
                    
                </myscroll>
            </div>
        </div>
    </div>
</template>


<style scoped>
video{
    outline: none;
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
    width: 710px;
    height: 660px;
    object-fit:fill;
}
.primaryCoverage .scroll{
    position: absolute;
    float: right;
    right: 25px;
    top: 25px;
    width: 710px;
    height: 660px;
    background: rgba(255,255,255,0.5);
}

.result{
    height: 97px;
    width: 680px;
    margin: 10px 14px;
    background-image: url(../assets/subject.png);
    background-repeat:no-repeat;
    background-size:contain;
    box-shadow: -2px 2px 3px  #888888;
    border-radius: 5px;
    overflow: hidden;
}
.id{
    position: absolute;
    margin-left: 5px;
    color: white;
    font-size: 18px;
    font-weight: 600;
}

.subject{
    position: relative;
    font-size: 15px;
    padding-left: 25px;
    font-weight: 600;
    top: 10px;
}
.answer{
    position: relative;
    float: left;
    font-size: 14px;
    padding-left: 25px;
    font-weight: 600;
    top: 10px;
}
.line{
    position: relative;
    width: 100%;
    height: 1px;
    background: #6d4621;
    top: 40px;
}
.bottom{
    position: relative;
    width: 100%;
    height: 30px;
    top: 42px;
}
.right{
    position: absolute;
    left:25px;
    bottom:5px;
}
.truenumber{
    position: absolute;
    left: 325px;
    bottom: 5px;
}
.wrongnumber{
    position: absolute;
    left: 425px;
    bottom: 5px;
}
.rate{
    position: absolute;
    right: 25px;
    bottom: 5px;
}
.check{
    color: black;
    cursor: pointer;
}
.check:active{
    color: #6d4621;
}

</style>



<script>
import axios from 'axios'
import myscroll from 'vuescroll';
import  pages from '../components/pages';
export default {
    components: {
        myscroll,
        pages
    },
    data() {
        return {
            thisurl:'/preview3',
            video:this.$root.baseurl+"/zhejiang/keqianxianzhi.mp4",
            ops: {
                vuescroll: {},
                scrollPanel: {},
                rail: {},
                bar: {
                    background:'#6d4621',
                }
            },
            results:[
            {
                id: 1,
                type: 1,
                title: "苗族的特色建筑",
                answer1: "吊脚楼",
                answer2: "四合院",
                answer3: "福建土楼",
                answer4: "苗寨",
                trueanswer: "吊脚楼",
                analysis: "苗族大多居住在山区，山高坡陡，开挖地基极不容易，加上天气阴雨多变，潮湿多雾，砖屋底层地气很重，不宜起居。因而，苗族历来依山傍水，构筑一种通风性能好的干爽的木楼，叫“吊脚楼”。",
                pic: "",
                truenumber:"",
                wrongnumber:"",
                truewrong:""
            },
            {
                id: 2,
                type: 1,
                title: "苗族的贵州的地势特点",
                answer1: "盆地",
                answer2: "平原辽阔",
                answer3: "丘陵",
                answer4: "山高坡陡",
                trueanswer: "山高坡陡",
                analysis: "全省地貌可概括分为：高原、山地、丘陵和盆地四种基本类型，其中92.5%的面积为山地和丘陵。境内山脉众多，重峦叠嶂，绵延纵横，山高谷深。",
                pic: "",
                truenumber:"",
                wrongnumber:"",
                truewrong:""
            }
            ],
            timer:null,
        }
    },
    mounted() {
        this.$refs.mychild.typeupdate(3);
        this.$refs.mychild.pageupdate(1);
        if(this.$root.customerType==="2"){
            this.timer = setInterval(this.getOperation, 1000);
        }
        this.$parent.save('/spreview3',0,0);
        
        var _this=this;
        axios.post(_this.$root.baseurl+'/zhejiang/findpretests', {
                type:3,
        })
        .then(function (response) {
            _this.results=response.data;
            var i;
            for(i=0;i<_this.results.length;i++){
                _this.results[i].id=i+1;
            }
        })
        .catch(function (error) {
            alert(error)
        });
        
        axios.post(_this.$root.baseurl+'/zhejiang/teststate', {
                teacher:"",
                testid:"1"
        })
        .then(function (response) {
            for(let i=0;i<response.data.length;i++){
                _this.results[i].truenumber=response.data[i].truenumber;
                _this.results[i].wrongnumber=response.data[i].wrongnumber;
                _this.results[i].truewrong=response.data[i].truewrong;
            }
        })
        .catch(function (error) {
            alert(error)
        });
    },
    methods:{
        getOperation(){
            var _this=this;
            axios.get(_this.$root.baseurl+'/zhejiang/loadoperation')
            .then(function (response) {
                console.log(response)
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
            }
        }
    }
}
</script>

