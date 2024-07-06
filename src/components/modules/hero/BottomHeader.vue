<script lang="ts" setup>
	import { ref } from 'vue'

	const isHowCitiesModal = ref(false)

	const click = () => {
		isHowCitiesModal.value = !isHowCitiesModal.value
	}
</script>

<template>
	<div class="flex items-center justify-between mt-[4%] text-black">
		<RouterLink to="/washes">
			<span class="cursor-pointer hover:text-white duration-300">Мойки</span>
		</RouterLink>
		<RouterLink to="/mixers">
			<span class="cursor-pointer hover:text-white duration-300"
				>Смесители</span
			>
		</RouterLink>
		<RouterLink to="/accessories">
			<span class="cursor-pointer hover:text-white duration-300"
				>Аксессуары</span
			>
		</RouterLink>
		<RouterLink to="/plates">
			<span class="cursor-pointer hover:text-white duration-300">Плиты</span>
		</RouterLink>
		<RouterLink to="/washbasins">
			<span class="cursor-pointer hover:text-white duration-300"
				>Умывальники</span
			>
		</RouterLink>
		<RouterLink to="/manhattan">

			<span class="cursor-pointer hover:text-white duration-300">Manhattan</span>
		</RouterLink>
		<div @click="click" class="flex items-center gap-3 relative cursor-pointer">
			<span class="cursor-pointer hover:text-white duration-300"
				>Другая продукция</span
			>
			<img
				:class="['duration-300', isHowCitiesModal ? 'arraw-rotate' : '']"
				src="/arrow.png"
				alt="arrow" />

			<div
				class="flex flex-col gap-3 absolute top-9 right-[10%]"
				v-if="isHowCitiesModal">
				<div class="hover:text-white duration-300 cursor-pointer">Плитка</div>
				<div class="hover:text-white duration-300 cursor-pointer">Средства</div>
				<div class="hover:text-white duration-300 cursor-pointer">Салфетки</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.arraw-rotate {
		transform: rotate(180deg);
	}
</style>
