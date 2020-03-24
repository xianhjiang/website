<template>
    <div class="rotationChartItem">
        <a href="">
            <img :src="src">
        </a>
    </div>
</template>
<script>
    export default {
        name:'rotationChartItem',
        props:{
            src:{
                // type:String,
            }
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
.rotationChartItem{
    position: relative;
    display: inline-block;
    /*width: 450px;
    height: 220px;*/
}
.rotationChartItem a{
    display: inline-block;
    width: 100%;
    height: 100%;
}
.rotationChartItem img{
    width: 100%;
    height: 100%;
}
</style>