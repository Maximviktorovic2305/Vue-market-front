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
		class="min-h-[230px] min-w-[200px] text-white relative">
		<div
			:class="[
				'absolute duration-300 bottom-0 left-0 right-0',
				isShown ? 'bottom-[40px]' : '',
			]">
			<div class="h-full w-full relative">
				<img :src="img" :alt="title" class="img" />
				<div class="absolute bottom-5 left-[15%] uppercase font-bold">
					{{ title }}
				</div>
			</div>
		</div>
		<div
			v-if="isShown"
			class="cursor-pointer h-[40px] w-full bg-primary text-white text-[20px] flex items-center gap-3 px-5 absolute z-0 bottom-0 left-0 right-0">
			<RouterLink :to="`/${category}`">
				<div class="flex items-center gap-3">
					<img src="/hero/menu.png" alt="menu" />
					<span class="text-[16px]">В каталог</span>
				</div>
			</RouterLink>
		</div>
	</div>
</template>

<style scoped>
.img {
   max-height: 300px;
   max-width: 100%;
   width: 100%;
   object-fit: fill;
}</style>