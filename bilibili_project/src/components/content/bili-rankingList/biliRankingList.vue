<template>
    <div class="biliRankingList">
     	<bili-tab @tabItemClick="tabItemClick" :tabList="tabList" :bpList="bpList"></bili-tab>
     	<div class="rank-tab-wrap">
     		<bili-tab class="ranktab" @tabItemClick="tabItemClick1" ref="tab" :tabList="tabList1[currentIndex]"></bili-tab>
     		<headline :isdropdown="true" :dropdownList="item" class="rankheadline" :isreadPush="false" :key="item[0]"
     		v-for="item in dropdownLists[currentIndex]"></headline>
     	</div>
     	<div class="rank_tips">
     		<i class="b-icon-tip"></i>
     		<span class="tip-txt">统计所有投稿在 2019年12月07日 - 2019年12月10日 的数据综合得分，每日更新一次</span>
     	</div>
     	<div class="rank-list-wrap" 
     	v-for="(items,i) in ranklists" 
     	v-if="currentIndex==i">
     		<rank-ltem 
     		v-for="(item,i) in items[currentIndex1]"
     		 :rankList="item" :num="i" :key="i" 
     		 @click.native="seeGoods(item)"></rank-ltem>
     	</div>
     	<gg-floor-module class="gg-floor-module" :src="src">
     		
     	</gg-floor-module>
    </div>
</template>
<script>
	import biliTab from 'components/common/biliTab'
	import headline from 'components/common/headline'
	import rankLtem from 'components/content/bili-rankingList/subComponents/rankLtem'
	import ggFloorModule from 'components/common/ggFloorModule'
    export default {
        name:'biliRankingList',
        data() {
            return { 
            	currentIndex:0,
            	currentIndex1:0,
            	src:require('@/assets/img/bili-rankingList/1.jpg'),
            	ranklists:[ [
	            	[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/quanzhan/1.webp'),
							title:'【老番茄】史上最骚杀手(第七集)',
							data1:'295.0万',
							data2:'2.9万',
							data3:'老番茄',
							pts:'5795220'
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/quanzhan/2.webp'),
							title:'全世界评分最高动画TOP100！史诗神作！不朽经典！',
							data1:'151.4万',
							data2:'3.5万',
							data3:'奋斗',
							pts:'3825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/quanzhan/3.webp'),
							title:'破案了 阿伟的死因找到了',
							data1:'211.03万',
							data2:'2.0万',
							data3:'阿木降临',
							pts:'586239'
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/quanzhan/4.webp'),
							title:'【ICON-X】宴 请 八 方【BML2019广州单品】',
							data1:'362.5万',
							data2:'3.5万',
							data3:'拼搏',
							pts:'3825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/quanzhan/5.webp'),
							title:'【朱广权新Rap】央 视 新 闻 来 B 站 了！',
							data1:'151.4万',
							data2:'3.5万',
							data3:'奋斗',
							pts:'3825359'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/donghua/1.webp'),
							title:'全世界评分最高动画TOP100！史诗神作！不朽经典！',
							data1:'151.4万',
							data2:'3.5万',
							data3:'奋斗',
							pts:'3825359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/donghua/2.webp'),
							title:'破案了 阿伟的死因找到了',
							data1:'211.03万',
							data2:'2.0万',
							data3:'阿木降临',
							pts:'586239'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/donghua/3.webp'),
							title:'全程高燃（沙雕）！激情解说火影忍者最巅峰的一战！',
							data1:'151.4万',
							data2:'3.5万',
							data3:'奋斗',
							pts:'3825359'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/donghua/4.webp'),
							title:'全程高能！请戴好耳机！前方甜蜜大暴击！！前方甜蜜大暴击！！极致舒适，大型秀恩爱下饭现场',
							data1:'122.4万',
							data2:'3.5万',
							data3:'sdsd',
							pts:'781499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/donghua/5.webp'),
							title:'【沙雕动画】做着不喜欢工作的你',
							data1:'151.4万',
							data2:'4.2万',
							data3:'偶发',
							pts:'4587412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/guochuangxiangguan/1.webp'),
							title:'【虹七同人】伞坊战还原正式版（附2p）',
							data1:'626.4万',
							data2:'13.5万',
							data3:'发发生',
							pts:'9625359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/guochuangxiangguan/2.webp'),
							title:'测测你对《刺客伍六七》的熟悉程度吧！',
							data1:'425.03万',
							data2:'12.0万',
							data3:'供货商染发膏',
							pts:'4526358'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/guochuangxiangguan/3.webp'),
							title:'这部动画竟美到炸裂！未开播就被观众就吹爆？一觉醒来惨遭性别互换【国漫槽推荐#14】',
							data1:'399.4万',
							data2:'8.5万',
							data3:'发的发生',
							pts:'38253519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/guochuangxiangguan/4.webp'),
							title:'捉羊不如来跳抖肩舞',
							data1:'5.4万',
							data2:'3.5万',
							data3:'sdsd',
							pts:'1781499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/guochuangxiangguan/5.webp'),
							title:'【沙雕动画】做着不喜欢工作的你',
							data1:'2.4万',
							data2:'1.2万',
							data3:'偶发',
							pts:'4587412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yinyue/1.webp'),
							title:'【一想到你我就.....腾格尔版《芒种》真的来了！',
							data1:'126.4万',
							data2:'3.5万',
							data3:'感受感受',
							pts:'9625359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yinyue/2.webp'),
							title:'原来这些耳熟能详的歌曲都是10年前的，真是个疯狂的年代啊！',
							data1:'125.03万',
							data2:'2.0万',
							data3:'死优化施工方法',
							pts:'526358'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yinyue/3.webp'),
							title:'『书摘』“这是我要给你的，宇宙级别的浪漫”',
							data1:'59.4万',
							data2:'5.5万',
							data3:'极寒顺',
							pts:'8253519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yinyue/4.webp'),
							title:'捉羊不如来跳抖肩舞',
							data1:'5.4万',
							data2:'3.5万',
							data3:'sdsd',
							pts:'1781499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yinyue/5.webp'),
							title:'没内味儿？《野狼disco》改编古风版（听完你还会唱原版吗）',
							data1:'2.4万',
							data2:'1.2万',
							data3:'偶发',
							pts:'4587412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/wudao/1.webp'),
							title:'【ICON-X】宴 请 八 方【BML2019广州单品】',
							data1:'226.4万',
							data2:'13.5万',
							data3:'瓯都市',
							pts:'9625359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/wudao/2.webp'),
							title:'【久等了】猛男舞团正式入驻B站啦！！！',
							data1:'125.03万',
							data2:'8.0万',
							data3:'绝对是南京',
							pts:'1526358'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/wudao/3.webp'),
							title:'『【猛男版】新 宝 岛',
							data1:'59.4万',
							data2:'5.5万',
							data3:'胡使用',
							pts:'8253519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/wudao/4.webp'),
							title:'【舞蹈风暴】“魏璎珞”“富察傅恒”来舞蹈风暴啦！敖定雯王占峰《守候》用芭蕾演绎《延禧宫略》雪落下的那一刻，你的心化了吗？',
							data1:'5.4万',
							data2:'2.5万',
							data3:'示范法',
							pts:'151499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/wudao/5.webp'),
							title:'【优优x醋醋】做人不要太攀比，南京路上蹦野迪——野狼DISCO',
							data1:'2.4万',
							data2:'1.2万',
							data3:'qi发',
							pts:'4587412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/youxi/1.webp'),
							title:'【老番茄】史上最骚杀手(第七集)',
							data1:'126.4万',
							data2:'13.5万',
							data3:'就是缘分',
							pts:'2525359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/youxi/2.webp'),
							title:'两个小姐姐疯狂喷起来了，为了争夺男神老板…【小潮国基网骗】',
							data1:'85.3万',
							data2:'8.0万',
							data3:'你的速度',
							pts:'1526358'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/youxi/3.webp'),
							title:'【散人】逍遥铁板 在线除三（2.怒斥白莲小三）',
							data1:'59.4万',
							data2:'5.5万',
							data3:'野鸡毛',
							pts:'4253519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/youxi/4.webp'),
							title:'当英雄拥有6000%极限攻速：普攻开打辛德拉、峡谷电焊工大眼&维克托......',
							data1:'3.4万',
							data2:'2.5万',
							data3:'上天',
							pts:'751499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/youxi/5.webp'),
							title:'【这个游戏脑洞太大了！永远都猜不到下一关是啥！',
							data1:'2.4万',
							data2:'1.2万',
							data3:'dfsfs',
							pts:'587412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/keji/1.webp'),
							title:'【资本与明星03】杨幂的资本博弈之路',
							data1:'116.4万',
							data2:'9.5万',
							data3:'就是缘分',
							pts:'2525359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/keji/2.webp'),
							title:'极端主义为祸：中国新疆！【英文纪录片大尺度全方位披露】',
							data1:'85.3万',
							data2:'7.0万',
							data3:'双节棍',
							pts:'926358'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/keji/3.webp'),
							title:'【为什么说Photoshop 2020是最适合萌新入门的版本？',
							data1:'49.4万',
							data2:'5.5万',
							data3:'野鸡毛',
							pts:'453519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/keji/4.webp'),
							title:'【香港真相大起底】暴力乱港实录',
							data1:'23.4万',
							data2:'2.5万',
							data3:'嘻嘻',
							pts:'751499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/keji/5.webp'),
							title:'【双语】CGTN大尺度披露中国新疆反恐形势，首次公布大量恐袭原始画面丨《Fighting terrorism in Xinjiang》',
							data1:'12.4万',
							data2:'1.2万',
							data3:'广东共青团',
							pts:'587412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shuma/1.webp'),
							title:'不知道显卡好坏，看了这张图你就明白了',
							data1:'76.4万',
							data2:'6.5万',
							data3:'离合是非',
							pts:'1525359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shuma/2.webp'),
							title:'GENTLE MONSTER华为智能眼镜使用体验',
							data1:'55.3万',
							data2:'5.0万',
							data3:'霹雳侠',
							pts:'926358'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shuma/3.webp'),
							title:'哥伦比亚大毒枭弟弟推折叠屏手机',
							data1:'49.4万',
							data2:'3.5万',
							data3:'野鸡毛',
							pts:'453519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shuma/4.webp'),
							title:'【小白开箱】库克：不改了，明年的iPhone就按这个做！',
							data1:'23.4万',
							data2:'2.5万',
							data3:'哈哈哈哈哈',
							pts:'51499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shuma/5.webp'),
							title:'【爱搞机】我前后刷了 6 万元买 16 英寸 MacBook Pro：非常恼火！',
							data1:'12.4万',
							data2:'1.2万',
							data3:'广东共青团',
							pts:'57412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shenghuo/1.webp'),
							title:'【朱广权新Rap】央 视 新 闻 来 B 站 了！',
							data1:'95.4万',
							data2:'26.5万',
							data3:'四四方方',
							pts:'1925359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shenghuo/2.webp'),
							title:'「黑 寡 妇」',
							data1:'75.3万',
							data2:'15.0万',
							data3:'西安UN发呢个',
							pts:'116358'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shenghuo/3.webp'),
							title:'她开口的瞬间，我沦陷了',
							data1:'59.4万',
							data2:'6.5万',
							data3:'野鸡毛',
							pts:'953519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shenghuo/4.webp'),
							title:'上千元买块一米长大灵芝！每天吃点都可以当传家宝了！',
							data1:'33.4万',
							data2:'3.5万',
							data3:'及收到货',
							pts:'51499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shenghuo/5.webp'),
							title:'我伪装成了外卖小哥，偷拍揭秘某些外卖到底有多「脏」！',
							data1:'12.4万',
							data2:'1.2万',
							data3:'广东共青团',
							pts:'57412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/guichu/1.webp'),
							title:'【泠鸢rap】恋爱循环，也就听个一百遍呀一百遍~',
							data1:'115.4万',
							data2:'26.5万',
							data3:'四四方方',
							pts:'925359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/guichu/2.webp'),
							title:'遇♂见',
							data1:'75.3万',
							data2:'9.0万',
							data3:'大哥大哥',
							pts:'616358'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/guichu/3.webp'),
							title:'【华农兄弟】伤心的人别看华农',
							data1:'49.4万',
							data2:'9.5万',
							data3:'鸡毛飞上天',
							pts:'193519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/guichu/4.webp'),
							title:'【灵魂rap】老八带你吃美食',
							data1:'33.4万',
							data2:'5.5万',
							data3:'顺丰快递',
							pts:'91499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/guichu/5.webp'),
							title:'【全明星】我 和 你 荡 秋 千',
							data1:'9.4万',
							data2:'1.2万',
							data3:'废物',
							pts:'57412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shishang/1.webp'),
							title:'28天 高效瘦小腿！脂肪型 肌肉型 水肿型 针对训练 漫画腿get',
							data1:'195.4万',
							data2:'126.5万',
							data3:'大大姐',
							pts:'925359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shishang/2.webp'),
							title:'说出价格你也不会死心的10双好鞋！2019年度精选TOP10 | Z说球鞋',
							data1:'75.3万',
							data2:'9.0万',
							data3:'大哥大哥',
							pts:'616358'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shishang/3.webp'),
							title:'妹妹，网恋吗？你喜欢的脸我都有',
							data1:'29.4万',
							data2:'9.5万',
							data3:'鸡毛飞上天',
							pts:'193519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shishang/4.webp'),
							title:'【嫂】两款妆容详解？百元内，神仙化妆工具！',
							data1:'13.4万',
							data2:'5.5万',
							data3:'顺丰快递',
							pts:'91499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/shishang/5.webp'),
							title:'【三周年】9分钟看完200个破产女神小姐姐！（Lolita/JK制服/汉服)',
							data1:'9.4万',
							data2:'1.2万',
							data3:'废物',
							pts:'57412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yule/1.webp'),
							title:'【博君一肖】这极可怕！一定要看到最后，你会回来找我哭……',
							data1:'95.4万',
							data2:'26.5万',
							data3:'学习姐',
							pts:'95359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yule/2.webp'),
							title:'我隔三差五就要拿出来看一遍的视频。 因为我真的觉得这个时候小s挺美。而且每次听这首歌，因为曲风欢快，回家的时间可以缩短五分钟。',
							data1:'75.3万',
							data2:'19.0万',
							data3:'哥大哥',
							pts:'616358'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yule/3.webp'),
							title:'《2019主持人大赛》第六期 嘉宾＆主持人花絮',
							data1:'29.4万',
							data2:'9.5万',
							data3:'飞上天',
							pts:'193519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yule/4.webp'),
							title:'【哔计划】胡歌：我从B站视频里找到了演艺道路的新方向',
							data1:'13.4万',
							data2:'5.5万',
							data3:'丰快递',
							pts:'91499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yule/5.webp'),
							title:'“ 可惜没如果 ”',
							data1:'9.4万',
							data2:'1.2万',
							data3:'信息物',
							pts:'57412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yingshi/1.webp'),
							title:'“我想跟你在一起”',
							data1:'85.4万',
							data2:'26.5万',
							data3:'学习姐',
							pts:'95359'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yingshi/2.webp'),
							title:'《感动美国年度人物 小丑》 用正能量的方式打开《小丑》！',
							data1:'65.3万',
							data2:'19.0万',
							data3:'无敌烽火轮',
							pts:'616358'

						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yingshi/3.webp'),
							title:'处 处 吻',
							data1:'39.4万',
							data2:'9.5万',
							data3:'飞上天',
							pts:'193519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yingshi/4.webp'),
							title:'【阿斗】每集反转！结局细思极恐！强推这部悬疑惊悚剧《不思异：录像》',
							data1:'23.4万',
							data2:'6.5万',
							data3:'快递',
							pts:'91499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/quanzhanbang/yingshi/5.webp'),
							title:'【刘哔】盘点十大童年阴影！憋尿带给我们的美好回忆！',
							data1:'9.4万',
							data2:'1.2万',
							data3:'信息物',
							pts:'57412'
							
						},
					]				

				],
				[    
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/quanzhan/1.webp'),
							title:'【老番茄】史上最骚杀手(第七集)',
							data1:'295.0万',
							data2:'2.9万',
							data3:'老番茄',
							pts:'5795220'
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/quanzhan/2.webp'),
							title:'全世界评分最高动画TOP100！史诗神作！不朽经典！',
							data1:'151.4万',
							data2:'3.5万',
							data3:'奋斗',
							pts:'3825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/quanzhan/3.webp'),
							title:'破案了 阿伟的死因找到了',
							data1:'211.03万',
							data2:'2.0万',
							data3:'阿木降临',
							pts:'586239'
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/quanzhan/4.webp'),
							title:'【ICON-X】宴 请 八 方【BML2019广州单品】',
							data1:'362.5万',
							data2:'3.5万',
							data3:'拼搏',
							pts:'3825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/quanzhan/5.webp'),
							title:'【朱广权新Rap】央 视 新 闻 来 B 站 了！',
							data1:'151.4万',
							data2:'3.5万',
							data3:'奋斗',
							pts:'3825359'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/donghua/1.webp'),
							title:'全世界评分最高动画TOP100！史诗神作！不朽经典！',
							data1:'151.4万',
							data2:'3.5万',
							data3:'奋斗',
							pts:'3825359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/donghua/2.webp'),
							title:'破案了 阿伟的死因找到了',
							data1:'211.03万',
							data2:'2.0万',
							data3:'阿木降临',
							pts:'586239'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/donghua/3.webp'),
							title:'全程高燃（沙雕）！激情解说火影忍者最巅峰的一战！',
							data1:'151.4万',
							data2:'3.5万',
							data3:'奋斗',
							pts:'3825359'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/donghua/4.webp'),
							title:'全程高能！请戴好耳机！前方甜蜜大暴击！！前方甜蜜大暴击！！极致舒适，大型秀恩爱下饭现场',
							data1:'122.4万',
							data2:'3.5万',
							data3:'sdsd',
							pts:'781499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/donghua/5.webp'),
							title:'【沙雕动画】做着不喜欢工作的你',
							data1:'151.4万',
							data2:'4.2万',
							data3:'偶发',
							pts:'4587412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/guochuangxiangguan/1.webp'),
							title:'【虹七同人】伞坊战还原正式版（附2p）',
							data1:'626.4万',
							data2:'13.5万',
							data3:'发发生',
							pts:'9625359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/guochuangxiangguan/2.webp'),
							title:'测测你对《刺客伍六七》的熟悉程度吧！',
							data1:'425.03万',
							data2:'12.0万',
							data3:'供货商染发膏',
							pts:'4526358'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/guochuangxiangguan/3.webp'),
							title:'这部动画竟美到炸裂！未开播就被观众就吹爆？一觉醒来惨遭性别互换【国漫槽推荐#14】',
							data1:'399.4万',
							data2:'8.5万',
							data3:'发的发生',
							pts:'38253519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/guochuangxiangguan/4.webp'),
							title:'捉羊不如来跳抖肩舞',
							data1:'5.4万',
							data2:'3.5万',
							data3:'sdsd',
							pts:'1781499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/guochuangxiangguan/5.webp'),
							title:'【沙雕动画】做着不喜欢工作的你',
							data1:'2.4万',
							data2:'1.2万',
							data3:'偶发',
							pts:'4587412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yinyue/1.webp'),
							title:'【一想到你我就.....腾格尔版《芒种》真的来了！',
							data1:'126.4万',
							data2:'3.5万',
							data3:'感受感受',
							pts:'9625359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yinyue/2.webp'),
							title:'原来这些耳熟能详的歌曲都是10年前的，真是个疯狂的年代啊！',
							data1:'125.03万',
							data2:'2.0万',
							data3:'死优化施工方法',
							pts:'526358'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yinyue/3.webp'),
							title:'『书摘』“这是我要给你的，宇宙级别的浪漫”',
							data1:'59.4万',
							data2:'5.5万',
							data3:'极寒顺',
							pts:'8253519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yinyue/4.webp'),
							title:'捉羊不如来跳抖肩舞',
							data1:'5.4万',
							data2:'3.5万',
							data3:'sdsd',
							pts:'1781499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yinyue/5.webp'),
							title:'没内味儿？《野狼disco》改编古风版（听完你还会唱原版吗）',
							data1:'2.4万',
							data2:'1.2万',
							data3:'偶发',
							pts:'4587412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/wudao/1.webp'),
							title:'【ICON-X】宴 请 八 方【BML2019广州单品】',
							data1:'226.4万',
							data2:'13.5万',
							data3:'瓯都市',
							pts:'9625359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/wudao/2.webp'),
							title:'【久等了】猛男舞团正式入驻B站啦！！！',
							data1:'125.03万',
							data2:'8.0万',
							data3:'绝对是南京',
							pts:'1526358'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/wudao/3.webp'),
							title:'『【猛男版】新 宝 岛',
							data1:'59.4万',
							data2:'5.5万',
							data3:'胡使用',
							pts:'8253519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/wudao/4.webp'),
							title:'【舞蹈风暴】“魏璎珞”“富察傅恒”来舞蹈风暴啦！敖定雯王占峰《守候》用芭蕾演绎《延禧宫略》雪落下的那一刻，你的心化了吗？',
							data1:'5.4万',
							data2:'2.5万',
							data3:'示范法',
							pts:'151499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/wudao/5.webp'),
							title:'【优优x醋醋】做人不要太攀比，南京路上蹦野迪——野狼DISCO',
							data1:'2.4万',
							data2:'1.2万',
							data3:'qi发',
							pts:'4587412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/youxi/1.webp'),
							title:'【老番茄】史上最骚杀手(第七集)',
							data1:'126.4万',
							data2:'13.5万',
							data3:'就是缘分',
							pts:'2525359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/youxi/2.webp'),
							title:'两个小姐姐疯狂喷起来了，为了争夺男神老板…【小潮国基网骗】',
							data1:'85.3万',
							data2:'8.0万',
							data3:'你的速度',
							pts:'1526358'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/youxi/3.webp'),
							title:'【散人】逍遥铁板 在线除三（2.怒斥白莲小三）',
							data1:'59.4万',
							data2:'5.5万',
							data3:'野鸡毛',
							pts:'4253519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/youxi/4.webp'),
							title:'当英雄拥有6000%极限攻速：普攻开打辛德拉、峡谷电焊工大眼&维克托......',
							data1:'3.4万',
							data2:'2.5万',
							data3:'上天',
							pts:'751499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/youxi/5.webp'),
							title:'【这个游戏脑洞太大了！永远都猜不到下一关是啥！',
							data1:'2.4万',
							data2:'1.2万',
							data3:'dfsfs',
							pts:'587412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shuma/1.webp'),
							title:'不知道显卡好坏，看了这张图你就明白了',
							data1:'76.4万',
							data2:'6.5万',
							data3:'离合是非',
							pts:'1525359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shuma/2.webp'),
							title:'GENTLE MONSTER华为智能眼镜使用体验',
							data1:'55.3万',
							data2:'5.0万',
							data3:'霹雳侠',
							pts:'926358'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shuma/3.webp'),
							title:'哥伦比亚大毒枭弟弟推折叠屏手机',
							data1:'49.4万',
							data2:'3.5万',
							data3:'野鸡毛',
							pts:'453519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shuma/4.webp'),
							title:'【小白开箱】库克：不改了，明年的iPhone就按这个做！',
							data1:'23.4万',
							data2:'2.5万',
							data3:'哈哈哈哈哈',
							pts:'51499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shuma/5.webp'),
							title:'【爱搞机】我前后刷了 6 万元买 16 英寸 MacBook Pro：非常恼火！',
							data1:'12.4万',
							data2:'1.2万',
							data3:'广东共青团',
							pts:'57412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shenghuo/1.webp'),
							title:'【朱广权新Rap】央 视 新 闻 来 B 站 了！',
							data1:'95.4万',
							data2:'26.5万',
							data3:'四四方方',
							pts:'1925359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shenghuo/2.webp'),
							title:'「黑 寡 妇」',
							data1:'75.3万',
							data2:'15.0万',
							data3:'西安UN发呢个',
							pts:'116358'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shenghuo/3.webp'),
							title:'她开口的瞬间，我沦陷了',
							data1:'59.4万',
							data2:'6.5万',
							data3:'野鸡毛',
							pts:'953519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shenghuo/4.webp'),
							title:'上千元买块一米长大灵芝！每天吃点都可以当传家宝了！',
							data1:'33.4万',
							data2:'3.5万',
							data3:'及收到货',
							pts:'51499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shenghuo/5.webp'),
							title:'我伪装成了外卖小哥，偷拍揭秘某些外卖到底有多「脏」！',
							data1:'12.4万',
							data2:'1.2万',
							data3:'广东共青团',
							pts:'57412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/guichu/1.webp'),
							title:'【泠鸢rap】恋爱循环，也就听个一百遍呀一百遍~',
							data1:'115.4万',
							data2:'26.5万',
							data3:'四四方方',
							pts:'925359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/guichu/2.webp'),
							title:'遇♂见',
							data1:'75.3万',
							data2:'9.0万',
							data3:'大哥大哥',
							pts:'616358'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/guichu/3.webp'),
							title:'【华农兄弟】伤心的人别看华农',
							data1:'49.4万',
							data2:'9.5万',
							data3:'鸡毛飞上天',
							pts:'193519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/guichu/4.webp'),
							title:'【灵魂rap】老八带你吃美食',
							data1:'33.4万',
							data2:'5.5万',
							data3:'顺丰快递',
							pts:'91499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/guichu/5.webp'),
							title:'【全明星】我 和 你 荡 秋 千',
							data1:'9.4万',
							data2:'1.2万',
							data3:'废物',
							pts:'57412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shishang/1.webp'),
							title:'28天 高效瘦小腿！脂肪型 肌肉型 水肿型 针对训练 漫画腿get',
							data1:'195.4万',
							data2:'126.5万',
							data3:'大大姐',
							pts:'925359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shishang/2.webp'),
							title:'说出价格你也不会死心的10双好鞋！2019年度精选TOP10 | Z说球鞋',
							data1:'75.3万',
							data2:'9.0万',
							data3:'大哥大哥',
							pts:'616358'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shishang/3.webp'),
							title:'妹妹，网恋吗？你喜欢的脸我都有',
							data1:'29.4万',
							data2:'9.5万',
							data3:'鸡毛飞上天',
							pts:'193519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shishang/4.webp'),
							title:'【嫂】两款妆容详解？百元内，神仙化妆工具！',
							data1:'13.4万',
							data2:'5.5万',
							data3:'顺丰快递',
							pts:'91499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/shishang/5.webp'),
							title:'【三周年】9分钟看完200个破产女神小姐姐！（Lolita/JK制服/汉服)',
							data1:'9.4万',
							data2:'1.2万',
							data3:'废物',
							pts:'57412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yule/1.webp'),
							title:'【博君一肖】这极可怕！一定要看到最后，你会回来找我哭……',
							data1:'95.4万',
							data2:'26.5万',
							data3:'学习姐',
							pts:'95359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yule/2.webp'),
							title:'我隔三差五就要拿出来看一遍的视频。 因为我真的觉得这个时候小s挺美。而且每次听这首歌，因为曲风欢快，回家的时间可以缩短五分钟。',
							data1:'75.3万',
							data2:'19.0万',
							data3:'哥大哥',
							pts:'616358'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yule/3.webp'),
							title:'《2019主持人大赛》第六期 嘉宾＆主持人花絮',
							data1:'29.4万',
							data2:'9.5万',
							data3:'飞上天',
							pts:'193519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yule/4.webp'),
							title:'【哔计划】胡歌：我从B站视频里找到了演艺道路的新方向',
							data1:'13.4万',
							data2:'5.5万',
							data3:'丰快递',
							pts:'91499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yule/5.webp'),
							title:'“ 可惜没如果 ”',
							data1:'9.4万',
							data2:'1.2万',
							data3:'信息物',
							pts:'57412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yingshi/1.webp'),
							title:'“我想跟你在一起”',
							data1:'85.4万',
							data2:'26.5万',
							data3:'学习姐',
							pts:'95359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yingshi/2.webp'),
							title:'《感动美国年度人物 小丑》 用正能量的方式打开《小丑》！',
							data1:'65.3万',
							data2:'19.0万',
							data3:'无敌烽火轮',
							pts:'616358'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yingshi/3.webp'),
							title:'处 处 吻',
							data1:'39.4万',
							data2:'9.5万',
							data3:'飞上天',
							pts:'193519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yingshi/4.webp'),
							title:'【阿斗】每集反转！结局细思极恐！强推这部悬疑惊悚剧《不思异：录像》',
							data1:'23.4万',
							data2:'6.5万',
							data3:'快递',
							pts:'91499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yingshi/5.webp'),
							title:'【刘哔】盘点十大童年阴影！憋尿带给我们的美好回忆！',
							data1:'9.4万',
							data2:'1.2万',
							data3:'信息物',
							pts:'57412'
							
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yingshi/1.webp'),
							title:'“我想跟你在一起”',
							data1:'85.4万',
							data2:'26.5万',
							data3:'学习姐',
							pts:'95359'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yingshi/2.webp'),
							title:'《感动美国年度人物 小丑》 用正能量的方式打开《小丑》！',
							data1:'65.3万',
							data2:'19.0万',
							data3:'无敌烽火轮',
							pts:'616358'

						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yingshi/3.webp'),
							title:'处 处 吻',
							data1:'39.4万',
							data2:'9.5万',
							data3:'飞上天',
							pts:'193519'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yingshi/4.webp'),
							title:'【阿斗】每集反转！结局细思极恐！强推这部悬疑惊悚剧《不思异：录像》',
							data1:'23.4万',
							data2:'6.5万',
							data3:'快递',
							pts:'91499'
							
						},
						{
							src:require('@/assets/img/bili-rankingList/yuanchuangbang/yingshi/5.webp'),
							title:'【刘哔】盘点十大童年阴影！憋尿带给我们的美好回忆！',
							data1:'9.4万',
							data2:'1.2万',
							data3:'信息物',
							pts:'57412'
							
						},
					]

				],
				[   [
						{
							src:require('@/assets/img/bili-rankingList/xinfanbang/xinfan/1.webp'),
							title:'刀剑神域 爱丽丝篇 异界战争',
							data1:'1295.0万',
							data2:'222.9万',
							data3:'老冬瓜',
							pts:'5795220'
						},
						{
							src:require('@/assets/img/bili-rankingList/xinfanbang/xinfan/2.webp'),
							title:'我的英雄学院 第四季',
							data1:'1151.4万',
							data2:'93.5万',
							data3:'奋斗',
							pts:'3825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/xinfanbang/xinfan/3.webp'),
							title:'命运-冠位指定 绝对魔兽战线 巴比伦尼亚',
							data1:'911.03万',
							data2:'112.0万',
							data3:'阿木降临',
							pts:'586239'
						},
						{
							src:require('@/assets/img/bili-rankingList/xinfanbang/xinfan/4.webp'),
							title:'入间同学入魔了',
							data1:'362.5万',
							data2:'53.5万',
							data3:'一声大哥',
							pts:'3825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/xinfanbang/xinfan/5.webp'),
							title:'我们无法一起学习！',
							data1:'151.4万',
							data2:'23.5万',
							data3:'奋斗',
							pts:'3825359'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinfanbang/xinfan/1.webp'),
							title:'伍六七之最强发型师',
							data1:'8295.0万',
							data2:'6222.9万',
							data3:'冬瓜',
							pts:'15795220'
						},
						{
							src:require('@/assets/img/bili-rankingList/xinfanbang/xinfan/2.webp'),
							title:'凹凸世界 第三季',
							data1:'8151.4万',
							data2:'993.5万',
							data3:'奋斗',
							pts:'9825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/xinfanbang/xinfan/3.webp'),
							title:'灵笼',
							data1:'5911.03万',
							data2:'1112.0万',
							data3:'阿木降临',
							pts:'986239'
						},
						{
							src:require('@/assets/img/bili-rankingList/xinfanbang/xinfan/4.webp'),
							title:'王者？别闹！',
							data1:'962.5万',
							data2:'453.5万',
							data3:'一声大哥',
							pts:'3825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/xinfanbang/xinfan/5.webp'),
							title:'镇魂街 第二季',
							data1:'851.4万',
							data2:'523.5万',
							data3:'人生值得',
							pts:'3825359'
						},
					]    
				],
				[   [
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/jilupian/1.webp'),
							title:'【纪录片】百家讲坛之易中天品三国',
							data1:'1295.0万',
							data2:'222.9万',
							data3:'老冬瓜',
							pts:'5795220'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/jilupian/2.webp'),
							title:'《生活如沸》预告-社交篇',
							data1:'1151.4万',
							data2:'93.5万',
							data3:'奋斗',
							pts:'3825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/jilupian/3.webp'),
							title:'中国美女勇夺日本校花冠军，日本网友评论亮了【我住在这里的理由101】',
							data1:'911.03万',
							data2:'112.0万',
							data3:'阿木降临',
							pts:'586239'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/jilupian/4.webp'),
							title:'221集 一套房2800万，走进黎巴嫩富人区的奢华生活',
							data1:'362.5万',
							data2:'53.5万',
							data3:'一声大哥',
							pts:'3825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/jilupian/5.webp'),
							title:'《梦想改造家6》第9期：为脑瘫天才打造无障碍的家',
							data1:'151.4万',
							data2:'23.5万',
							data3:'奋斗',
							pts:'3825359'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/dianying/1.webp'),
							title:'明日边缘（2014）【汤姆·克鲁斯/艾米莉·布朗特】',
							data1:'7295.0万',
							data2:'5222.9万',
							data3:'冬瓜',
							pts:'15795220'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/dianying/2.webp'),
							title:'哥斯拉（1954）【本多猪四郎】',
							data1:'151.4万',
							data2:'93.5万',
							data3:'奋斗',
							pts:'9825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/dianying/3.webp'),
							title:'龙之谷：破晓奇兵',
							data1:'911.03万',
							data2:'12.0万',
							data3:'阿木降临',
							pts:'986239'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/dianying/4.webp'),
							title:'【李幼斌、李雪健】横空出世【1999】',
							data1:'962.5万',
							data2:'453.5万',
							data3:'一声大哥',
							pts:'3825359'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/dianying/5.webp'),
							title:'【国产/高清】祝福.1956.鲁迅原著.高清720P数码修复版',
							data1:'1.4万',
							data2:'3.5万',
							data3:'人生值得',
							pts:'3825359'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/dianshiju/1.webp'),
							title:'【喜剧/家庭】家有儿女第一季 100集全【2004】',
							data1:'895.0万',
							data2:'622.9万',
							data3:'冬瓜',
							pts:'1795220'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/dianshiju/2.webp'),
							title:'【不思异：录像】06 - 眼瞳 奇幻悬疑迷你剧',
							data1:'851.4万',
							data2:'93.5万',
							data3:'奋斗',
							pts:'982359'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/dianshiju/3.webp'),
							title:'【约会宝典式轻喜剧】约会专家 20-22 约会么么哒',
							data1:'511.03万',
							data2:'112.0万',
							data3:'阿木降临',
							pts:'986239'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/dianshiju/4.webp'),
							title:'【剧情】铠甲勇士 全52集【2009】',
							data1:'92.5万',
							data2:'43.5万',
							data3:'一声大哥',
							pts:'325359'
						},
						{
							src:require('@/assets/img/bili-rankingList/yingshibang/dianshiju/5.webp'),
							title:'【1080P有字幕】神探狄仁杰 30集【全】【2004】',
							data1:'51.4万',
							data2:'23.5万',
							data3:'人生值得',
							pts:'3825359'
						},
					]    
				],
				[   [
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/quanzhan/1.webp'),
							title:'【朱广权新Rap】央 视 新 闻 来 B 站 了！',
							data1:'295.0万',
							data2:'12.9万',
							data3:'老番茄',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/quanzhan/2.webp'),
							title:'【资本与明星03】杨幂的资本博弈之路',
							data1:'295.0万',
							data2:'2.9万',
							data3:'和特',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/quanzhan/3.webp'),
							title:'「黑 寡 妇」',
							data1:'295.0万',
							data2:'2.9万',
							data3:'防守打法',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/quanzhan/4.webp'),
							title:'18岁日本小姐姐的早上生活！第一次给你们看我的素脸...紧张！！！',
							data1:'195.0万',
							data2:'2.9万',
							data3:'老个胡发嗲好的',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/quanzhan/5.webp'),
							title:'精  神  之  子',
							data1:'95.0万',
							data2:'12.9万',
							data3:'将试样登记卡',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/donghua/1.webp'),
							title:'羊  村  摇（先行版）！',
							data1:'895.0万',
							data2:'12.9万',
							data3:'易方达怪演讲',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/donghua/2.webp'),
							title:'【哪吒之魔童降世手书】【藕饼】大小姐和大少爷的反派生涯',
							data1:'2295.0万',
							data2:'2.9万',
							data3:'和特',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/donghua/3.webp'),
							title:'【沙雕动画】查寝四大未解之谜，新生的我 太难了',
							data1:'295.0万',
							data2:'22.9万',
							data3:'共计大哥',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/donghua/4.webp'),
							title:'【沙雕动画】我尊重你生育的权利  也请你尊重我们的社会秩序',
							data1:'195.0万',
							data2:'2.9万',
							data3:'xixix ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/donghua/5.webp'),
							title:'FGO史上最烧经费打戏！前方高能 这TM才叫燃 戴好耳机 感受这视觉盛宴吧！',
							data1:'95.0万',
							data2:'12.9万',
							data3:'将试样登记卡',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yinyue/1.webp'),
							title:'『书摘』“这是我要给你的，宇宙级别的浪漫”',
							data1:'895.0万',
							data2:'12.9万',
							data3:'易方达怪演讲',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yinyue/2.webp'),
							title:'《连备胎都不是》原唱本人来了！刺客伍六七片尾曲，听完我哭了......',
							data1:'1295.0万',
							data2:'2.9万',
							data3:'打特',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yinyue/3.webp'),
							title:'我练了10年吉他，现在却和我说有自动挡？',
							data1:'1295.0万',
							data2:'22.9万',
							data3:'复制的说法',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yinyue/4.webp'),
							title:'【小提琴】《野狼Disco》女神实力演示如何用小提琴Rap【石川绫子】',
							data1:'195.0万',
							data2:'2.9万',
							data3:'xixix ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yinyue/5.webp'),
							title:'【rap battler】磨人的小妖精？你到底好了没有呀？',
							data1:'95.0万',
							data2:'12.9万',
							data3:'将试样登记卡',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/wudao/1.webp'),
							title:'【久等了】猛男舞团正式入驻B站啦！！！',
							data1:'895.0万',
							data2:'12.9万',
							data3:'有点贵安居',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/wudao/2.webp'),
							title:'【舞蹈风暴】“魏璎珞”“富察傅恒”来舞蹈风暴啦！敖定雯王占峰《守候》用芭蕾演绎《延禧宫略》雪落下的那一刻，你的心化了吗？',
							data1:'1295.0万',
							data2:'2.9万',
							data3:'打特',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/wudao/3.webp'),
							title:'【舞小喵】❀Violeta❀ 你是我的世界～',
							data1:'1295.0万',
							data2:'22.9万',
							data3:'复制的说法',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/wudao/4.webp'),
							title:'【初投稿】申汤❤AIAIAI❤每帧都是表情包的人工智障汤酱',
							data1:'195.0万',
							data2:'2.9万',
							data3:'xixix ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/wudao/5.webp'),
							title:'【抖肩舞】每天一遍防止抑郁！coincidance！giao！',
							data1:'95.0万',
							data2:'12.9万',
							data3:'活塞',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/youxi/1.webp'),
							title:'快！点！进来看看老婆们的高跟鞋，准备好硬币，只要10秒硬币就是我的了。（the cab-lock me up+游戏动漫cg混剪）',
							data1:'895.0万',
							data2:'112.9万',
							data3:'有点贵安居',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/youxi/2.webp'),
							title:'版本ad现状――致s10设计师？',
							data1:'295.0万',
							data2:'2.9万',
							data3:'ss打特',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/youxi/3.webp'),
							title:'激情5E，一起Rush B！！！',
							data1:'195.0万',
							data2:'22.9万',
							data3:'复制的说法',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/youxi/4.webp'),
							title:'塞恩的三轮车皮肤',
							data1:'195.0万',
							data2:'2.9万',
							data3:'xixix ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/youxi/5.webp'),
							title:'【盘点】国产游戏史上最无耻的抄袭TOP5',
							data1:'95.0万',
							data2:'12.9万',
							data3:'活塞',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/keji/1.webp'),
							title:'【资本与明星03】杨幂的资本博弈之路',
							data1:'895.0万',
							data2:'112.9万',
							data3:'有点贵安居',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/keji/2.webp'),
							title:'【第一弹】CGTN重磅披露涉疆反恐部分案件、画面！用事实揭露美国“双标”嘴脸',
							data1:'295.0万',
							data2:'2.9万',
							data3:'ss打特',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/keji/3.webp'),
							title:'地球上最像毒液的液体了，脾气贼大，一碰就长刺！！！',
							data1:'195.0万',
							data2:'22.9万',
							data3:'复制的说法',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/keji/4.webp'),
							title:'是你要的高级感吗-ppt视差动画',
							data1:'195.0万',
							data2:'2.9万',
							data3:'xixix ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/keji/5.webp'),
							title:'干货！39分钟带你搞懂中国千年历史',
							data1:'95.0万',
							data2:'12.9万',
							data3:'活塞',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shuma/1.webp'),
							title:'不知道显卡好坏，看了这张图你就明白了',
							data1:'895.0万',
							data2:'112.9万',
							data3:'有点贵安居',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shuma/2.webp'),
							title:'爱思和沙漏都不能改绿了吗？果粉们别天真了，给你们最想要的答案',
							data1:'295.0万',
							data2:'2.9万',
							data3:'ss打特',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shuma/3.webp'),
							title:'【教程向】白嫖华为「多屏协同」，是个电脑就能用——3号顽物局',
							data1:'195.0万',
							data2:'22.9万',
							data3:'复制的说法',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shuma/4.webp'),
							title:'为什么很少有手机模仿苹果这一功能呢？',
							data1:'195.0万',
							data2:'2.9万',
							data3:'xixix ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shuma/5.webp'),
							title:'因为这场婚礼，让我收获世界难度最高婚礼摄影奖项FEARLESS！【婚礼摄影】',
							data1:'95.0万',
							data2:'12.9万',
							data3:'活塞',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shenghuo/1.webp'),
							title:'【朱广权新Rap】央 视 新 闻 来 B 站 了！',
							data1:'895.0万',
							data2:'112.9万',
							data3:'有点贵安居',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shenghuo/2.webp'),
							title:'「黑 寡 妇」',
							data1:'295.0万',
							data2:'2.9万',
							data3:'沙发沙发',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shenghuo/3.webp'),
							title:'【18岁日本小姐姐的早上生活！第一次给你们看我的素脸...紧张！！！',
							data1:'195.0万',
							data2:'252.9万',
							data3:'时候的 ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shenghuo/4.webp'),
							title:'精  神  之  子',
							data1:'195.0万',
							data2:'2.9万',
							data3:'xixix ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shenghuo/5.webp'),
							title:'学了三年动画，毕业作品被老师轰出了教室！',
							data1:'95.0万',
							data2:'12.9万',
							data3:'活塞',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/guichu/1.webp'),
							title:'米奇giaogiao屋',
							data1:'895.0万',
							data2:'112.9万',
							data3:'安居',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/guichu/2.webp'),
							title:'【FGO】Master~老婆们喊你起床喽！全女英灵抢占御主房间，深度洗脑',
							data1:'95.0万',
							data2:'2.9万',
							data3:'沙发沙发',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/guichu/3.webp'),
							title:'【18岁日本小姐姐的早上生活！第一次给你们看我的素脸...紧张！！！',
							data1:'195.0万',
							data2:'252.9万',
							data3:'时候的 ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/guichu/4.webp'),
							title:'打上花火♂',
							data1:'195.0万',
							data2:'2.9万',
							data3:'护手霜 ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/guichu/5.webp'),
							title:'震惊！吕子乔的真实身份竟然是...（正能量慎入！！！）',
							data1:'95.0万',
							data2:'12.9万',
							data3:'书记阿杜不看',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shishang/1.webp'),
							title:'一米六男友大改造 / 超实用的男生叠穿法则',
							data1:'895.0万',
							data2:'112.9万',
							data3:'安居',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shishang/2.webp'),
							title:'韩国女团腿真的真的太厉害了!没练之前也不相信，练的时候也超痛的，坚持下来会发现效果',
							data1:'95.0万',
							data2:'2.9万',
							data3:'沙发沙发',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shishang/3.webp'),
							title:'李佳琦直播推荐口红，让人笑到劈叉，不愧全网最强直播',
							data1:'195.0万',
							data2:'252.9万',
							data3:'时候的 ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shishang/4.webp'),
							title:'小姐姐穿这双高跟鞋参加宴会，回头率别提有多高了！',
							data1:'195.0万',
							data2:'2.9万',
							data3:'护手霜 ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shishang/5.webp'),
							title:'斯大林同志：咱俄罗斯也有潮牌了！',
							data1:'95.0万',
							data2:'12.9万',
							data3:'书记阿杜不看',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yule/1.webp'),
							title:'［云次方安利向］云次方Top20名场面',
							data1:'895.0万',
							data2:'112.9万',
							data3:'安居',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yule/2.webp'),
							title:'【新闻联播】给我硬核打广告了！',
							data1:'95.0万',
							data2:'2.9万',
							data3:'沙发沙发',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yule/3.webp'),
							title:'【博君一肖】捶入坑底系列part2',
							data1:'195.0万',
							data2:'252.9万',
							data3:'时候的 ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yule/4.webp'),
							title:'曹荣作品《西游记后传》親自操刀再次剪辑',
							data1:'195.0万',
							data2:'2.9万',
							data3:'快睡吧 ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yule/5.webp'),
							title:'换 一 种 方 式 认 识 周 淑 怡',
							data1:'95.0万',
							data2:'12.9万',
							data3:'时候的',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shishang/1.webp'),
							title:'一米六男友大改造 / 超实用的男生叠穿法则',
							data1:'895.0万',
							data2:'112.9万',
							data3:'安居',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shishang/2.webp'),
							title:'韩国女团腿真的真的太厉害了!没练之前也不相信，练的时候也超痛的，坚持下来会发现效果',
							data1:'95.0万',
							data2:'2.9万',
							data3:'沙发沙发',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shishang/3.webp'),
							title:'李佳琦直播推荐口红，让人笑到劈叉，不愧全网最强直播',
							data1:'195.0万',
							data2:'252.9万',
							data3:'时候的 ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shishang/4.webp'),
							title:'小姐姐穿这双高跟鞋参加宴会，回头率别提有多高了！',
							data1:'195.0万',
							data2:'2.9万',
							data3:'护手霜 ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/shishang/5.webp'),
							title:'斯大林同志：咱俄罗斯也有潮牌了！',
							data1:'95.0万',
							data2:'12.9万',
							data3:'书记阿杜不看',
							pts:'95220'
						},
					],
					[
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yingshi/1.webp'),
							title:'小丑：我被社会主义BGM治愈了！',
							data1:'895.0万',
							data2:'112.9万',
							data3:'安居',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yingshi/2.webp'),
							title:'【白皇后.踩点混剪】超清版本建议收藏！',
							data1:'95.0万',
							data2:'2.9万',
							data3:'沙发沙发',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yingshi/3.webp'),
							title:'杜蕾斯广告',
							data1:'195.0万',
							data2:'252.9万',
							data3:'比开发萨比克 ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yingshi/4.webp'),
							title:'资本主义遇到千层套路？',
							data1:'195.0万',
							data2:'2.9万',
							data3:'是不是 ',
							pts:'5795220'
						},
						
						{
							src:require('@/assets/img/bili-rankingList/xinrenbang/yingshi/5.webp'),
							title:'当于谦遇到李云龙 确定不来看一下吗？？？',
							data1:'95.0万',
							data2:'12.9万',
							data3:'啥样',
							pts:'95220'
						},
					]
				]

            	],
            	dropdownLists:[
            	[['全部投稿','近期投稿'],['三日排行','日排行','周排行','月排行',]],
            	[['全部投稿','近期投稿'],['三日排行','日排行','周排行','月排行',]],
            	[['三日排行','日排行','周排行','月排行']],
            	[['三日排行','日排行','周排行','月排行']],
            	[['三日排行','日排行','周排行','月排行']],
            	],
               tabList:['全站榜','原创榜','新番榜','影视榜','新人榜',],
               bpList:['-83px -979px','-83px -1041px','-83px -1107px','-146px -1555px','-83px -1170px'],
               tabList1:[
               ['全站','动画','国创相关','音乐','舞蹈','游戏','科技','数码','生活','鬼畜','时尚','娱乐','影视'],
               ['全站','动画','国创相关','音乐','舞蹈','游戏','科技','数码','生活','鬼畜','时尚','娱乐','影视'],
               ['番剧','国产动画'],
               ['纪录片','电影','电视剧'],
               ['全站','动画','音乐','舞蹈','游戏','科技','数码','生活','鬼畜','时尚','娱乐','影视']]
            }
        },
        components: {
            biliTab,
            headline,
            rankLtem,
            ggFloorModule
        },
        computed:{
        	lists(){
        		return this.$refs.tab.$el.children
        	}
        },
        methods:{
        	tabItemClick(i){
        		this.currentIndex=i
        		this.currentIndex1=0
				let re = /\bon\b/
				this.$nextTick(()=>{
					let lists=this.lists
        		for(let i=0;i<lists.length;i++){
        			lists[0].classList.add("on")
        			if (re.test(lists[i].className)) {
        				lists[i].classList.remove("on")
        			}

        		}        	
				})
        		
        	},
        	tabItemClick1(j){
        		this.currentIndex1=j
				this.lists[0].classList.remove("on")
				this.lists[j].classList.add("on")
        		        		

        	},
        	seeGoods(item){
        		this.$store.commit('seegoods',item)
        		this.$router.push('/purchase')
        	}
        }
    }
</script>
<style>
.biliRankingList{
	width: 980px;
    margin: 20px auto;
    position: relative;

}
.biliRankingList .biliTabItem{
	width: 115px;
    height: 40px;
    font-size: 18px;
    line-height: 25px;
    padding: 0 12px;
    margin-left: 52px;
    display: inline-block;
    cursor: pointer;
    line-height: 40px;
    text-align: center;
}
.rank-tab-wrap {
	position: relative;
	display: flex;
	background: #edf2f9;
    padding: 0;
    border-radius: 4px;
    clear: both;
    height: 41px;
}
.biliRankingList .rank-tab-wrap .biliTabItem{
	float: left;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    margin-right: 10px;
    margin-left: 0;
}
.ranktab{
	width: 780px;
	display: inline-block;
}
.rankheadline{
	margin: auto;
}
.rank-tab-wrap .link-more{
	width: 65px;
}
.rank-tab-wrap .link-more .dropdown-list .dropdown-item:hover{
	background-color: #e5e9ef;
}
.rank_tips{
	margin: 15px auto;
	padding: 7px 0;
    background-color: #edf2f9;
    border-radius: 4px;
}
.tip-txt{
	color: #000;
	cursor: text;
}
.b-icon-tip{
	width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
    background: url('~assets/img/bili-rankingList/icons.png') -52px -27px no-repeat;

}
.biliRankingList .gg-floor-module{
	margin-top: 20px;
    margin-bottom: 35px;
}
</style>