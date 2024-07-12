<script lang="ts" setup>
	import Autoplay from 'embla-carousel-autoplay'
	import { Carousel, CarouselContent, CarouselItem } from '../../ui/carousel'

	const plugin = Autoplay({
		delay: 3000,
		stopOnMouseEnter: true,
		stopOnInteraction: false,
	})

	const slides: string[] = [
		'/hero/1.jpg',
		'/hero/2.jpg',
		'/hero/3.jpg',
		'/hero/4.jpg',
		'/hero/5.jpg',
	]
</script>

<template>
	<Carousel class="bg-inherit" :plugins="[plugin]">
		<CarouselContent class="max-w-full w-full h-full">
			<CarouselItem
				class="item w-full h-full"
				v-for="(slide, index) of slides"
				:key="index">
				<div class="-p-1 ">
					<img class="item object-fill w-full max-h-full" :src="slide" alt="hero" />
				</div>
			</CarouselItem>
		</CarouselContent>
	</Carousel>
</template>

<style scoped>

@media screen and (max-width: 600px) {
		.item {
	height: 250px;
}
	
	}


</style>