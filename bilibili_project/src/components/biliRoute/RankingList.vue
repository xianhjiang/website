<template>
    <div class="RankingList">
      	<bili-header :src="src" :isLogo='false'></bili-header>
		<bili-ranking-list></bili-ranking-list>
		<bili-footer></bili-footer>
    </div>
</template>
<script>
	import biliHeader from 'components/content/bili-header/bili_header'
	import biliRankingList from 'components/content/bili-rankingList/biliRankingList'
	import biliFooter from 'components/content/bili-footer/biliFooter'
    export default {
        name:'RankingList',
        data() {
            return { 
               src:require('@/assets/img/bili-rankingList/1.jpeg')
            }
        },
        components: {
            biliHeader,
		  	biliRankingList,
		  	biliFooter
        }
    }
</script>
<style>
.RankingList .head-banner{
    height: 289px;
}
.RankingList .primaryMenu .nav-menu>.navitemleft span{
    background-color: #FFB010;
}
</style>