<template>
  <div id="app">
    <app-header :header='title'></app-header>
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
    watch:{
        title:(val)=>{
          
        }
    },
    components: {
      AppHeader
    }
}

</script>

<style lang="scss">
    
</style>
