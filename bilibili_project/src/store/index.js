import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

const store = new Vuex.Store({
	state:{
		headline:{},
		goods:{},
		order:[]
	},
	mutations:{
		changeheadline(state,headline){
			state.headline=headline
		},
		seegoods(state,item){
			state.goods=item
		},
		reducegoods(state,count){
			state.goods.count=count
		},
		addgoods(state,count){
			state.goods.count=count
		},
		ordergoods(state){
			for(let item of state.order){
				if (item.title==state.goods.title) return
			}
			if (state.goods.count==null) {
				state.goods.count=1
			}
			state.order.push(state.goods)
		},
		reducecount(state,i){
			state.order[i].count--
		},
		addcount(state,i){
			state.order[i].count++
		},
		deletegoods(state,i){
			state.order.splice(i,1)
		}
	},
	// actions:{
	// 	add(context,i){
	// 		context.commit('addcount',i)
	// 	}
	// }

})
export default store