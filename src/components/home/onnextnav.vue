
<template>
    <div class="onnextnavheader">
        <p class="title">近期最受期待</p>
        <div class="header-container" ref='wrapper'>
            <ul class="most-expected-ul" :style="{width: ul_width*header_data.length + 'px'}">
                <li class="most-expected-li" v-for='item in header_data' :key='item.id'>
                    <img :src="item.img | imgHandle" alt="">
                    <h5 class="name">{{item.nm}}</h5>
                    <p class="date">{{item.comingTitle | comingTitle}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Scroll from 'better-scroll'

    export default {
        data(){
            return{
                header_data: [],
                offset: 0,
                translate: 0,
                flag: true,
                ul_width: 95,
                isRefresh: false
            }
        },
        
        created(){
            this.getScrolldata();
        },
        methods: {
            async getScrolldata(){
                this.flag = false;
                let result = await this.$http({
                    url: '/my/ajax/mostExpected?ci=1&limit=10&offset='+ this.offset +'&token=',
                    params: { token:''}
                })
                this.offset += 10; 
                this.header_data = this.header_data.concat(result.coming);
                this.flag = true;
                this.isRefresh = false;
            }
        },
        watch:{
            translate: function(val){
                if(val < -614 * (this.offset/10)){
                    this.isRefresh = true;
                    if(this.flag){
                        this.getScrolldata();
                    }
                }
            }
        },
        filters: {
            imgHandle: (val) => {
                if ( !val ) return val;
                return  val.replace(/w.h/g,"170.230");
            },
            comingTitle: (val) => {
                return val.split(' ')[0];
            }
        },
        mounted(){
            this.$nextTick(() => {
                 this.bscroll = new Scroll(this.$refs.wrapper, {
                    scrollX: true,
                    probeType: 2,
                    click: true
                })
                this.bscroll.on('scroll',(pos)=>{
                    this.translate = pos.x;
                    if(this.isRefresh){
                        this.bscroll.refresh();
                    }
                })
            })
        }
    }
</script>

<style lang="scss">
    .onnextnavheader{
        overflow: hidden;
        width: 100%;
        height: 5.76rem;
        padding: .32rem 0 .32rem .4rem;
        border-bottom: .266667rem solid #f5f5f5;
        .title{
            height: .506667rem;
            margin: 0 0 12px;
            font-size: 14px;
            color: #333;
        }
        .header-container{
            overflow: hidden;
            width: 98%;
            .most-expected-ul{
                height: 4.293333rem;
                .most-expected-li{
                    float: left;
                    width: 2.266667rem;
                    height: 4.186667rem;
                    margin-right: 10px;
                    img{
                        width: 2.266667rem;
                        height: 3.066667rem;
                    }
                    .name{
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        margin: 0 0 3px;
                        font-size: 13px;
                        color: #222;
                    }
                    .date{
                        font-size: 12px;
                        color: #999;
                    }
                }
            }
        }
    }
</style>