<template>
    <div>
    	<headerwrap></headerwrap>
    	<bili-footer></bili-footer> 
    </div>
</template>
<script>
	import headerwrap from 'components/content/bili-loading/Headerwrap'
	import biliFooter from 'components/content/bili-footer/biliFooter'
    export default {
        name:'loading',
        data() {
            return { 
               
            }
        },
        components: {
            headerwrap,
            biliFooter,
        }
    }
</script>
<style scoped>
</style>