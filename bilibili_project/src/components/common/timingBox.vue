<template>
    <div class="timingBox clear-fix">
        <timing-box-item class="timing-box-item"
         v-for="v in timingBoxlists" :key="v.title"
        :item="v"></timing-box-item>  
    </div>
</template>
<script>
    import timingBoxItem from 'components/common/timingBoxItem'
    export default {
        name:'timingBox',
        props:{
            timingBoxlists:{
                type:Array,
                default:[]
            }
        },
        data() {
            return { 
               
            }
        },
        components: {
            timingBoxItem
        },
    }
</script>
<style scoped>
.timingBox{
    position: relative;
}
.timingBox .timing-box-item:first-child, .timingBox .timing-box-item:nth-child(2), .timingBox .timing-box-item:nth-child(3){
    padding-top: 0;
}
</style>