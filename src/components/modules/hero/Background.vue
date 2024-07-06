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
	<Carousel class="bg-[#ECECEC]" :plugins="[plugin]">
		<CarouselContent class="max-w-full w-full max-h-[812px] h-full">
			<CarouselItem v-for="(slide, index) of slides" :key="index">
				<div class="-p-1">
					<img class="w-full h-full object-cover" :src="slide" alt="hero" />
				</div>
			</CarouselItem>
		</CarouselContent>
	</Carousel>
</template>
