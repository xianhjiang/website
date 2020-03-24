<template>
    <div class="storey-box clear-fix">
		<card-live-module class="card-live-module"
		v-for="item in cardList" :item="item" :key="item.t"
        :issnum="issnum"
		></card-live-module>
    </div>
</template>
<script>
	import cardLiveModule from 'components/common/cardLiveModule'
    export default {
        name:'storeyBox',
        props:{
        	cardList:{
        		type:Array,
        		default:()=>[]
        	},
            issnum:{
                type:Boolean,
                default:true
            }
        },
        data() {
            return { 
               
            }
        },
        components: {
            cardLiveModule
        }
    }
</script>
<style scoped>
.storey-box{
	height: 336px;
    overflow: hidden;
}
</style>