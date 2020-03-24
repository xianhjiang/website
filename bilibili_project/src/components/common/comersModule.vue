<template>
    <div class="l-con">
		<headline class="headline" :name="headline.name" 
        :bp="headline.bp" 
		:num="headline.num" :linkMore="headline.linkMore"></headline>
		<bili-tab @tabItemClick="tabItemClick" class="bili-tab" :tabList="tabList"></bili-tab>
	</div>
</template>
<script>
	import headline from 'components/common/headline'
	import biliTab from 'components/common/biliTab'
    export default {
        name:'comersModule',
        props:{
        	headline:{
        		type:Object,
        		default:()=>{}
        	},
        	tabList:{
        		type:Array,
        		default:()=>[]
        	}
        },
        data() {
            return { 

            }
        },
        components: {
            headline,
            biliTab
        },
        methods:{
            tabItemClick(i){
                this.$emit('tabItemClick',i)
            }
        }
     
    }
</script>
<style scoped>
.l-con{
	position: relative;
}
.l-con .bili-tab{
	position: absolute;
	left: 100px;
	top: 0;
	width: 470px;
	font-size: 12px;
    height: 30px;
    line-height: 30px;
    margin-left: 20px;
}
</style>