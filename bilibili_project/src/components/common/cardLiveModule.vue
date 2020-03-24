<template>
    <div class="cardLiveModule">
      <groom-module :issnum="issnum" :ismask="true" :online="item.online" 
      :auther="item.auther" :src="item.src" :src1="item.src1"
      ></groom-module>
      <p class="t">{{item.t}}</p>
      <p class="num">{{item.num}}</p>
    </div>
</template>
<script>
	import groomModule from 'components/common/groomModule'
    export default {
        name:'cardLiveModule',
        props:{
        	item:{
        		type:Object,
        		default:{}
        	},
            issnum:{
                type:Boolean
            }
        },
        data() {
            return { 
               
            }
        },
        components: {
          groomModule  
        },
        mounted(){
        	// console.log(this.item)
        }
    }
</script>
<style>
.cardLiveModule{
	position: relative;
    width: 160px;
    height: 148px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
}
.cardLiveModule .t{
	padding-top: 8px;
    height: 40px;
    line-height: 20px;
    transition: all .2s linear;
    color: #222;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-align: left;
}
.cardLiveModule .num{
	position: absolute;
    width: 100%;
    bottom: 0;
    height: 20px;
    line-height: 20px;
    color: #9ba3ab;
    background-color: #fff;
    transition: all .3s;
}
.cardLiveModule:hover .mask{
	opacity: 1
}
.cardLiveModule:hover .t {
    color: #00a1d6;
}
.cardLiveModule:hover .num {
    bottom: -20px;
}
</style>