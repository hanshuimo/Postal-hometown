<template>
    <div>
        <div class="primaryCoverage3">
            <div class="leftTop">
                <div @click="goto(1)">首页</div>
                <div @click="goto(2)">&gt;&gt;课程先知</div>
                <div @click="goto(3)">&gt;&gt;徽派建筑&gt;&gt;</div>
                <div class="title">
                    <div>汉族游戏</div>
                </div>
            </div>
            
            <div class="back" @click="goto(4)">
                返回
            </div>
        </div>
        
        <div class="primaryCoverage">
            <div class="primaryCoverage2">
                <component :is="componentId" class="mainContent"></component>
            </div>
        </div>
    </div>
</template>

<script>
import Issue from '../components/Issue'
import Answer from '../components/Answer'
import result from '../components/result'
import waiting from '../components/waiting'
import axios from 'axios'
export default {
    components: {
        Issue,
        Answer,
        result,
        waiting
    },
    data() {
        return {
            thisurl:"/pk",
            componentId:"waiting",
            dataName:"classmanagement",
            timer:null,
            clock:null
        }
    },
    mounted() {
        

    },
    methods: {
        getOperation(){
            var _this=this;
            axios.get(_this.$root.baseurl+'/zhejiang/loadoperation')
            .then(function (response) {
                console.log(response);
                if(response.data.controller===1){
                    if(response.data.url!=_this.thisurl){
                        _this.$router.push({path:response.data.url});
                    }
                }
            })
            .catch(function (error) {
                console.log(error)
            });
        },
        changeComponentId(id){
            this.componentId=id;
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
                var _this=this;
                axios.post(_this.$root.baseurl+"/zhejiang/outpkroom",{})
                .then(function(response){

                }).catch(function(response){

                })
                this.$router.push({path:'/clothes'})
            }
        },
    },
}
</script>

<style scoped>
.leftTop{
    float: left;
    position: absolute;
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
    text-align: center;
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
    width: 1404px;
    height: 663.4px;
    left: 40px;
    top: 21px;
    background-image: url(../assets/mainbox4.png);
    background-repeat:no-repeat;
    background-size:cover;
}
.mainContent{
    position: absolute;
    width: 1285px;
    height: 561px;
    left: 58px;
    top: 43px;
}
.back{
    position: absolute;
    text-align: center;
    color: #6d4621;
    width: 117.6px;
    height: 43.2px;
    line-height: 43.2px;
    right: 10px;
    top: 5px;
    font-size: 23px;
    background-image: url(../assets/title2.png);
    background-repeat:no-repeat;
    background-size:cover;
    cursor: pointer;
}
</style>
