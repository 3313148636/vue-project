<template>
    <div class="cinema-nav-container">
        <div class="cinema-nav" :style="style">
            <CinemaSearch v-if="!(this.$route.name == 'detail')"></CinemaSearch>
            <section class="type">
                <div class="item items" @click="showCity">
                    {{type[0]}} <i class="fa fa-sort-down"></i>
                </div> 
                <div class="item items">
                   {{type[1]}} <i class="fa fa-sort-down"></i>
                </div>
                <div class="item">
                    {{type[2]}} <i class="fa fa-sort-down"></i>
                </div>
            </section>
        </div>
        <div class="black" v-if='navShow'></div>
        <div class="info-contaner" v-if='navShow'>
            <div class="title">
                <span class="active" @click="isShow">商区</span>
                <span @click="isShow">地铁站</span>
            </div>
            <div class="content">
                <mt-picker :slots="slots" :visibleItemCount='5' valueKey='name' val @change="onValuesChange"></mt-picker>
            </div>
        </div>

    </div>
</template>

<script>
    import { Picker } from 'mint-ui';
    import CinemaSearch from '@component/cinema/cinemasearch'
    import { SAVE_INFOR, ALL_INFOR } from '@/store/position/mutation-type'
    import { mapState } from 'vuex';

    export default {
        components: {
            CinemaSearch,
            [Picker.name]: Picker
        },
        data() {
            return {
                style: {marginTop: '1.373333rem'},
                slots: [
                        {
                        values: [{id: -1}],
                        className: 'slot1',
                        textAlign: 'right',
                        }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                        }, {
                        values: [],
                        className: 'slot3',
                        textAlign: 'left'
                        }
                    ],
                info: {},
                show: '商区',
                navShow: false,
                type: ['全城', '品牌', '特色']
            }
        },
        computed: mapState(['position']),
        watch: {
            show: function(val) {
                this.slots[2].values = [];
                if(val === '商区'){
                    this.getBusinessData();
                }else{
                    this.getSubwayData();
                }
            }
        },
        async created() {
            if(this.$route.name == 'detail'){
                this.style = {marginTop: '1.2rem'}
            }
            let result = await this.$http({
                url: '/my/ajax/filterCinemas',
                params: { 
                    ci:1
                }
            })
            this.info = result;
            this.$store.commit({type: 'position/' + ALL_INFOR, allinfo: result})
            this.getBusinessData();
        },
        methods: {
            showCity(){
                document.body.style.overflow="hidden";
                document.body.style.height="100%";
                this.navShow = !this.navShow;
            },
            onValuesChange(picker, values) {
                if(values[0].id === -1) return false;
                picker.setSlotValues(1, values[0].subItems || [{name: '全部', id: -1}]);
            },
            isShow(e){
                e.target.className = 'active';
                e.target.nextElementSibling ? e.target.nextElementSibling.className = '' : '';
                e.target.previousSibling ? e.target.previousSibling.className = '' : '';
                this.show = e.target.innerText;
            },
            getBusinessData() {
                this.slots[0].values = this.info.district.subItems;
            },
            getSubwayData() {
                this.slots[0].values = this.info.subway.subItems;
            },
            getInfor(val1, val2, arr){
                var x1 = -1;
                var x2 = -1;
                for(var i=0; i< arr.length; i++){
                    if(arr[i].name === val1){
                        x1 = arr[i].id;
                        for(var j=0; j<arr[i].subItems.length; j++){
                            if(val2 === arr[i].subItems[j].name){
                                x2 = arr[i].subItems[j].id;
                                break;
                            }
                        }
                        break;
                    }
                }
                return {x1, x2}
            }
        },
        mounted(){
            var that = this;
            console.log(this)
            $('.cinema-nav-container').on('tap','.slot3 .picker-selected', function(){
                var x1 = $('.slot1 .picker-selected')[0].innerText;
                var x2 = $(this)[0].innerText;
                that.type[0] = x2;
                let {val1, val2, val3, val4} = that.position.info;
                if(that.show === '商区'){
                    that.$store.commit({type: 'position/' + SAVE_INFOR, infor: {val1:x1,val2:x2,val3:-1,val4:-1}})
                }else{
                    that.$store.commit({type: 'position/' + SAVE_INFOR, infor: {val1,val2,val3:x1,val4:x2}})
                }
                that.showCity();
            })
        }           
    }
</script> 

<style lang="scss">
    .cinema-nav-container{
        position: relative;
        .cinema-nav{
            position: relative;
            z-index: 100;
            .type{
                position: relative;
                top: -0.026667rem;
                display: flex;
                height: 1.066667rem;
                border-bottom: 1px;
                background: #fff;
                &:after{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    transform: scaleY(0.5);
                    background: #f3f3f3;
                    left: 0;
                    bottom: 0;
                    border-bottom: 1px solid #D9D9D9;
                    transform-origin: 0 100%;
                    transform: scaleY(0.5);
                }
                .item{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    color: #777;
                    font-size: .346667rem;
                    white-space: nowrap;
                    overflow: hidden;
                    font-size: 13px;
                    text-overflow: ellipsis;
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
        .black{
            position:absolute;
            height: 16.413333rem;
            width: 100%;
            background: rgba($color: #000000, $alpha: 0.2);
            z-index: 99;
            top: 0;
        }
        .info-contaner{
            position:absolute;
            height: 9.2rem;
            overflow: hidden;
            width: 100%;
            background: #fff;
            z-index: 100;
            top: 83px;
            .title{
                height: 1.173334rem;
                display: flex;
                text-align: center;
                font-size: 15px;
                color: #777;
                line-height: 1.173334rem;
                .active{
                    position: relative;
                }
                .active::after{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    left: 0;
                    bottom: 0;
                    border-bottom: 1px solid #f03d37;
                }
            }
            .picker-items{
                .slot2{
                    width: 20%;
                }
                .picker-slot{
                    font-size: 14px;
                }
            }
        }
    }
</style>
