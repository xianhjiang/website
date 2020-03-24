<template>
    <div class="biliManga clear-fix">
    	<div class="l-con">
	    	<comers-module :headline="headline" 
	    	:tabList="tabList" @tabItemClick="tabItemClick"
	    	></comers-module>
	      	<storey-box class="storey-box clear-fix"
	      	:cardList="cardList[currentIndex]" 
	      	:issnum="false"></storey-box>
      	</div>
      	<rankingManga class="right rankingManga" h="排行" 
      	:tabList="tabList2" :ranklist="ranklist"></rankingManga>
    </div>
</template>
<script>
	
	import comersModule from 'components/common/comersModule'
	import storeyBox from 'components/content/bili-wrapper/subComponents/live-module/storeyBox'
	import rankingManga from 'components/common/rankingManga'
    export default {
        name:'biliManga',
        data() {
            return { 
            	currentIndex:0,
            	tabList2:['人气','应援','免费'],
               headline:{
               	name:'漫画',
               	bp:'-139px -1931px',
               	num:'换一换',
               	linkMore:'更多'
               },
               tabList:['人气推荐','今日更新推荐','下载APP'],
               ranklist:[
                    [
                      {src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/rank/1.webp'),title:'鬼灭之刃',label:'冒险 奇幻',update:'更新至184话',isfirst:true},
                      {title:'BEASTARS 动物狂想曲',update:'更新至155话'},
                      {title:'幽冥诡匠',update:'更新至214话'},
                      {title:'入间同学入魔了！',update:'更新至134话'},
                      {title:'租借女友',update:'更新至118话'},
                      {title:'天官赐福',update:'更新至7话'},
                      {title:'我的英雄学园',update:'更新至251话'},
                      {title:'关于我转生变成史莱姆这档事',update:'更新至65话'},
                      {title:'辉夜大小姐想让我告白 ~天才们的恋爱头脑战~',update:'更新至170话'},
                      {title:'三老爷惊奇手札',update:'更新至333话'},
                    ],
                    [
                      {src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/rank/2.webp'),title:'天官赐福',label:'古风 改编',update:'更新至7话',isfirst:true},
                      {title:'人间百里锦',update:'更新至1话'},
                      {title:'LILY',update:'更新至福利活动'},
                      {title:'BLISS~极乐幻奇谭！',update:'更新至18话'},
                      {title:'LALA',update:'更新至S2·5'},
                      {title:'Coffee & Vanilla 咖啡和香草',update:'更新至53话'},
                      {title:'租借女友',update:'更新至118话'},
                      {title:'钢之炼金术师',update:'更新至外传'},
                      {title:'幽冥诡匠',update:'更新至214话'},
                      {title:'五等分的新娘',update:'更新至112话'},
                    ],
                    [
                      {src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/rank/2.webp'),title:'天官赐福',label:'古风 改编',update:'更新至7话',isfirst:true},
                      {title:'非人哉',update:'更新至515话'},
                      {title:'小魔头暴露啦！',update:'更新至22话'},
                      {title:'我在皇宫当巨巨',update:'更新至112话'},
                      {title:'航海王',update:'更新至963话'},
                      {title:'嫁给一个死太监',update:'更新至45话'},
                      {title:'战国千年',update:'更新至76话'},
                      {title:'鲲吞天下',update:'更新至28话'},
                      {title:'反派初始化',update:'更新至请假条'},
                      {title:'女装大佬养成记',update:'更新至269话'},
                    ]
               ],
               cardList:[
               		[
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/porecommend/1.webp'),t:'BEASTARS 动物狂想曲',num:'校园'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/porecommend/2.webp'),t:'我的青春恋爱物语果然有问题。',num:'校园 日常'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/porecommend/3.webp'),t:'Fate/Extra CCC FoxTail',num:'奇幻'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/porecommend/4.webp'),t:'欢迎来到实力至上主义的教室',num:'校园'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/porecommend/5.webp'),t:'非人哉',num:'搞笑 日常'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/porecommend/6.webp'),t:'鬼灭之刃',num:'冒险 奇幻'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/porecommend/7.webp'),t:'齐木楠雄的灾难',num:'校园 日常'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/porecommend/8.webp'),t:'如果历史是一群喵',num:'萌系 治愈'}
						
				    ],
				    [
				   		{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/torecommend/1.webp'),t:'天价宠妻：总裁夫人休想逃',num:'恋爱 都市'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/torecommend/2.webp'),t:'王爷不能撩',num:'恋爱 古风'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/torecommend/3.webp'),t:'我本废柴',num:'都市 奇幻'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/torecommend/4.webp'),t:'地府我开的',num:'热血 都市'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/torecommend/5.webp'),t:'灵武帝尊',num:'热血 奇幻'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/torecommend/6.webp'),t:'鬼灭之刃',num:'冒险 奇幻'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/torecommend/7.webp'),t:'豹系男友的千层套路',num:'恋爱 都市'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/torecommend/8.webp'),t:'夏天的谎言',num:'冒险 奇幻'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/torecommend/9.webp'),t:'王爷你好贱',num:'恋爱 古风'},
						{src:require('@/assets/img/bili-wrapper/bili-manga/cartoon/torecommend/10.webp'),t:'再见绝望老师',num:'搞笑 日常'},
				    ]

               ]
            }
        },
        components: {
            comersModule,
            storeyBox,
            rankingManga
        },
        methods:{
        	tabItemClick(i){
        		this.currentIndex=i
        	}
        }
    }
</script>
<style>
.biliManga .headline{
	margin-right: 20px
}
.biliManga .l-con{
	width: 720px;
/*	margin-right:20px;*/
}
.biliManga .storey-box{
	height: 560px;
    overflow: hidden;
    padding-top: 20px;
    width: 100%;
}
.biliManga .groomModule{
	position: relative;
    width: 160px;
    height: 213px;
    display: block;
    overflow: hidden;
    text-align: center;
    border-radius: 4px;
}
.biliManga .card-live-module{
	position: relative;
    width: 160px;
    height: 261px;
    display: block;
    overflow: hidden;
    text-align: center;
    border-radius: 4px;
}
.biliManga .cardLiveModule:hover .mask {
     opacity: 0; 
}
.biliManga .cardLiveModule .num{
	text-align: left;
}
.biliManga .cardLiveModule:hover .num{
	bottom: 0;
}
.biliManga .rankingManga{
	width: 260px;
  min-height: 360px;
}
</style>