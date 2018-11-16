<template>
  <div id="app">
    <app-header :header='title' v-if='this.$route.path !== "/position"'></app-header>
    <router-view :headertitle.sync='title'></router-view>
  </div>
</template>


<script>
import AppHeader from '@component/layout/AppHeader'
import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/position/mutation-type'

export default {
    name: 'app',
    beforeCreate() {
        if( localStorage.city ){
          this.$store.commit({
            type: 'position/' + CHANGE_CITY,
            city: JSON.parse(localStorage.city),
            cities: JSON.parse(localStorage.cities),
          })
        }else{
          this.$store.dispatch({type: 'position/getCurrentPosition'})
        }
    },
    data(){
        return{
            title: '猫眼',
            header_title: '猫眼'
        }
    },
    components: {
        AppHeader
    },
    mounted(){
      
    }
}

</script>

<style lang="scss">

</style>
