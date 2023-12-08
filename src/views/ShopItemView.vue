<template>
	<div class="grid grid-cols-2 gap-10">
		<div class="rounded-lg overflow-hidden relative" style="height: 500px">
			<img :src="item.filePath" class="product-image" />
		</div>
		<div class="divide-y">
			<div>
				<h6 class="text-3xl font-bold">{{ item.name }}</h6>
				<p class="py-6">{{ item.description }}</p>
			</div>
			<div class="flex justify-between items-center py-6">
				<button
					type="button"
					class="border rounded-md px-4 py-2"
					@click="store.addCart(item.id)"
				>
					<div class="flex items-center">
						<ShoppingCartIcon class="w-4 h-4 mr-2" />
						<span>장바구니</span>
					</div>
				</button>
				<h4 class="text-xl text-right">
					{{ item.price.toLocaleString() }}원
				</h4>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useShopStore } from '@/stores/shop'
import { storeToRefs } from 'pinia'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'

const { id } = defineProps({
	id: {
		type: String,
		default: 1,
		required: true,
	},
})

const store = useShopStore()
const item = store.getItem(Number(id))
</script>

<style>
.product-image {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
