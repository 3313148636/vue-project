<template>
    <div class="cinemadate" ref='wrapper'>
        <ul class="topbar-date">
            <li class="topbar-date-li" v-for='n in 5' :key='n'>
                今天11月10日
            </li>
        </ul>
    </div>
</template>
<script>
import bscroll from 'better-scroll';
export default {
    created(){
        this.$nextTick(() => {
          new bscroll(this.$refs.wrapper, {
              scrollX: true,
              scrollY: false
          })
        })
    }
}
</script>

<style lang="scss">
    .cinemadate{
        height: 1.173333rem;
        position: absolute;
        border-bottom: 1px solid #f3f3f3;
        overflow: hidden;
        .topbar-date{
            width: auto;
            float: left;
            background: #fff;
            white-space: nowrap;
            padding: 0 5px;
            .topbar-date-li{
                display: inline-block;
                width: 115px;
                line-height: 1.12rem;
                margin-left: 4.5px;
                font-size: 14px;
                text-align: center;
                list-style: none;
                color: #666;
            }
            .active{
                color: #f03d37;
                border-bottom: 2px solid #f03d37;
            }
        }
    }
</style>
