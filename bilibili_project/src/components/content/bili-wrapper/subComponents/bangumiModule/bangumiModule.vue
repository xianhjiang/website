<template>
    <div class="bangumiModule">
    	<gg-floor-module :src="ggFloorModuleImg.src"></gg-floor-module>
      	<div class="up clear-fix">
      		<div class="l-con">
      			<headline name="番剧" bp="-141px -140px"
      			 :isreadPush="false" linkMore="新翻时间表">
      			 </headline>
      			<bili-tab @tabItemClick="tabItemClick" class="bili-tab" :tabList="tabList" 
      			></bili-tab>
      			<timing-box class="timing-box custom-scrollbar clear-fix"
      			 :timingBoxlists="newests[currentIndex]">
      				
      			</timing-box>
      		</div>
      		<report-wrap-module style="width: 260px"></report-wrap-module>
      	</div>
    </div>
</template>
<script>
	import ggFloorModule from 'components/common/ggFloorModule'
	import headline from 'components/common/headline'
	import biliTab from 'components/common/biliTab'
	import timingBox from 'components/common/timingBox'
	import reportWrapModule from 'components/common/reportWrapModule'
    export default {
        name:'bangumiModule',
        data() {
            return { 
            	currentIndex:0,
               ggFloorModuleImg:{
               	src:require('@/assets/img/bili-wrapper/bangumi-module/gg-floor-module/1.jpg')
               },
               tabList:['最新','一','二','三','四','五','六','日',],
               newests:[
	               	[
				 		{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/1.webp'),title:'暖暖日记 4th',published:'第35话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/2.webp'),title:'廚神小當家（僅限台灣地區）',published:'第9话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/3.webp'),title:'高分少女 第二季',published:'第21话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/4.webp'),title:'歌舞伎町夏洛克',published:'第8话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/5.webp'),title:'歌舞伎町夏洛克（僅限港澳台地區）',published:'第8话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/6.webp'),title:'厨神小当家',published:'第8话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/7.webp'),title:'厨神小当家（中配）',published:'第8话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/8.webp'),title:'炎炎消防队',published:'第19话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/9.webp'),title:'炎炎消防隊（僅限港澳台地區）',published:'第19话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/10.webp'),title:'碧藍幻想 第二季（僅限港澳台地區）',published:'第8话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/11.webp'),title:'食戟之靈 神之皿（僅限港澳台地區）',published:'第8话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/12.webp'),title:'厨病激发男孩',published:'第9话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/13.webp'),title:'厨病激发BOY（僅限台灣地區）',published:'第9话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/14.webp'),title:'Ｄｒ．ＳＴＯＮＥ 石纪元',published:'第22话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/15.webp'),title:'Ｄｒ．ＳＴＯＮＥ（新石紀）（僅限港澳台地區）',published:'第22话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/newest/16.webp'),title:'银河英雄传说：全新命题  星乱',published:'第22话'}
				    ],
				    [
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/monday/1.webp'),title:'超级小白',published:'第8话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/monday/2.webp'),title:'超级小白（中配）',published:'第8话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/monday/3.webp'),title:'冰海战记',published:'第20话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/monday/4.webp'),title:'Four of a Kind 四牌士 第二季',published:'第36话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/monday/5.webp'),title:'智龙迷城',published:'第87话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/monday/6.webp'),title:'我，不是说了能力要平均值么！',published:'第9话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/monday/7.webp'),title:'募恋英雄',published:'第9话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/monday/8.webp'),title:'梦幻之星 神谕篇',published:'第8话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/monday/9.webp'),title:'夢幻之星2 EPISODE ORACLE（僅限台灣地區）',published:'第8话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/monday/10.webp'),title:'募戀英雄（僅限港澳台地區）',published:'第8话'},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/monday/11.webp'),title:'我不是說了能力要平均值嗎？（僅限港澳台地區）',published:'第9话'}
					],
					[
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/tuesday/1.webp'),title:'香蕉喵 不可思议的伙伴们',published:'第10话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/tuesday/2.webp'),title:'香蕉喵 不可思議的夥伴們（僅限港澳台地區）',published:'第10话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/tuesday/3.webp'),title:'黑色四叶草',published:'第112话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/tuesday/4.webp'),title:'钻石王牌 act II 后半',published:'第36话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/tuesday/5.webp'),title:'少年阿贝 GO!GO!小芝麻 第四季',published:'第23话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/tuesday/6.webp'),title:'异界群敌 代码重组',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/tuesday/7.webp'),title:'Z/X Code reunion（僅限台灣地區）',published:'第9话',}
					],
					[
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/wednesday/1.webp'),title:'神田川JET GIRLS（僅限台灣地區）',published:'第7话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/wednesday/2.webp'),title:'花牌情缘 第三季',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/wednesday/3.webp'),title:'花牌情緣 第三季（僅限台灣地區）',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/wednesday/4.webp'),title:'眾神的逆鱗（僅限台灣地區）',published:'第6话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/wednesday/5.webp'),title:'诸神的逆鳞',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/wednesday/6.webp'),title:'虚空魔境 第二季',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/wednesday/7.webp'),title:'浦岛坂田船的日常',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/wednesday/8.webp'),title:'浦島坂田船的日常（僅限台灣地區）',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/wednesday/9.webp'),title:'这个勇者明明超强却过分慎重',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/wednesday/10.webp'),title:'這個勇者明明超TUEEE卻過度謹慎！（僅限台灣地區）',published:'第8话',}
					],
					[
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/1.webp'),title:'爱书的下克上：为了成为图书管理员不择手段！',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/2.webp'),title:'喜欢本大爷的竟然就你一个？',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/3.webp'),title:'小書痴的下剋上:為了成為圖書管理員不擇手段!（僅限台灣地區）',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/4.webp'),title:'喜歡本大爺的竟然就妳一個？（僅限台灣地區）',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/5.webp'),title:'放学后桌游俱乐部',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/6.webp'),title:'放學後桌遊俱樂部（僅限港澳台地區）',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/7.webp'),title:'动物狂想曲 / BEASTARS',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/8.webp'),title:'高达创形者 再起',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/9.webp'),title:'高達創戰潛行者 Re:RISE（僅限港澳地區）',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/10.webp'),title:'鋼彈創鬥者潛網大戰 Re:RISE（僅限台灣地區）',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/11.webp'),title:'超人高中生们即便在异世界也能从容生存！',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/12.webp'),title:'碧蓝航线',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/13.webp'),title:'刺客守则',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/14.webp'),title:'碧藍航線（僅限港澳台地區）',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/thursday/16.webp'),title:'刺客守則（僅限港澳台地區）',published:'第8话'}
					],
					[
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/friday/1.webp'),title:'非枪人生',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/friday/2.webp'),title:'非槍人生（僅限台灣地區）',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/friday/3.webp'),title:'星合之空',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/friday/4.webp'),title:'星合之空（僅限台灣地區）',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/friday/5.webp'),title:'银河英雄传说：全新命题  星乱',published:'第22话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/friday/6.webp'),title:'銀河英雄傳說：全新命題  星亂（僅限港澳台地區）',published:'第22话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/friday/7.webp'),title:'Ｄｒ．ＳＴＯＮＥ 石纪元',published:'第22话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/friday/8.webp'),title:'Ｄｒ．ＳＴＯＮＥ（新石紀）（僅限港澳台地區）',published:'第22话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/friday/9.webp'),title:'厨病激发男孩',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/friday/10.webp'),title:'厨病激发BOY（僅限台灣地區）',published:'第9话',}
					],
					[	
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/1.webp'),title:'碧藍幻想 第二季（僅限港澳台地區）',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/2.webp'),title:'食戟之靈 神之皿（僅限港澳台地區）',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/3.webp'),title:'炎炎消防队',published:'第19话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/4.webp'),title:'炎炎消防隊（僅限港澳台地區）',published:'第19话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/5.webp'),title:'厨神小当家',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/6.webp'),title:'厨神小当家（中配）',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/7.webp'),title:'歌舞伎町夏洛克',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/8.webp'),title:'歌舞伎町夏洛克（僅限港澳台地區）',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/9.webp'),title:'高分少女 第二季',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/10.webp'),title:'廚神小當家（僅限台灣地區）',published:'第21话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/11.webp'),title:'暖暖日记 4th',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/12.webp'),title:'我的英雄学院 第四季',published:'第35话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/13.webp'),title:'我的英雄學院 第四季（僅限港澳台地區）',published:'第70话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/14.webp'),title:'入间同学入魔了',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/15.webp'),title:'入間同學入魔了（僅限台灣地區）',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/saturday/16.webp'),title:'戰×戀（僅限港澳台地區）',published:'第9话',},
					],
					[
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/1.webp'),title:'命运-冠位指定 绝对魔兽战线 巴比伦尼亚',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/2.webp'),title:'Fate/Grand Order - 絕對魔獸戰線巴比倫尼亞 -（僅限台灣地區）',published:'第8话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/3.webp'),title:'刀剑神域 爱丽丝篇 异界战争',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/4.webp'),title:'刀劍神域 Alicization War of Underworld（僅限台灣地區）',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/5.webp'),title:'我们无法一起学习！',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/6.webp'),title:'我們真的學不來！第二季（僅限台灣地區）',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/7.webp'),title:'一弦定音！第二季（僅限港澳台地區）',published:'第22话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/8.webp'),title:'美妙☆频道',published:'第86话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/9.webp'),title:'博人传 火影忍者新时代',published:'第134话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/10.webp'),title:'偶像梦幻祭',published:'第21话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/11.webp'),title:'偶像夢幻祭（僅限台灣地區）',published:'第21话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/12.webp'),title:'歌塑世界',published:'第9话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/13.webp'),title:'美妙射击部',published:'第7.5话',},
						{src:require('@/assets/img/bili-wrapper/bangumi-module/dramaSeries/sunday/14.webp'),title:'美妙射擊部 / RIFLE IS BEAUTIFUL（僅限台灣地區）',published:'第7.5话',}
					]
               ]
            }
        },
        components: {
            ggFloorModule,
            headline,
            biliTab,
            timingBox,
            reportWrapModule
        },
        methods:{
        	tabItemClick(i){
        		this.currentIndex=i
        	}
        }
    }
</script>
<style>
.bangumiModule .up{
	padding-bottom: 15px;
	display: flex;
}
.bangumiModule .up .l-con{
	width: 720px;
	position: relative;
}
.bangumiModule .up .l-con .bili-tab{
	position: absolute;
	left: 100px;
	top: 0;
	width: 470px;
	font-size: 18px;
    height: 30px;
    line-height: 30px;
}
.bangumiModule .up .l-con .bili-tab .biliTabItem{
	width: 48px;
    border-color: #e5e9ef;
    text-align: center;
    margin: 0;
    padding: 2px 4px 7px;
}
.bangumiModule .up .l-con .bili-tab .biliTabItem.on{
	border-color: #00a1d6;
}
.bangumiModule .up .l-con .link-more{
	position: absolute;
    right: 20px;
    top: -7px;
    border: 1px solid #f25d8e;
    width: 104px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    color: #f25d8e;
    font-size: 14px;
    border-radius: 4px;
    transition: .1s;
} 
.bangumiModule .up .l-con .link-more .icon {
    display: inline-block;
    vertical-align: middle;
    background-position: -478px -281px;
    width: 6px;
    height: 12px;
    margin: -2px 0 0 5px;
}
.bangumiModule .up .l-con .link-more:hover{
	color: #fff;
    background-color: #f25d8e;
}
.bangumiModule .up .l-con .link-more:hover .icon{
	background-position: -541px -218px;
}
.bangumiModule .up .l-con .timing-box{
	position: relative;
    margin: 26px 20px 40px 0;
    height: 398px;
    overflow-y: auto;
}
</style>