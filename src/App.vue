<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ShoppingCartIcon, UserIcon } from '@heroicons/vue/24/outline'
import FooterBox from '@/components/FooterBox.vue'
</script>

<template>
	<header class="flex justify-between items-center">
		<nav class="flex justify-between items-center">
			<RouterLink to="/shop">
				<img
					alt="Vue logo"
					class="logo"
					src="@/assets/logo.svg"
					width="40"
					height="40"
				/>
			</RouterLink>
			<RouterLink to="/shop">Shop</RouterLink>
			<RouterLink to="/community">Community</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>

		<div class="flex">
			<RouterLink to="/user"><UserIcon class="w-6 h-6" /></RouterLink>
			<RouterLink to="/cart"
				><ShoppingCartIcon class="w-6 h-6"
			/></RouterLink>
		</div>
	</header>

	<main class="py-12">
		<RouterView />
	</main>

	<FooterBox />
</template>
