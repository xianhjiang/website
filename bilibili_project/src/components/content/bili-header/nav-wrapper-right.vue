<template>
    <div class="navWrapperLeft">
		 <ul>
            <div class="logo" @mouseover="logoMouseover" @mouseleave="logoMouseout">
    		 	<wrapper-item :ishover="false">
    		 		<div class="nav-item-img" slot="top">
    		 			<img
                        src="~assets/img/bili-header/2.gif">
    		 		</div>            
    		 	</wrapper-item>
            </div>
            <div @mouseover="logoMouseover" @mouseleave="logoMouseout">
                <sign-in :style="{display:display}" 
                @loginClick="imgClick" @regClick="imgClick"
                        :bsrc="bsrc" :src1="src1"  :src2="src2" 
                        class="sign-in"></sign-in>
            </div>
		 	<wrapper-item v-for="(item,i) in navUlLists2" 
            :key="item" :title="item" @click.native="wrapperClick(i)">
		 	</wrapper-item>
            <wrapper-item :ishover="false">
                <div slot="top" class="up-load">
                    <a href="" class="u-link">
                        投稿
                    </a>
                </div>
            </wrapper-item>
		 </ul>     
    </div>
</template>
<script>
	import wrapperItem from 'components/common/wrapper-item'
    import signIn from 'components/common/signIn'
    export default {
        name:'navWrapperRight',
        data() {
            return { 
               navUlLists2:['大会员','消息','动态','稍后再看','收藏','历史',
               '创作中心',],
               bsrc:require('@/assets/img/bili-logo/bili-signIn/1.png'),
               src1:require('@/assets/img/bili-logo/bili-signIn/2.png'),
               src2:require('@/assets/img/bili-logo/bili-signIn/3.png'),
               display:'none'
            }
        },
        components: {
            wrapperItem,
            signIn
        },
        methods:{
            imgClick(){
                this.$router.push('/logo')
            },
            wrapperClick(i){
                if (i==6) {
                    this.$router.push('/creative')
                }else{
                    this.$router.push('/home')
                }
                
            },
            regClick(){
                this.$router.push('/logo/register')
            },
            logoMouseover(){
                this.display='block'
            },
            logoMouseout(){
                 this.display='none'
            }
        }
    }
</script>
<style scoped>
.navWrapperLeft ul{
	display: flex;
}
.nav-item-img {
	width: 32px;
    height: 32px;
    margin-top: 5px;
}
.nav-item-img img{
	width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: All 0.4s ease-in-out;
}
.nav-item-img img:hover{
	transform: scale(2) translate(0, 10px);
    border: 1px solid #fff;
}
.up-load{
    position: relative;
    width: 68px;
    height: 42px;
    margin-left: 5px;
}
.up-load .u-link{
    display: block;
    width: 100%;
    height: 46px;
    line-height: 42px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #f45a8d;
    border-radius: 0 0 6px 6px;
}
.sign-in{
    margin-left:-192px;
    margin-top: 43px;
    position: absolute;
    z-index: -1;
    transition: All 0.4s ease-in-out;
}
/*.nav-item-img img:hover .sign-in{
    display: block;
}*/
</style>