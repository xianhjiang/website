<template>
    <div class="biliTab clear-fix">
        <bili-tab-item class="biliTabItem" v-for="(item,i) in tabList"
        :text="item" :class="{on:i==currentIdex}" 
        @click.native="tabItemClick(i)" 
        @mouseover.native="tabItemOver(i)" :key="item" :bp="bpList[i]"
        ></bili-tab-item>
    </div>
</template>
<script>
    import biliTabItem from 'components/common/biliTabItem'
    export default {
        name:'biliTab',
        props:{
            tabList:{
                type:Array,
                default:()=>[]
            },
            bpList:{
                type:Array,
                default:()=>[]
            }
        },
        data() {
            return { 
               currentIdex:0,
               currentIdex1:0
            }
        },
        components: {
            biliTabItem
        },
        methods:{
            tabItemClick(i){
                this.currentIdex=i
                this.$emit('tabItemClick',i)
            },
            tabItemOver(i){
                this.currentIdex1=i
                this.$emit('tabItemOver',i)
            }
        }
    }
</script>
<style scoped>
.biliTab{
    overflow: hidden;
    display: flex;
}
.biliTab .biliTabItem:first-child {
    margin-left: 0;
}
</style>