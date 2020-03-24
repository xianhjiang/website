<template>
    <div>
    	<bili-header></bili-header>
      	<register class="biliLogo"></register>
      	<bili-footer></bili-footer>
      
    </div>
</template>
<script>
	import register from 'components/content/bili-logo/register.vue'
	import biliHeader from 'components/content/bili-header/bili_header'
	import biliFooter from 'components/content/bili-footer/biliFooter'
    export default {
        name:'biliregister',
        data() {
            return { 
               
            }
        },
        components: {
            register,
            biliHeader,
            biliFooter
        }
    }
</script>
<style scoped>
.biliLogo{
    margin-top: -191px;
    z-index: 99999;
    position: relative;
    background: #fff;
}
</style>