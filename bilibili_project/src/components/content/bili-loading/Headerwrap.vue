<template>
<div>
  <div class="header-wrap">
        <div class="head-img">
            <div class="focus-us" style="width: 1219px;">
                <div class="head-title">
                    <p>关注我们</p>
                    <p class="red-line"></p>
                </div>
                <ul style="width: 1219px;margin-top:-40px;">
                    <li>
                        <img class="icon" src="~assets/img/bili-loading/icon-weibo.png" >
                        <div class="item">
                            <p class="title">官方微博</p>
                            <a href="//weibo.com/bilibiliapp" target="_blank" class="text block">@哔哩哔哩智能姬</a>
                            <a href="//weibo.com/bilibiliweb" target="_blank" class="text block">@哔哩哔哩弹幕网</a>
                        </div>
                    </li>
                    <li>
                        <img class="icon" src="~assets/img/bili-loading/icon-qq1.png">
                        <div class="item">
                            <p class="title">安卓用户讨论群</p>
                            <p class="text">147695150</p>
                            <p class="text">148472853</p>
                            <p class="text">342220554</p>
                        </div>
                    </li>
                    <li>
                        <img class="icon" src="~assets/img/bili-loading/icon-qq1.png">
                        <div class="item">
                            <p class="title">iOS用户讨论群</p>
                            <p class="text">164842482</p>
                            <p class="text">304959851</p>
                            <p class="text">272606513</p>
                        </div>
                    </li>
                    <li>
                        <img class="icon" src="~assets/img/bili-loading/icon-qq1.png">
                        <div class="item">
                            <p class="title">TV用户讨论群</p>
                            <p class="text">612217761</p>
                        </div>
                    </li>
                    <li>
                        <img class="icon" src="~assets/img/bili-loading/icon-email.png">
                        <div class="item">
                            <p class="title">帮助邮箱</p>
                            <p class="text">apphelp@bilibili.com</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="head-content">
            <div class="device-type-img">
                <img class="android" src="~assets/img/bili-loading/ios530.png">
            </div>
            <div class="device-type-select">
                <img src="~assets/img/bili-loading/tittle.png" alt="">
                <div class="dt-content">
                    <img style="border-radius: 10px;  width: 44%;" src="~assets/img/bili-loading/QRcode.png" alt="">
                    <div class="dt-choose report-wrap-module" id="download-link">
                        <a href=" " class="btn-android bg-android active" title="安卓版"></a>
                        <a href=" " class="btn-android-concept bg-android-concept" title="安卓概念版"></a>
                        <a href=" " class="btn-iPhone bg-iPhone" title="iPhone版"></a>
                        <a href=" " class="btn-iPhone-concept bg-iPhone-concept" title="iPhone概念版"></a>
                        <a href=" " class="btn-WP bg-WP" title="WP8版"></a>
                        <a href=" " class="btn-UWP bg-UWP" title="UWP版"></a>
                        <a href=" "  class="btn-iPad bg-iPad" title="iPadHD版"></a>
                        <a href=" " class="btn-TV bg-TV" title="TV版"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <Mainwrap></Mainwrap>
    </div>
</div>
</template>


<style scoped>
.header-wrap {
    position: relative;
    background: #fff url(~assets/img/bili-loading/bg1.png) no-repeat;
    margin: 0 auto;
    height: 689px;
}
.head-img {
    width: 100%;
    position: absolute;
    bottom: -500px;
    background: url(~assets/img/bili-loading/bg2.png) center no-repeat;
    height: 778px;
    z-index: 99;
}
/* 中部字体 */
.focus-us {
    position: absolute;
    top: 320px;
    left: 50%;
    margin-left: -603px;
}
.head-title {
    font-size: 24px;
    font-weight: bold;
    color: #6d757a;
    text-align: center;
    margin-bottom: 40px;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.red-line {
    display: inline-block;
    width: 62px;
    margin-top: 20px;
    border: 1px solid #f25d8e;
}

ul, li {
    list-style: none;
}
.focus-us li {
    display: inline-block;
    width: 240px;
    height: 123px;
}
.focus-us .icon, .focus-us .item {
    float: left;
    margin-left: 20px;
}
.focus-us .item {
    margin-left: 8px;
}
.focus-us .title {
    font-size: 16px;
    font-weight: bold;
    color: #6d757a;
}
.focus-us .text {
    font-size: 14px;
    color: #6d757a;
    margin-top: 15px;
}
.block {
    display: block;
}

/* 外部 */
.head-content {
    position: relative;
    width: 1160px;
    margin: 0 auto;
    padding-top: 60px;
}
/* 左边手机logo */
.device-type-img {
    width: 575px;
    height: 800px;
    overflow: hidden;
    float: left;
}
/* 右边文字 */
.device-type-select {
    float: left;
    margin: 65px 0 0 10px;
    width: 500px;
}
.device-type-select .dt-content {
    position: relative;
    margin-top: 50px;
}
.device-type-select .dt-choose {
    position: absolute;
    top: -5px;
    right: -20px;
}

/* 右边下载栏 */
.device-type-select .btn-android, .device-type-select .btn-iPhone, .device-type-select .btn-iPad, .device-type-select .btn-UWP, .device-type-select .btn-TV {
    width: 175px;
    height: 44px;
    right: 126px;
    position: absolute;
    cursor: pointer;
    background: center no-repeat;
    background-size: 70%;
}
.device-type-select .btn-android-concept, .device-type-select .btn-iPhone-concept, .device-type-select .btn-WP, .device-type-select .btn-TV {
    width: 175px;
    height: 44px;
    right: -8px;
    position: absolute;
    cursor: pointer;
    background: center no-repeat;
    background-size: 70%;
}

.device-type-select .bg-iPhone {
    background-image: url(~assets/img/bili-loading/IOS1.png);
    top: 5px;
}
.device-type-select .bg-iPhone-concept {
    background-image: url(~assets/img/bili-loading/IOS2.png);
    top: 5px;
}
.device-type-select .bg-android {
    background-image: url(~assets/img/bili-loading/Android1.png);
    top: 64px;
}
.device-type-select .bg-android-concept {
    background-image: url(~assets/img/bili-loading/Android2.png);
    top: 64px;
}
.device-type-select .bg-UWP {
    background-image: url(~assets/img/bili-loading/uwp.png);
    top: 122px;
}
.device-type-select .bg-WP {
    background-image: url(~assets/img/bili-loading/wp8.png);
    top: 122px;
}
.device-type-select .bg-iPad {
    background-image: url(~assets/img/bili-loading/iPad.png);
    top: 180px;
}
.device-type-select .bg-TV {
    background-image: url(~assets/img/bili-loading/TV.png);
    top: 180px;
}
</style>


<script>
import Mainwrap from 'components/content/bili-loading/Mainwrap'

export default {
    name:'headerwrap',
    components:{
        Mainwrap
    }
}
</script>