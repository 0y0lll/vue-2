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
			<RouterLink to="/cart" class="relative">
				<div
					class="flex justify-center items-center rounded-full absolute bg-red-600"
					style="right: -5px; bottom: -3px; width: 16px; height: 16px"
				>
					<span style="font-size: 10px; color: #fff">{{
						cartList.length
					}}</span>
				</div>
				<ShoppingCartIcon class="w-6 h-6"
			/></RouterLink>
		</div>
	</header>

	<main class="py-12">
		<RouterView />
	</main>

	<FooterBox />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ShoppingCartIcon, UserIcon } from '@heroicons/vue/24/outline'
import FooterBox from '@/components/FooterBox.vue'

import { useShopStore } from '@/stores/shop'
import { storeToRefs } from 'pinia'

const store = useShopStore()
const { cartList } = storeToRefs(store)
</script>
