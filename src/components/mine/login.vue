
<template>
    <div class="login">
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
    </div>
</template>

<script>
    export default {
        components: {
        
        },
        created(){
            this.$emit('update:headertitle', '猫眼电影');
        }
    }
</script> 

<style lang="scss">
    .login{
        height: 300px;
        width: 100%;
        margin-top: 100px;
    }
</style>
