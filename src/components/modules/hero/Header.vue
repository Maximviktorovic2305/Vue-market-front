<script lang="ts" setup>
	import { ref } from 'vue'

	const isHowCitiesModal = ref(false)

	const click = () => {
		isHowCitiesModal.value = !isHowCitiesModal.value
	}
</script>

<template>
	<div class="flex items-center justify-between pt-5 text-black text-[20px]">
		<div class="flex items-center gap-7">
			<div class="relative flex items-center gap-2">
				<span
					@click="click"
					class="header-span cursor-pointer hover:text-white duration-300"
					>Москва</span
				>
				<span class="pt-2"
					><img
						:class="['duration-300', isHowCitiesModal ? 'arraw-rotate' : '']"
						src="/arrow.png"
						alt="arrow"
				/></span>
				<div class="absolute top-9 left-5" v-if="isHowCitiesModal">
					<div
						class="header-span cursor-pointer hover:text-[22px] hover:text-white duration-300">
						Казань
					</div>
					<div
						class="header-span cursor-pointer hover:text-[22px] hover:text-white duration-300">
						Питер
					</div>
					<div
						class="header-span cursor-pointer hover:text-[22px] hover:text-white duration-300">
						Екатеринбург
					</div>
				</div>
			</div>
			<span class="call">Обратный звонок</span>
		</div>
		<div class="flex items-center gap-7">
			<span class="header-span">Пн-Вс: 10-19</span>
		</div>
	</div>
</template>

<style scoped>
	.arraw-rotate {
		transform: rotate(180deg);
	}

	@media screen and (max-width: 550px) {
		.call {
			display: none;
		}
		.header-span {
			font-size: 14px;
		}
	}
</style>
