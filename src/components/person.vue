<template>
    <div>
        <div class="head head1">邮箱验证</div>
        <div class="line"></div>
        <div class="span1">有效邮箱地址可在您忘记密码时帮助您找回账号</div>
        <input type="text" class="input">
        <div class="btn1">更换邮箱</div>
        <div class="head head2">修改密码</div>
        <div class="line2"></div>
        <div class="span2">原始密码</div>
        <input type="text2" class="input2">
        <div class="span3">新密码</div>
        <input type="text3" class="input3">
        <div class="span4">再次输入密码</div>
        <input type="text4" class="input4">
        <div class="btn2">完成</div>
    </div>
</template>
<style scoped>
.head{
    position: relative;
    width: 215px;
    height: 37px;
    background: url(../assets/title4.png);
    text-align: center;
    line-height: 37px;
    font-size: 23px;
}
.head1{
    left: 70px;
    top:55px;
}
.head2{
    left: 70px;
    top: 110px;
}
.line{
    position: relative;
    width: 1010px;
    height: 3px;
    background-color: #420b42;
    left: 70px;
    top: 70px;
}
.line2{
    position: relative;
    width: 1010px;
    height: 3px;
    background-color: #420b42;
    left: 70px;
    top: 115px;
}
.span1{
    position: relative;
    left: 70px;
    top: 100px;
}
input{
    position: relative;
    border: 2px solid #420b42;
    background-color: transparent;
    outline-style: none;
    font-size: 23px;
}
.input{
    top: 105px;
    left: 75px;
    width: 275px;
    height: 40px;
}
.btn1{
    text-align: center;
    line-height: 27px;
    position: relative;
    width: 110px;
    height: 27px;
    background-image: url(../assets/title.png);
    background-size: 100%;
    left: 375px;
    top: 65px;
    cursor: pointer;
}
.span2{
    position: relative;
    left: 75px;
    top: 130px;
}
.span3{
    position: relative;
    left: 75px;
    top: 160px;
}
.span4{
    position: relative;
    left: 75px;
    top: 200px;
}
.btn2{
    text-align: center;
    line-height: 27px;
    position: relative;
    width: 110px;
    height: 27px;
    background-image: url(../assets/title.png);
    background-size: 100%;
    left: 375px;
    top: 175px;
    cursor: pointer;
}
.input2{
    top: 135px;
    left: 75px;
    width: 275px;
    height: 40px;
}
.input3{
    top: 165px;
    left: 75px;
    width: 275px;
    height: 40px;
}
.input4{
    top: 210px;
    left: 75px;
    width: 275px;
    height: 40px;
}
</style>