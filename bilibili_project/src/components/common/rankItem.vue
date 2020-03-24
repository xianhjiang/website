<template>
    <li v-if="i==0 && isfirst" class="rankItem_1">
        <i class="ri-num">{{num}}</i>
        <a href="" class="ri-info-wrap_1 clear-fix">
            <div class="ri-preview">
                <img :src="src">
            </div>
            <div class="first-detail">
                <p :title="title" class="ri-title">{{title}}</p>
                <p class="ri-first-info">
                    <span>{{label}}</span>
                    <span>{{update}}</span>
                </p>
            </div>
        </a>
    </li>
    <li class="rankItem" v-else>
    	<i class="ri-num">{{num}}</i>
      	<a class="ri-info-wrap">
      		<p :title="title" class="ri-title">{{title}}</p>
      		<span class="ri-total">{{total || update}}</span>
      	</a>
    </li>
</template>
<script>
    export default {
        name:'rankItem',
        props:{
        	num:{
        		type:Number,
        		default:0
        	},
        	title:{
        		type:String,
        		default:''
        	},
        	total:{
        		type:String,
        		default:''
        	},
            i:{
                type:Number,
                default:0
            },
            isfirst:{
                type:Boolean,
                default:false
            },
            update:{
                type:String,
                default:''
            },
            label:{
                type:String,
                default:''
            },
            src:{}
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
.rankItem{
	position: relative;
    padding-left: 25px;
    margin-top: 20px;
    overflow: hidden;
}
 .ri-num{
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
    border-radius: 4px;
    padding: 0 3px;
    font-weight: bolder;
    font-style: normal;
    cursor: text;
}
.ri-info-wrap{
	position: relative;
    display: block;
    cursor: pointer;
}
.ri-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 144px;
    line-height: 18px;
    vertical-align: top;
    color: #222;
    display: inline-block;
    overflow: hidden;
}
.rankItem:hover .ri-title{
	color: #00a1d6;
}
.ri-total {
    display: inline-block;
    vertical-align: top;
    color: #99a2aa;
    margin-left: 10px;
    position: relative;
    vertical-align: sub;
}
.rankItem_1{
    margin-top: 0;
    margin-bottom: 15px;
}
.ri-preview{
    margin-right: 7px;
    width: 80px;
    height: 107px;
    float: left;
    border-radius: 4px;
    overflow: hidden;
}
.ri-preview img{
    display: block;
    width: 100%;
    height: 100%;
}
.first-detail{
    width: 140px;
    float: left;
}
.rankItem_1 .ri-title{
    height: 36px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    white-space: normal;
    line-height: 18px;
    text-overflow: ellipsis;
    color: #222;
}
.ri-first-info{
    line-height: 12px;
    color: #99a2aa;
    height: 12px;
    margin-top: 4px;
}
.ri-first-info span{
    display: block;
    line-height: 18px;
    color: #99a2aa;
}
.ri-info-wrap_1{
    position: relative;
    display: block;
    cursor: pointer;
    margin-left: 25px;
}
.rankItem_1 i{
    position: absolute;
    color: #fff;
    height: 18px;
    line-height: 18px;
    top: 20px;
    left: 0;
    font-size: 12px;
    min-width: 12px;
    text-align: center;
    background-color: #b8c0cc;
    border-radius: 4px;
    padding: 0 3px;
    font-weight: bolder;
    font-style: normal;
    cursor: text;
}
.rankItem_1:hover .ri-title{
    color: #00a1d6;
}
</style>