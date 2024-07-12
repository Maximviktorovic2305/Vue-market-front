<script lang="ts" setup></script>

<template>
	<div class="wrapper">
		<div class="text-header">О компании</div>
		<div class="text-description">
			Благодаря многолетнему и плодотворному тандему RRHolding и Reginox,
			сегодня мы имеем большое количество бизнес-партнеров, в том числеи за
			пределами РФ, с которыми поддерживаем и развиваем взаимовыгодные
			отношения, приобрели популярность среди потребителей, и сохранили за собой
			статус компании, предлагающей на рынке России продукцию со «стальной
			репутацией». Мы предлагаем лучшее качество от европейского
			завода-производителя (завод расположен в Нидерландах, город Rijssen) и
			пожизненную гарантию на продукцию из нержавеющей стали!
		</div>
	</div>
</template>

<style scoped>
	.wrapper {
		padding: 0 250px;
      margin: 20px auto;
		margin-bottom: 20px;
	}
	.text-header {
		margin-bottom: 20px;
		font-weight: 700;
		font-size: 20px;
	}

	@media screen and (max-width: 900px) {
		.wrapper {
			padding: 0 100px;
		}
	}
	@media screen and (max-width: 500px) {
		.wrapper {
			padding: 0 30px;
		}
	}
</style>
