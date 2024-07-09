<script lang="ts" setup>
	import { popularItems } from '../../../constants';
import PopularProductsItem from './PopularProductsItem.vue'
</script>

<template>
	<div class="px-[250px] mt-8 ">
		<div class="text-black text-[36px] font-bold mb-10">Популярные товары</div>

      <div class="grid grid-cols-3 gap-10">

         <PopularProductsItem :item="item" v-for="item in popularItems" :key="item.title" />
      </div>
	</div>
</template>
