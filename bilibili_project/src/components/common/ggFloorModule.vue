<template>
    <div class="gg-floor-module">
		<a href="">
			<div class="lazy-img">
				<img :src="src">
			</div>
			<img class="gg-pic" src="~assets/img/bili-wrapper/live-module/gg-floor-module/2.png">
		</a>
	</div>
</template>
<script>
    export default {
        name:'ggFloorModule',
        props:{
        	src:{}
        },
        data() {
            return { 
               
            }
        },
        components: {
            
        }
    }
</script>
<style scoped>
.gg-floor-module{
	width: 980px;
    max-height: 80px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    font-size: 0;
}
.gg-floor-module .lazy-img{
	width: 100%;
	height: 100%;
	display: inline-block;
}
.gg-floor-module .lazy-img img{
	display: block;
	width: 100%;
	height: 100%;

}
.gg-floor-module img{
	border-radius: 5px;	
}
.gg-floor-module .gg-pic{
	position: absolute;
    left: 0;
    bottom: 0;
}

</style>