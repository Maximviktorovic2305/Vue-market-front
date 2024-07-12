<script lang="ts" setup>
	import { ref } from 'vue'
	import { useCartStore } from '../../../entities/cart-products'
	import { IPopularItems } from '../../../types'

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
		class="max-w-[300px] max-h-[400px] w-full h-full bg-white grid gap-5 relative cursor-pointer">
		<RouterLink :to="{ name: 'byTitle', params: { title: item.title } }">
			<img
				class="object-fill mx-auto"
				:src="img"
				:alt="title" />
		</RouterLink>
		<div class="text-[18px] text-[#333333] font-bold">{{ title }}</div>
		<div class="text-[#333333] text-[20px]">{{ price }} р.</div>
		<div
			@click="store.addToCartItem(item)"
			:class="[
				'bg-primary absolute duration-300 bottom-0 left-0 right-0  h-[15%] py-[3%] px-[5%] text-white font-bold red-text',
				isShow ? 'z-10' : '-z-10',
			]">
			в корзину
		</div>
	</div>
</template>

<style scoped>

@media screen and (max-width: 800px) {

	.red-text {
		font-size: 14px;
	}
}


</style>