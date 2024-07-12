<script lang="ts" setup>
	import Autoplay from 'embla-carousel-autoplay'
	import { slidesSmall } from '../../../constants'
	import { Carousel, CarouselContent, CarouselItem } from '../../ui/carousel'

	const plugin = Autoplay({
		delay: 3000,
		stopOnMouseEnter: true,
		stopOnInteraction: false,
	})
</script>

<template>
	<div class="carousel absolute -bottom-[30%] right-[15%] w-[312px] h-[110px]">
		<Carousel
			class="bg-inherit w-[100%] h-full overflow-hidden"
			:plugins="[plugin]">
			<CarouselContent class="w-full h-full -px-1">
				<CarouselItem
					class="carousel-item w-full h-full"
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

<style scoped>
	@media screen and (max-width: 1440px) {
		.carousel {
			margin-bottom: 10%;
			margin-right: -10%;
		}
	}
	@media screen and (max-width: 1200px) {
		.carousel {
			margin-bottom: 20%;
			margin-right: -10%;
		}
	}
	@media screen and (max-width: 1000px) {
		.carousel {
			margin-bottom: 25%;
			margin-right: -100px;
		}
	}
	@media screen and (max-width: 900px) {
		.carousel {
			margin-bottom: 5%;
			margin-right: -100px;
		}
	}

	@media screen and (max-width: 800px) {
		.carousel {
			margin-bottom: 10%;
			margin-right: -100px;
		}
	}
	@media screen and (max-width: 650px) {
		.carousel {
			margin-bottom: -10%;
			margin-right: -70px;
		}
	}
	@media screen and (max-width: 600px) {
		.carousel {
			display: none;
		}
	}
</style>
