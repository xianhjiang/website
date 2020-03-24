<template>
<div>
    <div class="main-wrap">
        <div class="head-title">
            <p>更新情报</p>
            <p class="red-line"></p>
        </div>
        <div class="container">
            <ul class="info-select">
                <li class="active" data-type="android">安卓版</li>
                <li data-type="iPhone">iPhone版</li>
                <li data-type="iPad">iPad HD版</li>
                <li data-type="WP">WP8版</li>
                <li data-type="UWP">UWP版</li>
                <li data-type="TV">TV版</li>
            </ul>
            <Update></Update>
        </div>
    </div>
</div>
</template>


<style scoped>
.main-wrap {
    width: 1160px;
    margin: 500px auto 80px;
}
.main-wrap .router {
    color: black;
    text-decoration: none;
}
/* 字体 */
.head-title {
    font-size: 24px;
    font-weight: bold;
    color: #6d757a;
    text-align: center;
    margin-bottom: 40px;
}
.red-line {
    display: inline-block;
    width: 62px;
    margin-top: 20px;
    border: 1px solid #f25d8e;
}
/* 更新情报 */
.main-wrap .container {
    width: 1160px;
    min-height: 800px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px 3px #ffd7d7;
}

.main-wrap .info-select {
    border-bottom: 1px solid #e5e9ef;
    margin-bottom: 36px;
}
.main-wrap .info-select .active {
    border-radius: 30px;
    background-color: #f25d8e;
    color: #fff;
}
.main-wrap .info-select li {
    width: 114px;
    height: 36px;
    line-height: 36px;
    margin: 20px 0;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    color: #222;
    cursor: pointer;
}
</style>


<script>
import Update from 'components/content/bili-loading/Update'

export default {
    components:{
        Update
    }
}


</script>