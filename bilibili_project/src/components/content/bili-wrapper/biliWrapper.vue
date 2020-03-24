<template>
    <div class="biliWrapper">
    	<div id="chief_recommend" class="clear-fix">
	    	<chief-recommend></chief-recommend>
	        <recommend-module></recommend-module>
        </div>
        <div id="bili_live" class="zone-wrap-module clear-fix">
        	<live-module></live-module>
        </div>
        <div id="bili_bangumi" class="zone-wrap-module">
        	<bangumi-module></bangumi-module>
        </div>
        <div id="bili_manga" class="zone-wrap-module">
        	<bili-manga></bili-manga>
        </div>
    </div>
</template>
<script>
	import chiefRecommend from 'components/content/bili-wrapper/subComponents/chiefRecommend'
	import recommendModule from 'components/content/bili-wrapper/subComponents/recommendModule'
	import liveModule from 'components/content/bili-wrapper/subComponents/liveModule'
	import bangumiModule from 'components/content/bili-wrapper/subComponents/bangumiModule/bangumiModule'
	import biliManga from 'components/content/bili-wrapper/subComponents/biliManga/biliManga'
    export default {
        name:'biliWrapper',
        data() {
            return { 
               
            }
        },
        components: {
            chiefRecommend,
            recommendModule,
            liveModule,
            bangumiModule,
            biliManga
        }
    }
</script>
<style scoped>
.biliWrapper{
	width: 980px;
	margin: 0 auto;
}
.biliWrapper #chief_recommend{
	padding-bottom: 40px;
	display: flex;
}
.biliWrapper .zone-wrap-module{
	padding-bottom: 30px;
}
</style>