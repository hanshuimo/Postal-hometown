<template>
  <div id="app" ref="homePage">
    <lnavigation v-if="category===0" class="navigation"></lnavigation>
    <tnavigation v-if="category===1" class="navigation"></tnavigation>
    <tnavigation2 v-if="category===3" class="navigation"></tnavigation2>
    <snavigation v-if="category===2" class="navigation"></snavigation>
    <div>
      <router-view></router-view>
    </div>
    <qrcode v-show="showCode"></qrcode>
  </div>
</template>

<script>
import tnavigation from './components/tnavigation'
import tnavigation2 from './components/tnavigation2'
import lnavigation from './components/lnavigation'
import snavigation from './components/snavigation'
import qrcode from './components/code'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    tnavigation,
    tnavigation2,
    lnavigation,
    snavigation,
    qrcode
  },
  data() {
    return {
      category:2,
      clientHeight:"",
      showCode:false
    }
  },
  mounted(){
      // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`          //document.body.clientWidth;
      //console.log(self.clientHeight);
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
  },
  watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
  },
  methods:{
      changeFixed(clientHeight){                        //动态修改样式
        this.$refs.homePage.style.height = clientHeight+'px';
      },
      Scode(){
        this.showCode=true;
      },
      Hcode(){
        this.showCode=false;
      },
      changeNav(){
        if(this.$root.customerType==="1"){
          this.category=1;
        }else if(this.$root.customerType==="2"){
          this.category=2;
        }else{
          this.category=0; 
        }
      },
      changeCategory(number){
        this.$set(this,"category",number);
      },
      save(url,type,operationId){
        var _this=this;
        if(this.$root.control===1&&this.$root.customerType==="1"){
          axios.post(_this.$root.baseurl+'/zhejiang/saveoperation', {
            url:url,
            type:type,
            operationId:operationId,
            controller:_this.$root.control
          })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          });
        }
      },
  }
}
</script>

<style>

#app {
  min-width:1470px;
  min-height:800px;
  width: 100%;
  height: 100%;
  background-image: url(./assets/background.jpg);
  background-repeat:no-repeat;
  background-size: cover;
  background-position: bottom;
}

*{
  margin: 0;
  user-select: none;
}

a{
  text-decoration:none;
}

.logo ,.logo img{
  height: 100%;
}
.logo{
  float: left;
  position: relative;
  left: 40px;
}

.navigation{
  border-bottom:1px solid #ac723c;
  width: 100%;
  height: 75px;
}
</style>
