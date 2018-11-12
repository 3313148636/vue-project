<template>
    <div class="detail">
        <header class="detail-header">
            <div class="filter"></div>
            <div class="header-conntainer"></div>
            <div class="header-box">
                <div class="left">
                    <!-- <img :src="data.albumImg" alt="" v-if='data.albumImg'> -->
                    <img :src="data.img | imgHandle" alt="">
                </div>
                <div class="right">
                    <p class="title overflow">{{data.nm}}</p>
                    <p class="name overflow">{{data.enm}}</p>
                    <p class="score overflow">
                        {{data.sc}}
                        <span class="type"> (20.4万人评)</span>
                    </p>
                    <p class="type one overflow">
                        <span>{{data.cat}}</span>
                    </p>
                    <p class="type overflow">{{data.fra}}/{{data.dur}}分钟</p>
                    <p class="type overflow">{{data.pubDesc}}</p>
                </div>
                <div class="arrow-g">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC">
                </div>
            </div>
        </header>
        <div class="sticky">
            <CinemaDate></CinemaDate>
            <cinema-nav></cinema-nav>
        </div>
        <CinemaMain :movieid='id' ref='fun'></CinemaMain>
    </div>
</template>

<script>
import CinemaNav from '@component/cinema/cinemanav'
import CinemaDate from '@component/cinema/cinemadate'
import CinemaMain from '@component/cinema/cinemamain'
import de_scroll from '@util/detail-scroll'

export default {
    components:{
        CinemaNav,
        CinemaMain,
        CinemaDate
    },
    data() {
        return {
            id: 0,
            nm: '',
            data: ''
        }
    },
    async created(){
        this.nm = this.$route.params.nm || '毒液：致命守护者';
        this.id = this.$route.params.id || 42964;
        if( !this.nm ){
            this.$router.push('home');
        }
        this.$emit('update:headertitle', this.nm);
        let result = await this.$http({
            url: '/my/ajax/detailmovie',
            params: { movieId: this.id}
        })
        this.data = result.detailMovie;
    },
    filters: {
        imgHandle: (val) => {
            if ( !val ) return val;
            return  val.replace(/w.h/g,"148.208");
        }
    },
    mounted(){
        var obj = this.$refs.fun;
        obj.$el.style.height='auto';
        de_scroll(this)
    }
}
</script> 

<style lang="scss">
    .detail {
        .sticky{
            z-index: 100;
            overflow: hidden;
            position: sticky;
            top: 0rem;
            background: #fff;
        }
        .detail-header{
            width: 100%;
            height: 5.013333rem;
            margin-top: 1.373334rem;
            position: relative;
            cursor: pointer;
            overflow: hidden;
            .filter{
                position: absolute;
                background: #333;
                height: 100%;
                z-index: -1;
            }
            .header-conntainer{
                height: 100%;
                z-index: -1;
                overflow: hidden;
                position: absolute;
                opacity: .55;
                filter: blur(1.2rem);
                background-size: cover;
                background-repeat: no-repeat;
                background-image:url('http://p0.meituan.net/71.100/movie/363e3a7e614d29b2847ff4e62afcd3f42168651.jpg');
            }
            .header-box{
                padding: 19px 30px 19px 15px;
                height: 100%;
                width: 100%;
                position: relative;
                .left{
                    float: left;
                    width: 2.933334rem;
                    height: 4rem;
                    img{
                        width: 2.933334rem;
                        height: 4rem;
                    }
                }
                .right{
                    float: left;
                    height: 100%;
                    margin-left: .333334rem;
                    width: 4.533333rem;
                    color: #fff;
                    .title{
                        font-size: .533334rem;
                        margin-top: .053333rem;
                        font-weight: 700;
                        height: .693333rem;
                    }
                    .name{
                        margin-top: 8px;
                        font-size: .32rem;
                        color: #fff;
                        opacity: .8;
                        line-height: .32rem;
                    }
                    .overflow{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .score{
                        font-size: .48rem;
                        font-weight: 700;
                        color: #fc0;
                        margin-top: .293333rem;
                        height: .48rem;
                        line-height: .48rem;
                    }
                    .type{
                        margin-top: .266667rem;
                        font-size: .32rem;
                        color: #fff;
                        opacity: .8;
                        line-height: .32rem;
                        height: .32rem;
                    }
                    .one{
                        height: .378667rem;
                    }
                }
                .arrow-g{
                    position: absolute;
                    right: 15px;
                    width: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
</style>