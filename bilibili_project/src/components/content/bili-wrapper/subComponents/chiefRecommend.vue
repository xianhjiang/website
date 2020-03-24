<template>
    <div class="clear-fix chiefRecommend">
      <rotation-chart class="carousel-box" :lists="panelList" :itemWidth="itemWidth" :itemHeight="'220px'" :interval="4000">
      </rotation-chart>
    </div>
</template>
<script>
    import rotationChart from 'components/common/rotationChart'
    export default {
        name:'chiefRecommend',
        props:{
            itemWidth:{
                type:String,
                default:'440px'
            }
        },
        data() {
            return { 
               panelList:[
                {text:'不再焦虑，快速get技能',src:require('@/assets/img/bili-wrapper/lbt/1.jpg')},
                {text:'双重会员低至每日0.6元',src:require('@/assets/img/bili-wrapper/lbt/2.webp')},
                {text:'准备好开启新的冒险了吗',src:require('@/assets/img/bili-wrapper/lbt/3.jpg')},
                {text:'只看一集就吓哭了',src:require('@/assets/img/bili-wrapper/lbt/4.webp')},
                {text:'一起来为考研应援吧！',src:require('@/assets/img/bili-wrapper/lbt/5.webp')},
                ],
            }
        },
        components: {
            rotationChart
        }
    }
</script>
<style >
.chiefRecommend,.carousel-box{
    width: 440px;
    height: 220px;
}
.chiefRecommend .carousel-module .panel .trig span{
    /*display: inline-block;*/
    width: 18px;
    height: 18px;
    background-image: url("~assets/img/bili-header/xbt.png");
    background-position: -855px -790px;
    background-color: transparent;
    transition: none;
}
.chiefRecommend .carousel-module .panel .trig span.on{
    background-position: -855px -727px;
    width: 18px;
    height: 18px;
}
.chiefRecommend .carousel-module .panel .trig span[class=""]:hover{
    background-position: -919px -790px;
}
</style>