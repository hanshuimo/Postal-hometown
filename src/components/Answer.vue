<template>
    <div>
        <div class="name" ref="Ut1" id="Ut1" @click="selectUt(1)">方领短袄</div>
        <div class="name" ref="Ut2" id="Ut2" @click="selectUt(2)">交领短袄</div>
        <div class="name" ref="Ut3" id="Ut3" @click="selectUt(3)">圆领长袄</div>
        <div class="name" ref="Ut4" id="Ut4" @click="selectUt(4)">圆领琵琶袖长袄</div>
        <div class="timeBox">
            {{time}}S
        </div>
        <div class="name" ref="Lt1" id="Lt1" @click="selectLt(1)">褶裙</div>
        <div class="name" ref="Lt2" id="Lt2" @click="selectLt(2)">马面裙</div>

        <div class="rightBox">

            <div class="waiting" ref="wait">等待出题...</div>

            <div class="selectU">{{uppert}}</div>

            <img src="../assets/pk/褶裙.png" alt="" class="clothes3 hide" ref="AL1">
            <img src="../assets/pk/马面裙.png" alt="" class="clothes4 hide" ref="AL2">
            <img src="../assets/pk/方领短袄.png" alt="" class="clothes1 hide" ref="AU1">
            <img src="../assets/pk/交领短袄.png" alt="" class="clothes2 hide" ref="AU2">
            <img src="../assets/pk/园领长衫.png" alt="" class="clothes5 hide" ref="AU3">
            <img src="../assets/pk/圆领袍琵琶袖长袄.png" alt="" class="clothes6 hide" ref="AU4">

            <div class="selectL">{{lowert}}</div>

            <img src="../assets/pk/sure.png" alt="" class="sure" @click="push()">
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            time:20,
            clock:null,
            upper:null,
            lower:null,
            uppert:null,
            lowert:null,
            id:0,
        }
    },
    mounted() {
        this.clock = setInterval(this.askfor, 2000);
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
            if(number===1){
                this.$refs.AU1.classList.remove("hide");
            }else if(number===2){
                this.$refs.AU2.classList.remove("hide");
            }else if(number===3){
                this.$refs.AU3.classList.remove("hide");
            }else if(number===4){
                this.$refs.AU4.classList.remove("hide");
            }
            
        },
        selectL(number){
            if(number===1){
                this.$refs.AL1.classList.remove("hide");
            }else if(number===2){
                this.$refs.AL2.classList.remove("hide");
            }
        },
        selectUt(number){
            if(number===1){
                this.uppert="方领短袄";
            }else if(number===2){
                this.uppert="交领短袄";
            }else if(number===3){
                this.uppert="圆领短袄";
            }else if(number===4){
                this.uppert="圆领琵琶袖长袄";
            }
            this.upper=number;
        },
        selectLt(number){
            if(number===1){
                this.lowert="褶裙";
            }else if(number===2){
                this.lowert="马面裙";
            }
            this.lower=number;
        },
        async askfor(){
            var _this=this;
            axios.get(_this.$root.baseurl+"/zhejiang/havetimu")
            .then(function(response){
                console.log(response);
                if(response.data.a!=0){
                    _this.$refs.wait.classList.add("hide");
                    clearInterval(_this.clock);
                    _this.id=_this.id+1;
                    _this.upper=null;
                    _this.lower=null;
                    _this.selectU(response.data.jacketid);
                    _this.selectL(response.data.pantsid);
                    _this.time=20;
                    _this.clock=setInterval(_this.clockdown,1000);
                }
            })
        },
        async push(){
            var _this=this;
            axios.post(_this.$root.baseurl+"/zhejiang/answerpkfight",{
                id:_this.id,
                jacketid:_this.upper,
                pantsid:_this.lower
            }).then(function(response){
                
            })
            clearInterval(_this.clock);
            if(_this.id<4){
                _this.$refs.wait.classList.remove("hide");
                _this.uppert="";
                _this.lowert="";
                _this.time=20;
                _this.$refs.AU1.classList.add("hide");
                _this.$refs.AU2.classList.add("hide");
                _this.$refs.AU3.classList.add("hide");
                _this.$refs.AU4.classList.add("hide");
                _this.$refs.AL1.classList.add("hide");
                _this.$refs.AL2.classList.add("hide");
                _this.clock=setInterval(_this.askfor,2000);
            }else{
                _this.$parent.changeComponentId("result");
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
.name{
    position: absolute;
    width: 149px;
    height: 39px;
    line-height: 39px;
    text-align: center;
    background-image: url(../assets/pk/name.png);
    background-repeat:no-repeat;
    background-size:contain;
    cursor: pointer;
    color: #472e16;
    font-weight: 600;
}
#Ut1{
    left: 120px;
    top: 30px;
}
#Ut2{
    left: 460px;
    top: 30px;
}
#Ut3{
    left: 120px;
    top: 130px;
}
#Ut4{
    left: 460px;
    top: 130px;
}
#Lt1{
    left: 120px;
    top: 400px;
}
#Lt2{
    left: 460px;
    top: 400px;
}
.selectU,.selectL{
    position: absolute;
    width: 252px;
    height: 53px;
    margin: 0 107.35px;
    line-height: 53px;
    text-align: center;
    color: #472e16;
    font-weight: 800;
    font-size: 24px;
    background-image: url(../assets/pk/tbox.png);
    background-repeat:no-repeat;
    background-size:contain;
}
.selectU{
    top: 35px;
}
.selectL{
    top: 410px;
}
.waiting{
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 30px;
    height: 40px;
    line-height: 40px;
    top: 270px;
    color: #472e16;
    font-weight: 700;
}
</style>