<template>
    <div class="navWrapperLeft">
		 <ul>
		 	<wrapper-item :title="'主站'" @click.native="wrapperClick">
		 		<i slot="left" class="iconfont iconbilibili-fill"></i>
		 	</wrapper-item>
		 	<wrapper-item @click.native="wrapperClick(i)"
             v-for="(item,i) in navUlLists1" :title="item" :key="item">
		 	</wrapper-item>
		 	<wrapper-item :title="'下载APP'" @click.native="loadingClick">
		 		<i slot="left" class="iconfont iconshouji"></i>
		 	</wrapper-item>
		 </ul>     
    </div>
</template>
<script>
	import wrapperItem from 'components/common/wrapper-item'
    export default {
        name:'navWrapperLeft',
        data() {
            return { 
               navUlLists1:['游戏中心','直播','会员购','漫画','赛事','BW','70年'],
            }
        },
        components: {
            wrapperItem
        },
        methods:{
            wrapperClick(i){
                if (i==2) {
                    this.$router.push('/RankingList')
                }
                else{
                    this.$router.push('/home')
                }
                
            },
            loadingClick(){
                this.$router.push('/loading')
            }
        }
    }
</script>
<style scoped>
.iconbilibili-fill{
	color: #fff;
    font-size: 16px;
}
.navWrapperLeft ul{
	display: flex;
}
.iconfont{
    margin-right: 2px;
}
</style>