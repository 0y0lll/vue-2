import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShopStore = defineStore('shop', () => {
	const items = ref(
		Array.from({ length: 10 }).map((_, idx) => {
			return {
				id: idx + 1,
				name: 'test',
				price: 999999,
				filePath: './src/assets/images/image' + idx + '.jpg',
				fileName: 'image' + idx,
			}
		}),
	)

	return { items }
})
