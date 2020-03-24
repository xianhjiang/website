<template>
    <div class="groomModule">
    	<a href="">
    		<img :src="src" class="pic">
    		<div class="card-mark" v-if="ismark">
    			<p class="title">{{title}}</p>
    			<p class="author">{{author}}</p>
    			<p class="play">{{play}}</p>
    		</div>
            <div class="snum" v-if="issnum">
                <span class="auther">{{auther}}</span>
                <span class="online">
                    <i></i>{{online}}   
                </span>
            </div>
            <div class="mask" :style="{backgroundImage:'url('+src1+')'}"
            v-if="ismask"></div>
    	</a>
    	<div class="watch-later-trigger" v-if="iswatch"></div>
      
    </div>
</template>
<script>
    export default {
        name:'groomModule',
        props:{
        	src:{},
            src1:{},
        	title:{
        		type:String,
        		default:''
        	},
        	author:{
        		type:String,
        		default:''
        	},
        	play:{
        		type:String,
        		default:''
        	},
            iswatch:{
                type:Boolean,
                default:false
            },
            ismask:{
                type:Boolean,
                default:false
            },
            issnum:{
                type:Boolean,
                default:false
            },
            ismark:{
                type:Boolean,
                default:false
            },
            auther:{
                type:String,
                default:''
            },
            online:{
                type:String,
                default:''  
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
.groomModule{
	width: 160px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    background: #fff;
}
.groomModule .pic{
	width: 100%;
	height: 100%;
	border: none;
}
.groomModule .card-mark{
	position: absolute;
    left: 0;
    top: 68px;
    width: 150px;
    /*height: 100%;*/
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    padding: 10px 5px;
    overflow: hidden;
    /*background: #000;*/
    background: linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9));
}
.groomModule .card-mark .title{
	color: #fff;
    height: 40px;
    overflow: hidden;
    margin-bottom: 5px;
    word-break: break-all;
    word-wrap: break-word;
}
.groomModule .card-mark .author{
	opacity: 0;
    color: #99a2aa;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    transition: all .6s;
}
.groomModule .card-mark .play{
	opacity: 0;
    color: #99a2aa;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    transition: all .6s;
}
.groomModule:hover .card-mark{
	top: 0;
    height: 100%;
    background: rgba(0,0,0,.7);
}
.groomModule:hover .author{
	opacity: 1
}
.groomModule:hover .play{
	opacity: 1
}
.groomModule .watch-later-trigger{
	display: none;
    width: 22px;
    height: 22px;
    position: absolute;
    right: 6px;
    bottom: 4px;
    cursor: pointer;
    background-image: url('~assets/img/bili-wrapper/recommend-module/1.png');
}
.groomModule:hover .watch-later-trigger{
	display: block;
}
.groomModule .snum{
    position: absolute;
    bottom: 0;
    height: 34px;
    width: 100%;
    background: rgba(0,0,0,.5);
    background: linear-gradient(transparent,transparent,rgba(0,0,0,.5));
}
.groomModule .snum span{
    line-height: 20px;
    height: 20px;
    display: inline-block;
    width: 47%;
    overflow: hidden;
    font-size: 12px;
    vertical-align: bottom;
    position: absolute;
    color: #fff;
    font-weight: 200;
}
.groomModule .snum .auther {
    white-space: nowrap;
    text-overflow: ellipsis;
    left: 4px;
    bottom: 0;
    text-align: left;
}
.groomModule .snum .online {
    right: 4px;
    text-align: right;
    bottom: 0;
}
.groomModule .snum .online i{
    display: inline-block;
    width: 13px;
    height: 10px;
    vertical-align: baseline;
    margin-right: 5px;
    background: url('~assets/img/bili-wrapper/live-module/i-con/storey-box/1.png');
}
.groomModule .mask{
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: opacity .3s;
    background-repeat: no-repeat;
    background-color: #000;
    background-position: 50%;
    background-size: contain;
}
.groomModule:hover .mask {
    /*opacity: 1;*/
}
</style>