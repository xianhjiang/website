<template>
    <div>
      	<bili-header></bili-header>
		<bili-wrapper></bili-wrapper>
		<bili-footer></bili-footer>
        <router-view></router-view>
    </div>
</template>
<script>
	import biliHeader from 'components/content/bili-header/bili_header'
	import biliWrapper from 'components/content/bili-wrapper/biliWrapper'
	import biliFooter from 'components/content/bili-footer/biliFooter'
    export default {
        name:'home',
        data() {
            return { 
               
            }
        },
        components: {
            biliHeader,
		  	biliWrapper,
		  	biliFooter
        }
    }
</script>
<style scoped>
</style>