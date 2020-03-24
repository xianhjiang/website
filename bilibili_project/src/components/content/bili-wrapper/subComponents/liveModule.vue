<template>
    <div class="clear-fix">
    	<gg-floor-module :src="ggFloorModuleImg.src"></gg-floor-module>
    	<div class="l-con">
    		<div class="zone-title">
    			<headline bp="-141px -652px" name="正在直播" 
    			:isonline="true" class="headline clear-fix"
                 linkMore="更多">
    				<div slot="online">当前共有<span>18952</span>个在线直播
    				</div>
    			</headline>
    		</div>
    		<storey-box :cardList="cardList"></storey-box>
    	</div>
    	<div class="r-con">
    		<bili-tab :tabList="tabList" @tabItemClick="tabItemClick"></bili-tab>
    		<div class="tab-box">
    			<div class="tab-con clear-fix" :style="{'margin-left':-leftMove+'px'}">
    				<div class="tab-item" ref="tabItem">
    					<r-item class="r-item" v-for="(item,i) in tabLists" :key="item.st"
    					:name="item.name" :num="item.num" :st="item.st"
    					:i="i+1" :src="item.src"
    					></r-item>
    				</div>
    				<div class="tab-item">
						<div class="load-state">
							<span class="empty">
								没有数据(-_-#)
							</span>
						</div>
					</div>
					<div class="tab-item tuijian">
						<rotation-chart  
						itemWidth="260px" :lists="picList"
						 :ismoreText="false" @trigmouseover="trigmouseover"
                         ref="liveRotation">
						</rotation-chart>
                        <div class="clear-fix">
                            <a href="#" class="pic left">
                                <img src="~assets/img/bili-wrapper/live-module/r-con/3.png">
                            </a>
                            <a href="#" class="pic right">
                                <img src="~assets/img/bili-wrapper/live-module/r-con/4.png">
                            </a>
                        </div>
					</div>
    			</div>
    		</div>
    	</div>
     
    </div>
</template>
<script>
	import headline from 'components/common/headline'
	import biliTab from 'components/common/biliTab'
	import rItem from 'components/common/rItem'
	import rotationChart from 'components/common/rotationChart'
    import ggFloorModule from 'components/common/ggFloorModule'

	import storeyBox from 'components/content/bili-wrapper/subComponents/live-module/storeyBox'
    export default {
        name:'liveModule',
        data() {
            return { 
            	leftMove:0,
            	tabList:['直播排行','关注的主播','为你推荐'],
                ggFloorModuleImg:{
                    src:require('@/assets/img/bili-wrapper/live-module/gg-floor-module/1.jpg')
                },
                cardList:[
		    {src:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/29.webp'),auther:'哔哩哔哩英雄联盟赛事',online:'1375.0万',src1:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/29_1.webp'),t:'JT vs SPY 2019英雄联盟全球总决赛',num:'网游 · 英雄联盟'},
		    {src:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/30.webp'),auther:'兮宝要上天',online:'4962',src1:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/30_1.webp'),t:'甜系女友♡想要被你喜欢',num:'手游 · 王者模拟战'},
		    {src:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/31.webp'),auther:'栖苑太困辽',online:'1228',src1:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/31_1.webp'),t:'除了温柔一无是处',num:'电台 · 唱见电台'},
		    {src:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/32.webp'),auther:'破顽皮',online:'1037',src1:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/32_1.webp'),t:'为什么明明动了情，却又不靠近',num:'电台 · 唱见电台'},
		    {src:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/33.webp'),auther:'一只苏苏鸭',online:'6170',src1:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/33_1.webp'),t:'好看呀 陪陪我',num:'娱乐 · 视频聊天'},
		    {src:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/34.webp'),auther:'薄薄的温酱',online:'1976',src1:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/34_1.webp'),t:'B站小甜甜',num:'娱乐 · 视频唱见'},
		    {src:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/35.webp'),auther:'小米童鞋噢OOo',online:'2677',src1:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/35_1.webp'),t:'【萌御甜】超好听的萌新小姐姐',num:'电台 · 唱见电台'},
		    {src:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/36.webp'),auther:'是矞矞了',online:'50',src1:require('@/assets/img/bili-wrapper/live-module/i-con/storey-box/36_1.webp'),t:'【软温御】练歌',num:'电台 · 聊天电台'},
		    ],
		    tabLists:[
		    {src:require('@/assets/img/bili-wrapper/live-module/r-con/37.webp'),name:'哔哩哔哩直播',num:'21.9万',st:'黄晓明正在直播~'},
		    {src:require('@/assets/img/bili-wrapper/live-module/r-con/38.webp'),name:'两仪滚',num:'11.1万',st:'【滚  《嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎》'},
		    {src:require('@/assets/img/bili-wrapper/live-module/r-con/39.webp'),name:'夏色祭Official',num:'10.6万',st:'测试直播'},
		    {src:require('@/assets/img/bili-wrapper/live-module/r-con/40.webp'),name:'守护茶茶',num:'9.1万',st:'天天自称阴阳家，会法术吗？'},
		    {src:require('@/assets/img/bili-wrapper/live-module/r-con/41.webp'),name:'暴雪游戏频道',num:'8.6万',st:'直播：双人竞速赛之夺宝练习生-Day1'},
		    {src:require('@/assets/img/bili-wrapper/live-module/r-con/42.webp'),name:'棉花大哥哥',num:'7.8万',st:'国服百强今天冲前50 ！4元抽38元战令'}
		    ],
		    picList:[{src:require('@/assets/img/bili-wrapper/live-module/r-con/43.webp'),text:'神秘“新星角标”奖励首次放出！快来康康~'},{src:require('@/assets/img/bili-wrapper/live-module/r-con/44.webp'),text:'黄金列车主播先锋团火热招募'},{src:require('@/assets/img/bili-wrapper/live-module/r-con/45.webp'),text:'S9全球总决赛'},],
            }
        },
        components: {
            headline,
            biliTab,
            rItem,
            storeyBox,
            rotationChart,
            ggFloorModule
        },
        methods:{
        	tabItemClick(i){
        		this.leftMove=this.$refs.tabItem.clientWidth*i
        		// console.log(this.$refs.tabItem.clientWidth)
        	},
            trigmouseover(i){
                this.$refs.liveRotation.currentIndex=i
                this.$refs.liveRotation.marginLeft = -i*parseInt(
                this.$refs.liveRotation.itemWidth)
            }
        }
    }
</script>
<style>
.l-con{
	width: 720px;
	float: left;
}
.l-con .zone-title{
	padding-right: 20px;
}
.l-con .zone-title .headline{
	padding: 0 0 15px;
}
.card-live-module{
	float: left;
	margin: 0 20px 20px 0;
}
.r-con{
	width: 260px;
    float: right;
}
.r-con .tab-box {
    margin-top: 20px;
    overflow: hidden;
}
.r-con .tab-box .tab-con{
	width: 780px;
    transition: all .3s;
}
.r-con .tab-box .tab-con .tab-item{
	width: 260px;
    float: left;
}
.r-con .tab-box .tab-con .tab-item .r-item:nth-child(1) .number,
.r-con .tab-box .tab-con .tab-item .r-item:nth-child(2) .number,
.r-con .tab-box .tab-con .tab-item .r-item:nth-child(3) .number {
    background-color: #f25d8e;
}
.r-con .tab-box .tab-con .tab-item .load-state {
    text-align: center;
    padding: 10px 0;
    color: #99a2aa;
    height: 100%;
    display: table;
    width: 100%;
}
.r-con .tab-box .tab-con .tab-item .load-state span {
    vertical-align: middle;
    display: table-cell;
}
.r-con .tab-box .tab-con .tab-item .load-state span:before {
    text-align: center;
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background-image: url('~assets/img/bili-wrapper/live-module/r-con/2.png');
    background-repeat: no-repeat;
    margin-right: 5px;
    margin-top: -3px;
    background-position: center -598px;
}
.r-con .tab-box .tab-con .tuijian{
	border-radius: 4px;
    overflow: hidden;
}
.r-con .tab-box .tab-con .tuijian .panel .title {
    height: 51px;
    line-height: 30px;
    font-size: 12px;
}
.r-con .tab-box .tab-con .tuijian .panel .trig{
	bottom: 0;
    right: 0;
    width: 100%;
    text-align: center;
    padding: 5px 0;
    background: rgba(0,0,0,.4);
}
.r-con .tab-box .tab-con .tuijian .panel .trig span{
	height: 6px;
}
.r-con .tab-box .tab-con .tuijian .panel .trig span.on{
	width: 30px;
    background: #f45d8f;
}
.r-con .tab-box .tab-con .tuijian .pic {
    margin-top: 20px;
    display: inline-block;
}
</style>