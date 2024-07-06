<script lang="ts" setup>
	import { catalogItems } from '../../../constants'
	import CatalogItem from './CatalogItem.vue'
</script>

<template>
	<div>
		<div class="text-black text-[36px] font-bold mt-8 mb-14 px-[250px]">
			Каталог
		</div>
		<div class="px-[250px] grid grid-cols-3 gap-5">
			<CatalogItem
				:item="item"
				v-for="item of catalogItems"
				:key="item.title" />
		</div>
	</div>
</template>
