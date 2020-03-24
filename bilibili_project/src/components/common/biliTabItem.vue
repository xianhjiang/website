<template>
    <div class="biliTabItem">
        <span class="rank-icon" v-if="bp" :style="{'background-position':bp}"></span>
      {{text}}
    </div>
</template>
<script>
    export default {
        name:'biliTabItem',
        props:{
        	text:{
        		type:String,
        		default:'输入相关信息'
        	},
            bp:{
                type:String
            }
        },
        data() {
            return { 
               
            }
        },
        components: {
            
        }
    }
</script>
<style scoped>
.biliTabItem{
    position: relative;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    padding: 1px 0 2px;
    border-bottom: 1px solid transparent;
    margin-left: 12px;
    transition: .2s;
    transition-property: border,color;
    color: #000;
}
.biliTabItem:hover{
	color: #00a1d6;
}
.biliTabItem.on{
	background-color: transparent;
    border-color: #00a1d6;
    color: #00a1d6;
}
.biliTabItem:before {
    content: "";
    display: none;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    bottom: 0;
    width: 0;
    height: 0;
    border-bottom: 3px solid #00a1d6;
    border-top: 0;
    border-left: 3px dashed transparent;
    border-right: 3px dashed transparent;
}
.biliTabItem.on:before{
	display: block;
}
.rank-icon{
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    background: url('~assets/img/bili-header/xbt.png') no-repeat;
}
</style>