<template>
    <div class="biliPublic">
      <bili-manga-copy :headline="$store.state.headline">	
      </bili-manga-copy>
      <gg-floor-module :src="src"></gg-floor-module>
    </div>
</template>
<script>
	import biliMangaCopy from 'components/content/bili-wrapper/subComponents/biliManga/biliMangaCopy'
    import ggFloorModule from 'components/common/ggFloorModule'
    export default {
        name:'biliPublic',
        data() {
            return { 
               // headline:$store.state.headline
               src:require('@/assets/img/bili-rankingList/1.jpg')
            }
        },
        components: {
            biliMangaCopy,
            ggFloorModule
        },
        mounted(){
        	// console.log(this.$store.state.headline)
        }
    }
</script>
<style scoped>
.biliPublic{
	width: 1000px;
	margin: 0 auto;
}
</style>