<template>
    <div>
    	<shopheader></shopheader>
    	<div class="purchase">
	    	<div class="confirmorder-container">
	    		<h1>订单信息</h1>
	    		<div class="project-info">
	    			<table>
	    				<tbody>
	    					<tr class="tr1">
	    						<th>商品</th>
	    						<th>单价</th>
	    						<th>数量</th>
	    						<th>合计</th>
	    						<th>操作</th>
	    					</tr>
	    					<tr v-show="isshow" class="goods" v-for="(item,i) in items">
	    						<td>
	    							<div class="project-content">
	    								<div class="content-left">
	    									<img :src="item.src">
	    								</div>
	    								<div class="content-right">
	    									<h1>{{item.title}}</h1>
	    									<p>{{item.data3}}</p>
	    									<p>
	    										<span>2月15日</span>
	    										<span>预售票</span>
	    									</p>
	    									<p class="ticket-type">
	    										<span></span>
	    										电子票
	    									</p>
	    								</div>
	    							</div>
	    						</td>
	    						<td>￥{{parseInt(item.data1)}}</td>
	    						<td class="number">
	    							<div>
		    							<button @click="reduceClick(i)" class="operation reduce">-</button>
		    							<a class="count">
                                        {{item.count}}</a>
		    							本
		    							<button @click="addClick(i)" class="operation add">+</button>
	    							</div>
    							</td>	
	    						<td class="total">
	    							<p>
	    								￥{{parseInt(item.data1)*item.count}}
	    								<span>(不包含运费)</span>
	    							</p>

	    						</td>
	    						<td><a @click="deleteClick(i)">删除</a></td>	
	    					</tr>
	    					
	    				</tbody>
	    			</table>
	    		</div>
	    	</div>
      	</div>
        <div class="total-price">
            <a href="#" class="price">总价格：￥{{totalPrice}}</a>
        </div>
      	<bili-footer></bili-footer>
    </div>
</template>
<script>
	import shopheader from 'components/biliRoute/purchase/shopheader'
	import biliFooter from 'components/content/bili-footer/biliFooter'
    export default {
        name:'purchase',
        data() {
            return { 
               // count:0
               isshow:true,
               totalPrice:0
            }
        },
        components: {
            shopheader,
            biliFooter
        },
        computed:{
            items(){
                return this.$store.state.order
            },
            // totalPrice(){
            //     let price=0
            //     for(let item of this.items){
            //         price+=item.count*parseInt(item.data1)
            //     }
            //     return price
            // }
            // count(i){

            //     return (i)=>{
            //         return this.$store.state.order[i].count
            //     }
            // }
        },
        methods:{
            reduceClick(i){
                this.isshow=false
                if (this.items[i].count<=1) {
                   this.items[i].count=1
                }else{
                    this.$store.commit('reducecount',i)
                }
                let price=0
                for(let item of this.items){
                    price+=item.count*parseInt(item.data1)
                }
                this.totalPrice=price
                // console.log(this.$store.state.order[i].count)
                this.$nextTick(()=>{this.isshow = true})
               
            },
            addClick(i){
                this.isshow=false
                this.$store.commit('addcount',i)
                let price=0
                for(let item of this.items){
                    price+=item.count*parseInt(item.data1)
                }
                this.totalPrice=price
                this.$nextTick(()=>{this.isshow = true})
            },
            deleteClick(i){

                this.$store.commit('deletegoods',i)
                let price=0
                for(let item of this.items){
                    price+=item.count*parseInt(item.data1)
                }
                this.totalPrice=price
                // console.log(i) 
            }
        },
        mounted(){
             // this.items=this.order()
            let price=0
            for(let item of this.items){
                price+=item.count*parseInt(item.data1)
            }
            this.totalPrice=price
        }
    }
</script>
<style scoped>
.purchase{
	display: flex;
    width: 1160px;
    margin: 0 auto;
}
.confirmorder-container {
    width: 100%;
    padding: 15px 40px 40px;
    margin: 40px 0;
    box-sizing: border-box;
    box-shadow: 0 0 2px 0 #cbd0d8;
    border-radius: 4px;
    background: #fff;
}
.confirmorder-container h1{
	font-weight: 400;
    font-size: 22px;
    line-height: 52px;
    color: #222;
}
.project-info {
    margin-bottom: 20px;
    border-bottom: 1px dashed #e7e7e7;
}
.project-info table tr:first-child {
    background: #f4f5f7;
}
.project-info tr{
    width: 1080px;
    padding-right: 15px;
    font-size: 12px;
    color: #222;
    box-sizing: border-box;
}
.project-info table th {
    padding: 15px 0;
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
    color: #6d757a;
}
.project-info table th:first-child {
    width: 310px;
}
.project-info .tr1 th{
	width: 250px;
	text-align: center;
}
.project-info table td:first-child {
    padding-left: 15px;
    text-align: left;
    width: 295px;
}
.project-info table td {
    padding: 15px 0;
    text-align: center;
}
.project-content .content-left{
	float: left;
    width: 86px;
    height: 114px;
    margin: 5px 0;
}
.project-content .content-left img {
    display: block;
    width: 100%;
    height: 100%;
}
.project-content .content-right {
    padding: 5px 5px 5px 96px;
}
.project-content .content-right h1 {
    max-height: 40px;
    margin-bottom: 15px;
    font-weight: 400;
    overflow: hidden;
    line-height: 20px;
    font-size: 14px;
    color: #222;
    margin-top: 3px;
}
.project-content .content-right p {
    font-size: 12px;
    color: #6d757a;
}
.project-content .content-right span{
	margin-right: 5px;
}
.project-content .content-right .ticket-type {
    margin-top: 15px;
    font-size: 14px;
    color: #fb7299;
}
.project-content .content-right .ticket-type span{
	display:inline-block;
    width: 15px;
    height: 18px;
    margin-right: 5px;
    background: url('~assets/img/bili-purchase/8.png') no-repeat;
    background-size: contain;
    vertical-align: -4px;
}
.goods td{
	width: 250px;
	text-align: center;
}
.goods td:nth-child(n+2){
	line-height:115px;
	font-size: 14px;
}
.goods span{
	line-height: 1.5em

}
.goods .count{
	color: #00a1d6;
	width: 33px;
	display: inline-block;
	/*border: 1px solid #e3e2e2;*/
}
.goods .operation{
	width: 40px;
    height: 34px;
    display: inline-block;
    font-size: 12px;
    cursor: pointer;

    /*border-left: 1px solid #e3e2e2;*/
}
.goods .operation.reduce{
	border-right: 1px solid #e3e2e2;
	font-size: 20px;
}
.goods .operation.add{
	border-left: 1px solid #e3e2e2;
	font-size: 20px;
}
.project-info table .goods .number div{
	display: inline-block;
	width: 136px;
    height: 34px;
    margin-top: 41px;
    border: 1px solid #e3e2e2;
    line-height: 34px;
}
.project-info table td.total {
    font-size: 16px;
    color: #fb7299;

}
.total span{
	display: block;
	margin-top: -48px;
}
.total p{
	margin-top: -55px;
}
.total-price{
    width: 1160px;
    height: 50px;
    border: 1px solid #e2e1e1;
    background-color: #f3f3f3;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 20px;
}
.price{
    width: 250px;
    height: 50px;
    float: right;
    line-height: 50px;
    font-size: 20px;
    background-color: #f10180;
    border: 1px solid #f10180;
    color: #fff;
    text-align: center;
}
</style>