
<template>
    <header class="app-header">
        <div class="header">
            <span class="nav-header-span" v-if='this.$route.path == "/login"' @click="goback"><i class='fa fa-arrow-left'></i></span>
            <span class="nav-header-span" v-if='this.$route.path == "/detail"' @click="goback"><i class='fa fa-angle-left'></i></span>
            <h1 class="nav-header">{{header}}</h1>
        </div>      
    </header>
</template>
<script>
export default {
    data(){
        return{
            position: 're'
        }
    },
    props:['header'],
    watch: {
        
    },
    created(){
        if(this.$route.path == '/detail'){
            this.position = true;
        }else{
            this.position = false;
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
        position: absolute;
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
            .nav-header-span{
                position: absolute;
                width: 1.36rem;
                height: 1.373333rem;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                .fa-arrow-left{
                    font-size: .8rem;
                }
                .fa-angle-left{
                    font-size: 1.066667rem;
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

