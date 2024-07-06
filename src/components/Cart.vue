<script lang="ts" setup>
	import { useCartStore } from '../entities/cart-products'
	import CartItem from './CartItem.vue'
	const store = useCartStore()
</script>

<template>
	<div
		v-if="store.isHowCart"
		class="border border-primary w-[350px] p-5 bg-[#333333] flex flex-col gap-2 rounded-tl-xl rounded-bl-xl absolute right-0 top-10 duration-300">
		<div class="flex items-center justify-between">
			<span class="text-white text-[32px]">Корзина</span>

			<img
				@click="store.setIsShowCart"
				class="w-4 h-4 cursor-pointer"
				src="/x.png"
				alt="x" />
		</div>
		<div>
			<CartItem
				v-for="item of store.cartCatalogItems"
				:item="item"
				:key="item.img" />
		</div>

		<div class="flex items-center justify-between px-7">
			<button
				class="px-3 py-2 text-16px bg-primary text-white rounded-lg duration-300 hover:bg-[#333333] hover:text-white">
				Оформить
			</button>
			<button
				@click="store.setIsShowCart"
				class="text-white px-3 py-2 text-16px bg-[#333333] rounded-lg duration-300 hover:bg-white hover:text-[#333333]">
				Отмена
			</button>
		</div>
	</div>
</template>
