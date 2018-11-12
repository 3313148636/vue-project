<template>
    <div class="cinema-nav" :style="style">
        <CinemaSearch v-if="!(this.$route.name == 'detail')"></CinemaSearch>
        <section class="type">
            <div class="item items">
                全城 <i class="fa fa-sort-down"></i>
            </div> 
            <div class="item items">
                品牌 <i class="fa fa-sort-down"></i>
            </div>
            <div class="item">
                特色 <i class="fa fa-sort-down"></i>
            </div>
        </section>
    </div>
</template>

<script>
    import CinemaSearch from '@component/cinema/cinemasearch'
    export default {
        components: {
            CinemaSearch
        },
        data() {
            return {
                style: {marginTop: '1.373333rem'}
            }
        },
        created() {
            if(this.$route.name == 'detail'){
                this.style = {marginTop: '1.2rem'}
            }
        },
        mounted(){
        }
    }
</script> 

<style lang="scss">
    .cinema-nav{
        position: relative;
        z-index: 100;
        .type{
            position: relative;
            top: -0.026667rem;
            display: flex;
            height: 1.066667rem;
            border-bottom: 1px solid #f3f3f3;
            background: #fff;
            .item{
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                color: #777;
                font-size: .346667rem;
                i{
                    margin-left: .133333rem;
                }
            }
            .items::after{
                content: '';
                display:block;
                height: .533333rem;
                position: absolute;
                top: 0;bottom: 0;
                right: 0;
                margin: auto;
                border-left: 1px solid #e8e8e8;
            }
        }
    }
</style>
