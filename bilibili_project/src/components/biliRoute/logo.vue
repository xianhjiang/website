<template>
    <div>
    	<bili-header></bili-header>
      	<logo class="biliLogo"></logo>
      	<bili-footer></bili-footer>
    </div>
</template>
<script>
	import logo from 'components/content/bili-logo/logo.vue'
	import biliHeader from 'components/content/bili-header/bili_header'
	import biliFooter from 'components/content/bili-footer/biliFooter'
    export default {
        name:'biliLogo',
        data() {
            return { 
               
            }
        },
        components: {
            logo,
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