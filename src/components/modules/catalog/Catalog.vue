<script lang="ts" setup>
	import { catalogItems } from '../../../constants'
	import CatalogItem from './CatalogItem.vue'
</script>

<template>
	<div class="mx-auto wrapper">
		<div class="text-black text-[36px] font-bold mt-8 mb-14 header-text">
			Каталог
		</div>
		<div class="gridbox">
			<CatalogItem
				:item="item"
				v-for="item of catalogItems"
				:key="item.title" />
		</div>
	</div>
</template>

<style scoped>   
.gridbox {
	display: grid;   
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 15px;
	padding: 0 30px;
}   
.header-text {
	padding: 0 30px;
}

@media screen and (max-width: 1920px) {

.wrapper {
	margin-top: 250px;
}
.header-text {
	margin-left: -30px;
}

}
@media screen and (max-width: 1440px) {

.wrapper {
	margin-top: 10px;
}
}

@media screen and (max-width: 680px) {
.gridbox {
	grid-template-columns: 1fr 1fr;
}

.header-text {
	display: none;
}
.wrapper {
	margin-top: 120px;
}
}

@media screen and (max-width: 455px) {
.gridbox {
	grid-template-columns: 1fr;
}
.wrapper {
	margin-top: 50px;
}
}
</style>