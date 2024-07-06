<script lang="ts" setup>
	import Background from './Background.vue'
	import Foreground from './Foreground.vue'
</script>

<template>
	<div class="w-full max-h-[812px] h-full relative">
		<Background class="absolute z-0 top-0 left-0 right-0" />
		<Foreground class="absolute z-10 top-0 left-0 right-0" />
	</div>
</template>

<style scoped>


</style>