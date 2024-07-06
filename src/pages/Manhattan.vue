<script lang="ts" setup>
	import Cart from '../components/Cart.vue'
	import WashesCatalogItem from '../components/modules/catalog/WashesCatalogItem.vue'
	import Filters from '../components/modules/filters/Filters.vue'

	import { washesCatalogItems } from '../constants'
</script>

<template>
	<div class="px-[250px] bg-bgDark">
		<div class="mt-[60px] text-[18px] mb-[50px] pt-5">
			<RouterLink to="/">
				<span>Главная / </span>
			</RouterLink>
			<span class="text-primary">Manhattan</span>
		</div>
		<Cart />

		<div class="pb-[30px]">
			<div class="flex items-center gap-[167px]">
				<div class="text-secondary text-[36px] font-bold pb-10">Manhattan</div>
				<div class="text-secondary text-[36px] font-bold pb-7">Manhattan</div>
			</div>

			<div class="flex">
				<div class="w-[30%]">
					<Filters />
				</div>
				<div class="w-[70%]">
					<div class="grid grid-cols-2 gap-5 pt-10">
						<WashesCatalogItem
							:item="item"
							v-for="item of washesCatalogItems"
							:key="item.title" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
