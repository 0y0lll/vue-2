<template>
	<ViewTItle title="Cart" />

	<div class="py-6">
		<div
			v-if="items.length"
			v-for="item in items"
			:key="item.id"
			class="flex justify-between items-center py-5"
		>
			<RouterLink
				:to="{ name: 'detail', params: { id: item.id.toString() } }"
				class="flex gap-5"
			>
				<div class="flex gap-5 items-center">
					<div class="rounded-lg w-32 h-32 overflow-hidden relative">
						<img :src="item.filePath" class="product-image" />
					</div>
					<div>
						<p>{{ item.name }}</p>
						<p>{{ item.price.toLocaleString() }}원</p>
					</div>
				</div>
			</RouterLink>
			<button
				type="button"
				class="border rounded-md px-4 py-2"
				@click="store.setCartList(item.id)"
			>
				삭제
			</button>
		</div>

		<div v-if="!items.length">No items</div>
	</div>
</template>

<script setup>
import { useShopStore } from '@/stores/shop'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

import ViewTItle from '@/components/ViewTitle.vue'

const store = useShopStore()
const { cartList } = storeToRefs(store)
const items = ref(store.getCartList())

watch(cartList, () => {
	items.value = store.getCartList()
})
</script>

<style>
.product-image {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
