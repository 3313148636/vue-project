
<template>
    <div class="home-main">
        <app-nav></app-nav>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppNav from './nav';
    import AppFooter from '@component/layout/AppFooter'
    export default {
        data(){
            return{
                show: true
            }
        },
        components: {
            AppNav,
            AppFooter
        },
        created(){
            this.$emit('update:headertitle', '猫眼电影');
        }
    }
</script>

<style lang="scss">
    .home-main{
        width: 100%;
        height: 17.786667rem;
        padding-top: 1.373333rem;
        overflow: hidden;
    }
</style>
