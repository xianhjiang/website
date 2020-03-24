<template>
    <div class="timingBoxItem">
    	<a href="#" class="pic">
    		<div class="lazy-img">
    			<img :src="item.src">
    		</div>
    	</a>
    	<div class="r-text">
    		<a href="#" class="t">{{item.title}}</a>
    		<p class="update">
    			<a href="#" class="published">{{item.published}}</a>
    		</p>
    	</div>
      
    </div>
</template>
<script>
    export default {
        name:'timingBoxItem',
        props:{
        	item:{
        		type:Object,
        		default:{}
        	}
        },
        data() {
            return { 
               
            }
        },
        components: {
            
        },
    }
</script>
<style scoped>
.timingBoxItem{
	float: left;
    width: 180px;
    padding: 36px 46px 0 0;
}
.timingBoxItem .pic{
	width: 72px;
    height: 72px;
    margin-right: 12px;
    display: block;
    float: left;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
}
.timingBoxItem .pic .lazy-img{
	width: 100%;
    height: 100%;
    display: inline-block;
}
.timingBoxItem .pic .lazy-img img{
	width: 72px;
    height: 72px;
}
.timingBoxItem .r-text{
	float: left;
    width: 96px;
    height: 72px;
    position: relative;
}
.timingBoxItem .r-text .t{
	display: block;
    height: 36px;
    line-height: 18px;
    text-align: left;
    width: 100%;
    margin-top: -3px;
    word-break: break-all;
    word-wrap: break-word;
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
}
.timingBoxItem .r-text .t:hover{
	color: #00a1d6;
}
.timingBoxItem .r-text .update{
	position: absolute;
    bottom: 0;
    text-align: left;
    margin-top: 2px;
    color: #aaa;
    left: 0;
    white-space: nowrap;
    line-height: 18px;
}
.timingBoxItem .r-text .update a{
	color: #fff;
    border-radius: 9px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    padding: 0 4px;
    height: 18px;
    line-height: 18px;
    min-width: 28px;
    max-width: 89px;
    text-overflow: ellipsis;
    overflow: hidden;
    background: #b8c0cc;
}
.timingBoxItem .r-text .update .published {
    background: #ff8eb3;
}
</style>