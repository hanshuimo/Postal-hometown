<template>
    <div id="container">
      <div class="primaryCoverage">
        <img src="../assets/mainbox2.png" alt="" class="primaryCoverage2">
        <div class="map" >
          
          <img src="../assets/hello.png" alt="" class="hello">
          <img src="../assets/map/1.png" alt="" class="map1 mapblock">
          <img src="../assets/map/2.png" alt="" class="map2 mapblock">
          <img src="../assets/map/3.png" alt="" class="map3 mapblock">
          <img src="../assets/map/4.png" alt="" class="map4 mapblock">
          <img src="../assets/map/5.png" alt="" class="map5 mapblock">
          <img src="../assets/map/6.png" alt="" class="map6 mapblock">
          <img src="../assets/map/7.png" alt="" class="map7 mapblock">
          <img src="../assets/map/8.png" alt="" class="map8 mapblock">
          <img src="../assets/map/9.png" alt="" class="map9 mapblock">
          <img src="../assets/map/10.png" alt="" class="map10 mapblock">
          <img src="../assets/map/11.png" alt="" class="map11 mapblock">
          <img src="../assets/map/12.png" alt="" class="map12 mapblock">
          <img src="../assets/map/13.png" alt="" class="map13 mapblock">
          <img src="../assets/map/14.png" alt="" class="map14 mapblock">
          <img src="../assets/map/15.png" alt="" class="map15 mapblock">
          <img src="../assets/map/16.png" alt="" class="map16 mapblock">
          <img src="../assets/map/17.png" alt="" class="map17 mapblock">
          <img src="../assets/map/18.png" alt="" class="map18 mapblock">
          <img src="../assets/map/19.png" alt="" class="map19 mapblock">
          <img src="../assets/map/20.png" alt="" class="map20 mapblock">
          <img src="../assets/map/21.png" alt="" class="map21 mapblock">
          <img src="../assets/map/22.png" alt="" class="map22 mapblock">
          <img src="../assets/map/23.png" alt="" class="map23 mapblock">
          <img src="../assets/map/24.png" alt="" class="map24 mapblock">
          <img src="../assets/map/25.png" alt="" class="map25 mapblock">
          <img src="../assets/map/26.png" alt="" class="map26 mapblock" @mouseenter="highlight(26)">
          <img src="../assets/map/27.png" alt="" class="map27 mapblock" @mouseenter="highlight(27)">
          <img src="../assets/map/28.png" alt="" class="map28 mapblock" @mouseenter="highlight(28)">
          <img src="../assets/map2/1.png" alt="" class="map1 hide">
          <img src="../assets/map2/2.png" alt="" class="map2 hide">
          <img src="../assets/map2/3.png" alt="" class="map3 hide">
          <img src="../assets/map2/4.png" alt="" class="map4 hide">
          <img src="../assets/map2/5.png" alt="" class="map5 hide">
          <img src="../assets/map2/6.png" alt="" class="map6 hide">
          <img src="../assets/map2/7.png" alt="" class="map7 hide">
          <img src="../assets/map2/8.png" alt="" class="map8 hide">
          <img src="../assets/map2/9.png" alt="" class="map9 hide">
          <img src="../assets/map2/10.png" alt="" class="map10 hide">
          <img src="../assets/map2/11.png" alt="" class="map11 hide">
          <img src="../assets/map2/12.png" alt="" class="map12 hide">
          <img src="../assets/map2/13.png" alt="" class="map13 hide">
          <img src="../assets/map2/14.png" alt="" class="map14 hide">
          <img src="../assets/map2/15.png" alt="" class="map15 hide">
          <img src="../assets/map2/16.png" alt="" class="map16 hide">
          <img src="../assets/map2/17.png" alt="" class="map17 hide">
          <img src="../assets/map2/18.png" alt="" class="map18 hide">
          <img src="../assets/map2/19.png" alt="" class="map19 hide">
          <img src="../assets/map2/20.png" alt="" class="map20 hide">
          <img src="../assets/map2/21.png" alt="" class="map21 hide">
          <img src="../assets/map2/22.png" alt="" class="map22 hide">
          <img src="../assets/map2/23.png" alt="" class="map23 hide">
          <img src="../assets/map2/24.png" alt="" class="map24 hide">
          <img src="../assets/map2/25.png" alt="" class="map25 hide">
          <div ref="map26" class="hide map26">
            <img src="../assets/map2/26.png" alt="" class="imgin">
            <img src="../assets/position.png" alt="" class="pos pos26" @click="showStamp(26)">
          </div>
          <div ref="map27" class="map27 hide">
            <img src="../assets/map2/27.png" alt="" class="imgin">
            <img src="../assets/position.png" alt="" class="pos pos27" @click="showStamp(27)">
          </div>
          <div ref="map28" class="map28">
            <img src="../assets/map2/28.png" alt="" class="imgin">
            <img src="../assets/position.png" alt="" class="pos pos28" @clickr="showStamp(28)">
          </div>
          
          <img src="../assets/text/1.png" alt="" class="text1">
          <img src="../assets/text/2.png" alt="" class="text2">
          <img src="../assets/text/3.png" alt="" class="text3">
          <img src="../assets/text/4.png" alt="" class="text4">
          <img src="../assets/text/5.png" alt="" class="text5">
          <img src="../assets/text/6.png" alt="" class="text6">
          <img src="../assets/text/7.png" alt="" class="text7">
          <img src="../assets/text/8.png" alt="" class="text8">
          <img src="../assets/text/9.png" alt="" class="text9">
          <img src="../assets/text/10.png" alt="" class="text10">
          <img src="../assets/text/11.png" alt="" class="text11">
          <img src="../assets/text/12.png" alt="" class="text12">
          <img src="../assets/text/13.png" alt="" class="text13">
          <img src="../assets/text/14.png" alt="" class="text14">
          <img src="../assets/text/15.png" alt="" class="text15">
          <img src="../assets/text/16.png" alt="" class="text16">
          <img src="../assets/text/17.png" alt="" class="text17">
          <img src="../assets/text/18.png" alt="" class="text18">
          <img src="../assets/text/19.png" alt="" class="text19">
          <img src="../assets/text/20.png" alt="" class="text20">
          <img src="../assets/text/21.png" alt="" class="text21">
          <img src="../assets/text/22.png" alt="" class="text22">
          <img src="../assets/text/23.png" alt="" class="text23">
          <img src="../assets/text/24.png" alt="" class="text24">
          <img src="../assets/text/25.png" alt="" class="text25">
          <img src="../assets/text/26.png" alt="" class="text26" @mouseover="highlight(26)"  @click="next(26)">
          <img src="../assets/text/27.png" alt="" class="text27" @mouseover="highlight(27)"  @click="next(27)">
          <img src="../assets/text/28.png" alt="" class="text28" @mouseover="highlight(28)"  @click="next(28)">
        </div>
        <div class="introduce">
          <div class="tabbar">{{regional.tabbar}}</div>
          <div class="regional">
            <img :src="regional.imgsrc" alt="" class="regionalimg">
            <div class="regionaltext">&nbsp;&nbsp;{{regional.text}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      thisurl:'/index',
      light:28,
      regional:{
        tabbar:"——安徽省——",
        imgsrc:"./static/regional1.png",
        text:"安徽文化主要由淮河文化、新安文化、皖江文化、庐州文化等组成。安徽被称为中国戏曲之乡，安徽戏曲边沿艺术历史悠久，品种较多，影响较大的有黄梅戏、徽剧、庐剧、泗州戏、坠子戏、花鼓戏等。安徽山多秀丽，且负盛名，其中有黄山、齐云山、黄埔山、九华山等。包揽太平湖、龙子湖、黄河故道等名湖。建筑文化方面更是拥有久负盛名的徽派建筑。"
      },
      regionals:[{
        tabbar:"——湖南省——",
        imgsrc:"./static/regional2.png",
        text:"苗族，是一个古老的民族，散布在世界各地，主要分布于中国的黔、湘、鄂、川、滇、桂、琼等省区，以及东南亚的老挝、越南、泰国等国家和地区。苗族有自己的语言，苗语属汉藏语系苗瑶语族苗语支，分湘西、黔东和川黔滇三大方言。由于苗族与汉族长期交往，有一部分苗族兼通汉语并用汉文。苗族的宗教信仰主要是自然崇拜和祖先崇拜。"
      },{
        tabbar:"——安徽省——",
        imgsrc:"./static/regional1.png",
        text:"安徽文化主要由淮河文化、新安文化、皖江文化、庐州文化等组成。安徽被称为中国戏曲之乡，安徽戏曲边沿艺术历史悠久，品种较多，影响较大的有黄梅戏、徽剧、庐剧、泗州戏、坠子戏、花鼓戏等。安徽山多秀丽，且负盛名，其中有黄山、齐云山、黄埔山、九华山等。包揽太平湖、龙子湖、黄河故道等名湖。建筑文化方面更是拥有久负盛名的徽派建筑。"
      },{
        tabbar:"——内蒙古——",
        imgsrc:"./static/regional3.png",
        text:"早在十三世纪以前，蒙古族畜牧业生产有了相当发展，伴随着畜牧业经济的发展，也使建立在私有制经济基础上的 蒙古人家庭发展起来。成书于十三世纪前期的《蒙古秘史》中，对蒙古族的家庭情况多有记载，如阿 豁阿死后，兄弟五人“即分马群家赀”，孛端察尔在兄弟的帮助下俘获扎儿兀惕部的阿当罕，建立起自己的家庭，有了自己的马群、家赀、隶民、奴婢等。"
      }],
      timer:null,
    }
  },
  components: {
    
  },
  mounted() {
    if(this.$root.customerType==="2"){
      this.timer = setInterval(this.getOperation, 1000);
    }
    this.$parent.save('/index',0,0);
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
          }else if(response.data.type===1){
            _this.highlight(response.data.operationId);
          }
        }
      })
      .catch(function (error) {
        console.log(error)
      });
    },
    next(number){
      clearInterval(this.timer);
      if(number===28){
        if(this.$root.customerType==="1"){
          this.$router.push({path:'/preview'});
        }else{
          this.$router.push({path:'/spreview'});
        }
      }else if(number===27){
        if(this.$root.customerType==="1"){
          this.$router.push({path:'/preview2'});
        }else{
          this.$router.push({path:'/spreview2'});
        }
      }else if(number===26){
        if(this.$root.customerType==="1"){
          this.$router.push({path:'/preview3'});
        }else{
          this.$router.push({path:'/spreview3'});
        }
      }
    },
    highlight(number){

      this.$parent.save('/index',1,number);

      if(this.light===27){
        this.$refs.map27.classList.add("hide");
      }else if(this.light===28){
        this.$refs.map28.classList.add("hide");
      }else if(this.light===26){
        this.$refs.map26.classList.add("hide");
      }
      this.light=number;
      if(number===27){
        this.$refs.map27.classList.remove("hide");
        this.$set(this.regional,'tabbar',this.regionals[0].tabbar);
        this.$set(this.regional,'imgsrc',this.regionals[0].imgsrc);
        this.$set(this.regional,'text',this.regionals[0].text);

      }else if(number===28){
        this.$refs.map28.classList.remove("hide");
        this.$set(this.regional,'tabbar',this.regionals[1].tabbar);
        this.$set(this.regional,'imgsrc',this.regionals[1].imgsrc);
        this.$set(this.regional,'text',this.regionals[1].text);
      }else if(number===26){
        this.$refs.map26.classList.remove("hide");
        this.$set(this.regional,'tabbar',this.regionals[2].tabbar);
        this.$set(this.regional,'imgsrc',this.regionals[2].imgsrc);
        this.$set(this.regional,'text',this.regionals[2].text);
      }
      
    },
    
  }
}
</script>
<style scoped>
.a{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 700px;

}
#container {
  float: left;
  width: 100%;
  height: 100%;
}
.primaryCoverage{
    width: 1470px;
    height: 710px;
    position: relative;
    top: 70px;
    margin: 0 auto;
    background-image: url(../assets/mainbox.png);
    background-repeat:no-repeat;
    background-size:cover;
}
.primaryCoverage2{
    width: 1400px;
    height: 660px;
    position: absolute;
    left: 40px;
    top: 27px;
}
.introduce{
  position: absolute;
  width:450px;
  height:500px;
  left: 900px;
  top: 90px;
}
.tabbar{
  position: relative;
  top: 30px;
  margin: 0 auto;
  width: 254px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  font-weight: 600;
  background-image: url(../assets/tabbar.png);
  background-repeat:no-repeat;
  background-size:cover;
}
.regional{
  position: relative;
  margin: 0 auto;
  width: 380px;
  height: 410px;
  top: 44px;
  border: 3px solid #420b02;
}
.regionalimg{
  position: relative;
  margin:10px 10px 3px 10px;
  width: 360px;
}
.regionaltext{
  position: relative;
  margin:0 10px;
  width: 360px;
  height: 200px;
  color: #420b02;
}
.map{
  position: absolute;
  width:700px;
  height: 560px;
  top: 60px;
  left: 100px;
  
}
.hello{
  position: absolute;
  width: 240px;
  left: 250px;
  top: -30px;
}
.map1{
  position: absolute;
  width: 282px;
  top: 60px;
  left: 2px;
}
.map2{
  position: absolute;
  width: 269px;
  top: 256px;
  left: 25px;
}
.map3{
  position: absolute;
  width: 129px;
  top: 395px;
  left: 267px;
}
.map4{
  position: absolute;
  width: 179px;
  top: 225px;
  left: 175px;
}
.map5{
  position: absolute;
  width: 108px;
  top: 441px;
  left: 377px;
}
.map6{
  position: absolute;
  width: 111px;
  top: 447px;
  left: 448px;
}
.map7{
  position: absolute;
  width: 40px;
  top: 527px;
  left: 436px;
}
.map8{
  position: absolute;
  width: 29px;
  top: 445px;
  left: 597px;
}
.map9{
  position: absolute;
  width: 60px;
  top: 395px;
  left: 538px;
}
.map10{
  position: absolute;
  width: 64px;
  top: 373px;
  left: 504px;
}
.map11{
  position: absolute;
  width: 56px;
  top: 341px;
  left: 563px;
}
.map12{
  position: absolute;
  width: 141px;
  top: 312px;
  left: 276px;
}
.map13{
  position: absolute;
  width: 160px;
  top: 0px;
  left: 539px;
}
.map14{
  position: absolute;
  width: 87px;
  top: 395px;
  left: 359px;
}
.map15{
  position: absolute;
  width: 64px;
  top: 350px;
  left: 387px;
}
.map16{
  position: absolute;
  width: 110px;
  top: 327px;
  left: 427px;
}
.map17{
  position: absolute;
  width: 80px;
  top: 173px;
  left: 487px;
}
.map18{
  position: absolute;
  width: 78px;
  top: 276px;
  left: 457px;
}
.map19{
  position: absolute;
  width: 198px;
  top: 174px;
  left: 238px;
}
.map20{
  position: absolute;
  width: 81px;
  top: 284px;
  left: 530px;
}
.map21{
  position: absolute;
  width: 83px;
  top: 229px;
  left: 379px;
}
.map22{
  position: absolute;
  width: 97px;
  top: 242px;
  left: 513px;
}
.map23{
  position: absolute;
  width: 48px;
  top: 212px;
  left: 452px;
}
.map24{
  position: absolute;
  width: 79px;
  top: 154px;
  left: 550px;
}
.map25{
  position: absolute;
  width: 120px;
  top: 98px;
  left: 567px;
}
.map26{
  position: absolute;
  width: 313px;
  top: 3px;
  left: 285px;
}
.map27{
  position: absolute;
  width: 82px;
  top: 376px;
  left: 433px;
}
.map28{
  position: absolute;
  width: 66px;
  top: 304px;
  left: 516px;
}
.mapblock{
  opacity: 0.8;
  cursor: pointer;
}
.hide{
  display: none;
}
.imgin{
  position: absolute;
  width: 100%;
}
.text1{
  position: absolute;
  width: 160px;
  left: 64px;
  top: 175px;
  cursor: pointer;
}
.text2{
  position: absolute;
  width: 100px;
  left: 120px;
  top: 345px;
  cursor: pointer;
}
.text3{
  position: absolute;
  width: 50px;
  left: 305px;
  top: 455px;
  cursor: pointer;
}
.text4{
  position: absolute;
  width: 55px;
  left: 232px;
  top: 275px;
  cursor: pointer;
}
.text5{
  position: absolute;
  width: 70px;
  left: 400px;
  top: 475px;
  cursor: pointer;
}
.text6{
  position: absolute;
  width: 40px;
  left: 493px;
  top: 468px;
  cursor: pointer;
}
.text7{
  position: absolute;
  width: 28px;
  left: 441px;
  top: 539px;
  cursor: pointer;
}
.text8{
  position: absolute;
  width: 11px;
  left: 606px;
  top: 455px;
  cursor: pointer;
}
.text9{
  position: absolute;
  width: 15px;
  left: 559px;
  top: 419px;
  cursor: pointer;
}
.text10{
  position: absolute;
  width: 16px;
  left: 520px;
  top: 400px;
  cursor: pointer;
}
.text11{
  position: absolute;
  width: 35px;
  left: 575px;
  top: 377px;
  cursor: pointer;
}
.text12{
  position: absolute;
  width: 50px;
  left: 325px;
  top: 360px;
  cursor: pointer;
}
.text13{
  position: absolute;
  width: 65px;
  left: 610px;
  top: 80px;
  cursor: pointer;
}
.text14{
  position: absolute;
  width: 45px;
  left: 380px;
  top: 425px;
  cursor: pointer;
}
.text15{
  position: absolute;
  width: 12px;
  left: 415px;
  top: 356px;
  cursor: pointer;
}
.text16{
  position: absolute;
  width: 42px;
  left: 474px;
  top: 359px;
  cursor: pointer;
}
.text17{
  position: absolute;
  width: 45px;
  left: 504px;
  top: 208px;
  cursor: pointer;
}
.text18{
  position: absolute;
  width: 42px;
  left: 476px;
  top: 307px;
  cursor: pointer;
}
.text19{
  position: absolute;
  width: 74px;
  left: 298px;
  top: 219px;
  cursor: pointer;
}
.text20{
  position: absolute;
  width: 16px;
  left: 570px;
  top: 306px;
  cursor: pointer;
}
.text21{
  position: absolute;
  width: 18px;
  left: 433px;
  top: 268px;
  cursor: pointer;
}
.text22{
  position: absolute;
  width: 39px;
  left: 530px;
  top: 266px;
  cursor: pointer;
}
.text23{
  position: absolute;
  width: 17px;
  left: 468px;
  top: 234px;
  cursor: pointer;
}
.text24{
  position: absolute;
  width: 39px;
  left: 580px;
  top: 182px;
  cursor: pointer;
}
.text25{
  position: absolute;
  width: 42px;
  left: 610px;
  top: 141px;
  cursor: pointer;
}
.text26{
  position: absolute;
  width: 87px;
  left: 429px;
  top: 150px;
  cursor: pointer;
}
.text27{
  position: absolute;
  width: 50px;
  left: 453px;
  top: 410px;
  cursor: pointer;
}
.text28{
  position: absolute;
  width: 15px;
  left: 543px;
  top: 320px;
  cursor: pointer;
}
.pos{
  position: absolute;
  width: 20px;
  cursor: pointer;
}
.pos26{
  top: 165px;
  left: 120px;
}
.pos27{
  top: 0px;
  left: 34px;
}
.pos28{
  top: -10px;
  left: 10px;
}
</style>