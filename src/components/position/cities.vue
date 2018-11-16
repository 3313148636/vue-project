<template>
    <div class="app-city-content">
        <mt-index-list>
            <mt-index-section index="定位">
                <div class="potition-city">
                    <p class="fail" @click="changeCity(position.city)">{{position.city.cityName}}</p>
                </div>
            </mt-index-section>
            <mt-index-section index="最近">
                <div class="potition-city">
                    <p class="fail" v-for='(item, index) in now_city' :key='index' @click="changeCity(item)">{{item.cityName}}</p>
                </div>
            </mt-index-section>
            <mt-index-section index="热门">
                <div class="potition-city" style="height: 5.333333rem;">
                    <p class="fail" @click="changeCity(item)" v-for='item in hot_city' :key="item.cityId">{{item.cityName}}</p>
                </div>
            </mt-index-section>
            <mt-index-section v-for="(value, key) in data" :key='key' :index="key">
                <mt-cell @click.native="changeCity({cityId: item.id, cityName: item.nm})" v-for="item in value" :key='item.id' :title="item.nm"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>

import { IndexList, IndexSection, Cell  } from 'mint-ui';
import { city } from '@util/city';
import { CHANGE_CITY } from '@/store/position/mutation-type'
import { mapState } from 'vuex';

export default {
    components: {
        [IndexList.name]: IndexList,
        [IndexSection.name]: IndexSection,
        [Cell.name]: Cell
    },
    data() {
        return {
            data: {},
            now_city: [],
            hot_city: [
                {cityId: 1, cityName: '北京'},{cityId: 10, cityName: '上海'},{cityId: 20, cityName: '广州'},
                {cityId: 30, cityName: '深圳'},{cityId: 57, cityName: '武汉'},{cityId: 40, cityName: '天津'},
                {cityId: 42, cityName: '西安'},{cityId: 55, cityName: '南京'},{cityId: 50, cityName: '杭州'},
                {cityId: 59, cityName: '成都'},{cityId: 45, cityName: '重庆'},
            ]
        }
    },
    computed: mapState(['position']),
    watch: {
        'position.cities':{
            handler(curVal, oldVal){
                var obj = city(curVal.data);
                this.data = obj;
            },
            deep: true
        },
        'position.nowcity': {
            handler(curVal, oldVal){
                this.now_city = Array.prototype.slice.call(curVal);
            },
            deep: true
        }
    },
    created(){
        if(localStorage.cities){
            var result = JSON.parse(localStorage.getItem('cities'));
            var obj = city(result.data);
            this.data = obj;
        }
        if(localStorage.nowcity){
            var result = JSON.parse(localStorage.getItem('nowcity'));
            this.now_city = result;
        }
    },
    methods: {
        changeCity (city) {
            // 更改城市信息
            this.$store.commit({type: 'position/' + CHANGE_CITY, city})
            // 回到首页
            this.$router.push({name: 'home'})
        }
    },
    mounted() {
        this.$nextTick(()=>{
            var arr = document.getElementsByClassName('mint-indexsection-index');
            arr[0].innerText='定位城市';
            arr[0].innerText='最近访问城市';
            arr[0].innerText='热门城市';
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