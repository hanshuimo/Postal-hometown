<template>
    <div>
        <div class="addclass">添加班级</div>
        <div class="participation">参与情况</div>
        <div class="form">
            <div class="header">
                <div class="class">五年级（7）班</div>
                <div class="rbtn">账号分配</div>
                <div class="rbtn">导入学生信息</div>
            </div>
            <ul class="formheader">
                <li>
                    <span>姓名</span>
                    <span>性别</span>
                    <span>账号</span>
                    <span>密码</span>
                    <span>小组</span>
                </li>
            </ul>
            <ul class="formul">
                <li v-for="student in students" :key="student.id">
                    <span>{{student.name}}</span>
                    <span>{{student.gender}}</span>
                    <span>{{student.account}}</span>
                    <span>{{student.password}}</span>
                    <span>{{student.group}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            students:[
                {
                    id:1,
                    name:'林XX',
                    gender:'女',
                    account:'501001',
                    password:'12345',
                    group:'等待选择'
                },{
                    id:2,
                    name:'陆XX',
                    gender:'女',
                    account:'501002',
                    password:'12345',
                    group:'第一组'
                },{
                    id:3,
                    name:'张XX',
                    gender:'男',
                    account:'501003',
                    password:'12345',
                    group:'第一组'
                },{
                    id:4,
                    name:'刘XX',
                    gender:'女',
                    account:'501004',
                    password:'12345',
                    group:'第一组'
                },{
                    id:5,
                    name:'魏XX',
                    gender:'女',
                    account:'501005',
                    password:'12345',
                    group:'第一组'
                },{
                    id:6,
                    name:'言XX',
                    gender:'女',
                    account:'501006',
                    password:'12345',
                    group:'第一组'
                },{
                    id:7,
                    name:'洛XX',
                    gender:'女',
                    account:'501007',
                    password:'12345',
                    group:'第一组'
                },{
                    id:8,
                    name:'李XX',
                    gender:'女',
                    account:'501008',
                    password:'12345',
                    group:'第一组'
                },{
                    id:9,
                    name:'张XX',
                    gender:'男',
                    account:'501009',
                    password:'12345',
                    group:'第二组'
                },{
                    id:10,
                    name:'李XX',
                    gender:'男',
                    account:'501010',
                    password:'12345',
                    group:'第二组'
                },
            ]
        }
    }
}
</script>
<style scoped>
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
    position: absolute;
    width: 215px;
    height: 37px;
    line-height: 37px;
    background-image: url(../assets/title4.png);
    text-align: center;
    color: #420b02;
    font-weight: 600;
    font-size: 23px;
    left: 80px;
    top: 78px;
}
.form{
    position: absolute;
    width: 960px;
    height: 500px;
    top: 120px;
    left: 80px;
    border:1px solid #420b02;
}
.header{
    position: relative;
    width: 960px;
    height: 50px;
    border-bottom: 1px solid #420b42;
}
.class{
    float: left;
    margin: 5px 10px;
}
.rbtn{
    float: right;
    margin: 5px 20px;
    width: 150px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #420b42;
    border-radius: 20px;
    cursor: pointer;
}
.header div{
    position: relative;
    line-height: 40px;
    color: #420b02;
}
ul{
    list-style: none;
    padding: 0;
}
.formheader{
    position: relative;
    width: 960px;
    height: 50px;
    line-height: 50px;
}
.formul{
    position: relative;
    width: 960px;
    height: 40px;
    line-height: 40px;

}
.formul li{
    position: relative;
    width: 960px;
    height: 40px;
}
.formheader li{
    position: relative;
    width: 960px;
    height: 50px;
}
.formul li span{
    position: relative;
    float: left;
    width: 190px;
    height: 38px;
    text-align: center;
    
    border: 1px solid #420b42;
}
.formheader li span{
    position: relative;
    float: left;
    width: 190px;
    height: 50px;
    text-align: center;
    border-left:1px solid #420b42;
    border-right:1px solid #420b42;
}
</style>