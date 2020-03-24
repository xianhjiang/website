<template>
    <div class="clear-fix recommendModule">
    	<div v-for="(items,i) in groomList" class="clear-fix"
    	 v-if="currentIndex==i">
		    <groom-module class="groom-module" v-for="item in items"
		     :key="item.author" :src="item.src" :title="item.title" :author="item.author" :play="item.play" :iswatch="true" 
             :ismark="true">
		    </groom-module>
        </div>
        <slot name="rec-btn" >
        	<span class="rec-btn prev"
        	@click="rec_btn_prevclick">{{spanArray[currentIndex][0]}}</span>
        	<span class="rec-btn next"
        	@click="rec_btn_nextclick">{{spanArray[currentIndex][1]}}</span>
        </slot>
    </div>
</template>
<script>
	import groomModule from 'components/common/groomModule'
    export default {
        name:'recommendModule',
        data() {
            return { 
            	currentIndex:0,
	            groomList:[
			    [{src:require('@/assets/img/bili-wrapper/recommend-module/11.webp'),title:'动画区UP主每天都在群里聊些啥？',author:'up主：赫萝老师',play:'播放：21.6万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/12.webp'),title:'【灯泡动画】抓娃娃机的时候居然遇到了辣个男人',author:'up主：大大大灯泡',play:'播放：15.9万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/13.webp'),title:'pi,mc,幻想世界的科学家p1~3',author:'up主：少年Pi',play:'播放：24.0万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/14.webp'),title:'王老菊教你以物易物',author:'up主：怕上火暴王老菊',play:'播放：64.1万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/15.webp'),title:'如何在PR里做出最流畅的补帧',author:'up主：OtatoB土豆',play:'播放：3.5万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/16.webp'),title:'钻头的碧蓝航线每周吹爆第二集 无限套娃篇',author:'up主：钻头V会长',play:'播放：8.4万'}
			    
			    ],
			    [{src:require('@/assets/img/bili-wrapper/recommend-module/17.webp'),title:'八王子P「VIRTUAL COMPLEX feat.初音ミク」',author:'up主：八王子P_公式',play:'播放：10.7万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/18.webp'),title:'节奏天国×碧蓝航线',author:'up主：osoba3',play:'播放：14.6万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/19.webp'),title:'pi,mc,幻想世界的科学家p1~3',author:'up主：少年Pi',play:'播放：25.6万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/20.webp'),title:'【赤ティン】命に嫌われている。/被对生命厌恶。',author:'up主：akatindayon',play:'播放：4.4万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/21.webp'),title:'【叶】野狗子/试着唱了这首歌。',author:'up主：叶Official',play:'播放：4.0万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/22.webp'),title:'提前剧透《灵笼》第七集！前半季剧情总结+伏笔挖掘【国动万象】',author:'up主：齐天大肾余潇洒',play:'播放：26.0万'}
			    
			    ],
			    [{src:require('@/assets/img/bili-wrapper/recommend-module/23.webp'),title:'用VR进入二次元看萌妹子的时代终于来了？！——BW上海场vlog',author:'up主：视角姬',play:'播放：22.9万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/24.webp'),title:'【散人】无限创造力想象的酷炫爽爆游戏 再见狂野之心初见实况',author:'up主：逍遥散人',play:'播放：15.3万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/25.webp'),title:'店里卖88一只的大汤包，在家做会便宜多少呢？会不会更好吃呢？',author:'up主：绵羊料理',play:'播放：24.5万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/26.webp'),title:'【眉山论剑】赢过美国这个棋手，才能彻底解开香港这个乱局',author:'up主：观视频工作室',play:'播放：17.9万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/27.webp'),title:'【剪辑熟肉】啊ーーーー申请破产保护了吗？【神楽めあ】',author:'up主：神楽Mea_Official',play:'播放：3.5万'},
			    {src:require('@/assets/img/bili-wrapper/recommend-module/28.webp'),title:'【FF14翻唱】LaHee~~~【艾因Eine】',author:'up主：艾因Eine',play:'播放：1.6万'}
			    ]
			    ],
			    spanArray:[
			    ['昨日','一周'],
			    ['三日','昨日'],
			    ['一周','三日']
		    ],
            }
        },
        components:{
            groomModule
        },
        methods:{
        	rec_btn_prevclick(){
        		this.currentIndex--
        		if (this.currentIndex==-1) {
        			this.currentIndex=this.spanArray.length-1
        		}
        	},
        	rec_btn_nextclick(){
        		this.currentIndex++
        		if (this.currentIndex==this.spanArray.length) {
        			this.currentIndex =0
        		}
        	}
        }
    }
</script>
<style scoped>
.recommendModule{
	height: 220px;
	/*width: 540px;*/
	position: relative;
	overflow: hidden;
}
.recommendModule .groom-module{
	margin: 0 0 20px 20px;
	float: left;
}
.recommendModule .rec-btn{
	opacity: 0;
    position: absolute;
    background-color: rgba(0,0,0,.6);
    background-image: url("~assets/img/bili-wrapper/xbt2.png");
    background-repeat: no-repeat;
    width: 20px;
    top: 50%;
    margin-top: -8px;
    cursor: pointer;
    font-size: 12px;
    color: #fff;
    text-align: center;
    transition: all .3s;
}
.recommendModule .rec-btn.prev{
	left: 20px;
    border-radius: 0 4px 4px 0;
    padding: 13px 5px 13px 10px;
    background-position: 6px -1211px;
}
.recommendModule .rec-btn.next{
	right: 0;
    border-radius: 4px 0 0 4px;
    padding: 13px 10px 13px 5px;
    background-position: 25px -1262px;
}
.recommendModule:hover .rec-btn{
	opacity: 1
}
</style>