<template>
    <div class="reportWrapModule">
      	<headline class="headline" name="排行"
      	 :isreadPush="false" :dropdownList="['三日','一周']" 
      	 :isdropdown="true" @dropdownListClick="dropdownListClick"></headline>
      	 <rank-list :ranklist="ranklist[ranklistIndex]"></rank-list>
      	 <a href="#" class="more-link">
      	 	查看更多
      	 	<i class="icon-arrow-r"></i>	
      	 </a>
    </div>
</template>
<script>
	import headline from 'components/common/headline'
	import rankList from 'components/common/rankList'
    export default {
        name:'reportWrapModule',
        data() {
            return { 
            ranklistIndex:0,
               ranklist:[
               		[
						{title:'这个勇者明明超强却过分慎重',total:'更新至第8话'},
						{title:'动物狂想曲 / BEASTARS',total:'更新至第8话'},
						{title:'喜欢本大爷的竟然就你一个？',total:'更新至第9话'},
						{title:'Ｄｒ．ＳＴＯＮＥ 石纪元',total:'更新至第22话'},
						{title:'诸神的逆鳞',total:'更新至第8话'},
						{title:'青春猪头少年不会梦到怀梦美少女',total:'全1话'},
						{title:'超人高中生们即便在异世界也能从容生存！',total:'更新至第9话'},
						{title:'碧蓝航线',total:'更新至第8话'},
						{title:'我，不是说了能力要平均值么！',total:'更新至第8话'},
						{title:'我的英雄学院 第四季',total:'更新至第69话'},
					],
					[
					    {title:'这个勇者明明超强却过分慎重',total:'更新至第8话'},
						{title:'命运-冠位指定 绝对魔兽战线 巴比伦尼亚',total:'更新至第8节'},
						{title:'刀剑神域 爱丽丝篇 异界战争',total:'更新至第7话'},
						{title:'我的英雄学院 第四季',total:'更新至第69话'},
						{title:'动物狂想曲 / BEASTARS',total:'更新至第8话'},
						{title:'青春猪头少年不会梦到怀梦美少女',total:'全1话'},
						{title:'Ｄｒ．ＳＴＯＮＥ 石纪元',total:'更新至第22话'},
						{title:'入间同学入魔了',total:'更新至第8话'},
						{title:'我，不是说了能力要平均值么！',total:'更新至第8话'},
						{title:'喜欢本大爷的竟然就你一个？',total:'更新至第9话'},
					]
				]
            }
        },
        components: {
            headline,
            rankList
        },
        methods:{
        	dropdownListClick(i){
        		this.ranklistIndex=i
        	}
        }
    }
</script>
<style>
.reportWrapModule .headline .name{
    font-size: 18px;
    font-weight: 400;
}
.reportWrapModule .headline .name:hover{
	cursor: text;
	color: #000;
}
.reportWrapModule .headline .link-more:hover{
	background-color: #fff;
}
.reportWrapModule .headline .link-more .icon{
	background-position: -475px -157px;
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 6px;
    margin-left: 5px;
    margin-top: -1px;
}
.more-link{
	display: block;
    height: 24px;
    line-height: 24px;
    background-color: #e5e9ef;
    text-align: center;
    border: 1px solid #e0e6ed;
    color: #222;
    border-radius: 4px;
    transition: .2s;
}
.icon-arrow-r{
	display: inline-block;
    vertical-align: middle;
    background-position: -478px -218px;
    width: 6px;
    height: 12px;
    margin: -2px 0 0 5px;
    background-image: url('~assets/img/bili-header/xbt.png');
}
.more-link:hover{
	background-color: #ccd0d7;
    border-color: #ccd0d7;
}
</style>