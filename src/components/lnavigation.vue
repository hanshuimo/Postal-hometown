<template>
    <div class="navigation">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <img class="code" src="../assets/code.png" @mouseover="showcode()" @mouseout="hidecode()" alt="">
        <div id="Sprogram">
            扫描进入小程序
        </div>
    </div>
</template>


<style scoped>
.navigation *{
    float: left;
}

#Sprogram{
    float: right;
    position: relative;
    line-height: 40px;
    padding: 0 10px;
    border-radius: 10px;
    right: 50px;
    top: 20px;
    color: white;
    background-color: rgb(75, 36, 10);
}

.code{
    float: right;
    position: relative;
    width: 40px;
    height: 40px;
    right: 40px;
    top: 20px;
    cursor: pointer;
}
</style>


<script>
export default {
    data:function(){
        return {

        }
    },
    methods:{
        addActive($event){
            $event.currentTarget.firstElementChild.className="active";
        },
        removeActive($event){
            $event.currentTarget.firstElementChild.className="";
        },
        showcode(){
            this.$parent.Scode();
        },
        hidecode(){
            this.$parent.Hcode();
        }

    }
}
</script>