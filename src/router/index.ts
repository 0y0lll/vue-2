import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '@/views/ShopView.vue'
import ShopItemView from '@/views/ShopItemView.vue'
import AboutView from '@/views/AboutView.vue'
import UserView from '@/views/UserView.vue'
import CartView from '@/views/CartView.vue'
import CommunityView from '@/views/CommunityView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: ShopView,
		},
		{
			path: '/shop',
			name: 'shop',
			component: ShopView,
		},
		{
			path: '/shop/:id',
			name: 'detail',
			props: true,
			component: ShopItemView,
		},
		{
			path: '/community',
			name: 'community',
			component: CommunityView,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
		{
			path: '/user',
			name: 'user',
			component: UserView,
		},
		{
			path: '/cart',
			name: 'cart',
			component: CartView,
		},
	],
})

export default router
