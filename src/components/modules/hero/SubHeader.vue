<script lang="ts" setup>
	import { RouterLink } from 'vue-router'
	import { useCartStore } from '../../../entities/cart-products'

	const store = useCartStore()
</script>

<template>
	<div class="flex items-center justify-between text-[20px] text-white pt-[3%]">
		<div class="flex gap-3 items-center cursor-pointer">
			<img src="/hero/menu.png" alt="menu" />
			<span class="hover:text-black duration-300">Menu</span>
		</div>
		<RouterLink to="/">
			<img src="/hero/logo.png" alt="logo" />
		</RouterLink>
		<div class="flex gap-3 items-center">
			<img class="cursor-pointer" src="/hero/arrows.png" alt="arrows" />
			<img class="cursor-pointer" src="/hero/search.png" alt="search" />
			<div class="relative">

				<img
					@click="store.setIsShowCart"
					class="cursor-pointer"
					src="/hero/cart.png"
					alt="cart" />   

					<div class="absolute top-0 left-5 bg-primary rounded-full text-[14px] px-2">{{ store.cartCatalogItems.length }}</div>
			</div>
		</div>
	</div>
</template>
