<script lang="ts" setup></script>

<!-- <template>
		<div
			class="mt-[220px] pt-[50px] pb-[240px] text-[20px] px-[250px] bg-[#ECECEC] flex items-center justify-between">
			<div
				v-for="office of offices"
				:key="office.address"
				@click="click"
				class="flex items-center gap-3 relative">
				<span class="cursor-pointer">{{ office.city }}</span>
				<span class="pt-2"
					><img
						:class="['duration-300', isHowCitiesModal ? 'arraw-rotate' : '']"
						src="/arrow-black.png"
						alt="arrow"
				/></span>
				<div
					class="flex flex-col gap-3 absolute top-9 left-3 bg-[#ECECEC] p-5 animate-drop-down"
					v-if="isHowCitiesModal">
					<span class="cursor-pointer text-[18px]"
						>офис: {{ office.address }}</span
					>
					<div class="flex gap-3 items-center">
						<img src="/offices/email.png" alt="email" />
						<span class="cursor-pointer text-[18px] pb-0.5">{{
							office.mail
						}}</span>
					</div>
					<div class="flex gap-3 items-center">
						<img src="/offices/phone.png" alt="phone" />
						<span class="cursor-pointer text-[18px] pb-0.5">{{
							office.phone
						}}</span>
					</div>
				</div>
			</div>
		</div>
</template>

<style scoped>
	.arraw-rotate {
		transform: rotate(180deg);
	}
</style> -->

<template>
	<div
		class="flex flex-col gap-7 mt-[210px] pt-[50px] px-[250px] pb-[80px] bg-[#ECECEC]">
		<div class="max-w-[380px] text-center mx-auto mb-5">
			<div class="text-black text-center text-[28px] mb-2 font-bold">
				Наши офисы в России
			</div>
			<div class="w-full bg-primary h-[2px]"></div>
		</div>
		<ul class="flex items-center justify-between">
			<li>
				<a class="menu">
					<h2 class="menu-title">Москва</h2>
					<ul class="menu-dropdown">
						<li class="mb-2">ул. Ленина, 45</li>
						<li class="flex items-center gap-2 mb-2">
							<img src="/offices/email.png" alt="email" />
							<span>email@mail.ru</span>
						</li>
						<li class="flex items-center gap-2 mb-2">
							<img src="/offices/phone.png" alt="email" />
							<span>8 999 999 ?? ??</span>
						</li>
					</ul>
				</a>
			</li>
			<li>
				<a class="menu">
					<h2 class="menu-title menu-title_2nd">Казань</h2>
					<ul class="menu-dropdown">
						<li class="mb-2">ул. Первая, 49</li>
						<li class="flex items-center gap-2 mb-2">
							<img src="/offices/email.png" alt="email" />
							<span>email@mail.ru</span>
						</li>
						<li class="flex items-center gap-2 mb-2">
							<img src="/offices/phone.png" alt="email" />
							<span>8 999 999 ?? ??</span>
						</li>
					</ul>
				</a>
			</li>
			<li>
				<a class="menu">
					<h2 class="menu-title menu-title_3rd">Хабаровск</h2>
					<ul class="menu-dropdown">
						<li class="mb-2">ул. Темная, 35</li>
						<li class="flex items-center gap-2 mb-2">
							<img src="/offices/email.png" alt="email" />
							<span>email@mail.ru</span>
						</li>
						<li class="flex items-center gap-2 mb-2">
							<img src="/offices/phone.png" alt="email" />
							<span>8 999 999 ?? ??</span>
						</li>
					</ul>
				</a>
			</li>
			<li>
				<a class="menu">
					<h2 class="menu-title menu-title_4th">Якутск</h2>
					<ul class="menu-dropdown">
						<li class="mb-2">ул. Зеленая, 24</li>
						<li class="flex items-center gap-2 mb-2">
							<img src="/offices/email.png" alt="email" />
							<span>email@mail.ru</span>
						</li>
						<li class="flex items-center gap-2 mb-2">
							<img src="/offices/phone.png" alt="email" />
							<span>8 999 999 ?? ??</span>
						</li>
					</ul>
				</a>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.menu {
		display: block;
		position: relative;
		cursor: pointer;
	}

	.menu-title {
		display: block;
		width: 150px;
		height: 40px;
		padding: 12px 0 0;
		background: #ad2131;
		text-align: center;
		color: #ffffff;
		font-weight: bold;
		text-transform: uppercase;
		transition: 0.3s background-color;
	}

	.menu-title:before {
		content: '';
		display: block;
		height: 0;
		border-top: 5px solid #ad2131;
		border-left: (150px / 2) solid transparent;
		border-right: (150px / 2) solid transparent;
		border-bottom: 0 solid #dddddd;
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 101;
		transition: 0.2s 0.2s border-top ease-out, 0.3s border-top-color;
	}

	.menu-title:hover {
		background: #ad2131;
	}
	.menu-title:hover:before {
		border-top-color: #ad2131;
	}

	.menu:hover > .menu-title:before {
		border-top-width: 0;
		transition: 0.2s border-top-width ease-in, 0.3s border-top-color;
	}

	.menu-title:after {
		content: '';
		display: block;
		height: 0;
		border-left: (150px / 2) solid transparent;
		border-right: (150px / 2) solid transparent;
		border-bottom: 0 solid #ebebeb;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 101;
		transition: 0.2s border-bottom ease-in;
	}

	.menu:hover > .menu-title:after {
		border-bottom-width: 5px;
		transition: 0.2s 0.2s border-bottom-width ease-out;
	}

	.menu-title_2nd {
		background: #ad2131;
	}
	.menu-title_2nd:hover {
		background: #ad2131;
	}
	.menu-title_2nd:before {
		border-top-color: #ad2131;
	}
	.menu-title_2nd:hover:before {
		border-top-color: #ad2131;
	}

	.menu-title_3rd {
		background: #ad2131;
	}
	.menu-title_3rd:hover {
		background: #ad2131;
	}
	.menu-title_3rd:before {
		border-top-color: #ad2131;
	}
	.menu-title_3rd:hover:before {
		border-top-color: #ad2131;
	}

	.menu-title_4th {
		background: #ad2131;
	}
	.menu-title_4th:hover {
		background: #ad2131;
	}
	.menu-title_4th:before {
		border-top-color: #ad2131;
	}
	.menu-title_4th:hover:before {
		border-top-color: #ad2131;
	}

	.menu-dropdown {
		min-width: 100%;
		padding: 15px 0;
		position: absolute;
		background: #ebebeb;
		z-index: 100;
		transition: 0.5s padding, 0.5s background;
	}

	.menu-dropdown:after {
		content: '';
		display: block;
		height: 0;
		border-top: 5px solid #ebebeb;
		border-left: (150px/ 2) solid transparent;
		border-right: (150px / 2) solid transparent;
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 101;
		transition: 0.5s border-top;
	}

	.menu:not(:hover) > .menu-dropdown {
		padding: 4px 0;
		background: #dddddd;
		z-index: 99;
	}

	.menu:not(:hover) > .menu-dropdown:after {
		border-top-color: #dddddd;
	}

	.menu:not(:hover) > .menu-title:after {
		border-bottom-color: #dddddd;
	}

	.menu-dropdown > * {
		overflow: hidden;
		height: 30px;
		padding: 5px 10px;
		background: rgba(0, 0, 0, 0);
		white-space: nowrap;
		transition: 0.5s height cubic-bezier(0.73, 0.32, 0.34, 1.5),
			0.5s padding cubic-bezier(0.73, 0.32, 0.34, 1.5),
			0.5s margin cubic-bezier(0.73, 0.32, 0.34, 1.5), 0.5s 0.2s color,
			0.2s background-color;
	}

	.menu-dropdown > *:hover {
		background: rgba(0, 0, 0, 0.1);
	}

	.menu:not(:hover) > .menu-dropdown > * {
		visibility: hidden;
		height: 0;
		padding-top: 0;
		padding-bottom: 0;
		margin: 0;
		color: rgba(25, 25, 25, 0);
		transition: 0.5s 0.1s height, 0.5s 0.1s padding, 0.5s 0.1s margin,
			0.3s color, 0.6s visibility;
		z-index: 99;
	}

	.hList > * {
		float: left;
	}

	.hList > * + * {
		margin-left: 0;
	}
</style>
