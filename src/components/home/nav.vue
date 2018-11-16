
<template>
    <nav class="app-nav">      
        <div class="vw app-nav-left">
            <router-link tag='span' to='/position'>{{position.city.cityName}}</router-link>
            <i class='fa fa-sort-down'></i>
        </div>
        <div class="vw app-nav-center">
            <router-link v-for="num in 2" :key="num" :to="router[num-1]" active-class='active' tag='span'>
                {{titile[num-1]}}
            </router-link>

        </div>
        <div class="vw app-nav-right">
            <i class="fa fa-search"></i>
        </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return {
            titile: ['正在热映', '即将上映'],
            router: ['/home/onnow', '/home/onnext'],
        }
    },
    computed: mapState(['position']),
    mounted(){
        // console.log(this)
    }
}
</script>


<style lang="scss">
    .app-nav{
        position: fixed;
        top: 1.373333rem;
        z-index: 10;
        width: 100%;
        height: 1.2rem;
        border-bottom: 1px solid #e6e6e6;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        .vw{
            width: auto;
        }
        .app-nav-left{
            flex-grow: 1;
            span{
                font-size: 15px;
                line-height: 1.173333rem;
                color: #666;
                margin-left: .4rem;
            }
            i{
                margin-left: .133333rem;
                color: #b0b0b0;
                position: relative;
                top: -0.133333rem;
            }
        }
        .app-nav-center{
            flex-grow: 2;
            display: flex;
            justify-content: space-between;
            span{
                display: inline-block;
                line-height: 1.173333rem;
                font-size: .4rem;
                color: #666;
                text-align: center;
                font-weight: 700;
            }
            .active{
                color: #ef4238;
            }
            .active:after{
                content: "";
                display: block;
                position: relative;
                left: 0;
                right: 0;
                margin: auto;
                width: 2.133333rem;
                height: 2px;
                background-color: #ef4238;
                transition: left .2s;
            }
        }
        .app-nav-right{
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            i{
                display: inline-block;
                color: #ef4238;
                font-size: .533333rem;
                margin-left: 1.066667rem;
            }
        }
    }
</style>

