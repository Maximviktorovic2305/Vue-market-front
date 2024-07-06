import CatalogLayout from '@/layouts/CatalogLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Accessories from '@/pages/Accessories.vue'
import Home from '@/pages/Home.vue'
import Manhattan from '@/pages/Manhattan.vue'
import Mixers from '@/pages/Mixers.vue'
import Plates from '@/pages/Plates.vue'
import ProductDetails from '@/pages/ProductDetails.vue'
import Washbasins from '@/pages/Washbasins.vue'
import Washes from '@/pages/Washes.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{
				path: '/',
				name: 'home',
				component: Home,
			},
		],
	},
	{
		path: '/washes',
		component: CatalogLayout,
		children: [
			{
				path: '/washes',
				name: 'washes',
				component: Washes,
			},
			{
				path: '/mixers',
				name: 'mixers',
				component: Mixers,
			},
			{
				path: '/accessories',
				name: 'accessories',
				component: Accessories,
			},
			{
				path: '/plates',
				name: 'plates',
				component: Plates,
			},
			{
				path: '/washbasins',
				name: 'washbasins',
				component: Washbasins,
			},
			{
				path: '/manhattan',
				name: 'manhattan',
				component: Manhattan,
			},
			{
				path: '/:title?',
				name: 'byTitle',
				component: ProductDetails,
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
