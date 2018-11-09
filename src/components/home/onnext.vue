
<template>
    <main class="onnext-main" ref='wrapper'>
        <div class="onnext-main-container">
            <OnNextNav></OnNextNav>
            <OnNextMain ref='scrollBydata'></OnNextMain>
        </div>
    </main>
</template>

<script>
    import OnNextNav from './onnextnav';
    import OnNextMain from './onnextmain';
    import scroll from '@util/scroll'

    export default {
        components:{
            OnNextNav,
            OnNextMain
        },
        mounted() {
            this.scroll = scroll({
                el: this.$refs.wrapper,
                handler: this.$refs.scrollBydata.getItemdata.bind(this.$refs.scrollBydata)
            })
        }
    }
    
</script>

<style lang="scss">
    .onnext-main{
        width: 100%;
        margin-top: 1.293333rem;
        margin-bottom: 1.293333rem;
        padding-right: .453333rem;
        height: 13.92rem;
        overflow: hidden;
        .onnext-main-container{
            height: auto;
        }
    }
</style>