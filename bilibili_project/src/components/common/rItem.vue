<template>
    <div class="rItem clear-fix">
      <span class="number">{{i}}</span>
      <a href="#" class="preview">
      	<div class="lazy-img">
      		<img :src="src">
      	</div>
      </a>
      <a href="#">
      	<div class="r-i">
      		<p class="r-i-t">
      			<span class="u-name">{{name}}</span>
      			<span class="u-online">
      				<i></i>
      				<em>{{num}}</em>
      			</span>
      		</p>
      		<div class="r-i-st">{{st}}</div>
      	</div>
      </a>
    </div>
</template>
<script>
    export default {
        name:'rItem',
        props:{
        	src:{},
        	name:{
        		type:String,
        		default:""
        	},
        	num:{
        		type:String,
        		default:""
        	},
        	st:{
        		type:String,
        		default:""
        	},
        	i:{
        		type:Number,
        		default:1
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
.rItem{
	overflow: hidden;
    position: relative;
    margin: 0 0 14px;
    padding-left: 25px;
}
.rItem .number{
	position: absolute;
    color: #fff;
    height: 18px;
    line-height: 18px;
    top: 0;
    left: 0;
    font-size: 12px;
    min-width: 12px;
    text-align: center;
    background-color: #b8c0cc;
    z-index: 20;
    border-radius: 4px;
    padding: 0 3px;
    font-weight: bolder;
    float: left;
    margin-right: 6px;
}
.rItem .preview {
    display: block;
    float: left;
    position: relative;
    margin-right: 12px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}
.rItem .preview .lazy-img{
	width: 100%;
    height: 100%;
    display: inline-block;
}
.rItem .preview .lazy-img img{
	width: 40px;
    height: 40px;
    display: block;
}
.rItem .r-i{
	width: 180px;
	float: left;
}
.rItem .r-i:hover .r-i-t .u-name{
	color: #00a1d6;
}
.rItem .r-i .r-i-t{
	line-height: 16px;
    overflow: hidden;
}
.rItem .r-i .r-i-t .u-name{
	max-width: 135px;
    float: left;
    color: #222;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.rItem .r-i .r-i-t .u-online{
	max-width: 60px;
    float: right;
    color: #99a2aa;
    line-height: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.rItem .r-i .r-i-t .u-online i{
	display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    margin-top: -2px;
    margin-right: 3px;
    background: url('~assets/img/bili-wrapper/live-module/r-con/1.png');
}
.rItem .r-i .r-i-st{
	margin-top: 4px;
    color: #99a2aa;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 190px;
}
</style>