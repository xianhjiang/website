<template>
    <div class="biliLogo">
        <logo v-show="isShow"></logo>
        <router-view></router-view>
    </div>
</template>
<script>
	import logo from './logo'
    export default {
        name:'biliLogo',
        data() {
            return { 
            	isShow:true
            }
        },
        components: {
            logo
        },
        methods:{
        	chang(){
        		// console.log(from.path)
        		// console.log($router.params.path)

        	}
        },
        watch:{
		    $route(to,from){
		      console.log(from.path);//从哪来
		      console.log(to.path);//到哪去
		      if (to.path=="/logo/register") {
		      	 this.isShow=false
		      }else{
		      	this.isShow=true
		      }
		     
			}
			// '$route':'chang'
		}
    }
</script>
<style scoped>
.biliLogo{
    margin-top: -63px;
    z-index: 99999;
    position: relative;
    background: #fff;
}
</style>