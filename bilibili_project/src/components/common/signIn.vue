<template>
    <div class="i_menu_login">
        <p class="tip">登录后你可以：</p>
        <div class="img" 
        :style="{background:'url('+bsrc+')',width:imgWidch}">
        	<img :src="src1" :style="{left:left1+'px'}">
        	<img :src="src2" :style="{left:left2+'px'}">
        </div>
        <a class="login-btn" @click="loginClick">登录</a>
        <p class="reg">首次使用？ 
        	<a @click="regClick" >点我去注册</a>
        </p>
    </div>

</template>
<script>
    export default {
        name:'signIn',
        props:{
        	bsrc:{},
        	src1:{},
        	src2:{},
        	imgWidch:{
        		type:String,
        		default:'320px'
        	}
        },
        data() {
            return { 
               left1:0,
               left2:0
            }
        },
        components: {
            
        },
        methods:{
        	left(){
        		let width = parseInt(this.imgWidch)
        		this.left2 = width
        		setInterval(()=>{
        			this.left1-=5
        			this.left2-=5
        			if (this.left1<-width) {
        				this.left1=width
        			}
        			else if(this.left2<-width){
        				this.left2=width
        			}
        		},100)
        	},
        	loginClick(){
        		this.$emit('loginClick')
        	},
        	regClick(){
        		this.$emit('regClick')
        	}
        },
        mounted(){
        	this.left()
        }
    }
</script>
<style scoped>
.i_menu_login{
    width: 320px;
    padding: 15px;
    background:#fff;
    border: 1px solid #e5e9ef;
    /*height: 300px;*/
    text-align: left;
    display: none;
    transition: All 0.4s ease-in-out;
}
.tip{
    font-size: 12px;
    color: #6d757a;
}
.img{
	/*width: 320px;*/
	height: 200px;
	margin: 12px 0;
	overflow: hidden;
	position: relative;
}
.img img{
	/*width: 320px;
	height: 200px;*/
	width: 100%;
	height: auto;
	position: absolute;
	top: 0;
}
.login-btn{
	display: block;
    height: 43px;
    line-height: 43px;
    text-align: center;
    background: #00a1d6;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
}
.login-btn:hover {
    background: #00b5e5;
}
.reg{
	margin-top: 8px;
    text-align: center;
    font-size: 12px;
    color: #282828;
}
.reg a{
	color: #00a1d6;
	cursor: pointer;
}
.reg a:hover {
    color: #00b5e5;
}
</style>