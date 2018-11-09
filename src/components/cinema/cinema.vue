
<template>
    <div class="cinema">
        <CinemaNav></CinemaNav>
        <CinemaMain></CinemaMain>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import CinemaNav from '@component/cinema/cinemanav'
    import CinemaMain from '@component/cinema/cinemamain'
    import AppFooter from '@component/layout/AppFooter'
    export default {
        components: {
            CinemaNav,
            CinemaMain,
            AppFooter
        },
        created(){
            this.$emit('update:headertitle', '影院');
        }
    }
</script> 

<style lang="scss">
    
</style>
