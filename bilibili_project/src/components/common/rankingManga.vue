<template>
    <div class="rankingManga">
    	<div class="rank-head">
    		<h3>{{h}}</h3>
    		<bili-tab ref="biliTab" @tabItemOver="tabItemOver" class="rank-tab" :tabList="tabList"></bili-tab>
    	</div>
    	<div class="rank-list-wrap" 
    	:style="{width:rankListWrapWidth+'px','margin-left':-marginLeft+'px'}">
    		<rank-list v-for="(item,i) in ranklist" :style="{width:width+'px'}" :ranklist="item" :key="i"
    		></rank-list>
    	</div>
    	<a href="#" class="more-link">
    		查看更多
    		<i class="icon-arrow-r"></i>
    	</a>

      
    </div>
</template>
<script>
	import biliTab from 'components/common/biliTab'
	import rankList from 'components/common/rankList'
    export default {
        name:'rankingManga',
        props:{
        	h:{
        		type:String,
        		default:''
        	},
        	tabList:{
        		type:Array,
        		default:()=>[]
        	},
        	width:{
        		type:Number,
        		default:260
        	},
        	ranklist:{
        		type:Array,
        		default:()=>[]
        	}
        },
        data() {
            return { 
               rankListWrapWidth:this.width*this.tabList.length,
               marginLeft:0
            }
        },
        components: {
            biliTab,
            rankList
        },
        methods:{
        	tabItemOver(i){
        		this.marginLeft=i*this.width
                let re = /\bon\b/
                let length=this.$refs.biliTab.$children.length
                for(let j=0;j<length;j++){
                    if(re.test(this.$refs.biliTab.$children[j].$el.className)){
                       this.$refs.biliTab.$children[j].$el.classList.remove("on")
                       break
                    }
                    // this.$refs.biliTab.$children[j].$el.classList.remove("on")
   
                }
                this.$refs.biliTab.$children[i].$el.classList.add("on")
                // console.log(this.$refs.biliTab.$children.length)
                // console.log(this.$refs.biliTab.$children) 
                // console.log(length)
        	}
        }
    }
</script>
<style scoped>
.rankingManga{
	overflow: hidden;
}
.rank-head{
	height: 24px;
    line-height: 24px;
}
.rank-head h3{
	float: left;
    font-size: 18px;
    font-weight: 400;
    cursor: text;
}
.rank-tab {
    margin-left: 20px;
    float: left;
}
.rank-list-wrap{
	display: flex;
	transition: all .2s linear;
}
.more-link{
	display: block;
    height: 24px;
    line-height: 24px;
    background-color: #e5e9ef;
    text-align: center;
    border: 1px solid #e0e6ed;
    color: #222;
    border-radius: 4px;
    transition: .2s;
}
.more-link .icon-arrow-r{
	display: inline-block;
    vertical-align: middle;
    background-position: -478px -218px;
    width: 6px;
    height: 12px;
    margin: -2px 0 0 5px;
    background-image: url('~assets/img/bili-header/xbt.png');
}
.more-link:hover{
	background-color: #ccd0d7;
    border-color: #ccd0d7;
}
</style>