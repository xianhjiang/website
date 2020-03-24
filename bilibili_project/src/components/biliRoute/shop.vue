<template>
<div class="alltotal">
  <div class="nav-header-wrapper">
    <div class="nav-header">
        <div class="nav-header-logo">
          <img :src="src1">
        </div>
        <div class="icon nav-header-tv-icon">
          <img :src="src2">
        </div>
        <div class="nav-header-mainsite" @click="mainsiteClick">{{txt1}}</div>
      <div class="nav-header-search-bar-wrapper">
        <input  placeholder="活动、嘉宾、场馆" type="text" class="nav-header-search-bar">
        <div class="icon search-icon">
          <a  target="_blank">
            <img :src="src3">
          </a>
        </div>
      </div>
      <div class="user-info">
        <a target="_blank" href="">
            <img :src="src4" v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">
        </a>
        </div>
      <div
       class="user-panel" v-show="isShow" v-for="a in prelist">
            <div  class="user-uname">
              {{a.name}}
            </div>
            <div class="panel-list">
              <div  class="user-center-item">
                <span class=" user-center-icon">
                  <img :src="a.src6">
                </span>
                 <a target="_blank" href="">{{a.home}}</a>
              </div>
              <div  class="user-center-item">
                <span class="icon user-center-icon">
                  <img :src="a.src7">
                </span>
                 <a target="_blank" href="">{{a.date}}</a>
              </div>  
            </div> 
            <div class="login-out">
                <a href="">{{a.login}}</a>
            </div>
      </div>
      <div class="order-and-icon-wrapper" @click="orderClick">
        <div class="icon order-icon">
          <img :src="src5">
        </div> 
        <div class="order-center">{{txt2}}</div>
      </div>
    </div>
 </div>
   <div class="buyticket" v-for="b in buylist">
      <div class="bread-wrapper">
      <span><a href="">{{b.t1}}</a></span>
      <span class="symbol">></span>
       <span><a href="">会员购</a></span>
      <span class="symbol">></span>
      <span class="project-name">{{item.title}}</span>
      </div>
      <div class="whole-wrapper">
        <div class="detail-img-icon no_pic">
          <img :src="item.src">
        </div>
        <div class="detail-info-wrapper">
          <div class="product-info-name">{{item.title}}</div>
          <div class="product-info-time-wrapper">
            <div class="product-info-time-title">{{b.t4}}</div> 
            <div class="product-info-time">{{b.t5}}</div>
          </div>
          <div class="vuene-wrapper">
            <div class="title">卖家：</div> 
          <div class="vuene-info-content">
            <div class="vuene-name">{{item.data3}}</div> 
            <div class="address-name">人民路{{item.data2 | remove}}号</div> 
            <div class="address-icon">
              <img :src="b.src9">
            </div> 
            <div class="check-map">{{b.t9}}</div>
          </div>
        </div>
        <div class="show-wrapper">
          <ul class="clearfix" v-if="i==1" v-for="(c,i) in fixlist">
            <li class="titlethree">{{c.t1}}</li>
            <li class="screens">
              <div class="selectable-option activeone">
                 <p>{{item.data1 | remove}}</p>
              </div>
              <div class="selectable-option unable">
                 <p>{{c.t3}}</p>
              </div>
              <div class="selectable-option unable">
                 <p>{{c.t4}}</p>
              </div>
            </li>
          </ul>
          <ul class="clearfix">
            <li class="titlethree">数量：</li>
              <li class="num-content">
                <div class="ticket-count">
                  <div class="count-reduce" v-on:click="subtract()">
                    <img :src="reduce">
                  </div> 
                  <div class="count-number">{{count}}</div> 
                  <div class="count-plus" v-on:click="subadd()">
                    <img :src="add">
                  </div>
                </div>
              </li>
          </ul>
          <div class="supplement">
            <div class="express-info"> 
              <span>电子票/兑换票·无需配送</span>
               <span>纸质票·快递包邮</span>
             </div> 
             <div class="refund-info"> 
              <span class="">不支持7天无理由退票</span>
            </div>
          </div>
          <div class="product-buy-wrapper">
            <div class="product-buy enable" @click="buyClick">
              <div>立即购买</div>
            </div>
          <div class="want-wrapper">
            <span class="want-icon">
              <img :src="src10">
            </span> 
            <div class="want-content">
              <p>{{item.pts}}人想买</p>
            </div>
            </div>
          </div>
        </div>
      </div>
        
      </div>
    </div>
  <div class="bottomall">
    <div class="shopbottom">
      <div class="tab">
          <div class="tab-item" v-for="d in tab">{{d.tab}}</div>
      </div>
    </div>
    <div class="bsecond">
      <div class="bottomalltell">
      <div class="tellall">
        <div class="tell">
          <div class="announcement">
            <div class="announcement-header">
              <div class="announcement-icon">
                <img :src="apic">
              </div> 
              <div class="announcement-title">公告</div>
            </div> 
            <div class="announcement-list hide">
              <div class="announcement-item">
              <div class="announcement-item-time1">10.3</div>
               <div class="circle1">
                 <img :src="circle1">
               </div> 
               <div class="announcement-item-desc">
                <a target="_blank" href="">活动档期调整</a>
              </div>
            </div>
            <div class="announcement-item">
              <div class="announcement-item-time">10.18</div>
               <div class="circle2"></div> 
               <div class="announcement-item-desc">
                <a target="_blank" href="">延期公告</a>
              </div>
            </div>
          </div> 
        </div>
        </div>
      </div>
      </div>
      <div class="allvip">
      <a name="vip" class="guest-wrapper">
        <div class="vipname">
              <div class="announcement-icon">
                <img :src="bpic">
              </div> 
              <div class="vip-title">参演嘉宾</div>
        </div>
        <div class="vip-list">
          <div class="vip-left"></div>
          <div class="vippeople">
              <div class="peoplelist" v-for="item in polist">
                <div class="image">
                  <img :src="item.src">
                </div>
                <div class="name"><a href="#">{{item.name}}</a></div>
              </div>
              
           </div>
        </div>

      </a>
      </div>
      <div class="bigimg">
        <img :src="bigimg">
      </div>
    </div>
    <div class="recommend">
      <div class="rec-list-wrapper">
        <div class="rec-list">
          <div class="rec-item" v-for="rec in reclist">
            <div class="rec-item-banner">
              <img :src="rec.src">
            </div>
             <div class="rec-item-name">{{rec.name}}</div>
              <div class="rec-item-time">{{rec.time}}</div>
               <div class="rec-item-vuene">{{rec.place}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script> 
 export default {
  name: 'shop',

   data(){
   	return{
      isShow:false,
      count:1,
      src1:require('@/assets/img/bili-shop/1.png'),
      src2:require('@/assets/img/bili-shop/2.png'),
      src3:require('@/assets/img/bili-shop/3.png'),
      src4:require('@/assets/img/bili-shop/3.gif'),
      src5:require('@/assets/img/bili-shop/5.png'),
      src8:require('@/assets/img/bili-shop/1.jpeg'),
      src10:require('@/assets/img/bili-shop/12.png'),
      apic:require('@/assets/img/bili-shop/15.png'),
      circle1:require('@/assets/img/bili-shop/16.png'),
      bpic:require('@/assets/img/bili-shop/17.png'),
      bigimg:require('@/assets/img/bili-shop/2.jpeg'),
      reduce:require('@/assets/img/bili-shop/11.png'),
      add:require('@/assets/img/bili-shop/14.png'),
      txt1:'主站',
      txt2:'订单中心',
      prelist:[
          {
            name:'喜欢跳绳的红线',home:'个人中心',date:'订单中心',login:'退出登录',
          src6:require('@/assets/img/bili-shop/6.png'),
          src7:require('@/assets/img/bili-shop/7.png'),
        }
      ],
      buylist:[
      {t1:'bilibili',t2:'苏州·圣诞奇妙日',
      t3:'苏州·圣诞奇妙日',t4:'时间：',
      t5:'2019.12.22 09:00 - 12.22 17:00',
      t6:'场馆：',t7:'万达广场(苏州平江店)',
      t8:'人民路3188号',t9:'查看地图',
      src8:require('@/assets/img/bili-shop/8.png'),
    },
      ],
      fixlist:[
      {t1:'场次：',t2:'1月1日',
      t3:'11月3日',t4:'12月12日',},
      {t1:'价格：',t2:'￥55(预售票)',
      t3:'¥65(现场票) 2020-01-01 00:00:00预售',t4:'¥35(早鸟票)',
        },
    ],
    tab:[{tab:'公告',},{tab:'参赛嘉宾',},{tab:'活动详情',},{tab:'讨论',}

    ],
    polist:[
    {src:require('@/assets/img/bili-shop/3.jpeg'),name:'沈谧仁'},
    {src:require('@/assets/img/bili-shop/4.jpeg'),name:'昭君'},
     {src:require('@/assets/img/bili-shop/6.jpeg'),name:'陆鹫贰黑'},
    {src:require('@/assets/img/bili-shop/7.jpeg'),name:'樱井色缇'},
     {src:require('@/assets/img/bili-shop/8.jpeg'),name:'未岚'},
    {src:require('@/assets/img/bili-shop/9.jpeg'),name:'白辰'},
    ],
    reclist:[
    {src:require('@/assets/img/bili-shop/4.jpeg'),name:'成都·2020CC&amp;CC国际动漫嘉年华',
        time:'2020.02.14-02.16',place:'成都东郊记忆'},
    {src:require('@/assets/img/bili-shop/10.jpeg'),name:'成都·真的爱你-2019致敬BEYOND·黄家驹演唱会 瞬间穿越那些光辉岁月',
        time:'2020.01.10-01.10',place:'成都乐空间'},
        {src:require('@/assets/img/bili-shop/18.png'),name:'成都·格度猫咪咖啡馆',
        time:'22019.08.01-2020.06.01',place:'第一城大厦'},
        {src:require('@/assets/img/bili-shop/11.jpeg'),name:'成都·BILIBILI WORLD 2019',
        time:'2019.12.21-12.22',place:'世纪城新国际会展中心'},
        {src:require('@/assets/img/bili-shop/12.jpeg'),name:'成都·miroir LolitaJK制服实体店',
        time:'2019.10.01-2020.04.27',place:'总府时代成都中心'},
        {src:require('@/assets/img/bili-shop/13.jpeg'),name:'成都·宫崎骏2019动漫视听音乐会系列-冬之远扬',
        time:'2019.12.21-12.21',place:'特仑苏音乐厅'},
    ],

   	}
  },
  computed:{
    item(){
      return this.$store.state.goods
    }
  },
  filters:{
    remove(item){
      return parseInt(item)
    }
  },
    methods:{
      changeActive($event) {
        $event.currentTarget.className = 'active';
        this.isShow=true;
      },
      removeActive($event,isShow) {
        $event.currentTarget.className = 'profile-img';
        this.isShow=false;
      },
      subtract:function(count){
          if (this.count<=1){
            alert('受不了啦，宝贝不能再减少啦')
            this.count=1;
          }
          else {
            this.count-=1;
          }
          this.$store.commit('reducegoods',this.count)
        },
        subadd:function(count){
          this.count++;
          this.$store.commit('addgoods',this.count)
       },
       mainsiteClick(){
        this.$router.push('/home')
       },
       orderClick(){
        this.$router.push('/order')
       },
       buyClick(){
        this.$store.commit('ordergoods')
        this.$router.push('/order')
       }
    
    }
   
   
 }
</script>

<style scoped>
a, input {
    outline: none;
    cursor: pointer;
}
a{
    color: #222;
    text-decoration: none;
}
li {
    display: list-item;
}
.alltotal{
    background-color:#f1f3f5;
    width:100%;
  height:100%;
}
.nav-header-wrapper{
    position: relative;
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
}
.nav-header{
    position: relative;
    width: 1160px;
    height: 100%;
    background: #fff;
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.nav-header-logo img{
    cursor: pointer;
    width: 130px;
    height: 27px;
}
.nav-header-mainsite{
    z-index: 100;
    font-size: 14px;
    color: #636c7b;
    line-height: 14px;
    width: 60px;
    cursor: pointer;
}
.nav-header .nav-header-tv-icon{
    cursor: pointer;
    margin-right: 6px;
    margin-left: 40px;
    height: 18px;
}
.nav-header .icon img{
    width: 18px;
    height: 18px;
}
.nav-header-search-bar-wrapper{
    height:40px;
    width:699px;
    position: relative;
}
.nav-header .nav-header-search-bar{
    cursor: auto;
    font-size: 12px;
    color: #6d757a;
    line-height: 14px;
    margin-left: 319px;
    width: 360px;
    height: 40px;
    border: none;
    padding-left: 20px;
    background: #f1f3f5;
    border-radius: 40px;
}
.nav-header .search-icon{
    cursor: pointer;
    transform: translateY(-50%);
    top: 50%;
    right: 12px;
    width: 18px;
    height: 18px;
    position: absolute;
}
.user-info{
  z-index: 99;
}
.user-info img{
    z-index: 9;
    margin-left: 40px;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    transition: all .5s ease;
}
.profile-img{
    z-index: 9;
    margin-left: 40px;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
.active{
  transform: scale(2) translateY(15px);
}
.order-and-icon-wrapper{
    margin-left: 25px;
    z-index: 100;
    display: flex;
    align-items: center;
}
.nav-header .user-panel{
    right: 15px;
    z-index: 10;
    background: #fff;
    position: absolute;
    width: 280px;
    height: 200px;
    top: 60px;
    color: #6d757a;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
}
.user-uname{
    margin: 0 20px;
    padding-bottom: 18px;
    margin-top: 58px;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    box-shadow: inset 0 -1px 0 0 #e7ecf1;
}
.panel-list {
    margin: 0 auto;
    width: 240px;
    height: 66px;
    box-shadow: inset 0 -1px 0 0 #e7ecf1;
    font-size: 12px;
    color: #6d757a;
    line-height: 14px;
}

.panel-list .user-center-item{
    margin-top: 24px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    float: left;
    width: 50%;
}
.panel-list .icon{
    margin-right: 10px;
    display: inline-block;
    width: 18px;
    height: 18px;
}
.user-panel a{
    color: #6d757a;
}
.user-panel .login-out{
    padding: 0 10px;
    height: 42px;
    line-height: 42px;
    text-align: center;
}
.nav-header .order-icon img{
    z-index: 100;
    margin-right: 4px;
}
.nav-header .order-center{
    z-index: 100;
    font-size: 14px;
    color: #636c7b;
    line-height: 14px;
    width: 60px;
    cursor: pointer;
    margin-right: 10px;
}
.buyticket{
    background: #fff;
    width: 100%;
    padding-bottom: 58px;
}
.bread-wrapper{
    width: 1160px;
    margin: auto;
    background: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
}
.bread-wrapper span{
    color: #000;
    font-size: 12px;
    margin-right: 5px;
}
.bread-wrapper .project-name{
    color: #99a2aa;
}
.whole-wrapper {
    background: #fff;
    width: 1160px;
    margin: auto;
    display: flex;
}
.whole-wrapper .detail-img-icon img{
    margin-right: 20px;
    width: 300px;
    height: 400px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.5), 0 4px 8px 0 rgba(0,0,0,.4);
    border-radius: 4px;
}
.detail-info-wrapper{
    width: 840px;
}
.detail-info-wrapper .product-info-name {
    font-size: 18px;
}
.product-info-time-wrapper{
    margin-top: 30px;
    display: flex;
    align-items: center;
}
.product-info-time-wrapper .product-info-time-title {
    font-size: 14px;
    color: #99a2aa;
    line-height: 14px;
    margin-right: 15px;
}
.product-info-time-wrapper .product-info-time {
    font-size: 14px;
    color: #222;
    line-height: 14px;
}
.vuene-wrapper{
    padding-bottom: 8px;
    margin-top: 10px;
    align-items: center;
    display: flex;
    border-bottom: 1px dashed #e7ecf1;
}
.title{
    line-height: 38px;
    font-size: 14px;
    color: #99a2aa;
    margin-right: 15px;
}
.vuene-info-content{
    display: flex;
    align-items: center;
}
.vuene-name{
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 430px;
}
.address-name{
    margin-right: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 10px;
    font-size: 12px;
    color: #99a2aa;
    line-height: 14px;
    max-width: 250px;
}
.address-icon img{
    margin-left: 15px;
    margin-right: 5px;
    width: 15px;
    height: 15px;
}
.check-map{
    cursor: pointer;
    font-size: 12px;
    color: #6d757a;
    line-height: 14px;
}
.detail-info-wrapper .clearfix{
  width:840px;
  height:50px;
  margin-top: 14px;
}
.ticket-count .count-reduce img{
    margin-left: 13px;
    width: 14px;
    height: 14px;
    cursor: pointer;
    border-top-left-radius: .133rem;
    border-bottom-left-radius: .133rem;
}
.screens{
  width:780px;
  height:50px;

}
.detail-info-wrapper .clearfix .titlethree{
    line-height: 38px;
    font-size: 14px;
    color: #99a2aa;
    width:42px;
    height:50px;
    margin-right: 15px;
    float:left;
}
.selectable-option.activeone{
    height: 38px;
    line-height: 38px;
    color: #f25d8e;
    border: 1px solid #f25d8e;
    float:left;
    box-shadow: inset 0 0 0 1px #f25d8e;
}

.selectable-option.unable {
    color: #b8c0cc;
    border-color: #e5e9ef;
    background-color: #f4f5f7;
    cursor: not-allowed;
}
.selectable-option {
    display: inline-block;
    position: relative;
    height: 38px;
    line-height: 38px;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 30px;
    border: 1px solid #ccd0d7;
    border-radius: 4px;
    user-select: none;
}
.selectable-option.activeone:before{
    display: inline-block;
    position: absolute;
    content: "";
    font-size: 0;
    line-height: 0;
    width: 6px;
    height: 4px;
    right: 1px;
    bottom: 3px;
    border: 1px solid #fff;
    border-width: 0 0 2px 2px;
    transform: rotate(-43deg);
    z-index: 10;
}
.selectable-option.activeone:after{
    position: absolute;
    content: "";
    font-size: 0;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: 0 0 18px 18px;
    border-color: transparent transparent #f25d8e;
}
.clearfix .num-content{
    display: flex;
}
.ticket-count {
    display: flex;
    align-items: center;
    height: 38px;
    border-radius: 3px;
    border: 1px solid #ccd0d7;
    width: 158px;
    line-height: 38px;
}
.ticket-count .count-reduce img{
    margin-left: 13px;
    width: 14px;
    height: 14px;
    cursor: pointer;
    border-top-left-radius: .133rem;
    border-bottom-left-radius: .133rem;
}
.ticket-count .count-number {
    flex: 1 1;
    width: 1.44rem;
    height: 1.013rem;
    line-height: 1.013rem;
    left: 1.013rem;
    text-align: center;
}
.ticket-count .count-plus img{
    margin-right: 13px;
    position: relative;
    right: 0;
    border-top-right-radius: .133rem;
    border-bottom-right-radius: .133rem;
    width: 14px;
    height: 14px;
    cursor: pointer;
}
.supplement {
    margin-top: 20px;
}
.supplement .express-info {
    margin-left: 60px;
    display: inline-block;
}
supplement .icon-small-circle {
    display: inline-block;
    vertical-align: middle;
    height: 4px;
    width: 4px;
}
.supplement span{
    vertical-align: middle;
    font-size: 12px;
    color: #999;
}
.supplement .refund-info {
    margin-left: 40px;
    display: inline-block;
    cursor: pointer;
}
 .product-buy-wrapper {
    margin-left: 57px;
    margin-top: 30px;
    display: flex;
}
.buyticket .product-buy.enable {
    color: #fff;
    background-image: linear-gradient(-48deg,#ff6a9c,#fe8574);
    box-shadow: 0 3px 4px 0 #fdb8cc;
}
.buyticket .product-buy{
    width: 240px;
    height: 50px;
    text-align: center;
    font-size: 16px;
    line-height: 50px;
    border-radius: 3px;
    cursor: pointer;
    background: #e4eaef;
    color: #99a2aa;
}
.product-buy-wrapper .want-wrapper{
    width: 240px;
    height: 50px;
    margin-left: 17px;
    cursor: pointer;
}
.want-wrapper .want-icon img{
    float: left;
    width: 22px;
    height: 22px;
    margin: 14px 5px 14px 0;
    background-size: 16px 16px;
}
.want-content{
    position: relative;
}
.want-content p{
    font-size: 12px;
    line-height: 50px;
    color: #212121;
    cursor: default;
}
.bottomall{
  width:100%;
  height:5320px;

}
.shopbottom{
  width: 1160px;
    margin: 0 auto;
    position: sticky;
    top: 0;
    height: 50px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    user-select: none;
    z-index: 9;
}
.tab{
     display: flex;
    margin-top: 20px;
    line-height: 50px;
}
.tab .tab-item {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    width: 140px;
    text-align: center;
}
.bsecond{
  margin-left:82px;
  width: 850px;
    float:left;
}

.bottomalltell{
  display: flex;
    width: 1160px;
    margin: 0 auto;
}
.tellall{
  width: 850px;
    box-sizing: border-box;
}
.announcement{
  width: 850px;
    padding: 20px;
    margin-top: 10px;
    border: 1px solid #e7ecf1;
    border-radius: 4px;
    background: #fff;
    box-sizing: border-box;
}
.announcement .announcement-headeer{
 display:flex;
}
.announcement-icon{
   width: 18px;
    height: 16px;
    margin-right: 10px;

}
.announcement-icon img{
    margin-right: 10px;
    width: 18px;
    height: 16px;
}
.announcement-title{
    font-size: 16px;
    color: #212121;
    width:32px;
    height:16px;
    margin-left:30px;
    margin-top:-16px;
    line-height: 16px;

}
.announcement-list{
    padding: 0 20px;
}
.announcement-item{
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 15px;
}
.announcement-item .announcement-item-time1 {
    color: #f25d8e;
     width: 50px;
    margin-right: 10px;
}
.announcement-item .announcement-item-time {
    color: #99a2aa;
    width: 50px;
    margin-right: 10px;
}
.announcement-item .circle1 img{
    border-radius: 50%;
    width: 11px;
    height: 11px;
    position: relative;
}
.announcement-item .circle2{
    border-radius: 50%;
    width: 11px;
    height: 11px;
    background: #b6c2cc;
    position: relative;
}
.announcement-item .announcement-item-desc{
    margin-left: 10px;
}
.announcement-item-desc a:hover{
  color:#f25d8e;
}
.allvip{
  width: 1160px;
    margin: 0 auto;
}
.guest-wrapper{
    background: #fff;
    cursor: auto;
    display: inline-block;
    padding: 20px 0;
    margin-top: 10px;
    width: 850px;
    height: 190px;
    border: 1px solid #e7ecf1;
    border-radius: 4px;
    box-sizing: border-box;
}
.vipname{
  padding: 0 20px;
    display: flex;
    font-size: 16px;
    color: #212121;
    line-height: 16px;
}
.viplist{
  height: 30px;
    width: 30px;
    box-sizing: border-box;
}

.vippeople{
    padding-left: 40px;
    overflow: hidden;
    padding-top: 20px;
    display: flex;
    flex: 1 1;
    text-align: center;
}
.peoplelist{
 margin-right: 50px;
 text-align:center;
}
.image{
   width: 80px;
    height: 80px;
}
.image img{
    border-radius: 40px;
    margin: 0 auto;
    width: 80px;
    height: 80px;
    position: relative;
    margin-left:10px;

}
.name{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80px;
    font-size:12px;
    margin-top: 10px;
    text-align:center;
    margin-left:10px;
}
.bigimg img{
    max-width: 788px;
    height: auto;
    background-size: 100% 100%;
    margin: 20px 0;
}
.recommend{
  margin-top: 10px;
    width: 290px;
    box-sizing: border-box;
   position: absolute;
   right: 66px;
}
.rec-item{
    cursor: pointer;
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 100%;
    padding: 18px 20px 13px;
    background: #fff;
    border: 1px solid #e7ecf1;
    border-radius: 4px;
}
.rec-item-banner img{
    width: 250px;
    height: 160px;
}
.rec-item-name{
    margin-top: 10px;
    font-size: 14px;
    color: #212121;
    line-height: 21px;
}
.rec-item-time{
  color: #99a2aa;
    font-size: 12px;
}
.rec-item .rec-item-vuene {
    color: #99a2aa;
    font-size: 12px;
}
.bigimg{
  text-align:center;
  border: 1px solid #e7ecf1;
  margin:0 auto;
  margin-top:20px;
  background: #fff;
}
</style>
