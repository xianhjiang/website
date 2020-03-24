<template>
    <div class="primaryMenu">
      <ul class="nav-menu">
      	<wrapper-item class="home" :title="'首页'" @click.native="homeClick">
      		<a slot="top" class="home-a"></a>
      	</wrapper-item>
      	<wrapper-item class="navitemleft"
         @click.native="comicClick(item)"
        v-for="(item) in navUlLists3" 
        :key="item.name">
      		<li slot="left">{{item.name}}</li>
      		<span slot="top">{{item.span}}</span>
      	</wrapper-item>
      	<wrapper-item class="navitemright" v-for="v in navUlLists4"
        :key="v.name">
      		<i :style="{'background-position':v.pt}" slot="top"></i>
      		<span slot="left">{{v.name}}</span>
      	</wrapper-item>
      </ul>
      <div class="nav-gif">
		<a href="#" class="random-p">
			<img src="~assets/img/bili-header/3.gif">
		</a>      		
      </div>
    </div>
</template>
<script>
	import wrapperItem from 'components/common/wrapper-item'
  import Vue from 'vue'
    export default {
        name:'primaryMenu',
        data() {
            return { 
              navUlLists3:[
{span:'999+',name:'动漫',bp:'-139px -1931px',
num:520,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/1.png")},
{span:'157',name:'番剧',bp:'-141px -140px',num:99,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/1.png")},
{span:'199',name:'国创',bp:'-140px -1611px',num:999,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/1.png")},
{span:'999+',name:'音乐',bp:'-140px -266px',num:521,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/2.png")},
{span:'764',name:'舞蹈',bp:'-141px -461px',num:5201,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/3.png")},
{span:'999+',name:'游戏',bp:'-141px -203px',num:52013,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/4.png")},
{span:'999+',name:'科技',bp:'-141px -525px',num:520131,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/5.png")},
{span:'915',name:'数码',bp:'-140px -1741px',num:5201314,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/1.png")},
{span:'999+',name:'生活',bp:'-137px -970px',num:250,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/6.png")},
  {span:'134',name:'鬼畜',bp:'-141px -332px',num:2501,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/1.png")},
  {span:'999+',name:'时尚',bp:'-141px -718px',num:251,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/7.png")},
  {span:'280',name:'广告',bp:'-140px -1228px',num:25013,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/1.png")},
  {span:'999+',name:'娱乐',bp:'-141px -1032px',num:250131,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/1.png")},
  {span:'999+',name:'影视',bp:'-140px -1356px',num:2501314
  ,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/8.png")},
  {span:'764',name:'放映厅',bp:'-141px -845px',num:520,linkMore:'更多',src:require("@/assets/img/bili-rankingList/bjt/9.png")},
		    ],
		    navUlLists4:[
		    {name:'专栏',pt:'-87px -1814px'},
		    {name:'广场',pt:'-87px -2006px'},
		    {name:'直播',pt:'-87px -1878px'},
		    {name:'小黑屋',pt:'-87px -1942px'},

		    ], 
            }
        },
        components: {
            wrapperItem
        },
        methods:{
          homeClick(){
            this.$router.push('/home')
          },
          comicClick(item){
            const headline=item
            this.$store.commit('changeheadline',headline)
            this.$router.push('/public').catch(err => err) 
            // console.log(this.$store.state)
          }
        }
    }
</script>
<style scoped>
.primaryMenu{
	position: relative;
    width: 980px;
    height: 50px;
    padding: 8px 0 0;
    margin: 0 auto 4px;
    border-bottom: 1px solid #fff;
}
.primaryMenu .nav-menu{
	position: relative;
    height: 42px;
    color: #222;
    display: flex;
}
.primaryMenu .nav-menu>.navitemleft span{
	/*display: block;*/
	width: 100%;
	text-align: center;
	display: inline-block;
    vertical-align: top;
    font-size: 12px;
    transform: scale(.85);
    color: #fff;
    background-color: #ffafc9;
    border-radius: 3px;
    height: 12px;
    line-height: 14px;
    max-width: 28px;
    padding: 1px 3px;
    font-family: sans-serif,sans-serifsans-serif,Calibri,Arial,Helvetica;
}
.primaryMenu .nav-menu>.navitemleft li{
	width: 100%;
}
.primaryMenu .nav-menu .home{
	margin-right: 8px;
	padding-top: 6px;
}
.primaryMenu .nav-menu .home-a{
	width: auto;
	height: 30px;
    display: block;
	background: url("~assets/img/bili-header/xbt.png") -660px -1176px no-repeat;
}
.primaryMenu .nav-menu>.navitemleft{
	padding: 0 2px;
	width: 41px;
	text-align: center;
	padding-top: 6px;
}
.primaryMenu .nav-menu>.navitemright{
	padding: 0;
	margin: 0 2px;
}
.primaryMenu .nav-menu>.navitemright span{
	width: 40px;
	padding-top: 6px;
}
.primaryMenu .nav-menu>.navitemright:hover span{
	color: #00a1d6;
}
.primaryMenu .nav-menu>.navitemright i{
	display: block;
    width: 18px;
    height: 18px;
    margin: 3px auto 2px;
    background:url("~assets/img/bili-header/xbt.png") no-repeat;
}
.primaryMenu .nav-gif{
	position: absolute;
    right: 0;
    top: 0;
    height: 50px;
    padding: 4px 0;
}
.primaryMenu .nav-gif .random-p{
	width: 69px;
    height: 40px;
    display: inline-block;
    vertical-align: top;
    margin: 3px 0;
    overflow: hidden;
}
.primaryMenu .nav-gif .random-p img{
	width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 3px;
}
</style>