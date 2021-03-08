<template>
    <div>
        <div class="lefttopBox hide">
            <img id="upper1" src="../assets/pk/方领短袄.png" alt="" @click="selectU(1)">
        </div>
        <div class="righttopBox hide">
            <img id="upper2" src="../assets/pk/交领短袄.png" alt="" @click="selectU(2)">
        </div>
        <div class="lefttopBox">
            <img id="upper3" src="../assets/pk/园领长衫.png" alt="" @click="selectU(3)">
        </div>
        <div class="righttopBox">
            <img id="upper4" src="../assets/pk/圆领袍琵琶袖长袄.png" alt="" @click="selectU(4)">
        </div>
        <div class="timeBox">
            {{time}}S
        </div>
        <div class="leftbottomBox">
            <img src="../assets/pk/褶裙.png" alt="" @click="selectL(1)">
        </div>
        <div class="rightbottomBox">
            <img src="../assets/pk/马面裙.png" alt="" @click="selectL(2)">
        </div>
        <div class="rightBox">
            <img src="../assets/pk/褶裙.png" alt="" class="clothes3 hide" ref="L1">
            <img src="../assets/pk/马面裙.png" alt="" class="clothes4 hide" ref="L2">
            <img src="../assets/pk/方领短袄.png" alt="" class="clothes1 hide" ref="U1">
            <img src="../assets/pk/交领短袄.png" alt="" class="clothes2 hide" ref="U2">
            <img src="../assets/pk/园领长衫.png" alt="" class="clothes5 hide" ref="U3">
            <img src="../assets/pk/圆领袍琵琶袖长袄.png" alt="" class="clothes6 hide" ref="U4">

            <img src="../assets/pk/sure.png" alt="" class="sure" @click="push()">
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            time:20,
            clock:null,
            upper:null,
            lower:null,
            id:1,
        }
    },
    mounted() {
        this.clock = setInterval(this.clockdown, 1000);
    },
    methods:{
        clockdown(){
            if(this.time>0){
                this.time=this.time-1;
            }else{
                clearInterval(this.clock);
                this.push();
            }
        },
        selectU(number){
            if(this.upper===1){
                this.$refs.U1.classList.add("hide");
            }else if(this.upper===2){
                this.$refs.U2.classList.add("hide");
            }else if(this.upper===3){
                this.$refs.U3.classList.add("hide");
            }else if(this.upper===4){
                this.$refs.U4.classList.add("hide");
            }
            if(number===1){
                this.$refs.U1.classList.remove("hide");
            }else if(number===2){
                this.$refs.U2.classList.remove("hide");
            }else if(number===3){
                this.$refs.U3.classList.remove("hide");
            }else if(number===4){
                this.$refs.U4.classList.remove("hide");
            }
            this.upper=number;
        },
        selectL(number){
            if(this.lower===1){
                this.$refs.L1.classList.add("hide");
            }else if(this.lower===2){
                this.$refs.L2.classList.add("hide");
            }
            if(number===1){
                this.$refs.L1.classList.remove("hide");
            }else if(number===2){
                this.$refs.L2.classList.remove("hide");
            }
            this.lower=number;
        },
        push(){
            var _this=this;
            clearInterval(_this.clock);
            axios.post(_this.$root.baseurl+'/zhejiang/choosepkfight',{
                id:_this.id,
                jacketid:_this.upper,
                pantsid:_this.lower
            }).then(function(response){

            }).catch(function (error) {
                console.log(error)
            });
            this.id=this.id+1;
            this.$refs.U1.classList.add("hide");
            this.$refs.U2.classList.add("hide");
            this.$refs.U3.classList.add("hide");
            this.$refs.U4.classList.add("hide");
            this.$refs.L1.classList.add("hide");
            this.$refs.L2.classList.add("hide");
            this.upper=null;
            this.lower=null;
            this.time=20;
            this.clock = setInterval(this.clockdown, 1000);
            if(this.id===5){
                clearInterval(this.clock);
                this.$parent.changeComponentId("result");
            }
        }
    }
}
</script>
<style scoped>
.hide{
    display: none;
}
.rightBox{
    position: absolute;
    background-image: url(../assets/pk/box.png);
    background-repeat:no-repeat;
    background-size:contain;
    width: 466.7px;
    height: 548.3px;
    left: 715px;
    top: 6.3px;
}
.example{
    position: absolute;
    left: 29.6px;
    top: 27px;
    height: 411px;
}
.lefttopBox,.righttopBox{
    position: absolute;
    width: 240px;
    height: 180px; 
}
.leftbottomBox,.rightbottomBox{
    position: absolute;
    width: 240px;
    height: 195px;
}
#upper1,#upper2{
    position: relative;
    width: 220px;
    margin: 0px 10px;
    cursor: pointer;
}
#upper3{
    position: relative;
    width: 220px;
    margin: 0px 10px;
    cursor: pointer;
}
#upper4{
    position: relative;
    width: 220px;
    margin: 10px 10px;
    cursor: pointer;
}
.leftbottomBox img,.rightbottomBox img{
    position: relative;
    width: 125px;
    margin: 0px 57.5px;
    cursor: pointer;
}
.lefttopBox img{
    top: 20px;
}
.lefttopBox{
    top: 35px;
    left: 55px;
}
.righttopBox{
    top: 35px;
    left: 440px;
}
.timeBox{
    position: absolute;
    left: 254px;
    top: 236px;
    width: 227px;
    height: 73px;
    line-height: 73px;
    color: #472e16;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    background-image: url(../assets/pk/倒计时.png);
    background-repeat:no-repeat;
    background-size:cover;
}
.leftbottomBox{
    top: 315px;
    left: 55px;
}
.rightbottomBox{
    top: 315px;
    left: 440px;
}
.name{
    position: absolute;
    margin: 0 45.5px;
    width: 149px;
    height: 39px;
    line-height: 39px;
    color: #472e16;
    font-size: 23px;
    font-weight: 600;
    bottom: 0px;
    background-image: url(../assets/pk/name.png);
    background-repeat:no-repeat;
    background-size:cover;
    text-align: center;
    cursor: pointer;
}
.sure{
    position: absolute;
    bottom: 20px;
    width: 166px;
    height: 52px;
    margin: 0 150.35px;
    cursor: pointer;
}
.clothes1{
    position: absolute;
    top: 91px;
    left: 44px;
    width: 380px;
}
.clothes2{
    position: absolute;
    top: 84px;
    left: 65px;
    width: 345px;
}
.clothes3{
    position: absolute;
    top: 200px;
    left: 145px;
    width: 180px;
}
.clothes4{
    position: absolute;
    top: 230px;
    left: 145px;
    width: 180px;
}
.clothes5{
    position: absolute;
    width: 380px;
    top: 98px;
    left: 45px;
}
.clothes6{
    position: absolute;
    width: 382px;
    top: 92px;
    left: 45px;
}
</style>