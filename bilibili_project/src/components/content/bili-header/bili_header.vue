<template>
    <div id="biliHeader">
    	<div class="nav-menu">
    		<div class="blur-bg" 
            :style="{'background-image':'url('+src+')'}"></div>
    		<div class="nav-mask"></div>
    		<div class="nav-wrapper bili-wrapper">
    			<nav-wrapper-left></nav-wrapper-left>
    			<nav-wrapper-right></nav-wrapper-right>
    		</div>
    	</div>
    	<div class="head-banner"
         :style="{'background-image':'url('+src+')'}">
    		<div class="head-content">
    			<a href="" class="head-logo" v-show="isLogo"></a>
    			<search class="search"></search>
    		</div>
    	</div>
    	<div class="bili-wrapper">
    		<primary-menu></primary-menu>
    	</div>
    </div>
</template>
<script>
	import navWrapperLeft from 'components/content/bili-header/nav-wrapper-left'
	import navWrapperRight from 'components/content/bili-header/nav-wrapper-right'
    import search from 'components/common/search'
    import primaryMenu from 'components/content/bili-header/primaryMenu'
    export default {
        name:'biliHeader',
        props:{
            src:{
                type:String,
                default:require("@/assets/img/bili-header/1.png")
            },
            isLogo:{
                type:Boolean,
                default:true
            }
        },
        data() {
            return { 
               
            }
        },
        components: {
            navWrapperLeft,
            navWrapperRight,
            search,
            primaryMenu
        }
    }
</script>
<style scoped>
#biliHeader{
	font: 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    position: relative;
    z-index: 10000;
    background: #fff;
}
#biliHeader .nav-menu{
	position: relative;
    z-index: 200;
    height: 42px;
    color: #222;
}
.blur-bg{
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center -10px;
    background-repeat: no-repeat;
    filter: blur(4px);
    /*background-image: url("~assets/img/bili-header/1.png");*/
}
#biliHeader .nav-menu .nav-mask{
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0,0%,100%,.4);
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
}
#biliHeader .nav-menu .nav-wrapper{
	position: absolute;
    left: 15%;
    top: 0;
    width: 980px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    color: #fff;
    text-shadow: 0 1px 1px rgba(0,0,0,.3);
    justify-content: space-between;
}
.head-banner{
	width: 100%;
    height: 170px;
    margin-top: -42px;
    background-position: center -10px;
    /*background-image: url("~assets/img/bili-header/1.png");*/
}
.head-banner .head-content{
	position: relative;
    height: 100%;
    width: 980px;
    margin: 0 auto;
}
.head-banner .head-content .head-logo{
	position: absolute;
    width: 220px;
    height: 105px;
    /*height: 50%;*/
    left: 24px;
    top: 55px;
    z-index: 1;
    background: url("~assets/img/bili-header/3.png") no-repeat;
}
.head-banner .head-content .search{
	position: absolute;
    bottom: 20px;
    right: 0;
}
.bili-wrapper{
	width: 980px;
    margin: 0 auto;
}
</style>