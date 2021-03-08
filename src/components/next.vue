<template>
    <div class="next">
        <button @click="nextPage()">&gt;</button>
    </div>
</template>
<style scoped>
.next{
    width: 30px;
    height: 30px;
    float: left;
}
.next button{
    color:#6d4621;
    font-weight: 700;
    border-radius: 100%;
    float: left;
    outline: none;
    border:none;
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    background-color: white;
    font-size: 20px;
    box-shadow: -2px 1px 2px #888888;
}
</style>

<script>
export default {
    data() {
        return {
            page:1,
            pages:5
        }
    },
    methods: {
        pageupdate(newpage){
            this.page=newpage;
        },
        nextPage(){
                if(this.page===1){
                    this.$router.push({path:'/feature'});
                }else if(this.page===2){
                    this.$router.push({path:'/clothes'});
                }else if(this.page===3){
                    this.$router.push({path:'/unique'});
                }
        }
    }
}
</script>
