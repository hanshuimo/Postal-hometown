<template>
    <div>
        <div class="buttons">
          <div :class="`button ${dataName === 'questionsList' ? 'selected' : null}`" @click="change('questionsList')">
            题目设置
          </div>
          <div :class="`button ${dataName === 'description' ? 'selected' : null}`" @click="change('description')">
            答题详情
          </div>
        </div>
        <div class="primaryCoverage">
            <component :is="dataName"></component>
        </div>
    </div>
</template>

<script>
import questionsList from '../components/questionsList'
import description from '../components/description'
export default {
    components: {
        questionsList,
        description
    },
    data() {
        return {
            dataName:"questionsList"
        }
    },
    methods: {
        change(page) {
          this.dataName = page;
        }
    },
}
</script>

<style scoped>
.primaryCoverage{
    width: 1470px;
    height: 710px;
    position: relative;
    top: 10px;
    margin: 0 auto;
    background-image: url(../assets/mainbox.png);
    background-repeat:no-repeat;
    background-size:cover;
}
.buttons {
  overflow: hidden;
  width: 1470px;
  margin: 25px auto 0 auto;
}
.buttons .button {
  float: left;
  width: 180px;
  height: 50px;
  line-height: 50px;
  margin: 0 25px;
  text-align: center;
  background: url(../assets/questions/11.png);
  background-size: 100% 100%;
  color: #430902;
  font-size: 20px;
  cursor: pointer;
}
.buttons .button.selected {
  background: url(../assets/questions/44556.png);
  background-size: 100% 100%;
  color: #ffffff;
}
</style>
