<template>
		<div class="all">
			<div class="top-banner">
				<img v-bind:src="src1">
			</div>
			<div class="title-line">
				<span class="tit" style="font-size: 38px;">{{tit}}</span>
			</div>
			<div class="login-box">
				<div class="login-left">
					<div class="qrcode-login">
						<div class="qrcode-con">
							<i class="tv-icon">
                                <img v-bind:src="src2">                     
                            </i>
                            <div class="qrcode-box">
                                <div class="qrcode-tips"></div>
                                <div class="qrcode-img">
                                    <canvas width="140" height="140" style="display: none;"></canvas>
                                    <img  v-bind:src="src3">
                                </div>
                            </div> 
						</div>
                        <div class="qrcode-footer" v-bind:style="{backgroundImage:'url(' + bg + ')',}">
                            <p class="status-txt">{{txt1}}</p>
                            <p class="app-link">{{txt2}} 
                                <a href="#" target="_blank">哔哩哔哩客户端</a>
                                <br>
                                {{txt3}}
                                <br>
                                {{txt4}}
                             </p>
                        </div>
					</div>
				</div>
                <div class="line"></div>
                <div class="login-right">
                    <div class="form-login">
                        <div class="input-box">
                            <ul>
                                <li class="item username status-box">
                                    <input type="text"  placeholder="你的手机号/邮箱" id="login-username" autocomplete="off" v-model="userInfo.num" @blur="a">
                                    <span class="tiShi">{{ tiShi.tishi1 }}</span>
                                    <!--<span class="status error" v-bind:style="{backgroundImage:'url(' + bg1 + ')',}"></span>
                                    <div class="text clearfix">
                                        <p class="msgname">{{name}}</p>
                                    </div>-->
                                </li>
                                <li class="item password status-box">
                                    <input type="password" placeholder="密码" id="login-passwd" v-model="userInfo.password" @blur="b">
                                    <span class="tiShi">{{ tiShi.tishi2 }}</span>

                                    <span class="status"></span>
                                    <div class="text clearfix">
                                        <p class="tips"></p>
                                    </div>
                                </li>
                                <li class="item gc clearfix">
                                    
                                </li>
                                <li class="remember">
                                    <label>
                                        <input type="checkbox" v-model="userInfo.checkbox">
                                        记住我
                                        <span>不是自己的电脑上不要勾选此项</span>
                                        <a target="_blank" href="" class="forget-password">忘记密码?</a>
                                        <a target="_blank" href="" class="not-checkout">无法验证?</a>
                                    </label>
                                </li>
                                <li class="btn-box">
                                    <a href="#" class="btn btn-login" id="login" @click="flag" :disabled="btn">登录</a> 
                                    <a  @click="registerClick" class="btn btn-reg" id="reg">注册</a>
                                </li>
                                <li class="sns">
                                    <a class="btn weibo">
                                        <img v-bind:src="logo1"/>
                                        微博账号登录
                                    </a>
                                    <a class="btn qq">
                                        <img v-bind:src="logo2"/>
                                        QQ账号登录
                                    </a>
                                 </li>
                            </ul>
                        </div>
                    </div>
                </div>
				
			</div>
            <p class="alltop">登录即代表你同意<a target="_blank" href="">用户协议</a>
                和
                <a target="_blank" href="">隐私政策</a>
            </p>
		</div>
</template>

<script>
	
	export default {
	  name: 'logo',
      components:{
      },
	  data(){
	  	return{

      
        btn:false,
        tiShi:{
        tiShi1:'',
        tishi2:'',
      },
      userInfo:{
        num:'',
        password:'',
        checkbox:true,
      },
      userArr:[],

	  		src1:require('@/assets/img/bili-logo/1.png'),
	  		tit:'登录',
            src2:require('@/assets/img/bili-logo/3.png'),
            src3:require('@/assets/img/bili-logo/4.png'),
            txt1:'扫描二维码登录',
            txt2:'请使用',
            txt3:'扫码登录',
            txt4:'或扫码下载APP',
            bg:require('@/assets/img/bili-logo/5.png'),
            tip:'请输入注册时用的邮箱或者手机号呀',
            bg1:require('@/assets/img/bili-logo/6.png'),
            logo1:require('@/assets/img/bili-logo/weibo.png'),
            logo2:require('@/assets/img/bili-logo/QQ.png'),
	  	}
	  },
      methods:{
      a(){
          this.tiShi.tishi1 = '';
          
          var n=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
        if (!this.userInfo.num)
          {
            this.tiShi.tishi1='请输入注册时用的邮箱或者手机号呀';  
            
          }     
            if (!n.test(this.userInfo.num)) 
            {
                this.tiShi.tishi1='手机号码格式不正确哦！';
                
            }
        },
      //密码
      b (){
        this.tiShi.tishi2 = '';
        
        var p=/[a-zA-Z]\w[z0-9]/; 
        if (!this.userInfo.password) 
        {
          
          this.tiShi.tishi2='喵，你没有输入密码么？';
        }
        else if(!p.test(this.userInfo.password))
        {
            
            this.tiShi.tishi2="由字母+数字组成，字母开头";
          }
        },
        
      flag (){
        //alert(1)
        this.tiShi.tishi1 = '';
        this.tiShi.tishi2 = '';
        this.isReturn = false;
         var n=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
            if (!this.userInfo.num)
            {
            this.tiShi.tishi1='请输入注册时用的者手机号呀';  
            
            }  
         else if (!n.test(this.userInfo.num)) 
            {
                this.tiShi.tishi1='手机号码格式不正确哦！';
                
            }
        //字母开头 ，由字母+数字组成
        var p=/[a-zA-Z]\w[z0-9]/; 
        if (!this.userInfo.password)
         {
          
          this.tiShi.tishi2='喵，你没有输入密码么？';
        }
        else if(!p.test(this.userInfo.password))
        {
            
            this.tiShi.tishi2="密码要由字母+数字组成，字母开头"
          }
        //手机号
          
        //同意协议
        if (n.test(this.userInfo.num) && p.test(this.userInfo.password)) 
            {
                this.btn=false;
                alert('登录成功');
                
                this.$router.push('/home')
            }
                else
                {
                    this.btn=false;
                alert('登录失败');
                
            } 
            
         //如果有这些提示就return
         if (this.tiShi.tishi || this.tiShi.tishi2 ) 
            return;
         },
         registerClick(){
            this.$router.push('/register')
         }
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: #00a1d6;
}
a:hover{
    color:blue;
}
p,ul,li{
    display: block;
    list-style: none;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}
ul {
    list-style: none;
    text-align: -webkit-match-parent;
}
input, select {
    outline: none;
}
.all{padding: 0;
    margin: 0;
    font-family: PingFangSC-Medium;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
}
.top-banner {
    background: #00a0d8;
    height: 86px;
    text-align: center;
    margin-bottom: 20px;
}
img{
	border:none;
}
.title-line {
    width: 980px;
    height: 28px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    margin-bottom: 28px;
    text-align: center;
}
.title-line .tit {
    height: 56px;
    line-height: 56px;
    margin: 0 auto;
    padding: 0 20px;
    font-size: 40px;
    background: #fff;
    text-align: center;
}
.login-box {
    position: relative;
    width: 980px;
    height:367px;
    margin: 0 auto;
}
.login-box .login-left {
    float: left;
    width: 489px;
}
.qrcode-login {
    position: relative;
    width: 480px;
}
.qrcode-login .qrcode-con {
    padding-top: 72px;
}
.qrcode-login .qrcode-con .tv-icon{
    position: absolute;
    width: 80px;
    height: 80px;
    left: 160px;
    top: 10px;
}

.qrcode-login .qrcode-con .qrcode-box {
    width: 140px;
    height: 140px;
    margin: 0 auto;
    background: #ddd;
    position: relative;
}
.qrcode-login .qrcode-con .qrcode-box .qrcode-tips {
    z-index: 10;
    position: absolute;
    width: 480px;
    height: 192px;
    top: -50px;
    left: 50%;
    margin-left: -240px;
    background-size: cover;
    background-color: #fff;
    opacity: 0;
    transition: opacity .5s;
}
.qrcode-login .qrcode-con .qrcode-box .qrcode-img {
    width: 140px;
    height: 140px;
}
.qrcode-login .qrcode-footer {
    width: 480px;
    height: 155px;
}
.qrcode-login .qrcode-footer .status-txt {
    padding-top: 20px;
    text-align: center;
    color: #222;
    font-size: 18px;
    letter-spacing: 3px;
    margin-bottom: 5px;
}
.qrcode-login .qrcode-footer .app-link, .qrcode-login .qrcode-footer .suc-txt{
    text-align: center;
    color: #717171;
    font-size: 14px;
}

.login-box .line{
    float: left;
    border-right: 1px solid #ddd;
    height: 300px;
    margin-top: 28px;
}
.login-box .login-right{
    float: left;
    padding-left: 45px;
    width: 490px;
    box-sizing: border-box;
}
.form-login{
    position: relative;
}
.form-login .input-box{
    margin-top: 50px;
    width: 414px;
}
.input-box input{
    width: 388px;
    border: 1px solid #ddd;
    border-radius: 2px;
    color: #aaa;
    font-size: 14px;
    padding: 10px;
    height: 18px;
    vertical-align: middle;
    border-radius: 4px;
}
.input-box .password{
    margin-top:30px;
}
.tiShi{
    color: #f66495;
    float: left;
    font-size:12px;
}
/*.input-box .item input.error{
    border-color: #f66495;
}*/
.status-box .status.error{
    display: block;
    background-position: -37px -38px;
}
.status-box .status{
    display: none;
    position: absolute;
    top: 8px;
    right: -25px;
    width: 20px;
    height: 20px;
}
.form-login .input-box .text{
    margin: 6px 0;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
}
.input-box .text .tips{
    color: #f66495;
    float: left;
}
.clearfix{
    width:414px;
}
.input-box .remember{
    margin: 10px 0;
    color: #717171;
    width: 410px;
    font-size: 12px;
}
.input-box .remember input{
    width:13px;
    height:13px;
}
.input-box .remember label{
    width:234px;
    height:20px;
}
.input-box .remember .forget-password{
    float: right;
}
.input-box .remember .not-checkout{
    margin-right:10px;
    float: right;
}
.form-login .input-box .remember span{
    color: #bbb;
    margin-left: 10px;
}
.form-login .input-box .btn-box .btn-login{
    border: 1px solid #0381aa;
    color: #fff;
    background-color: #00a1d6;
}
.input-box .btn-box .btn{
    color: #555;
    display: inline-block;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 2px;
    width: 184px;
    line-height: 38px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
}

.input-box .btn-box .btn-reg{
    margin-left: 34px;
}
#login:hover{
   background-color:#00a7de;
}
#reg:hover{
    background-color: #F5F5F5;
}
.input-box .sns{
    padding: 12px 0;
    font-size: 12px;
}
.input-box .sns .btn{
    color: #717171;
}
.sns .qq{
    margin-left: 20px;
}
.sns img{
    vertical-align: middle;
    margin-right: 5px;
    width:21px;
    height:21px;

}
.alltop{
    margin: 24px auto 0;
    width: 980px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #99a2aa;
    text-align: center;
    line-height: 16px;
    margin-bottom:20px;
}

</style>