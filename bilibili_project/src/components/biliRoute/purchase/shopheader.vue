<template>
<div class="nav-header-wrapper">
    <div class="nav-header">
        <div class="nav-header-logo" v-show="isLogo">
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
      <div v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)"
       class="user-panel" v-show="isShow" v-for="a in prelist">
            <div  class="user-uname">
              {{a.name}}
            </div>
            <div class="panel-list">
              <div  class="user-center-item">
                <span class="icon user-center-icon">
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
      <div class="order-and-icon-wrapper">
      <div class="icon order-icon">
        <img :src="src5">
      </div> 
      <div class="order-center">{{txt2}}</div>
      </div>
    </div>
  </div>
</template>
<script> 
 export default {
  name: 'shopheader',
  props:{
    isLogo:{
      type:Boolean,
      default:true
    }
  },

   data(){
    return{
      isShow:false,
      src1:require('@/assets/img/bili-purchase/1.png'),
      src2:require('@/assets/img/bili-purchase/2.png'),
      src3:require('@/assets/img/bili-purchase/3.png'),
      src4:require('@/assets/img/bili-purchase/3.gif'),
       src5:require('@/assets/img/bili-purchase/5.png'),
      txt1:'主站',
      txt2:'订单中心',
      prelist:[
          {
            name:'喜欢跳绳的红线',home:'个人中心',date:'订单中心',login:'退出登录',
          src6:require('@/assets/img/bili-purchase/6.png'),
          src7:require('@/assets/img/bili-purchase/7.png'),
        },
      ],
    }
  },
    methods:{
      changeActive($event) {
        $event.currentTarget.className = 'active';
      },
      removeActive($event,isShow) {
        $event.currentTarget.className = 'profile-img';
      },
      mainsiteClick(){
        this.$router.push('/home')
      }
    }
   
 }
 </script>

 <style>
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
/*.alltotal{
    background-color:#f1f3f5;
    width:100%;
    height:100%;
}*/
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
  z-index: 999;
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
  transition: all .5s ease;
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
 </style>