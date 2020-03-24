<template>
    <div class="rankList">
    	<rank-item class="rank-item" v-for="(item,i) in ranklist" 
    	:num="i+1" :title="item.title" :total="item.total"
    	:key="item.title" :i="i" :isfirst="item.isfirst"
        :update="item.update" :label="item.label" :src="item.src"></rank-item>
    </div>
</template>
<script>
	import rankItem from 'components/common/rankItem'
    export default {
        name:'rankList',
        props:{
        	ranklist:{
        		type:Array,
        		default:()=>[]
        	},
        },
        data() {
            return { 
               
            }
        },
        components: {
            rankItem
        }
    }
</script>
<style>
.rankList{
	padding-bottom: 15px;
    min-height: 278px;
    padding-top: 20px;
    position: relative;
}
.rankList .rank-item:nth-child(1) .ri-num,
.rankList .rank-item:nth-child(2) .ri-num,
.rankList .rank-item:nth-child(3) .ri-num{
	background: #f25d8e;
}
/*.rankList .rank-item:nth-child(1) */
</style>