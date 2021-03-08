<template>
    <div>
        <div class="resultBox">
            <div class="uppert">-{{uppert1}}-</div>
            <img src="../assets/pk/褶裙.png" alt="" class="lower1 hide" ref="L11">
            <img src="../assets/pk/马面裙.png" alt="" class="lower2 hide" ref="L12">
            <img src="../assets/pk/方领短袄.png" alt="" class="upper1 hide" ref="U11">
            <img src="../assets/pk/交领短袄.png" alt="" class="upper2 hide" ref="U12">
            <img src="../assets/pk/园领长衫.png" alt="" class="upper3 hide" ref="U13">
            <img src="../assets/pk/圆领袍琵琶袖长袄.png" alt="" class="upper4 hide" ref="U14">
            <div class="lowert">-{{lowert1}}-</div>
            <div class="winneri">{{winner1}}</div>
        </div>
        <div class="resultBox">
            <div class="uppert">-{{uppert2}}-</div>
            <img src="../assets/pk/褶裙.png" alt="" class="lower1 hide" ref="L21">
            <img src="../assets/pk/马面裙.png" alt="" class="lower2 hide" ref="L22">
            <img src="../assets/pk/方领短袄.png" alt="" class="upper1 hide" ref="U21">
            <img src="../assets/pk/交领短袄.png" alt="" class="upper2 hide" ref="U22">
            <img src="../assets/pk/园领长衫.png" alt="" class="upper3 hide" ref="U23">
            <img src="../assets/pk/圆领袍琵琶袖长袄.png" alt="" class="upper4 hide" ref="U24">
            <div class="lowert">-{{lowert2}}-</div>
            <div class="winneri">{{winner2}}</div>
        </div>
        <div class="resultBox">
            <div class="uppert">-{{uppert3}}-</div>
            <img src="../assets/pk/褶裙.png" alt="" class="lower1 hide" ref="L31">
            <img src="../assets/pk/马面裙.png" alt="" class="lower2 hide" ref="L32">
            <img src="../assets/pk/方领短袄.png" alt="" class="upper1 hide" ref="U31">
            <img src="../assets/pk/交领短袄.png" alt="" class="upper2 hide" ref="U32">
            <img src="../assets/pk/园领长衫.png" alt="" class="upper3 hide" ref="U33">
            <img src="../assets/pk/圆领袍琵琶袖长袄.png" alt="" class="upper4 hide" ref="U34">
            <div class="lowert">-{{lowert3}}-</div>
            <div class="winneri">{{winner3}}</div>
        </div>
        <div class="resultBox">
            <div class="uppert">-{{uppert4}}-</div>
            <img src="../assets/pk/褶裙.png" alt="" class="lower1 hide" ref="L41">
            <img src="../assets/pk/马面裙.png" alt="" class="lower2 hide" ref="L42">
            <img src="../assets/pk/方领短袄.png" alt="" class="upper1 hide" ref="U41">
            <img src="../assets/pk/交领短袄.png" alt="" class="upper2 hide" ref="U42">
            <img src="../assets/pk/园领长衫.png" alt="" class="upper3 hide" ref="U43">
            <img src="../assets/pk/圆领袍琵琶袖长袄.png" alt="" class="upper4 hide" ref="U44">
            <div class="lowert">-{{lowert4}}-</div>
            <div class="winneri">{{winner4}}</div>
        </div>
        <img src="../assets/pk/winner.png" alt="" class="winner">
        <div class="winner2">{{winner}}</div>
    </div>
</template>

<script>
import axios from 'axios'
import { setInterval } from 'timers';
export default {
    data () {
        return {
            winner:null,
            winner1:null,
            winner2:null,
            winner3:null,
            winner4:null,
            clock:null,
            uppert1:null,
            uppert2:null,
            uppert3:null,
            uppert4:null,
            lowert1:null,
            lowert2:null,
            lowert3:null,
            lowert4:null,
            a:1,
        }
    },
    mounted() {
        
        this.clock=setInterval(this.find,2000);
    },
    methods: {
        async find(){
            var _this=this;
            axios.get(_this.$root.baseurl+'/zhejiang/havetimu')
            .then(function(response){
                _this.a=response.data.a;
            });
            if(_this.a===0){
                _this.findresult();
            }
        },
         async findresult(){
            clearInterval(this.clock);
            var _this=this;
            axios.get(_this.$root.baseurl+'/zhejiang/fightresult')
            .then(function(response){
                console.log(response);
                if(response.data.win===0){
                    _this.winner="平局";
                }else if(response.data.win===1){
                    _this.winner="出题组";
                }else if(response.data.win===2){
                    _this.winner="答题组";
                }
                //第一轮
                if(response.data.a===0){
                    _this.winner1="平局";
                }else if(response.data.a===1){
                    _this.winner1="出题组+1";
                }else if(response.data.a===2){
                    _this.winner1="答题组+1";
                }
                if(response.data.aj===1){
                    _this.uppert1="方领短袄";
                    _this.$refs.U11.classList.remove("hide");
                }else if(response.data.aj===2){
                    _this.uppert1="交领短袄";
                    _this.$refs.U12.classList.remove("hide");
                }else if(response.data.aj===3){
                    _this.uppert1="园领长衫";
                    _this.$refs.U13.classList.remove("hide");
                }else if(response.data.aj===4){
                    _this.uppert1="圆领袍琵琶袖长袄";
                    _this.$refs.U14.classList.remove("hide");
                }
                if(response.data.ap===1){
                    _this.lowert1="褶裙";
                    _this.$refs.L11.classList.remove("hide");
                }else if(response.data.ap===2){
                    _this.lowert1="马面裙";
                    _this.$refs.L12.classList.remove("hide");
                }

                //第二轮
                if(response.data.b===0){
                    _this.winner2="平局";
                }else if(response.data.b===1){
                    _this.winner2="出题组+1";
                }else if(response.data.b===2){
                    _this.winner2="答题组+1";
                }
                if(response.data.bj===1){
                    _this.uppert2="方领短袄";
                    _this.$refs.U21.classList.remove("hide");
                }else if(response.data.bj===2){
                    _this.uppert2="交领短袄";
                    _this.$refs.U22.classList.remove("hide");
                }else if(response.data.bj===3){
                    _this.uppert2="园领长衫";
                    _this.$refs.U23.classList.remove("hide");
                }else if(response.data.bj===4){
                    _this.uppert2="圆领袍琵琶袖长袄";
                    _this.$refs.U24.classList.remove("hide");
                }
                if(response.data.bp===1){
                    _this.lowert2="褶裙";
                    _this.$refs.L21.classList.remove("hide");
                }else if(response.data.bp===2){
                    _this.lowert2="马面裙";
                    _this.$refs.L22.classList.remove("hide");
                }

                //第三轮
                if(response.data.c===0){
                    _this.winner3="平局";
                }else if(response.data.c===1){
                    _this.winner3="出题组+1";
                }else if(response.data.c===2){
                    _this.winner3="答题组+1";
                }
                if(response.data.cj===1){
                    _this.uppert3="方领短袄";
                    _this.$refs.U31.classList.remove("hide");
                }else if(response.data.cj===2){
                    _this.uppert3="交领短袄";
                    _this.$refs.U32.classList.remove("hide");
                }else if(response.data.cj===3){
                    _this.uppert3="园领长衫";
                    _this.$refs.U33.classList.remove("hide");
                }else if(response.data.cj===4){
                    _this.uppert3="圆领袍琵琶袖长袄";
                    _this.$refs.U34.classList.remove("hide");
                }
                if(response.data.cp===1){
                    _this.lowert3="褶裙";
                    _this.$refs.L31.classList.remove("hide");
                }else if(response.data.cp===2){
                    _this.lowert3="马面裙";
                    _this.$refs.L32.classList.remove("hide");
                }

                //第四轮
                if(response.data.d===0){
                    _this.winner4="平局";
                }else if(response.data.d===1){
                    _this.winner4="出题组+1";
                }else if(response.data.d===2){
                    _this.winner4="答题组+1";
                }
                if(response.data.dj===1){
                    _this.uppert4="方领短袄";
                    _this.$refs.U41.classList.remove("hide");
                }else if(response.data.dj===2){
                    _this.uppert4="交领短袄";
                    _this.$refs.U42.classList.remove("hide");
                }else if(response.data.dj===3){
                    _this.uppert4="园领长衫";
                    _this.$refs.U43.classList.remove("hide");
                }else if(response.data.dj===4){
                    _this.uppert4="圆领袍琵琶袖长袄";
                    _this.$refs.U44.classList.remove("hide");
                }
                if(response.data.dp===1){
                    _this.lowert4="褶裙";
                    _this.$refs.L41.classList.remove("hide");
                }else if(response.data.dp===2){
                    _this.lowert4="马面裙";
                    _this.$refs.L42.classList.remove("hide");
                }

            })
        }
    }
}
</script>

<style scoped>
.hide{
    display: none;
}
.resultBox{
    position: relative;
    float: left;
    top: 36px;
    margin:0 60px;
    left: 0px;
    width: 200px;
    height: 350px;
}
.winner{
    position: absolute;
    width: 200px;
    margin: 0 542.5px;
    bottom: 90px;
    left: 0;
}
.winner2{
    position: absolute;
    width: 149px;
    height: 39px;
    line-height: 39px;
    margin: 0 568px;
    text-align: center;
    color: #3f0c00;
    font-size: 25px;
    font-weight: 600;
    left: 0;
    bottom: 20px;
    background-image: url(../assets/pk/name.png);
    background-repeat:no-repeat;
    background-size:cover;
}
.winneri{
    position: absolute;
    width: 200px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 23px;
    font-weight: 600;
    bottom: 10px;
    color: #3f0c00;
}
.upper1,.upper2,.upper3,.upper4,.lower1,.lower2{
    position: absolute;
}
.upper1{
    top: 30px;
    left: 0px;
    width: 200px;
}
.upper2{
    top: 26px;
    left: 0px;
    width: 200px;
}
.upper3{
    top: 36px;
    left: 0px;
    width: 200px;
}
.upper4{
    top: 33px;
    left: 0px;
    width: 200px;
}
.lower1{
    top: 99px;
    left: 37px;
    width: 124px;
}
.lower2{
    top: 106px;
    left: 37px;
    width: 124px;
}
.uppert{
    font-size: 21px;
    font-weight: 600;
    color: #3f0c00;
    top: 9px;
    position: absolute;
    width: 200px;
    text-align: center;
}
.lowert{
    font-size: 21px;
    font-weight: 600;
    color: #3f0c00;
    top: 275px;
    position: absolute;
    width: 200px;
    text-align: center;
}
</style>