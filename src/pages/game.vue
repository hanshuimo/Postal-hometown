<template>
    <div>
        <div class="primaryCoverage3">
            <div class="leftTop">
                <div @click="goto(1)">首页</div>
                <div @click="goto(2)">&gt;&gt;课程先知</div>
                <div @click="goto(3)">&gt;&gt;徽派建筑</div>
                <div @click="goto(4)">&gt;&gt;汉族服饰</div>
                <div @click="goto(5)">&gt;&gt;徽州黄梅戏&gt;&gt;</div>
                <div class="title"> 
                    <div>大富翁</div>
                </div>
            </div>
            <pages ref="mychild"></pages>
            <div class="pk" @click="goto(6)">
                PK
            </div>
        </div>
        
        <div class="primaryCoverage">
            <div class="gamecontainer">
                <img src="../assets/game/gamer.png" alt="" class="gamer" :style="{left:now.left,top:now.top}">
                <img :src="now.btn" alt="" class="startbtn" @click="startdice()">
                <img :src="now.dice" alt="" class="dice">
            </div>
        </div>
        <div class="box hide" ref="question">
            <div class="question">
                <div class="ask">&nbsp;&nbsp;{{this.question.title}}</div>
                <div class="radio-container">
                    <div class="radio">
                        <input id="radio-1" name="radio" type="radio" v-model="answer" :value="question.answer1" checked>
                        <label for="radio-1" class="radio-label">{{this.question.answer1}}</label>
                    </div>

                    <div class="radio">
                        <input id="radio-2" name="radio" type="radio" v-model="answer" :value="question.answer2">
                        <label  for="radio-2" class="radio-label">{{this.question.answer2}}</label>
                    </div>
                    <div class="radio">
                        <input id="radio-3" name="radio" type="radio" v-model="answer" :value="question.answer3">
                        <label  for="radio-3" class="radio-label">{{this.question.answer3}}</label>
                    </div>
                    <div class="radio">
                        <input id="radio-4" name="radio" type="radio" v-model="answer" :value="question.answer4">
                        <label  for="radio-4" class="radio-label">{{this.question.answer4}}</label>
                    </div>
                </div>
                <img src="../assets/game/btn1.png" alt="" @click="ans()" class="questionimg">
            </div>
        </div>
        <div class="box hide" ref="right">
            <div class="question right">
                <h1>回答正确！</h1>
                <img src="../assets/game/btn2.png" alt="" @click="right()" class="rightimg">
            </div>
        </div>
        <div class="box hide" ref="wrong">
            <div class="question wrong">
                <h1>回答错误！</h1>
                <img src="../assets/game/btn3.png" alt="" @click="wrong()" class="wrongimg">
            </div>
        </div>
    </div>
</template>


<style scoped>
.radio-container{
    position: relative;
    float: left;
    left: 20px;
    top: 60px;
}
.radio {
    float: left;
    margin:0 80px;
}
.radio input[type="radio"] {
  position: absolute;
  opacity: 0;
}
.radio input[type="radio"] + .radio-label:before {
  content: '';
  background: #f4f4f4;
  border-radius: 100%;
  border: 1px solid #b4b4b4;
  display: inline-block;
  width: 0.9em;
  height: 0.9em;
  position: relative;
  
  margin-right: 0.8em;
  vertical-align: top;
  cursor: pointer;
  text-align: center;
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
}
.radio input[type="radio"]:checked + .radio-label:before {
  background-color: #420b02;
  box-shadow: inset 0 0 0 4px #f4f4f4;
}
.radio input[type="radio"]:focus + .radio-label:before {
  outline: none;
  border-color: #420b02;
}

.radio-label{
    font-size: 22px;
    font-weight: 700;
    float: left;
}
.hide{
    display: none;
}
.box{
    position: absolute;
    width: 100%;
    height: 380px;
    top: 300px;
}
.question{
    position: relative;
    width: 516px;
    height: 380px;
    margin: 0 auto;
    color: #420b02;
    background-image: url(../assets/game/question.png);
    
}
.question h1{
    text-align: center;
}
.ask{
    position: relative;
    text-align: left;
    top: 50px;
    width: 480px;
    margin: 0 18px;
    height: 50px;
    font-size: 23px;
    line-height: 25px;
    color: #420b02;
    font-weight: 700;
}
.questionimg{
    position: absolute;
    top: 300px;
    left:190px;
    cursor: pointer;
}
.right h1,.wrong h1{
    position: relative;
    top: 150px;
}
.rightimg{
    position: absolute;
    left: 182px;
    top: 260px;
    cursor: pointer;
}
.wrongimg{
    position: absolute;
    left: 151px;
    top: 260px;
    cursor: pointer;
}
.leftTop{
    float: left;
    position: relative;
    width: 900px;
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
.gamecontainer{
    position: absolute;
    width: 1260.8px;
    height: 608px;
    top: 52px;
    margin: 0 104.6px;
    background-image: url(../assets/game/map.png);
    background-repeat:no-repeat;
    background-size:cover;
}
.gamer{
    position: absolute;
    height: 145px;
}
.startbtn{
    position: absolute;
    left: 500px;
    top: 400px;
    width: 100px;
    cursor: pointer;
}
.dice{
    position: absolute;
    left: 700px;
    top: 330px;
    width: 50px;
}
.pk{
    position: absolute;
    text-align: center;
    color: #6d4621;
    width: 117.6px;
    height: 43.2px;
    line-height: 43.2px;
    right: 150px;
    top: 5px;
    font-size: 23px;
    background-image: url(../assets/title2.png);
    background-repeat:no-repeat;
    background-size:cover;
    cursor: pointer;
}
</style>

<script>
import axios from 'axios';
import  pages from '../components/pages';
export default {
    components: {
        pages,
    },
    data() {
        return {
            answer:null,
            question:{
                title:"",
                answer1:"",
                answer2:"",
                answer3:"",
                answer4:"",
                trueanswer:"",
            },
            questions:[{
                title:"1",
            },{
                title:"2",
            }],
            btn:[{
                src:"./static/start.png"
            },{
                src:"./static/stop.png"
            }],
            diceimg:[{
                src:"./static/dice1.png"
            },{
                src:"./static/dice2.png"
            },{
                src:"./static/dice3.png"
            },{
                src:"./static/dice4.png"
            },{
                src:"./static/dice5.png"
            },{
                src:"./static/dice6.png"
            }],
            now:{
                left:"1010px",
                top:"400px",
                sum:0,
                btn:"./static/start.png",
                dice:"./static/dice1.png"
            },
            position:[{
                left:"1010px",
                top:"400px"
            },{
                left:"1010px",
                top:"275px"
            },{
                left:"1010px",
                top:"195px"
            },{
                left:"1010px",
                top:"115px"
            },{
                left:"1010px",
                top:"40px"
            },{
                left:"1010px",
                top:"-25px"
            },{
                left:"915px",
                top:"-25px"
            },{
                left:"815px",
                top:"-25px"
            },{
                left:"715px",
                top:"-25px"
            },{
                left:"715px",
                top:"40px"
            },{
                left:"715px",
                top:"115px"
            },{
                left:"615px",
                top:"115px"
            },{
                left:"515px",
                top:"115px"
            },{
                left:"415px",
                top:"115px"
            },{
                left:"315px",
                top:"115px"
            },{
                left:"315px",
                top:"45px"
            },{
                left:"215px",
                top:"45px"
            },{
                left:"115px",
                top:"45px"
            },{
                left:"115px",
                top:"115px"
            },{
                left:"115px",
                top:"195px"
            },{
                left:"215px",
                top:"195px"
            },{
                left:"215px",
                top:"275px"
            },{
                left:"215px",
                top:"345px"
            },{
                left:"215px",
                top:"400px"
            },{
                left:"315px",
                top:"400px"
            },{
                left:"415px",
                top:"400px"
            },{
                left:"515px",
                top:"400px"
            },{
                left:"615px",
                top:"400px"
            },{
                left:"715px",
                top:"400px"
            },{
                left:"815px",
                top:"400px"
            }],
            timer:"",
            sdice:0,
            before:0,
        }
    },
    mounted() {
        
        var _this=this;
        
        this.$refs.mychild.pageupdate(5);
        axios.post(_this.$root.baseurl+'/zhejiang/findtests', {
            type:2,
            pageId: 1
        })
        .then(function (response) {
            _this.questions=response.data;
            _this.question=response.data[0];
        })
            .catch(function (error) {
            console.log(error);
        });
        this.answer=this.question.answer1;
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
            }else if(number===4){
                this.$router.push({path:'/clothes'})
            }else if(number===5){
                this.$router.push({path:'/unique'})
            }else if(number===6){
                this.$router.push({path:'/gamepk'})
            }
        },
        sleep(wait){
            return new Promise((resolve,reject) => {
                setTimeout(resolve,wait);
            })
        },
        ques(){
            let m=Math.floor(Math.random()*this.questions.length);
            this.$set(this.question,'title',this.questions[m].title);
            this.$set(this.question,'answer1',this.questions[m].answer1);
            this.$set(this.question,'answer2',this.questions[m].answer2);
            this.$set(this.question,'answer3',this.questions[m].answer3);
            this.$set(this.question,'answer4',this.questions[m].answer4);
            this.$set(this.question,'trueanswer',this.questions[m].trueanswer);
            this.$refs.question.classList.remove("hide");
        },
        ans(){
            if(this.question.trueanswer===this.answer){
                this.$refs.question.classList.add("hide");
                this.$refs.right.classList.remove("hide");
            }else{
                 this.$refs.question.classList.add("hide");
                this.$refs.wrong.classList.remove("hide");
            }
        },
        async right(){
            this.$refs.right.classList.add("hide");
            for(let i=this.before;i<this.now.sum;i++){
                await this.sleep(200);
                this.movegamer();
            }

            window.setTimeout(this.check,1000);
            this.sdice=0;
            this.$set(this.now,'btn',this.btn[0].src);
        },
        wrong(){
            this.$refs.wrong.classList.add("hide");
            this.ques();
        },
        async startdice(){
            if(this.sdice===0){
                this.numberchange();
                this.sdice=1;
            }else{
                clearInterval(this.timer);
                let m=Math.floor(Math.random()*6)+1;
                
                if(this.before+m>29){
                    m=29-this.before;
                    this.now.sum=29;
                }else{
                    this.now.sum=this.before+m;
                }
                this.$set(this.now,'dice',this.diceimg[m-1].src);
                this.ques();
            }
        },
        
        numberchange(){
            this.$set(this.now,'btn',this.btn[1].src);
            this.timer = setInterval(this.change, 100);
        },
        change(){
            let m=Math.floor(Math.random()*6);
            this.$set(this.now,'dice',this.diceimg[m].src);
        },
        movegamer(){
            this.before=this.before+1;
            if(this.before<=this.now.sum){
                this.$set(this.now,'left',this.position[this.before].left);
                this.$set(this.now,'top',this.position[this.before].top);
            }else{
                clearInterval(this.timer);
            }
            
        },
        check(){
            if(this.now.sum===2){
                
                this.$set(this.now,'left',this.position[5].left);
                this.$set(this.now,'top',this.position[5].top);
                this.now.sum=5;
            }else if(this.now.sum===3){
                
                this.$set(this.now,'left',this.position[0].left);
                this.$set(this.now,'top',this.position[0].top);
                this.now.sum=0;
            }
            else if(this.now.sum===4){
                
                this.$set(this.now,'left',this.position[6].left);
                this.$set(this.now,'top',this.position[6].top);
                this.now.sum=6;
            }else if(this.now.sum===7){
                
                this.$set(this.now,'left',this.position[5].left);
                this.$set(this.now,'top',this.position[5].top);
                this.now.sum=5;
            }else if(this.now.sum===10){
                
                this.$set(this.now,'left',this.position[11].left);
                this.$set(this.now,'top',this.position[11].top);
                this.now.sum=11;
            }else if(this.now.sum===12){
                
                this.$set(this.now,'left',this.position[0].left);
                this.$set(this.now,'top',this.position[0].top);
                this.now.sum=0;
            }else if(this.now.sum===14){
                
                this.$set(this.now,'left',this.position[15].left);
                this.$set(this.now,'top',this.position[15].top);
                this.now.sum=15;
            }else if(this.now.sum===17){
                
                this.$set(this.now,'left',this.position[18].left);
                this.$set(this.now,'top',this.position[18].top);
                this.now.sum=18;
            }else if(this.now.sum===19){
                
                this.$set(this.now,'left',this.position[22].left);
                this.$set(this.now,'top',this.position[22].top);
                this.now.sum=22;
            }else if(this.now.sum===21){
                
                this.$set(this.now,'left',this.position[22].left);
                this.$set(this.now,'top',this.position[22].top);
                this.now.sum=22;
            }else if(this.now.sum===23){
                
                this.$set(this.now,'left',this.position[20].left);
                this.$set(this.now,'top',this.position[20].top);
                this.now.sum=20;
            }else if(this.now.sum===29){
                alert("恭喜到达终点!");
            }
        }
    }
}
</script>