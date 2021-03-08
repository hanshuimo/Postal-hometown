<template>
    <div>
        <div class="waiting">等待匹配。。。</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            clock:null,
            name:null,
        }
    },
    mounted() { 
        var _this=this;
        axios.post(_this.$root.baseurl+'/zhejiang/inpkroom',{
            name:_this.$root.number,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error)
        });
        _this.clock = setInterval(_this.findpkfight, 1000);
    },
    methods:{
        findpkfight(){
            var _this=this
            axios.post(_this.$root.baseurl+'/zhejiang/findpkfight',{
                name:_this.$root.number
            })
            .then(function (response) {
                if(response.data.people===2){
                    clearInterval(_this.clock);
                    if(response.data.chuti===1){
                        _this.$parent.changeComponentId("Issue");
                    }else{
                        _this.$parent.changeComponentId("Answer");
                    }
                }
            })
            .catch(function (error) {
                console.log(error)
            });
        }
    }
}
</script>
<style scoped>
.waiting{
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 30px;
    height: 40px;
    line-height: 40px;
    top: 300px;
    color: #472e16;
    font-weight: 700;
}
</style>