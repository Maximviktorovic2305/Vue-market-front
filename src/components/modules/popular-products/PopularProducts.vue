<script lang="ts" setup>
	import { popularItems } from '../../../constants'
	import PopularProductsItem from './PopularProductsItem.vue'
</script>

<template>
	<div class="mx-auto mt-8 wrapper">
		<div class="text-black text-[36px] font-bold mb-10 header-text">
			Популярные товары
		</div>

		<div class="grid-wrapper">
			<PopularProductsItem
				:item="item"
				v-for="item in popularItems"
				:key="item.title" />
		</div>
	</div>
</template>

<style scoped>
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 15px;
	}

	@media screen and (max-width: 1000px) {
		.header-text {
			padding: 0 30px;
		}
		.grid-wrapper {
			padding: 0 30px;
		}
	}
	@media screen and (max-width: 500px) {
		.grid-wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 0 20px;
		}
	}
</style>
