<template>
    <div class="cinema-main-container" ref='wrapper'>
        <ul class="cinema-main">
            <li class="cinema-main-li" v-for="item in result_data" :key='item.id'>
                <p class="title-con">
                    <span class="title">{{item.nm}}</span>
                    <span class="price-block">
                        <span class="price">{{item.sellPrice}}</span><span class="q">元起</span>
                    </span>
                </p>
                <div class="line-distance">
                    <p class="line-ellipsis">{{item.addr}}</p>
                    <p class="distance">{{item.distance}}</p>
                </div>
                <p class="type">
                    <span v-if='item.tag.allowRefund' class="allowRefund type-item">退</span>
                    <span v-if='item.tag.endorse' class="allowRefund type-item">改签</span>
                    <span v-if='item.tag.snack' class="snack type-item">小吃</span>
                    <span v-if='item.tag.vipTag' class="snack type-item">折扣卡</span>
                    <span v-if='item.tag.hallTypeVOList[0]' class="allowRefund type-item">{{item.tag.hallTypeVOList[0]['name']}}</span>
                </p> 
                <div class="incentive-container" v-if='item.promotion.cardPromotionTag'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
                    <p class="incentive">{{item.promotion.cardPromotionTag}}</p>
                </div> 
                <p class="showTimes" v-if='$route.name == "detail"'>近期场次：{{item.showTimes}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import scroll from '@util/scroll'

    export default {
        data(){
            return{
                result_data : [],
                offset: 0
            }
        },
        props:['movieid'],
        created(){
            if(this.$route.name == 'cinema'){
                this.getdata();    
            }else if(this.$route.name == 'detail'){
                this.getdataildata();
            }
        },
        methods: {
            async getdata(){
                let result = await this.$http({
                    url: '/my/ajax/cinemaList',
                    params: { 
                        day: '2018-11-08', offset: this.offset,
                        limit: 20, districtId: -1,
                        lineId: -1, hallType: -1, 
                        brandId: -1, serviceId: -1,
                        areaId: -1, stationId: -1,
                        item: '', updateShowDay: true,
                        reqId: '1541682240450', cityId: 1
                    }
                })
                this.result_data = this.result_data.concat(result.cinemas);
                this.offset += 20; 
            },
            async getdataildata(){
                let result = await this.$http({
                    url: '/my/ajax/movie',
                    method: 'post',
                    params: { 
                        forceUpdate: Date.now()
                    },
                    data: {
                        movieId: this.movieid,
                        day: '2018-11-11', offset: this.offset,
                        limit: 20, districtId: -1,
                        lineId: -1, hallType: -1, 
                        brandId: -1, serviceId: -1,
                        areaId: -1, stationId: -1,
                        item: '', updateShowDay: true,
                        reqId: Date.now(), cityId: 197
                    }
                })
                this.result_data = this.result_data.concat(result.cinemas);
                this.offset += 20; 
                return result.cinemas;
            },
        },
        mounted() {
            if(this.$route.name == 'cinema'){
                this.scroll = scroll({
                    el: this.$refs.wrapper,
                    handler: this.getdata.bind(this),
                })
            }
        },
        filters: {
            imgHandle: (val) => {
                if ( !val ) return val;
                return  val.replace(/w.h/g,"128.180");
            }
        }
    }
</script> 

<style lang="scss">
    .cinema-main-container{
        height: 14.133333rem;
        .cinema-main{
            padding:0 .4rem;
            .cinema-main-li{
                padding: .346667rem 0;
                position: relative;
                border-bottom: 1px solid #eee;
                .title-con{
                    height:.613333rem;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    .title{
                        line-height: .613333rem;
                        font-size: .426667rem;
                        color: #000;
                    }
                    .price-block{
                        padding-top: .24rem;
                        padding-left: .186667rem;
                        .price{
                            color: #f03d37;
                            font-size: .48rem;
                        }
                        .q{
                            font-size: 11px;
                            color: #f03d37;
                            margin-left: .08rem;
                        }
                    }
                }
                .line-distance{
                    height: .453334rem;
                    margin-top: .16rem;
                    .line-ellipsis{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        width: 7.6rem;
                        font-size: 13px;
                        color: #666;
                        float: left;
                    }
                    .distance{
                        position: absolute;
                        right: .4rem;
                        font-size: 13px;
                        color: #666;
                        margin-left: .133333rem;
                        width: auto;
                    }
                }
                .type{
                    height: .453333rem;
                    line-height: .453333rem;
                    margin-top: .106667rem;
                    margin-bottom: .106667rem;
                    overflow: hidden;
                    font-size: 0;
                    .allowRefund{
                        color: #589daf;
                        border: 1px solid #589daf;
                    }
                    .snack{
                        color: #f90;
                        border: 1px solid #f90;
                    }
                    .type-item{
                        margin-right: .133333rem;
                        display: inline-block;
                        padding: 0 3px;
                        height: .4rem;
                        line-height: .32rem;
                        border-radius: 2px;
                        font-size: .32rem;
                        width: auto;
                    }
                }
                .incentive-container{
                    height: .453333rem;
                    img{
                        width: .4rem;
                        height: .373333rem;
                        float: left;
                        position: relative;
                        top: .053333rem;
                    }
                    .incentive{
                        margin-left: .133333rem;
                        float: left;
                        color: #999;
                        font-size: .293333rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        width: auto;
                    }
                }
                .showTimes{
                    color: #999;
                    font-size: .293333rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: auto;
                    margin-top: .106667rem;
                }
            }
        }
    }
    
</style>
