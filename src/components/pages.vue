<template>
    <div class="page">
        <button @click="previousPage()">&lt;</button>
            <div class="pageNumber">{{page}}/{{pages}}</div>
        <button @click="nextPage()">&gt;</button>
    </div>
</template>
<style scoped>
.page{
    width: 120px;
    height: 30px;
    float: right;
    position: relative;
    right:10px;
    top: 10px;
}
.page *{
    color:#6d4621;
    font-weight: 700;
}
.page button{
    border-radius: 100%;
    outline: none;
    border:none;
    cursor: pointer;
    width: 28px;
    height: 28px;
    margin: 0 5px;
    background-color: white;
    font-size: 20px;
    box-shadow: -2px 1px 2px #888888;
}
.pageNumber{
    position: relative;
    border: 2px solid #6d4621;
    top: 2px;
    padding: 0 5px;
}
.page *{
    float: left;
}
</style>

<script>
export default {
    data() {
        return {
            type:1,
            page:1,
            pages:5
        }
    },
    methods: {
        typeupdate(newtype){
            console.log(newtype)
            this.type=newtype;
        },
        pageupdate(newpage){
            this.page=newpage;
        },
        nextPage(){
            clearInterval(this.$parent.timer);
            if(this.page<this.pages){
                if(this.page===1){
                    if(this.type===1){
                        this.$router.push({path:'/feature'});
                    }else if(this.type===2){
                        this.$router.push({path:'/feature2'});
                    }else if(this.type===3){
                        this.$router.push({path:'/feature3'});
                    }
                }else if(this.page===2){
                    if(this.type===1){
                        this.$router.push({path:'/clothes'});
                    }else if(this.type===2){
                        this.$router.push({path:'/clothes2'});
                    }else if(this.type===3){
                        this.$router.push({path:'/clothes3'});
                    }
                }else if(this.page===3){
                    if(this.type===1){
                        this.$router.push({path:'/unique'});
                    }else if(this.type===2){
                        this.$router.push({path:'/unique2'});
                    }else if(this.type===3){
                        this.$router.push({path:'/unique3'});
                    }
                }else if(this.page===4){
                    if(this.type===1){
                        this.$router.push({path:'/game'});
                    }else if(this.type===2){
                        this.$router.push({path:'/game2'});
                    }else if(this.type===3){
                        this.$router.push({path:'/game3'});
                    }
                }
            }
        },
        previousPage(){
            clearInterval(this.$parent.timer);
            if(this.page>1){
                if(this.page===2){
                    if(this.type===1){
                        if(this.$root.customerType==="1"){
                            this.$router.push({path:'/preview'});
                        }else{
                            this.$router.push({path:'/spreview'});
                        }
                    }else if(this.type===2){
                        if(this.$root.customerType==="1"){
                            this.$router.push({path:'/preview2'});
                        }else{
                            this.$router.push({path:'/spreview2'});
                        }
                    }else if(this.type===3){
                        if(this.$root.customerType==="1"){
                            this.$router.push({path:'/preview3'});
                        }else{
                            this.$router.push({path:'/spreview3'});
                        }
                    }
                }else if(this.page===3){
                    if(this.type===1){
                        this.$router.push({path:'/feature'});
                    }else if(this.type===2){
                        this.$router.push({path:'/feature2'});
                    }else if(this.type===3){
                        this.$router.push({path:'/feature3'});
                    }
                }else if(this.page===4){
                    if(this.type===1){
                        this.$router.push({path:'/clothes'});
                    }else if(this.type===2){
                        this.$router.push({path:'/clothes2'});
                    }else if(this.type===3){
                        this.$router.push({path:'/clothes3'});
                    }
                }else if(this.page===5){
                    if(this.type===1){
                        this.$router.push({path:'/unique'});
                    }else if(this.type===2){
                        this.$router.push({path:'/unique2'});
                    }else if(this.type===3){
                        this.$router.push({path:'/unique3'});
                    }
                }
            }
        }
    }
}
</script>
