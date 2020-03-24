<template>
    <div class="trigItem">
      <span></span>
    </div>
</template>
<script>
    export default {
        name:'trigItem',
        data() {
            return { 
               
            }
        },
        components: {
            
        }
    }
</script>
<style scoped>
.trigItem span{
	display: inline-block;
    width: 18px;
    height: 18px;
    background-image: url("~assets/img/bili-header/xbt.png");
    background-position: -855px -790px;
    transition: none;
    margin-left: 8px;
    cursor: pointer;
    /*transition: all .3s;*/
}
.trigItem.on span{
    background-position: -855px -727px;
}
.trigItem[class="trigItem"]:hover span{
	background-position: -919px -790px;
}
</style>