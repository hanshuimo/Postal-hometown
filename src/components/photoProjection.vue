<template>
    <div class="container">
        <div class="back" @click="goback">
            <img src="../assets/silver/3568.png" alt="">
        </div>
        <img src="../assets/clothes/overall.png" alt="" class="all" @click="all()">
        <img src="../assets/clothes/local.png" alt="" class="one" @click="one()">
        <div v-if="selectedPhoto.id === 0" class="content">
            <div class="bg">
                <img src="../assets/clothes/head1.png" alt="">
            </div>
        </div>
        <div v-if="selectedPhoto.id === 1" class="content">
            <div class="bg">
                <img src="../assets/dikeHead/233.png" alt="">
            </div>
            <div class="name animated slideInUp">
                <img src="../assets/dikeHead/hairpin2.png" alt="">
                <img class="short" src="../assets/dikeHead/367.png" alt="">
            </div>
            <div class="desc animated fadeInRight">
                <img src="../assets/dikeHead/hairpin.png" alt="">
            </div>
        </div>
        <div v-if="selectedPhoto.id === 2" class="content">
            <div class="bg">
                <img src="../assets/dikeHead/688.png" alt="">
            </div>
            <div class="name animated slideInUp">
                <img src="../assets/dikeHead/tin2.png" alt="">
                <img class="short" src="../assets/dikeHead/367.png" alt="">
            </div>
            <div class="desc animated fadeInRight">
                <img src="../assets/dikeHead/tin.png" alt="">
            </div>
        </div>
        <div v-if="selectedPhoto.id === 3" class="content">
            <div class="bg">
                <img src="../assets/dikeHead/344556.png" alt="">
            </div>
            <div class="name animated slideInUp">
                <img src="../assets/dikeHead/3456.png" alt="">
                <img class="short" src="../assets/dikeHead/367.png" alt="">
            </div>
            <div class="desc animated fadeInRight">
                <img src="../assets/dikeHead/7879.png" alt="">
            </div>
        </div>
        <div v-if="selectedPhoto.id === 4" class="content">
            <div class="bg">
                <img src="../assets/dikeHead/222.png" alt="">
            </div>
            <div class="name animated slideInUp">
                <img src="../assets/dikeHead/3456.png" alt="">
                <img class="short" src="../assets/dikeHead/367.png" alt="">
            </div>
            <div class="desc animated fadeInRight">
                <img src="../assets/dikeHead/7879.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['selectedPhoto'],
    data() {
        return {
            
        }
    },
    methods: {
        goback() {
            this.$router.push('/clothes');
        },
        all(){
            this.selectedPhoto.id=0;
        },
        one(){
            this.$parent.changePhoto(1);
        }
    }
    
}
</script>
<style scoped>
.container{
    position: absolute;
    width: 1050px;
    height:632px;
    background: black;
    left: 372px;
    top: 36px;
}
.back {
    z-index: 1;
    position: absolute;
    right: 35px;
    top: 25px;
    width: 100px;
    cursor: pointer;
}
.content {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
}
.content .bg {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 80%;
    transform: translate(-50%, -50%);
}
.bg img, .name img, .back img, .desc img {
    width: 100%;
    height: 100%;
}
.name {
    z-index: 1;
    position: absolute;
    left: 50%;
    bottom: 50px;
    width: 460px;
    margin-left: -230px;
}
.name .short {
    display: block;
    width: 75%;
    margin: 10px auto;
}
.desc {
    z-index: 1;
    position: absolute;
    right: 42px;
    top: 120px;
    width: 86px;
}
.all,.one{
    z-index: 1;
    position: relative;
    top: 10px;
    margin: 0 10px;
    cursor: pointer;
}
</style>