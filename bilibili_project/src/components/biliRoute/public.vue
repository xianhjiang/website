<template>
    <div class="biliPublic">
    	<bili-header :src="$store.state.headline.src"></bili-header>
    	<div class="Public">
	      	<public-copy :headline="$store.state.headline"></public-copy>
	      	<gg-floor-module :src="src"></gg-floor-module>
      	</div>
      	<bili-footer></bili-footer>
    </div>
</template>
<script>
	import biliMangaCopy from 'components/content/bili-wrapper/subComponents/biliManga/biliMangaCopy'
    import ggFloorModule from 'components/common/ggFloorModule'
    import biliFooter from 'components/content/bili-footer/biliFooter'
    import biliHeader from 'components/content/bili-header/bili_header'
    import publicCopy from 'components/biliRoute/public/publicCopy'
    export default {
        name:'public',
        data() {
            return { 
               src:require('@/assets/img/bili-rankingList/1.jpg')
            }
        },
        components: {
            biliMangaCopy,
            ggFloorModule,
            biliFooter,
            biliHeader,
            publicCopy
        }
    }
</script>
<style scoped>
.Public{
	width: 1000px;
	margin: 0 auto;
}
</style>