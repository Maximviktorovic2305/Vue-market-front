<script lang="ts" setup>
	import { useCartStore } from '../entities/cart-products'
	import { ICartItemsSections } from '../types'

	const store = useCartStore()

	const { item } = defineProps<{ item: ICartItemsSections }>()
</script>

<template>
	<div class="text-white flex gap-3 items-center pb-3 justify-between">
		<img
			class="w-10 h-10 rounded-lg cursor-pointer object-cover"
			:src="item.img"
			alt="picture" />
		<div>{{ item.title }}</div>
		<div>{{ item.price }}</div>
		<img
			@click="store.deleteCartCatalogItem(item.title)"
			class="w-3 h-3 cursor-pointer"
			src="/minus.png"
			alt="minus" />
	</div>
</template>
