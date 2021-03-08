<template>
    <div>
        <div class="login-box">
            <div class="status">
                <h1 class="active statusbtn">登录</h1>
                <h1>•</h1>
                <h1 class="statusbtn">注册</h1>
            </div>
            
            <input class="text" type="text" id="phone" placeholder="手机号码" v-model="number">
            <img src="../assets/number.png" alt=""  class="inputNumber inputImg">
            <input class="text" type="password" id="secret" placeholder="请输入密码" v-model="password">
            <img src="../assets/password.png" alt="" class="inputPassword inputImg">
            <a href="" class="forget">忘记密码?</a>
            
            <div class="radio-container">
                <div class="radio">
                    <input id="radio-1" name="radio" type="radio" v-model="customerType" value="2" checked >
                    <label for="radio-1" class="radio-label">学生</label>
                </div>

                <div class="radio">
                    <input id="radio-2" name="radio" type="radio" v-model="customerType" value="1">
                    <label  for="radio-2" class="radio-label">教师</label>
                </div>
            </div>
            <div class="hide wrong" ref="wrong">密码错误</div>
            <button class="loginbtn" @click="landing()">登陆</button>
        </div>
    </div>
</template>

<style scoped>
.wrong{
    position: relative;
    color: red;
    left:40px;
}
.hide{
    display: none;
}
.login-box{
    width: 580px;
    height: 580px;
    float: right;
    position: relative;
    top: 100px;
    right: 10%;
    border: 1px solid black;
    background: white;
    border-radius: 20px;
    border: none;
    box-shadow: -3px 3px 5px #888888;
    background-image: url(../assets/loginbox.png);
    background-repeat:no-repeat;
    background-size:cover;
}

.status{
    height: 40px;
    width: 207.5px;
    margin: 40px auto;
}

.status *{
    float:left;
    margin: 0 10px;
}
.statusbtn{
    cursor:pointer;
}
.active{
    color: rgb(255, 100, 0);
    border-bottom:3px solid rgb(255, 100, 0);
}
.statusbtn:hover{
    border-bottom:3px solid rgb(255, 100, 0);
}

.text{
    width: 480px;
    height: 60px;
    margin: 20px 20px;
    border: 2px solid rgba(100, 100, 100, 0.2);
    border-radius: 10px;
    background-color: rgba(100, 100, 100, 0.1);
    font-size: 25px;
    padding-left:60px;
    outline:none;
}

.forget{
    position: relative;
    float: right;
    right: 20px;
    color: rgba(100, 100, 100, 0.4);
    font-weight: 500;
    top: -15px;
}
.election{
    width: 400px;
    position: relative;
    height: 80px;
    margin: 0 auto;
}

.radio-container{
    position: relative;
    float: left;
    left: 40px;
    margin: 20px 0;
}
.radio {
    float: left;
    margin:0 80px;
}


.radio input[type="radio"] {
  position: absolute;
  opacity: 0;
}
.radio input[type="radio"] + .radio-label:before {
  content: '';
  background: #f4f4f4;
  border-radius: 100%;
  border: 1px solid #b4b4b4;
  display: inline-block;
  width: 0.9em;
  height: 0.9em;
  position: relative;
  
  margin-right: 0.8em;
  vertical-align: top;
  cursor: pointer;
  text-align: center;
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
}
.radio input[type="radio"]:checked + .radio-label:before {
  background-color: #3197EE;
  box-shadow: inset 0 0 0 4px #f4f4f4;
}
.radio input[type="radio"]:focus + .radio-label:before {
  outline: none;
  border-color: #3197EE;
}

.radio-label{
    font-size: 25px;
    font-weight: 600;
}

.loginbtn{
    position: relative;
    margin: 20px 90px;
    width: 400px;
    height: 60px;
    color: white;
    background-color: #3197EE;
    outline: none;
    font-size: 25px;
    border:none;
    border-radius: 10px;
    cursor: pointer;
}
.loginbtn:active{
    background-color: rgb(20, 139, 243);
}
.inputNumber{
    position:absolute;
    left: 30px;
    top: 150px;
}
.inputPassword{
    position:absolute;
    left: 30px;
    top: 260px;
}
</style>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            number:"",
            password:"",
            customerType:"2"
        }
    },
    methods: {
        landerror(){
            this.$refs.wrong.classList.remove("hide");
        },
        landing(){
            var _this=this;
            this.$refs.wrong.classList.add("hide");
            axios.post(_this.$root.baseurl+'/zhejiang/Land', {
                number:this.number,
                password: this.password,
                leixing:this.customerType
            })
            .then(function (response) {
                if(response.data.code==="1"){
                    _this.$root.number=_this.number;
                    _this.$root.customerType=_this.customerType;
                    if(_this.customerType==="1"){
                        axios.post(_this.$root.baseurl+'/zhejiang/saveoperation', {
                            url:'/index',
                            type:0,
                            operationId:0,
                            controller:0
                        })
                        .then(function (response) {
                            console.log(response)
                        })
                        .catch(function (error) {
                            console.log(error)
                        });
                    }
                    _this.$parent.changeNav();
                    _this.$router.push({path:'/index'});
                }else{
                    _this.landerror();
                }
            })
            .catch(function (error) {
                _this.landerror();
            });
        }
    }
}
</script>
