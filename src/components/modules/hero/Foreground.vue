<script lang="ts" setup>
	import Cart from '../../Cart.vue'
	import BottomHeader from './BottomHeader.vue'
	import Header from './Header.vue'
	import HeroText from './HeroText.vue'
	import SliderSmall from './SliderSmall.vue'
	import SubHeader from './SubHeader.vue'
</script>

<template>
	<div class="relative px-[10%]">
		<Header />
		<SubHeader />
		<BottomHeader />
		<HeroText />
		<SliderSmall />
		<Cart />
	</div>
</template>
