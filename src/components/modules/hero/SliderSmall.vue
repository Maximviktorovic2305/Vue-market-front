<script lang="ts" setup>
	import Autoplay from 'embla-carousel-autoplay'
	import { Carousel, CarouselContent, CarouselItem } from '../../ui/carousel'
	import { slidesSmall } from '../../../constants'

	const plugin = Autoplay({
		delay: 3000,
		stopOnMouseEnter: true,
		stopOnInteraction: false,
	})
</script>

<template>
	<div class="block1 absolute -bottom-[30%] right-[15%] w-[312px] h-[110px]">
		<Carousel
			class="bg-[#ECECEC] w-[100%] h-full overflow-hidden"
			:plugins="[plugin]">
			<CarouselContent class="w-full h-full -px-1">
				<CarouselItem
					class="w-full h-full"
					v-for="(slide, index) of slidesSmall"
					:key="index">
					<div class="w-full h-full flex">
						<div
							class="bg-primary overflow-hidden w-[50%] py-[43px] uppercase px-3 h-full text-white">
							{{ slide.title }}
						</div>
						<img
							class="w-[50%] h-full object-cover -px-1"
							:src="slide.img"
							alt="hero" />
					</div>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	</div>
</template>

