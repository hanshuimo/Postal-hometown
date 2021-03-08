<template>
    <div>
      <div class="lefttab">
            <button class="addbutton"><img src="../assets/add.png" alt="">添加班级</button>
            <div class="option">
                <div :class="`options ${selectedClass === 0 ? 'active' : null}`" @click="chooseClass(1)" ref="choice1">五年级（7）班</div>
                <div :class="`options ${selectedClass === 1 ? 'active' : null}`" @click="chooseClass(2)" ref="choice2">五年级（6）班</div>
            </div>
            
        </div>
        <div class="com">
            <div class="buttons">
                <div class="button selected">
                  课前预习
                </div>
                <div class="button">
                  课堂回顾
                </div>
                <div class="button">
                  课后巩固
                </div>
            </div>
            <div class="participation">参与情况</div>
            <div class="detail">
                <div class="img">
                  <img src="../assets/questions/34.png" alt="">
                </div>
                <div class="des">参与人数：56</div>
                <div class="des">正确率：90%</div>
            </div>
            <div class="table">
              <img src="../assets/questions/table.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            questions: [
              {
                id: 0,
                title: '苗族的特色建筑',
                selected: false
              },
              {
                id: 1,
                title: '苗族的贵州的地势特点',
                selected: false
              },
              {
                id: 2,
                title: '苗族的特色建筑',
                selected: false
              }
            ],
            selectedClass: 0
        }
    },
    methods: {
      changeSelect(index) {
        this.questions[index].selected = !this.questions[index].selected;
      },
      chooseClass(number){
          if(number===1){
              this.selectedClass = 0;
          } else if(number===2){
              this.selectedClass = 1;
          }
          
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
.addbutton{
    position: absolute;
    border: none;
    outline: none;
    background:none;
    cursor: pointer;
    line-height: 20px;
    height: 20px;
    left: 212px;
    top: 4px;
    color: #420b02;
}
.addbutton img{
    position: relative;
    top: 2px;
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
.detail {
  display: flex;
  align-items: center;
  margin: 20px 80px;
}
.detail .img {
  width: 150px;
  height: 150px;;
  margin: 0 25px;
}
.detail .img img {
  width: 100%;
  height: 100%;
}
.detail .des {
  margin-right: 100px;
  font-size: 20px;
  color: #420b02;
}
.table {
  margin: 40px 80px;
  width: 900px;
}
.table img {
  width: 100%;
}
</style>