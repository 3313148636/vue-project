<template>
    <section class="topbar">
        <div class="topbar-left">
            <router-link tag='span' to='/position' class="place">北京 <i class="fa fa-sort-down"></i></router-link>
        </div>
        <div class="topbar-right">
            <i class="fa fa-search"></i> <span class="search">搜影院</span>
        </div>
    </section>
</template>
<style lang="scss">
    .topbar{
        height: 1.173334rem;
        line-height: 1.173333rem;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        .topbar-left{
            width: auto;
            flex-grow: 0;
            .place{
                padding-left: 15px;
                font-size: 15px;
                color: #666;
                display: flex;
                align-items: center;
                i{
                    color: #b0b0b0;
                    position: relative;
                    top: -3px;
                    margin-left: 5px;
                    font-size: 12px;
                }
            }
        }
        .topbar-right{
            display: flex;
            width: auto;
            flex-grow: 1;
            justify-content: center;
            align-items: center;
            height: .746667rem;
            font-size: .346667rem;
            color: #b2b2b2;
            margin-left: .48rem;
            border: .5px solid #e6e6e6;
            border-radius: .133333rem;
            margin-right: .4rem;
            background: #fff;
            .search{
                width: 1.333333rem;
                line-height: .746667rem;
                margin-left: .133333rem;
            }
        }
    }
</style>
