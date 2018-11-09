<template>
  <div id="app">
    <app-header :header='title' v-if='this.$route.path !== "/position"'></app-header>
    <router-view :headertitle.sync='title'></router-view>
  </div>
</template>


<script>
import AppHeader from '@component/layout/AppHeader'

export default {
    name: 'app',
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
