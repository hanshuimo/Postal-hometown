<template>
    <div>
        <div class="lefttab">
            <div class="option">
                <div :class="`options ${selectedType === 0 ? 'active' : null}`" @click="choose(1)" ref="choice1">徽派建筑</div>
                <div :class="`options ${selectedType === 1 ? 'active' : null}`" @click="choose(2)" ref="choice2">湘西苗族</div>
                <div :class="`options ${selectedType === 2 ? 'active' : null}`" @click="choose(3)" ref="choice2">客家土楼</div>
            </div>
            
        </div>
        <div class="com">
            <div class="buttons">
              <div class="button selected" @click="changeModular(1)" ref="preview">
                课前预习
              </div>
              <div class="button" @click="changeModular(2)" ref="review">
                课堂回顾
              </div>
              <div class="button" @click="changeModular(3)" ref="consolidation">
                课后巩固
              </div>
            </div>

            <div class="preview" v-if="modular === 1">
              <div class="participation">请选择3-4题</div>
              <div class="form">
                <vuescroll :ops="ops">
                  <div v-for="(item, index) in questions1" :key="item.id" class="question">
                    <div :class="`radius ${item.selected ? 'selected' : null}`" @click="changeSelect(1,index)">{{item.selected ? '&#8730;' : null}}</div>
                    <div class="content">{{item.title}}</div>
                  </div>
                </vuescroll>
              </div>
              <div class="confirm">确认</div>
            </div>

            <div class="preview" v-if="modular === 2">
              <div class="participation">请选择5-6题</div>
              <div class="form">
                <vuescroll :ops="ops">
                  <div v-for="(item, index) in questions2" :key="item.id" class="question">
                    <div :class="`radius ${item.selected ? 'selected' : null}`" @click="changeSelect(2,index)">{{item.selected ? '&#8730;' : null}}</div>
                    <div class="content">{{item.title}}</div>
                  </div>
                </vuescroll>
              </div>
              <div class="confirm">确认</div>
            </div>

            <div class="preview" v-if="modular === 3">
              <div class="participation">请选择7-8题</div>
              <div class="form">
                <vuescroll :ops="ops">
                  <div v-for="(item, index) in questions3" :key="item.id" class="question">
                    <div :class="`radius ${item.selected ? 'selected' : null}`" @click="changeSelect(3,index)">{{item.selected ? '&#8730;' : null}}</div>
                    <div class="content">{{item.title}}</div>
                  </div>
                </vuescroll>
              </div>
              <div class="confirm">确认</div>
            </div>
        </div>
    </div>
</template>
<script>
import vuescroll from 'vuescroll';
export default {
    components: {
      vuescroll
    },
    data(){
        return{
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
                    keepShow: false
                },
                bar: {
                    showDelay: 500,
                    onlyShowBarOnScroll: true,
                    keepShow: true,
                    background: '#430902',
                    opacity: 1,
                    hoverStyle: false,
                    specifyBorderRadius: false,
                    minSize: false,
                    size: '6px',
                    disable: false,
                }
            },
            modular:1,
            questions1: [
              {
                id: 0,
                title: '黄梅戏起源于湖北黄梅，发展壮大于（）',
                selected: false
              },
              {
                id: 1,
                title: '苗族的贵州的地势特点',
                selected: false
              },
              {
                id: 2,
                title: '黄梅戏的黄梅来源于什么？',
                selected: false
              },
              {
                id: 3,
                title: '（）是明代男女皆可穿着的对襟式外套，明人认为从宋元的褙子发展而来',
                selected: false
              },
              {
                id: 4,
                title: '明制汉服男装衣身两侧开衩，接双摆在外，便于（）活动中穿着。',
                selected: false
              },
              {
                id: 5,
                title: '明代有一种特殊式样的帔子，由于其形美如彩霞，故得名“（）”。',
                selected: false
              },
              {
                id: 6,
                title: '徽派建筑在外观上主要运用了黑色和什么颜色',
                selected: false
              },
              {
                id: 7,
                title: '徽州壁画就是当地百姓俗称的墙头壁画，徽州壁画属于',
                selected: false
              },
              {
                id: 8,
                title: '苗族的特色建筑',
                selected: false
              }
            ],
            questions2: [
              {
                id: 0,
                title: '黄梅戏起源于湖北黄梅，发展壮大于（）',
                selected: false
              },
              {
                id: 1,
                title: '苗族的贵州的地势特点',
                selected: false
              },
              {
                id: 2,
                title: '黄梅戏的黄梅来源于什么？',
                selected: false
              },
              {
                id: 3,
                title: '（）是明代男女皆可穿着的对襟式外套，明人认为从宋元的褙子发展而来',
                selected: false
              },
              {
                id: 4,
                title: '明制汉服男装衣身两侧开衩，接双摆在外，便于（）活动中穿着。',
                selected: false
              },
              {
                id: 5,
                title: '明代有一种特殊式样的帔子，由于其形美如彩霞，故得名“（）”。',
                selected: false
              },
              {
                id: 6,
                title: '徽派建筑在外观上主要运用了黑色和什么颜色',
                selected: false
              },
              {
                id: 7,
                title: '徽州壁画就是当地百姓俗称的墙头壁画，徽州壁画属于',
                selected: false
              },
              {
                id: 8,
                title: '苗族的特色建筑',
                selected: false
              }
            ],
            questions3: [
              {
                id: 0,
                title: '黄梅戏起源于湖北黄梅，发展壮大于（）',
                selected: false
              },
              {
                id: 1,
                title: '苗族的贵州的地势特点',
                selected: false
              },
              {
                id: 2,
                title: '黄梅戏的黄梅来源于什么？',
                selected: false
              },
              {
                id: 3,
                title: '（）是明代男女皆可穿着的对襟式外套，明人认为从宋元的褙子发展而来',
                selected: false
              },
              {
                id: 4,
                title: '明制汉服男装衣身两侧开衩，接双摆在外，便于（）活动中穿着。',
                selected: false
              },
              {
                id: 5,
                title: '明代有一种特殊式样的帔子，由于其形美如彩霞，故得名“（）”。',
                selected: false
              },
              {
                id: 6,
                title: '徽派建筑在外观上主要运用了黑色和什么颜色',
                selected: false
              },
              {
                id: 7,
                title: '徽州壁画就是当地百姓俗称的墙头壁画，徽州壁画属于',
                selected: false
              },
              {
                id: 8,
                title: '苗族的特色建筑',
                selected: false
              }
            ],
            selectedType: 0
        }
    },
    methods: {
      changeSelect(number,index) {
        if(number===1) this.questions1[index].selected = !this.questions1[index].selected;
        else if(number===2) this.questions2[index].selected = !this.questions2[index].selected;
        else if(number===3) this.questions3[index].selected = !this.questions3[index].selected;
      },
      choose(number){
          if(number===1){
              this.selectedType = 0;
          } else if(number===2){
              this.selectedType = 1;
          }else if(number===3){
              this.selectedType = 2;
          }
      },
      changeModular(number){
        if(this.modular===1){
          this.$refs.preview.classList.remove("selected")
        }else if(this.modular===2){
          this.$refs.review.classList.remove("selected")
        }else if(this.modular===3){
          this.$refs.consolidation.classList.remove("selected")
        }
        if(number===1){
          this.$refs.preview.classList.add("selected")
        }else if(number===2){
          this.$refs.review.classList.add("selected")
        }else if(number===3){
          this.$refs.consolidation.classList.add("selected")
        }
        this.modular=number;
      }
    }
}
</script>
<style scoped>
.lefttab{
    position: relative;
    top: 17px;
    left: 25px;
    width: 300px;
    height: 674px;
    border-right:3px solid #420b02;
    background-color:#f5ece4;
}
.com{
    position: absolute;
    width: 1121px;
    height: 674px;
    left: 327px;
    top:17px;
    background-color:#f5ece4;
}
.option{
    position: relative;
    top: 30px;
    left: 25px;
    width: 250px;
    height: 615px;
}
.options{
    position: relative;
    margin:15px 16.5px;
    width: 217px;
    text-align: center;
    height: 60px;
    line-height: 54px;
    font-weight: 600;
    font-size: 28px;
    cursor: pointer;
    box-sizing: border-box;
    border: 3px solid #420b02;
    color: #420b02;
}
.active{
    box-sizing: content-box;
    border: none;
    background: url(../assets/PersonalActive.png);
    color: white;
}
.addclass{
    position: absolute;
    width: 151px;
    height: 43px;
    line-height: 43px;
    background-image: url(../assets/title3.png);
    text-align: center;
    color: #420b02;
    font-weight: 600;
    font-size: 23px;
    left: 80px;
    top: 20px;
}
.participation{
    width: 180px;
    height: 30px;
    line-height: 30px;
    margin: 15px 80px;
    background-image: url(../assets/title4.png);
    background-size: 100% 100%;
    text-align: center;
    color: #420b02;
    font-weight: 600;
    font-size: 20px;
}
.form{
    width: 960px;
    height: 440px;
    margin-left: 80px;
    padding: 10px;
    border: 2px solid #420b02;
    border-radius: 4px;
}
.buttons {
  overflow: hidden;
  padding-left: 80px;
  margin: 25px 0;
}
.buttons .button {
  float: left;
  width: 120px;
  height: 36px;
  line-height: 36px;
  margin-right: 40px;
  text-align: center;
  background: url(../assets/questions/11.png);
  background-size: 100% 100%;
  color: #430902;
  font-size: 16px;
  cursor: pointer;
}
.buttons .button.selected {
  background: url(../assets/questions/44556.png);
  background-size: 100% 100%;
  color: #ffffff;
}
.question {
  overflow: hidden;
  display: flex;
  align-items: center;
}
.question .radius {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin: 10px;
  border: 1px solid #420b02;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
}
.question .radius.selected {
  background-color: #420b02;
  color: #f0e7df;
}
.question .content {
  flex: 1;
  height: 40px;
  line-height: 40px;
  margin: 10px;
  padding: 0 20px;
  border: 2px solid #420b02;
  border-radius: 4px;
  background-color: #f0e7df;
  color: #420b02;
}
.confirm {
  width: 100px;
  height: 36px;
  line-height: 36px;
  margin: 15px auto;
  border: 2px solid #420b02;
  border-radius: 8px;
  text-align: center;
  color: #420b02;
  font-weight: 600;
  cursor: pointer;
}
.preview{
  position: absolute;
  width: 1121px;
  height: 600px;
  top: 64px;
}
</style>