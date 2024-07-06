<script lang="ts" setup>
	import About from '../components/modules/about/About.vue'
	import Catalog from '../components/modules/catalog/Catalog.vue'
	import Hero from '../components/modules/hero/Hero.vue'
	import Offices from '../components/modules/offices/Offices.vue'
	import PopularProducts from '../components/modules/popular-products/PopularProducts.vue'
</script>

<template>
	<div class="flex flex-col h-full gap-5">
		<Hero />
		<Offices />
		<Catalog />
		<PopularProducts />
		<About />
	</div>
</template>
