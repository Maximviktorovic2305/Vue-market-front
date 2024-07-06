<script lang="ts" setup>
	import { ref } from 'vue'
	import { RouterLink } from 'vue-router'
	import { ICatalogItems } from '../../../types'

	interface Props {
		item: ICatalogItems
	}

	const { item } = defineProps<Props>()
	const { title, img, category } = item

	const isShown = ref(false)

	const toShow = () => {
		isShown.value = !isShown.value
	}
</script>

<template>
	<div
		@mouseenter="toShow"
		@mouseleave="toShow"
		class="w-[383px] h-[440px] max-h-[511px] text-white relative">
		<div
			:class="[
				'absolute duration-300 bottom-0 left-0 right-0',
				isShown ? 'bottom-[71px]' : '',
			]">
			<div class="h-full w-full relative">
				<img :src="img" :alt="title" />
				<div class="absolute bottom-5 left-[15%] uppercase font-bold">
					{{ title }}
				</div>
			</div>
		</div>
		<div
			v-if="isShown"
			class="cursor-pointer h-[71px] w-full bg-primary text-white text-[20px] flex items-center gap-3 px-5 absolute z-0 bottom-0 left-0 right-0">
			<RouterLink :to="`/${category}`">
				<div class="flex items-center gap-3">
					<img src="/hero/menu.png" alt="menu" />
					<span>Перейти в каталог</span>
				</div>
			</RouterLink>
		</div>
	</div>
</template>
