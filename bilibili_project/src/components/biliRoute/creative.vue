<template>
	<div class="allcontent">
    <shopheader :isLogo=false class="shopheader"></shopheader>
		<div class="writeother" v-show="isShow">
				<a href="" v-for="a in writelist" class="allother">
					<img :src="a.smalllogo">
					<p>{{a.name}}</p>
				</a>
			</div>
		<div class="contentleft">
			<div class="listtop">
				<a href="">
					<img :src="logo">
				</a>
				<div class="write" @mouseenter="enter()" @mouseleave="leave()">
					<a href="">{{write}}</a>
				</div>
        <ul class="lsitcontent">
        <li class="listall" v-for="b in leftlist">
          <a href="#">
              <img :src="b.onelogo">
            <span>{{b.name}}</span>
          </a>
        </li>
      </ul>
      <div class="cutline"></div>
      <ul class="lsitcontent">
        <li class="listall">
          <a href="">
            <img :src="twologo">
            <span>{{name1}}</span>
          </a>
          
        </li>
        <li class="listall">
          <a href="">
            <img :src="threelogo">
            <span>{{name2}}</span>
          </a>
          
        </li>
      </ul>
      <ul class="downlist">
        <li v-for="c in downlist">
          <a href="#" class="down-link">
            <img :src="c.logo">
            <div class="downof">
              <div class="title">{{c.title}}</div>
              <div class="version">{{c.version}}</div>
            </div>
          </a>
        </li>
      </ul>
      <div class="cutline"></div>
      <ul class="helplist">
        <li v-for="d in helplist">
          <a class="help-link">{{d.name}}</a>
        </li>
      </ul>
			</div>
			
		</div>
    <div class="contentmiddle">
      <div class="middleall">
        <div class="row1">
          <div class="picard">
            <div class="picbox">
              <div class="picmoddle">
                <div class="panel">
                  <ul class="picoff">
                    <li v-for="(e, index) in imgall" name="image" class="pic" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
                      <a href="">
                        <div>
                          <img :src="e.image">
                        </div>
                      </a>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
         <div class="middleleft">
           <p class="greetings">
            中午好～ 今天是你在bilibili星球的第
            <span class="greet-num">3</span>
              天
          </p>
          <div class="calendar">
            <div class="header">2019年12月 星期五</div>
            <div class="today">13</div>
            <div class="luck_wrap">
              <div class="luck_title">宜</div> 
              <div class="luck_desc"> 每日一题</div>
            </div>
          </div>
          <div class="calendarfooter">
            <div class="footercontent">
              <span>一个猎人向一只狐狸开枪，为什么猎人死了？</span>
            </div>
          </div>
          <div class="calendarside">
              <p>创作大事件</p>
          </div>
         </div>
        </div>
        <div class="academy">
          <div class="academytitle">
            <p style="display: inline-block;">创作学院</p>
            <a href="" class="r">
              <span>查看更多</span> 
            </a>
          </div>
          <div class="academybox">
            <div class="customize">
              <div class="course-wrp">
                <div class="carousel-wrp">
                  <div class="panel">
                    <ul class="picoff">
                      <li id="scrollx" v-for="s in cardimg">
                        <a href="">
                          <div class="card-img">
                            <img :src="s.img">
                          </div>
                           <div class="card-info">
                              <div class="title clearfix">
                                <span class="headline left">{{s.headline}}</span> 
                                <span class="num right">{{s.num}}</span>
                              </div> 
                              <div class="detail">
                                  {{s.detail}}
                              </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                   <div class="page">
                    <span class="next" ></span>
                    <span class="next current"></span>
                  </div>
                </div>  
              </div>
            </div>
            <div class="vedio">
              <video src='~static/1.mp4' loop controls autoplay>
              </video>
            </div>
            <div class="recommenda">
              <ul class="redlist">
                <li class="reditem" v-for="r in picturelist">
                  <div class="redpicture">
                    <a href="">
                      <img :src="r.pic">
                    </a>
                    <div class="duration">{{r.time}}</div>
                    <a href="">
                      <div class="redtitle">{{r.title}}</div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row2" v-for="k in rowlist">
          <div class="data-card card">
            <p class="empty-title">{{k.title}}</p>
            <div class="empty-data">
              <p>{{k.data}}</p>
              <span>{{k.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-wrp">
        <div class="footer-content">
          <div class="menu">
            <a href="" v-for="m in menu" class="menu-item">{{m.data}}</a>
          </div>
          <div class="social-menu">
            <a href="" class="social-item weibo" v-for=" l in lis">
              <img :src="l.img">
            </a> 
           </div>
        </div>
      </div>
    </div>
	</div>

</template>

<script>
  import shopheader from 'components/biliRoute/purchase/shopheader'
	export default {
    name: 'creative',
    components:{
      shopheader
    },
   data(){
   	return{
      
      mark:0,
   		isShow:false,
      currentIndex: 0,
        timer: '',
   		logo:require('@/assets/img/bili-creative/1.png'),
   		write:'投稿',
      twologo:require('@/assets/img/bili-creative/7.png'),
      name1:'创作实验室',
      threelogo:require('@/assets/img/bili-creative/7.png'),
      name2:'创作新秀奖',
   		writelist:[
   		{smalllogo:require('@/assets/img/bili-creative/2.png'),name:'视频投稿'},
   		{smalllogo:require('@/assets/img/bili-creative/3.png'),name:'专栏投稿'},
   		{smalllogo:require('@/assets/img/bili-creative/4.png'),name:'互动视频投稿'},
   		{smalllogo:require('@/assets/img/bili-creative/5.png'),name:'音频投稿'},
   		{smalllogo:require('@/assets/img/bili-creative/6.png'),name:'相簿投稿'},
   		],
   		leftlist:[
   			{onelogo:require('@/assets/img/bili-creative/7.png'),name:'首页管理',},
        {onelogo:require('@/assets/img/bili-creative/7.png'),name:'内容管理',},
        {onelogo:require('@/assets/img/bili-creative/7.png'),name:'数据中心',},
        {onelogo:require('@/assets/img/bili-creative/7.png'),name:'粉丝管理',},
        {onelogo:require('@/assets/img/bili-creative/7.png'),name:'互动管理',},
        {onelogo:require('@/assets/img/bili-creative/7.png'),name:'收益管理',},
        {onelogo:require('@/assets/img/bili-creative/7.png'),name:'创作学院',},
        {onelogo:require('@/assets/img/bili-creative/7.png'),name:'个人设置',},
        {onelogo:require('@/assets/img/bili-creative/7.png'),name:'申诉管理',},
   		],
      downlist:[
      {logo:require('@/assets/img/bili-creative/8.png'),title:'投稿工具',version:'2.0.0.1054'},
      {logo:require('@/assets/img/bili-creative/9.png'),title:'直播姬',version:'2.0.0.1149'},
      {logo:require('@/assets/img/bili-creative/10.png'),title:'点我维权',version:'v1.0'},

      ],
      helplist:[
      {name:'反馈与建议'},
      {name:'帮助中心'},
      {name:'在线客服'},
      {name:'bilibili认证'},
      ],
      imgall:[
      {image:require('@/assets/img/bili-creative/1.jpg')},
      {image:require('@/assets/img/bili-creative/2.jpg')},
      {image:require('@/assets/img/bili-creative/3.jpg')},
      {image:require('@/assets/img/bili-creative/4.jpg')},
      {image:require('@/assets/img/bili-creative/19.png')},
      ],
     namelist:[
      {name:'30天vlog挑战'},{name:'这些人生经验越早知道越好！'},
      {name:'抓住最后的提分机会！'},{name:'投稿瓜分20万双十二回血金！'},
      ],
      cardimg:[
      {img:require('@/assets/img/bili-creative/11.png'),headline:'vlog',
      num:'共60课',detail:'学习步骤：拍摄、剪辑、字幕',},
      {img:require('@/assets/img/bili-creative/12.png'),headline:'鬼畜',
      num:'共66课',detail:'学习步骤：扒谱、调音、混音、剪辑',},
      {img:require('@/assets/img/bili-creative/13.png'),headline:'影像剪辑',
      num:'共60课',detail:' 学习步骤：素材合成、视频特效',},
      {img:require('@/assets/img/bili-creative/13.png'),headline:'影像剪辑',
      num:'共60课',detail:' 学习步骤：素材合成、视频特效',},
      {img:require('@/assets/img/bili-creative/13.png'),headline:'影像剪辑',
      num:'共60课',detail:' 学习步骤：素材合成、视频特效',},
      {img:require('@/assets/img/bili-creative/13.png'),headline:'影像剪辑',
      num:'共60课',detail:' 学习步骤：素材合成、视频特效',},

      ],
      picturelist:[
      {pic:require('@/assets/img/bili-creative/5.jpg'),time:'20:07',title:'如何选择适合自己的VLOG设备？我的自用设备大公开！',},
      {pic:require('@/assets/img/bili-creative/6.jpg'),time:'11.08',
      title:'【易烫】揭秘美妆博主的拍摄幕后？怎样成为一名美妆UP主？',},
      {pic:require('@/assets/img/bili-creative/7.jpg'),time:'12:09',
      title:'成为一个优秀的“音乐UP主”必须要知道的3件事！',},
      {pic:require('@/assets/img/bili-creative/8.jpg'),time:'04:13',
      title:'【她总出品】入坑音乐UP主如何挑设备才不会被坑？【UP主学园公开课】',},

      ],
      rowlist:[
      {title:'数据总览',data:'稿件、专栏、粉丝数据未解锁',
      name:'当前位置可展示粉丝数、播放数、阅读数、评论数、分享数、弹幕数等等',},
       {title:'收益总览',data:'收益数据总览',
      name:'当前位置可展示您的收益',}
      ],
      menu:[
      {data:'bilibili',},{data:'帮助中心',},
      {data:'问题反馈',},{data:'关于我们',},{data:'活动专题页',},
      ],
      lis:[
      {img:require('@/assets/img/bili-creative/17.png'),},
      {img:require('@/assets/img/bili-creative/18.png'),},
      ],
        
   	}
   },
   	methods:{
      
   		enter(){
   			this.isShow=true;

   		},
   		leave(){
   			this.isShow=false;
   		},
      go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 2000)
        },
      stop() {
            clearInterval(this.timer)
            this.timer = null
        },
     
      autoPlay() {
            this.currentIndex++;
            if (this.currentIndex >= this.imgall.length) {
                this.currentIndex = 0;
            }
        }
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay();
            }, 2000)
        })
      
   },
 }
</script>
<style scoped>
.shopheader{
  z-index:999999;
}
.allcontent{
position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
li{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
a {
    text-decoration: none;
    color: #00a1d6;
    cursor: pointer;
}
.contentleft{
	   position: fixed;
    transform: translateZ(0);
    padding-top: 42px;
    top: 0;
    left: 0;
    border-right: 1px solid #e5e9ef;
    background: #fff;
    height: 100%;
    width: 240px;
    overflow-x: hidden;
}
/*.contentleft::-webkit-scrollbar{
  display:none;

        }
        */
.writeother{
	   position: fixed;
    width: 86px;
    top:131px;
    box-shadow: 0 1px 3px 0 #d6d6d6;
    border-radius: 4px;
    background: #fff;
    z-index: 100;
    left: 200px;
}
.allother{
    display: block;
    margin-bottom: 15px;
    padding: 5px 0;
    cursor: pointer;
    position: relative;
}
.allother>img{
    width: 20px;
    height: 20px;
    display: block;
    margin: 0 auto 3px;
}
 .allother>p {
    font-size: 12px;
    color: #00a1d6;
    letter-spacing: 0;
    text-align: center;
}
.listtop{
	width: 240px;
    height: 100%;
}
.listtop img{
	display: block;
    height: 35px;
    width: 175px;
    margin: 37px auto 16px;
}
.write{
	width: 130px;
    margin: 0 auto 20px;
}
.write>a {
    display: block;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 4px;
    background: #00a1d6;
    cursor: pointer;
}
.lsitcontent{
  padding-bottom: 35px;

}
.lsitcontent>li{
    margin-top: 24px;
    user-select: none;
}
.listall{
  width:240px;
  height:24.8px;
}
.lsitcontent .listall a{
	position: relative;
    display: block;
    height:24.8px;
    font-size: 16px;
    line-height: 24px;
    color: #505050;
    padding: 0 23px 0 74px;
}
.listall img{
  width:16px;
  height:16px;
  margin-top:6px;
  float:left;
  box-sizing: inherit;

}
.listall span{
    padding-left: 10px;
     float:left;
}
.listall span:hover{
   color:#00a1d6;
}
.cutline{
  width: 96px;
    height: 1px;
    background: #e7e7e7;
    margin: 0 auto;
}
.downlist{
  padding: 40px 0;
}
.downlist a:hover{
  background-color:#e7e7e7;

}
.down-link{
    display: block;
    width: 148px;
    height: 48px;
    border-radius: 24px;
    font-size: 14px;
    color: #6d757a;
    margin: 0 auto 20px;
    padding-left: 10px;
}
.down-link img {
    float: left;
    width: 46px;
    height: 46px;
    margin-top: 1px;
}
.downof{
    float: left;
    margin: 9px 0 0 10px;
}
.down-link .title{
    color: #222;
    font-weight: 700;
    font-size: 14px;
    height: 15px;
    line-height: 15px;
    margin-bottom: 3px;
}
.down-link .version{
    color: #99a2aa;
    font-size: 12px;
    height: 15px;
    line-height: 15px;
}
.helplist{
  padding: 40px 0 0;
}
.helplist .help-link{
    display: block;
    font-size: 15px;
    text-align: center;
    color: #99a2aa;
    margin-bottom: 30px;
}
.helplist a:hover{
  color:#23ade5;

}
.contentmiddle{
    /*position: relative;*/
    padding: 42px 0 0 240px;
    height: 100%;
}
.middleall{
  padding-bottom: 154px;
  margin: 0 auto;
  padding: 30px 0;
  width: 940px;
}
.row1{
  height: 220px;
    display: flex;
}
.picard{
    background: #fff;
    overflow: hidden;
    display: inline-block;
    position: relative;
}
.picbox{
  width: 620px;
    height: 220px;
    float: left;
  }
.picmoddle{
  position: relative;
    width: 100%;
    height: 100%;

  }
.picoff{
  width:2480px;
    position: relative;
    transition: all .3s;
}
.picoff li{
    position: relative;
}
.picoff li a{
    display: inline-block;
}
.picoff .pic{
  float: left;
}
.image-enter-to {
  transition: all 2s ease;
  transform: translateX(0);
}

.image-leave-active {
  transition: all 2s ease;
  transform: translateX(-100%);
}

.image-enter{
  transform: translateX(100%);
}

.image-leave {
  transform: translateX(0);
}
.panel{
  border-radius: 4px;
  position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: inherit;
}
.trig{

}
.trig li{

}
.lazy-img{
    display: inline-block;
}
.lazy-img img {
    display: block;
    width: 100%;
    height: 100%;
}
.picbottom{
  background: -webkit-linear-gradient(transparent,rgba(0,0,0,.5));
    color: #2b2c2e;
}
.picbottom  a{
    width: 430px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.middleleft{
  margin-left: 32px;
    width: 288px;
    height: 100%;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    padding: 0 13px;
}
.greetings{
    border-bottom: 1px solid #e7e7e7;
    padding: 11px 0;
    text-align: center;
    font-size: 13px;
    color: #505050;
    line-height: 16px;
}
.greetings .greet-num{
    font-size: 12px;
    color: #fb7299;
    font-weight: 600;
}
.calendar{
    padding: 8px 0;
    color: #505050;
    text-align: center;
    font-size: 12px;
}
.today{
    font-family: SFProDisplay-Medium;
    font-size: 42px;
}
.luck_wrap{
  display: flex;
  justify-content: center;
}
.luck_title{
    background: #00a1d6;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    color: #fff;
    -webkit-box-pack: center;
    align-items: center;
     display: flex;
    justify-content: center;
}
.luck_desc{
    font-size: 14px;
    padding-top: 1px;
    margin-left: 20px;
    position: relative;
}
.luck_desc:before{
    content: " ";
    left: -10px;
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    top: 10px;
    background: #999;
}
.calendarfooter{
    font-size: 12px;
    color: #505050;
    line-height: 17px;
}
.footercontent{
  height: 34px;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    align-items: center;
}
.footercontent span{
    display: inline-block;
}
.calendarside{
    right: -3px;
    position: fixed;
    height:118px;
    border: 1px solid #e7e7e7;
    border-radius: 6px;
    width: 36px;
    padding: 14px 0;
    display: flex;
    top: 120px;
    align-items: center;
    cursor: pointer;
    background: #fff;
}
.calendarside p{
    font-size: 12px;
    width:17px;
    height:88px;
    padding-left:10px;
}
.academy{
  background: #fff;
    overflow: hidden;
}

.academy .academytitle{
    height: 24px;
     color: #2b2c2e;
    line-height: 24px;
    margin-top: 40px;
}
.academytitle p{
  float: left;
    font-size: 20px;
    font-weight: 700;
}
.academy .academytitle .r{
    color: #7a7c7f;
    font-size: 14px;
    float: right;
}
.academy .academytitle a:hover{
    color:blue;
  }
 .academy .academytitle  .r span{
    font-size: 14px;
    vertical-align: middle;
    position: relative;
}
.academy .academybox{
    width: 100%;
}
.academybox .customize{
    margin-top: 24px;
}
.academybox .customize .course-wrp{
    border: none;
}
.carousel-wrp{
    position: relative;
}
.carousel-wrp .panel .picoff{
    position: relative;
    overflow: hidden;
    box-shadow: none;
}
#scrollx{
    position: relative;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    margin-right: 20px;
    padding: 31px 12px;
    float:left;
}
.carousel-wrp .panel .picoff li a{
    display: flex;
    align-items: center;
}
.carousel-wrp .panel .picoff .card-img{
    display: inline-block;
    margin-right: 16px;
    width: 48px;
    height: 48px;
}
.carousel-wrp .panel .picoff .card-img img{
   width:100%;
   height:100%;
}
.carousel-wrp .panel .picoff .card-info{
    width: 210px;
    height: 48px;
    display: inline-block;
}
.carousel-wrp .panel .picoff .card-info .title{
    height: 18px;
    width:210px;
    line-height: 18px;
    margin-top: 0;
}
.carousel-wrp .panel .picoff .card-info .title .headline{
    font-size: 16px;
    color: #212121;
    max-width: 120px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.carousel-wrp .panel .picoff .card-info .title .num{
    font-size: 14px;
    color: #999;
    float:right;
}
.carousel-wrp .panel .picoff .card-info .detail{
    margin-top: 10px;
    font-size: 13px;
    color: #505050;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
}
.carousel-wrp .page{
    height: 42px;
    line-height: 42px;
    text-align: center;
}
.carousel-wrp .page .next{
    display: inline-block;
    height: 10px;
    width: 10px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #e7e7e7;
    margin-right: 12px;
}
.carousel-wrp .page .current{
    border: 1px solid #23ade5;
    background: #23ade5;
}
.vedio video{
  width:940px;
}
.academybox .recommenda{
    margin-top: 40px;
    width:940px;
}
.recommenda .redlist{
    display: flex;
     width:940px;
    justify-content: space-between;
}
.redlist .reditem{
    position: relative;
    width: 226px;
    height: 199px;
    font-size: 14px;
}
.academybox .recommenda .reditem .redpicture{
    position: relative;
    height: 141px;
    border-radius: 4px;
}
.recommenda .reditem .redpicture img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
.recommenda .reditem .redpicture .duration{
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    background: rgba(0,0,0,.3);
    padding: 3px 5px;
    border-radius: 4px;
}
.recommenda .reditem .redtitle{
    margin-top: 16px;
    font-size: 14px;
    height: 42px;
    color: #222;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.row2 {
    margin-top: 0;
}
.data-card .empty-title {
    height: 24px;
    line-height: 24px;
    margin-top: 40px;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 24px;
}
.data-card .empty-data {
    text-align: center;
    padding-top: 32px;
    height: 120px;
    border: 1px solid #e5e9ef;
}
.data-card .empty-data p {
    font-size: 15px;
    color: #6d757a;
    margin-bottom: 14px;
}
.data-card .empty-data span {
    font-size: 12px;
    color: #99a2aa;
}
.footer-wrp {
    width: 940px;
    margin: 0 auto;
     font-size: 12px;
    padding-top: 20px;
    padding-bottom:110px;
    /*margin-top: -154px;*/
    position: relative;
    z-index: 1;
}
.footer-content{
    border-top: 1px solid #e5e9ef;
}
.footer-content .menu{
    padding: 30px 0 0 0;
    height: 12px;
    line-height: 12px;
    float:left;
}
.footer-content .menu a:hover{
  color:blue;
}
.footer-content .menu-item:first-child{
    padding: 0 16px 0 0;
}
.footer-content .menu-item {
    display: inline-block;
    color: #99a2aa;
    padding: 0 16px;
    border-right: 1px solid #ccd0d7;
}
.footer-content .social-menu{
    padding: 20px 0 0 0;
    float:right;
}
.footer-content .weibo{
    margin-right: 10px;
}
.footer-content .social-item img{
  width: 32px;
    height: 32px;

}
</style>
