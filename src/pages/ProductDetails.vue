<script lang="ts" setup>
	import { useRoute } from 'vue-router'
	import Cart from '../components/Cart.vue'
	import Filters from '../components/modules/filters/Filters.vue'
	import { washesCatalogItems } from '../constants'
	import { useCartStore } from '../entities/cart-products'
	import { ICartItemsSections } from '../types'

	const route = useRoute()
	const title = route.params.title
	const item = washesCatalogItems.find(item => item.title === title)
	const store = useCartStore()
</script>

<template>
	<div class="px-[250px] bg-bgDark">
		<div class="mt-[60px] text-[18px] mb-[50px] pt-5">
			<RouterLink to="/">
				<span>Главная / </span>
			</RouterLink>
			<span class="text-primary">{{ title }}</span>
		</div>
		<Cart />

		<div class="pb-[30px]">
			<div class="flex items-center gap-[251px]">
				<div class="text-secondary text-[36px] font-bold pb-10">Товар</div>
				<div class="text-secondary text-[36px] font-bold pb-7">
					{{ title }}
				</div>
			</div>

			<div class="flex">
				<div class="w-[30%]">
					<Filters />
				</div>
				<div class="w-[70%]">
					<div
						class="text-secondary w-full h-[400px] bg-white mx-auto flex justify-between p-5 shadow shadow-primary rounded-xl">
						<img
							class="w-[300px] h-[250px] m-auto object-contain p-5"
							:src="item?.img"
							:alt="item?.img" />
						<div class="flex flex-col justify-between">
							<div class="uppercase font-bold">{{ item?.title }}</div>
							<div>
								Сейчас столько магазинов сантехники, что, казалось бы, купить
								раковину для ванной проще простого. Однако даже у крупных
								поставщиков представлены не все существующие типы раковин, а
								продавец предложит то, что есть в ассортименте.
							</div>
							<div class="flex items-center justify-between px-[10%]">
								<div class="font-bold">Стоимость: {{ item?.price }} р.</div>
								<button
									@click="store.addToCartItem(item as ICartItemsSections)"
									class="px-3 py-2 bg-primary rounded-lg text-white">
									Добавить в корзину
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
