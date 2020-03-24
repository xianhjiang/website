<template>
    <div class="search">
      <form class="searchform">
      	<input type="" name="" class="search-keyword" :placeholder="placeholder">
      	<button type="submit" class="search-submit"></button>
      </form>
      <a href="#" class="link-ranking" @click="rankingClick">
      	<span>{{ranking}}</span>
      </a>
    </div>
</template>
<script>
    export default {
        name:'search',
        props:{
        	placeholder:{
        		type:String,
        		default:'请输入相关信息！'
        	},
        	ranking:{
        		type:String,
        		default:'排行榜'
        	}
        },
        data() {
            return { 
               
            }
        },
        components: {
            
        },
        methods:{
            rankingClick(){
                this.$router.push('/rankinglist')
            }
        }
    }
</script>
<style scoped>
.search{
    width: 268px;
    height: 32px;
    padding: 2px 2px 2px 72px;
    /* background-color: #e5e9ef; */
    background-color: rgba(0,0,0,.12);
    border-radius: 6px;
    font-size: 12px;
}
.searchform{
	background-color: hsla(0,0%,100%,.88);
    display: block;
    height: 32px;
    border-radius: 4px;
    transition: background-color .2s;
}
.searchform:hover{
	background: #fff;
}
.searchform .search-keyword{
	float: left;
    width: 200px;
    color: #222;
    font-size: 12px;
    overflow: hidden;
    height: 32px;
    line-height: 32px;
    padding: 0 12px;
    box-shadow: none;
    background-color: transparent;
}
.searchform .search-submit{
	display: block;
    position: absolute;
    right: 0;
    width: 48px;
    min-width: 0;
    cursor: pointer;
    height: 32px;
    margin: 0;
    padding: 0;
    background: url("~assets/img/bili-header/xbt.png") -653px -720px;
}
.searchform .search-submit:hover{
	background-position: -718px -720px;
}
.search .link-ranking{
	position: absolute;
    left: 2px;
    top: 2px;
    height: 32px;
    line-height: 32px;
    background-color: hsla(0,0%,100%,.88);
    border-radius: 4px;
    width: 68px;
    transition: background-color .2s;
}
.search .link-ranking span{
	padding-left: 26px;
    color: #f25d8e;
    display: inline-block;
    background:url("~assets/img/bili-header/xbt.png") -659px -655px no-repeat;
}
.search .link-ranking:hover{
	background: #fff;
}
</style>