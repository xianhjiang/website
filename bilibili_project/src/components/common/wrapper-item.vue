<template>
    <div class="wrapperItem" :class="{ishover:ishover}">
      <div class="top"><slot name="top"></slot></div>
      <div class="bottom">
      	<slot name="left"></slot>
      	<li :title="title">{{title}}</li>
      </div>
      
    </div>
</template>
<script>
    export default {
        name:'wrapperItem',
        props:{
        	title:{
        		type:String
        	},
        	ishover:{
        		type:Boolean,
        		default:true
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
.wrapperItem{
	/*float: left;*/
    /*line-height: 42px;*/
    text-align: center;
    padding: 0 7PX;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 42px;
}
.wrapperItem .top{
	text-align: center;
	height: 14px;
	padding-bottom: 2px;
    width: 100%;
}
.wrapperItem .bottom{
	/*margin-top: 2px;*/
	display: flex;
	/*line-height: 42px;*/
	text-align: center;
    width: 100%;
	/*align-items:center;*/
}
.wrapperItem li{
	/*margin-left:2px;*/
    /*width: 100%;*/
    text-align: center;

}
.wrapperItem.ishover:hover{
	background-color: hsla(0,0%,100%,.3);
}
</style>