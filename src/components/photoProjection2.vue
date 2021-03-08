<template>
    <div class="container">
        <div class="back" @click="goback">
            <img src="../assets/dikeHead/2234.png" alt="">
        </div>
        <div v-if="selectedPhoto.id === 1" class="content">
            <div class="bg">
                <img src="../assets/shape/cloak.png" alt="">
            </div>
            <div class="name animated slideInUp">
                <img src="../assets/shape/cloak2.png" alt="">
            </div>
            <div class="desc animated fadeInRight">
                <img src="../assets/shape/cloak3.png" alt="">
            </div>
        </div>
        <div v-if="selectedPhoto.id === 2" class="content">
            <div class="bg">
                <img src="../assets/shape/cloak.png" alt="">
            </div>
            <div class="name animated slideInUp">
                <img src="../assets/shape/cloak2.png" alt="">
            </div>
            <div class="desc animated fadeInRight">
                <img src="../assets/shape/cloak3.png" alt="">
            </div>
        </div>
        <div v-if="selectedPhoto.id === 3" class="content">
            <div class="bg">
                <img src="../assets/shape/skirt.png" alt="">
            </div>
            <div class="name animated slideInUp">
                <img src="../assets/shape/skirt2.png" alt="">
            </div>
            <div class="desc animated fadeInRight">
                <img src="../assets/shape/skirt3.png" alt="">
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
        }
    }
    
}
</script>
<style scoped>
.container{
    position: absolute;
    width: 1050px;
    height:632px;
    left: 372px;
    top: 36px;
    background-color: #e0d4c4;
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
    width: 130px;
}
</style>