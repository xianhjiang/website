import VueRouter from 'vue-router'
import Vue from 'vue'
const home = ()=>import('../components/biliRoute/home.vue')
const RankingList = ()=>import('../components/biliRoute/RankingList.vue')
const biliPublic = ()=>import('../components/biliRoute/public.vue')
const biliLogo = ()=>import('../components/biliRoute/logo.vue')
const biliRegister = ()=>import('../components/biliRoute/register.vue')
const purchase = ()=>import('../components/biliRoute/shop.vue')
const order = ()=>import('../components/biliRoute/purchase.vue')
const loading = ()=>import('../components/biliRoute/loading.vue')
const creative = ()=>import('../components/biliRoute/creative.vue')

//安装路由
Vue.use(VueRouter)

const routes=[
	{
		path: '',
	    redirect:'home'
	},
	{
		path:'/home',
		component:home,
	},
	{
		path:'/rankinglist',
		component:RankingList
	},
	{
		path:'/public',
		component:biliPublic
	},
	{
		path:'/logo',
		component:biliLogo,
	},
	{
		path:'/register',
		component:biliRegister
	},
	{
		path:'/purchase',
		component:purchase
	},
	{
		path:'/order',
		component:order
	},
	{
		path:'/loading',
		component:loading
	},
	{
		path:'/creative',
		component:creative
	},


]

const router = new VueRouter({
	routes,
	mode:'history'
})
export default router