<script lang="ts" setup>
	import { ref } from 'vue'
	import { IPopularItems } from '../../../types'
	import { useCartStore } from '../../../entities/cart-products'

	interface Props {
		item: IPopularItems
	}

	const { item } = defineProps<Props>()
	const { title, img, price } = item

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
		class="max-w-[383px] max-h-[440px] bg-white flex flex-col gap-5 relative cursor-pointer">
		<RouterLink :to="{ name: 'byTitle', params: { title: item.title } }">
		<img
			class="object-contain max-w-[342px] max-h-[210px] mb-8 mx-auto"
			:src="img"
			:alt="title" />
			</RouterLink>
		<div class="text-[18px] text-[#333333] font-bold">{{ title }}</div>
		<div class="text-[#333333] text-[20px]">{{ price }} р.</div>
		<div
			@click="store.addToCartItem(item)"
			:class="[
				'bg-primary absolute duration-300 bottom-0 left-0 right-0  h-[71px] pt-6 px-10 text-white font-bold',
				isShow ? 'z-10' : '-z-10',
			]">
			Добавить в корзину
		</div>
	</div>
</template>
