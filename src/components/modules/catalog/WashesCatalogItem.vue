<script lang="ts" setup>
	import { ref } from 'vue'
	import { useCartStore } from '../../../entities/cart-products'
	interface Props {
		item: {
			img: string
			price: string
			title: string
			category?: string
		}
	}
	const { item } = defineProps<Props>()

	const store = useCartStore()

	const isShow = ref(false)
	const setIsShow = () => {
		isShow.value = !isShow.value
	}
</script>

<template>
	<div
		@mouseenter="setIsShow"
		@mouseleave="setIsShow"
		class="max-w-[350px] max-h-[500px] bg-white rounded-lg overflow-hidden p-7 relative">
		<RouterLink :to="{ name: 'byTitle', params: { title: item.title } }">
			<img
				class="max-w-full h-[300px] object-contain mx-auto"
				:src="item.img"
				:alt="item.img" />
		</RouterLink>
		<div class="text-secondary mb-3">{{ item.title }}</div>
		<div class="text-secondary text-[20px] font-bold">{{ item.price }} р.</div>
		<div
			@click="store.addToCartItem(item)"
			:class="[
				'bg-primary absolute duration-300 bottom-0 left-0 right-0  h-[71px] pt-6 px-10 text-white font-bold cursor-pointer',
				isShow ? 'z-10' : '-z-10',
			]">
			Добавить в корзину
		</div>
	</div>
</template>
