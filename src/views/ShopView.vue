<template>
	<ViewTItle title="Shop" />

	<div class="grid grid-cols-6 gap-6 py-8">
		<div
			v-for="item in items"
			:key="item.id"
			class="flex flex-col justify-between gap-2"
		>
			<div class="rounded-lg h-48 overflow-hidden relative">
				<button
					type="button"
					@click="store.addCart(item.id)"
					class="rounded-full absolute z-50 p-2 bg-black/70 bottom-2 right-2"
				>
					<ShoppingCartIcon class="w-6 h-6" />
				</button>
				<img :src="item.filePath" class="product-image" />
			</div>
			<RouterLink
				:to="{ name: 'detail', params: { id: item.id.toString() } }"
			>
				<p>{{ item.name }}</p>
				<p>{{ item.price.toLocaleString() }}원</p>
			</RouterLink>
		</div>
	</div>
</template>

<script setup>
import { useShopStore } from '@/stores/shop'
import { storeToRefs } from 'pinia'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'

import ViewTItle from '@/components/ViewTitle.vue'

const store = useShopStore()
const { items } = storeToRefs(store)
</script>

<style>
.product-image {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
