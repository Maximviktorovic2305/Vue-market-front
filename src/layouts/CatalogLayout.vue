<script lang="ts" setup>
	import BottomHeader from '../components/modules/hero/BottomHeader.vue'
	import Header from '../components/modules/hero/Header.vue'
	import HeroText from '../components/modules/hero/HeroText.vue'
	import SubHeader from '../components/modules/hero/SubHeader.vue'
</script>

<template>
   <div class="px-[250px]">

      <Header />
      <SubHeader class="text-secondary bg-secondary pt-5 pb-7 rounded px-9 mt-9" />
      <BottomHeader class="text-secondary"  />
      <HeroText class="text-center mx-auto" />
   </div>

	<main>
		<RouterView />
	</main>

	<BottomHeader class="pb-[60px] px-[250px] text-[20px] text-primary" />
</template>
