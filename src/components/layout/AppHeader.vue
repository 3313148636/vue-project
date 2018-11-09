
<template>
    <header class="app-header">
        <div class="header">
            <span class="nav-header-span" v-if='isShow' @click="goback"><i class='fa fa-arrow-left'></i></span>
            <h1 class="nav-header">{{header}}</h1>
        </div>      
    </header>
</template>
<script>
export default {
    data(){
        return{
            isShow: false
        }
    },
    props:['header'],
    watch: {
        header: function(val){
            if(this.$route.path == '/login'){
                this.isShow = true;
            }else{
                this.isShow = false;
            }
        }
    },
    created(){
        if(this.$route.path == '/login'){
            this.isShow = true;
        }else{
            this.isShow = false;
        }
    },
    methods: {
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss">
    .app-header{
        position: fixed;
        z-index: 10;
        width: 100%;
        top: 0;
        .header{
            height: 1.373334rem;
            width: 100%;
            color: #fff;
            background: #e54847;
            position: relative;
            border-bottom: 1px solid #e54847;
            box-sizing:border-box;
            display: flex;
            .nav-header-span{
                width: 1.36rem;
                display: flex;
                align-items: center;
                justify-content: center;
                .fa-arrow-left{
                    font-size: 30px;
                }
            }
            .nav-header{
                font-size: 18px;
                font-weight: 400;
                text-align: center;
                line-height: 1.346667rem;
            }
        }
    }
</style>

