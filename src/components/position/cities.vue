<template>
    <div class="app-city-content">
        <mt-index-list>
            <mt-index-section index="定位">
                <div class="potition-city">
                    <p class="fail">北京</p>
                </div>
            </mt-index-section>
            <mt-index-section index="最近">
                <div class="potition-city">
                    <p class="fail">北京</p>
                    <p class="fail">北京</p>
                    <p class="fail">北京</p>
                </div>
            </mt-index-section>
            <mt-index-section index="热门">
                <div class="potition-city" style="height: 5.333333rem;">
                    <p class="fail" v-for='n in 11' :key="n">北京</p>
                </div>
            </mt-index-section>
            <mt-index-section v-for="(value, key) in data" :key='key' :index="key">
                <mt-cell v-for="item in value" :key='item.id' :title="item.nm"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>

import { IndexList, IndexSection, Cell  } from 'mint-ui';
import { city } from '@util/city';

export default {
    components: {
        [IndexList.name]: IndexList,
        [IndexSection.name]: IndexSection,
        [Cell.name]: Cell
    },
    data() {
        return {
            data: {},
        }
    },
    created(){
        let data = localStorage.getItem('cities');
        var obj = city(JSON.parse(data).data);
        this.data = obj;
    },
    mounted() {
        this.$nextTick(()=>{
            var arr = document.getElementsByClassName('mint-indexsection-index');
            arr[0].innerText='定位城市';
            arr[0].innerText='最近访问城市';
            arr[0].innerText='热门城市';
            console.log(arr)
        })
    }
}
</script>
<style lang="scss">
    .app-city-content {
        .mint-indexlist{
            .mint-indexlist-content{
                .mint-indexsection{
                    .mint-indexsection-index{
                        background-color: #ebebeb;
                        padding: 0 .666667rem;
                        font-size: 14px;
                        line-height: .8rem;
                        color: #333;
                    }
                    ul{
                        padding-right: 1.333333rem;
                        background-color: #f5f5f5;
                        .mint-cell{
                            background-color: #f5f5f5;
                            .mint-cell-wrapper{
                                height: 44px;
                                line-height: 44px;
                                padding: 0 .666667rem 0 0;
                                margin-left: .4rem;
                                border-bottom: 1px solid #c8c7cc;
                                font-size: 14px;
                                color: #333;
                            }
                        }
                        .potition-city{
                            height: 1.493333rem;
                            background-color: #f5f5f5;
                            overflow: hidden;
                            width: 9.466667rem;
                            .fail{
                                width: 2.266667rem;
                                border: 1px solid #e6e6e6;
                                border-radius: 3px;
                                line-height: 33px;
                                text-align: center;
                                box-sizing: border-box;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                height: 33px;
                                margin-top: 15px;
                                margin-left: 4%;
                                background: #fff;
                                font-size: 14px;
                                color: #333;
                                float: left;
                            }
                            .now{
                                width: 2.666667rem;
                                border: 1px solid #e6e6e6;
                                border-radius: 3px;
                                line-height: 33px;
                                text-align: center;
                                box-sizing: border-box;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                height: 33px;
                                margin-top: 15px;
                                margin-left: 4%;
                                background: #fff;
                            }
                        }
                    }
                }
            }
            .mint-indexlist-nav{
                width: auto;
                background-color: #ebebeb;
                .mint-indexlist-navitem{
                    padding: .053333rem .08rem;
                }
            }
        }
        .mint-cell-text{
            display: inline-block;
            width: 5.333333rem;
        }
    }
</style>