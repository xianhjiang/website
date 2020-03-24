<template>
    <div class="rankLtem">
      <div class="num">{{num+1}}</div>
      <div class="content">
      	<div class="img">
      		<a href="">
      			<img :src="rankList.src">
      		</a>
      	</div>
      	<div class="info">
      		<a href="#" class="title">{{rankList.title}}</a>
      		<div class="detail">
      			<span class="data-box">
      				<i class="b-icon play"></i>
      				{{rankList.data1}}
      			</span>
      			<span class="data-box">
      				<i class="b-icon view"></i>
      				{{rankList.data2}}
      			</span>
      			<a href="#" class="active">
	      			<span class="data-box">
	      				<i class="b-icon author"></i>
	      				{{rankList.data3}}
	      			</span>
      			</a>
      		</div>
      		<div class="pts">
      			<div>{{rankList.pts}}</div>
      			综合得分
      		</div>
      	</div>
      	
      </div>
    </div>
</template>
<script>
    export default {
        name:'rankLtem',
        props:{
        	rankList:{
        		type:Object,
        		default:()=>{}
        	},
        	num:{
        		// type:Number,
        		default:0
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
.rankLtem{
	transition: .2s;
    overflow: hidden;
    border-bottom: 1px solid #e5e9ef;
    position: relative;
}
.rankLtem:hover{
	box-shadow: 0 2px 5px #ccc;
}
.num{
	width: 70px;
    height: 70px;
    position: absolute;
    top: 20px;
    left: 0;
    line-height: 70px;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    color: #b8c0cc;
    font-family: simhei;
}
.content{
	padding: 20px 0 0 70px;
    overflow: hidden;
}
.content .img{
	position: relative;
    float: left;
}
.content .img img{
	display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
.content .info{
	padding-bottom: 20px;
    margin-left: 130px;
    height: 70px;
    position: relative;
}
.info .title{
	height: 20px;
    line-height: 20px;
    font-weight: 700;
    font-size: 14px;
    color: #222;
}
.info .title:hover,.active:hover{
	color: #00a1d6;
}
.detail{
	margin-top: 20px;
    color: #99a2aa;
}
.data-box{
	width: 80px;
    margin-right: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: text;
}
.active .data-box{
	cursor: pointer;
}
.b-icon{
	width: 12px;
    height: 12px;
    margin-right: 5px;
    display: inline-block;
    vertical-align: text-top;
    background: url('~assets/img/bili-header/xbt.png');
    vertical-align: bottom;

}
.play {
    background-position: -282px -90px;
}
.view{
	background-position: -282px -218px;
}
.author {
    background-position: -282px -154px;
}
.pts{
	height: 20px;
    color: #b8c0cc;
    line-height: 20px;
    position: absolute;
    bottom: 40px;
    right: 20px;
    text-align: center;
}
.pts div{
	color: #00a1d6;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 12px;
}
</style>