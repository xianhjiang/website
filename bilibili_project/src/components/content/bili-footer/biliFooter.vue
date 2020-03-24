<template>
	<div class="allfooter">
		<div class="footertop">
			<div class="topleft">
				<span class="bt">{{txttop}}</span>
				<ul>
					<div v-for="a in txtlista">
						<a href="">{{a.txt}}</a>
					</div>
				</ul>
			</div>
			<div class="topmoddle">
				<span class="bt">{{txtmoddle}}</span>
				<ul>
					<div v-for="b in txtlistb">
						<a href="">{{b.txt}}</a>
					</div>
				</ul>
			</div>
			<div class="topright">
				<div  v-for="c in logolist">
					<a href="">
						<img :src="c.pic">
						<p>{{c.txt}}</p>
					</a>
					
				</div>
				
			</div>
		</div>
		<div class="footerbottom">
			<div class="bottomleft">
				<img :src="src1" class="pic1">
				<img :src="src2" class="pic2">
				<a href="">
					<div id="imgall">
						<img src="~assets/img/bili-footer/1.png">
						<img src="~assets/img/bili-footer/2.png">
					</div>
				</a>
				
			</div>
			<div class="bottomright">
				<p>广播电视节目制作经营许可证：（沪）字第1248号|网络文化经营许可证：沪网文【2016】2296-134号|信息网络传播视听节目许可证：0910417</p>
				<p>互联网ICP备案：<a href="">沪ICP备13002172号-3</a>
					沪ICP证：沪B2-20100043 |违法不良信息举报邮箱：help@bilibili.com |违法不良信息举报电话：4000233233转3 | 
					<a href="">营业执照</a>
				</p>
				<p>
					<img src="~assets/img/bili-footer/lu.png" class="bg1">
					<a href="">上海互联网举报中心</a>
					 |
					<a href="">12318全国文化市场举报网站</a>
					 |
					<img src="~assets/img/bili-footer/jing.png" class="bg2">
					<a href="">沪公网安备31011002002436号</a>
					 |
					<a href="">儿童色情信息举报专区</a>
				</p>
				<p>网上有害信息举报专区：
					<img src="~assets/img/bili-footer/lan.png" class="bg3">
					<a href="">中国互联网违法和不良信息举报中心</a>
				</p>
				<p>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</p>
				<p>公司名称：上海宽娱数码科技有限公司|公司地址：上海市杨浦区政立路485号|电话：021-25099888</p>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'dramaheader',
	data(){
		return{
			txttop:'bilibili',
			txtlista:[
			{txt:'关于我们'},{txt:'联系我们'},{txt:'加入我们'},
			{txt:'友情链接'},{txt:'bilibili认证'},{txt:'Investor Relations'},

			],
			txtmoddle:'传送门',
			txtlistb:[
			{txt:'帮助中心'},{txt:'高级弹幕'},{txt:'活动专题页'},
			{txt:'侵权申诉'},{txt:'活动中心'},{txt:'用户反馈论坛'},
			{txt:'壁纸站'},{txt:'专车号服务中心'},{txt:'名人堂'},

			],
			logolist:[
			{pic:require('@/assets/img/bili-footer/xiazai.png'),txt:'客户端下载',},
			{pic:require('@/assets/img/bili-footer/weibo.png'),txt:'新浪微博',},
			{pic:require('@/assets/img/bili-footer/weixin.png'),txt:'官方微信',},
			],
			src1:require('@/assets/img/bili-footer/partner.png'),
			src2:require('@/assets/img/bili-footer/par1.png'),


		}

	},
	
}
	


</script>

<style>
.allfooter a{
	text-decoration: none;

}
.allfooter p{
	margin:0;
	padding:0;
	font-size:12px;

}
.allfooter ul{
	list-style: none;
	margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}
.allfooter{
	width: 100%;
	height: 346px;
	position:relative;
	background-color: #f6f9fa;
    padding: 20px 0;
	


}
.allfooter .footertop{
	height:136px;
	width:1160px;
	margin: 0 auto;
	position:relative;

	
}
.allfooter .footertop .topleft{
	width:394px;
	height:136px;
    padding-right: 40px;
    margin-right: 40px;
    border-right: 1px solid #eee;
    float:left;
    position:relative;

}
.bt{
	width:394px;
	font-size: 16px;
    color: #999;
    display: block;
    height: 20px;
    margin-bottom: 20px;
}
.allfooter .footertop ul{
	font-size:14px;
	height: 65px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

}
.allfooter .footertop ul a{
	display: inline-block;
    margin-bottom: 10px;
    cursor: pointer;
}
.allfooter .footertop .topmoddle{
	width:394px;
	height:136px;
	float:left;
	padding-right: 40px;
    margin-right: 40px;
    border-right: 1px solid #eee;
    position:relative;
}
.allfooter .footertop .topmoddle ul{
	height: 96px;
	position:relative;
	
}
.allfooter .footertop .topright{
	font-size:14px;
	position:relative;
	width:210px;
	height:136px;
	float:left;
    padding-right: 0;
    border-right: none;
    margin-right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.allfooter .footertop .topright a{
	position: relative;
    display: inline-block;
    width: 70px;
    text-align: center;
    color: #212121;

}
.allfooter .footertop .topright p{
	margin-top: 10px;
    color: #212121;
    transition: color 0.2s;
}
.allfooter .footertop .topright img{
	width:40px;
	height:40px;
}
.allfooter .footerbottom{
	display: flex;
    padding-top: 20px;
    color: #999;
    width:1160px;
    height:150px;
	width:1160px;
	margin: 0 auto;
	position:relative;
  

}
.allfooter .footerbottom .bottomleft{
	width: 100px;
    margin-right: 20px;

}
.footerbottom .bottomleft .pic1{
	width: 96px;
    height: 75px;
}
.footerbottom .bottomleft .pic2{
	margin: 5px 0;
	width:100px;
	height:40px;
}
#imgall{
	width: 100%;
    position: relative;
}
#imgall img{
    position: absolute;
    left: 0px;
    top: 0px;
    display: block;
    width: 100%;
    height: auto;
    opacity: 1;
    max-height: none;
    border: none;
}

.footerbottom .bottomright p{
	margin-bottom: 8px;
}
.footerbottom .bottomright a{
	color:#999;
}
.footerbottom .bottomright img{
	display: inline-block;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin-right: 3px;
	
}
.footerbottom .bottomright .bg1{
	width: 16px;
    height: 16px;
    background-position: 0 -2px;
}

.footerbottom .bottomright .bg2{
	width: 18px;
    height: 20px;
    background-position: -41px 0px;
}
.footerbottom .bottomright .bg3{
	width: 16px;
    height: 16px;
    background-position: -18px -3px;
}


.footerbottom .bottomright a:hover{
	color:#00a7d0;
}


</style>