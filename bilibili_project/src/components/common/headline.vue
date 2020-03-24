<template>
    <div class="clear-fix">
      <i class="icon icon_t icon-live" v-if="bp" :style="{backgroundPosition:bp}"></i>
      <a href="#" class="name" v-if="name">{{name}}</a>
      <div style="display: inline-block;" v-if="isonline" class="clear-fix">
	      <p class="online">
	      	<slot name="online"></slot>		
	      </p>
	      <a class="fire">
	      	<i class="icon pmt-icon"></i>
	      	233秒居然能做这些！
	      </a>
      </div>
      <slot name="middle"></slot>	
      <a class="link-more">{{ linkMore || 
        dropdownList[dropdownListIndex]}}
      	<i class="icon"></i>
        <ul class="dropdown-list" v-if="isdropdown">
            <li class="dropdown-item" 
            v-for="(item,i) in dropdownList" 
            v-if="item!==dropdownList[dropdownListIndex]"
            @click="dropdownListClick(i)">{{item}}</li>
        </ul>
      </a>
      <div class="read-push" v-if="isreadPush">
      	<i class="icon icon_read"></i>
      	<span class="info">
      		<b>{{num}}</b>
      		<span v-if="typeof(num)=='number'">条新动态</span>
      	</span>
      </div>				
    </div>
</template>
<script>
    export default {
        name:'headline',
        props:{
        	bp:{
        		type:String,
        		// default:'-141px -652px'
        	},
        	name:{
        		type:String,
        		// default:'哔哩哔哩'
        	},
        	isonline:{
        		type:Boolean,
        		default:false
        	},
            num:{
                default:9999
            },
            isreadPush:{
                type:Boolean,
                default:true
            },
            linkMore:{
                type:String,
                // default:'更多'
            },
            isdropdown:{
                type:Boolean,
                default:false
            },
            dropdownList:{
                type:Array,
                default:()=>[]
            }

        },
        data() {
            return { 
               dropdownListIndex:0
            }
        },
        components: {
            
        },
        methods:{
            dropdownListClick(i){
                this.dropdownListIndex=i
                this.$emit('dropdownListClick',i)
            }
        }
    }
</script>
<style scoped>
.icon{
	display: inline-block;
    background-image:url('~assets/img/bili-header/xbt.png');
}
.icon_t{
	width: 40px;
    height: 40px;
    margin-right: 10px;
    vertical-align: middle;
    float: left;
    margin-top: -10px;
}
/*.icon-live{
	background-position: -141px -652px;
}*/
.name{
	font-size: 24px;
    line-height: 24px;
    font-weight: 400;
    margin-right: 20px;
    float: left;
    color: #222;
}
.name:hover{
    color: #00a1d6;
}
.online{
	float: left;
    margin-top: 8px;
    color: #99a2aa;
    font-size: 12px;
}
.online span{
	color: #00a1d6;
}
.online:hover{
	cursor: text;
}
.fire{
	margin-top: 8px;
    margin-left: 40px;
    padding-right: 10px;
    color: #6d757a;
    float: left;
    font-size: 12px;
}
.fire .pmt-icon{
	display: inline-block;
    vertical-align: top;
    background-position: -665px -1113px;
    width: 14px;
    height: 14px;
    margin-top: 1px;
    vertical-align: bottom;
}
.fire:hover{
	color: #00a1d6;
	cursor: pointer; 
}
.link-more{
	float: right;
    width: 52px;
    height: 22px;
    line-height: 22px;
    background-color: #fff;
    border: 1px solid #ccd0d7;
    color: #555;
    border-radius: 4px;
    text-align: center;
    margin: 0 0 0 10px;
    transition: all .2s;
    font-size: 12px;
    cursor: pointer;
    position: relative;
}
.link-more i{
	display: inline-block;
    background-position: -478px -218px;
    width: 6px;
    height: 12px;
    margin: -2px 0 0;
    vertical-align: middle;
    transition: all .2s;
}
.link-more .dropdown-list{
    position: absolute;
    width: 100%;
    background: #fff;
    border: 1px solid #ccd0d7;
    border-top: 0;
    left: -1px;
    top: 20px;
    z-index: 10;
    display: none;
    border-radius: 0 0 4px 4px;
}
.link-more .dropdown-list .dropdown-item{
    cursor: pointer;
    margin: 0;
    padding: 3px 7px 3px 4px;
    text-align: left;

}
.link-more:hover .dropdown-list{
    display: block;
}
.link-more:hover{
	background-color: #ccd0d7;
}
.link-more:hover i{
	margin-left: 5px;
}
.read-push{
	float: right;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #ccd0d7;
    border-radius: 4px;
    height: 22px;
    padding: 0 10px;
    transition: all .2s;
    font-size: 12px;
}
.read-push:hover {
    background-color: #ccd0d7;
}
.read-push:hover .icon_read {
    transform: rotate(1turn);
}
.read-push .icon_read{
	display: inline-block;
    width: 12px;
    height: 13px;
    vertical-align: top;
    transition: all .5s;
    margin-top: 5px;
    background-position: -475px -89px;
}
.read-push .info {
    display: inline-block;
    vertical-align: top;
    line-height: 22px;
    margin-left: 5px;
    color: #000;
}
</style>