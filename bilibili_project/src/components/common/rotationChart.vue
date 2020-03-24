<template>
    <div class="rotationChart" @mouseover="StopTimer()"
     @mouseleave="startTimer()">
      <div class="carousel-module">
          <div class="panel">
            <!-- <img src="~assets/img/bili-wrapper/lbt/1.jpg"> -->
              <ul class="pic" :style="{'margin-left':marginLeft + 'px',width:this.length*parseInt(this.itemWidth)+'px'}"
              @mouseover="opacity=1" @mouseleave="opacity=0">
                <rotation-chart-item v-for="item in lists" 
                 :src="item.src":style="{width:itemWidth,height:itemHeight}"
                 :key="item.text">
                </rotation-chart-item>
              </ul>
              <ul class="title">
                  <a href="" v-for="(v,i) in lists" 
                  :class="{on:i==currentIndex}">{{v.text}}</a>
              </ul>
              <ul class="trig">
                  <span @mouseover="trigmouseover(i)" @click="trigClick(i)" 
                  v-for="(v,i) in lists" 
                  :class="{on:i==currentIndex}"
                  :key="v.text"
                  v-if="showIndicator && length>0"></span>
              </ul>
              <a v-if="ismoreText" @mouseover="opacity=1" @mouseleave="opacity=0" href="" class="more-text" :style="{opacity:opacity}">更多</a>
          </div>
      </div>
    </div>
</template>
<script>
    import rotationChartItem from 'components/common/rotationChartItem'
    export default {
        name:'rotationChart',
        props:{
            //间隔 interval
            interval:{
                type:Number,
                default:3000,
            },
            showIndicator:{
                type:Boolean,
                default:true,
            },
            lists:{
                type:Array,
                default:[],
            },
            itemWidth:{
                type:String,
                default:'500px'
            },
            itemHeight:{
                type:String,
            },
            ismoreText:{
                type:Boolean,
                default:true
            }
        },
        data() {
            return { 
            timer:null,
            marginLeft:'',   
            currentIndex: 0, // 当前的index
            length:this.lists.length,
            opacity:0,
            }
        },
        components: {
            rotationChartItem,
        },
        methods:{
            startTimer(){
                this.timer = setInterval(()=>{
                    this.currentIndex++
                    this.currentIndex=this.currentIndex%this.length
                    this.marginLeft = -this.currentIndex*parseInt(
                        this.itemWidth)
                    // console.log(this.currentIndex)
                },this.interval)
            },
            StopTimer(){
                // this.timer=null 此方法解决不了
                clearTimeout(this.timer);
            },
            trigClick(i){
                this.currentIndex=i
                this.marginLeft = -this.currentIndex*parseInt(
                        this.itemWidth)
            },
            trigmouseover(i){
                this.$emit("trigmouseover",i)
            }

        },
        mounted(){
            setTimeout(()=>{
                this.startTimer()
            },100)
            
        }
    }
</script>
<style scoped>
.carousel-module{
    position: relative;
    width: 100%;
    height: 100%;
}
.carousel-module .panel{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
}
.carousel-module .panel .pic{
    /*width: 500%;*/
    z-index: 1;
    position: relative;
    transition: all .3s;
}
.carousel-module .panel .more-text{
    z-index: 1;
    display: block;
    position: absolute;
    right: 15px;
    bottom: 35px;
    color: #fff;
    background: #444;
    background: rgba(0,0,0,.64);
    width: 50px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 4px;
    font-size: 12px;
    opacity: 0;
    transition: all .5s linear; 
}
/*.carousel-module .panel .pic:hover .more-text{
    opacity: 1;
}*/
.carousel-module .panel .more-text:hover{
    text-shadow: 0 0 3px #fff;
    color: #fff;
}
.carousel-module .panel .more-text::after{
    content: "";
    display: inline-block;
    width: 6px;
    height: 12px;
    margin: -2px 0 0 5px;
    vertical-align: middle;
    background: url("~assets/img/bili-header/xbt.png") -541px -218px;
}
.carousel-module .panel .title{
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35px;
    line-height: 35px;
    background:-webkit-linear-gradient(transparent,rgba(0,0,0,.5));
    font-size: 14px;
}
.carousel-module .panel .title a{
    width: 280px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: absolute;
    /*width: 100%;*/
    color: #fff;
    text-decoration: none;
    padding-left: 10px;
    opacity: 0;
    z-index: -1;
    transition: all .3s;
}
.carousel-module .panel .title a.on{
    opacity: 1;
    z-index: 1;
}
.carousel-module .panel .trig{
    position: absolute;
    z-index: 3;
    bottom: 6px;
    right: 20px;
}
.carousel-module .panel .trig span{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 8px;
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
    transition: all .3s;
}
</style>