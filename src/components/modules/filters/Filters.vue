<script lang="ts" setup>
	import { ref } from 'vue'

	const refMaterial = ref(true)

	const showModalMaterial = () => {
		refMaterial.value = !refMaterial.value
	}
</script>

<template>
	<div>
		<div class="flex gap-3 items-center relative">
			<div
				class="cursor-pointer text-[20px] font-bold text-secondary"
				@click="showModalMaterial">
				Материал
			</div>
			<img
				:class="['duration-300', refMaterial ? 'arraw-rotate' : '']"
				src="/arrow.png"
				alt="arrow" />
			<div
				class="flex flex-col gap-3 absolute top-10 left-[10%]"
				v-if="refMaterial">
				<ul
					class="w-[170px] mb-5 text-secondary mx-auto divide-y shadow shadow-primary rounded">
					<li>
						<details class="group">
							<summary
								class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
								<span>Мойки</span>
							</summary>

							<article class="px-4 pb-4 flex flex-col gap-4 pt-2">
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Сталь </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Мрамор </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Дерево </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Камень </span>
								</div>
							</article>
						</details>
					</li>
					<li>
						<details class="group">
							<summary
								class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
								<span>Цвет</span>
							</summary>

							<article class="px-4 pb-4 flex flex-col gap-4 pt-2">
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Зеленый </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Синий </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Белый </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Черный </span>
								</div>
							</article>
						</details>
					</li>
					<li>
						<details class="group">
							<summary
								class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
								<span>Размер</span>
							</summary>

							<article class="px-4 pb-4 flex flex-col gap-4 pt-2">
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> 200 </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> 300 </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> 400 </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> 500 </span>
								</div>
							</article>
						</details>
					</li>
					<li>
						<details class="group">
							<summary
								class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
								<span>Форма</span>
							</summary>

							<article class="px-4 pb-4 flex flex-col gap-4 pt-2">
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Круг </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Овал </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Квадрат </span>
								</div>
								<div class="flex gap-3 items-center">
									<input
										class="w-3 h-3 transition-colors bg-bgDark border-1 appearance-none cursor-pointer focus-visible:outline-none peer border-primary checked:border-primary checked:bg-primary checked:hover:border-primary checked:hover:bg-primary focus:outline-none checked:focus:border-primary checked:focus:bg-primary disabled:cursor-not-allowed border disabled:border-primary disabled:bg-slate-50"
										type="checkbox" />
									<span class="text-[16px] leading-none"> Треугольник </span>
								</div>
							</article>
						</details>
					</li>
				</ul>
			</div>
		</div>

		<div class="w-[190px] text-secondary pt-[100%]">
			<div class="flex flex-col gap-10 w-full pl-[50px]">
				<span class="text-[18px] font-bold"
					>Сайт создан <br />
					с помощью:
				</span>
				<div class="flex flex-col gap-[40px]">
					<div class="flex items-center gap-3">
						<img class="w-10 h-10" src="/site/vue.png" alt="site" />
						<span class="text-[18px]"> Vue3 </span>
					</div>
					<div class="flex items-center gap-3">
						<img class="w-10 h-10" src="/site/pinia.svg" alt="site" />
						<span class="text-[18px]">Pinia</span>
					</div>
					<div class="flex items-center gap-3">
						<img class="w-10 h-10" src="/site/tailwind.png" alt="site" />
						<span class="text-[18px]">Tailwindcss</span>
					</div>
					<div class="flex items-center gap-3">
						<img class="w-10 h-10" src="/site/ts.svg" alt="site" />
						<span class="text-[18px]">Typescript</span>
					</div>
					<div class="flex items-center gap-3">
						<img class="w-10 h-10" src="/site/vite.svg" alt="site" />
						<span class="text-[18px]">Vite</span>
					</div>
				</div>

				<div class="flex flex-col gap-5 pt-[160%]">
					<img src="/footer/logo1.png" alt="logo1" />
					<img src="/footer/logo2.png" alt="logo2" />
					<img src="/footer/logo3.png" alt="logo3" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.arraw-rotate {
		transform: rotate(180deg);
	}
</style>
