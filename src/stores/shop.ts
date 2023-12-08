import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useShopStore = defineStore('shop', () => {
	const KEY = 'cartList'
	const cartList = ref(JSON.parse(localStorage.getItem(KEY) || '') || [])

	// 상품 리스트
	const items = ref(
		Array.from({ length: 10 }).map((_, idx) => {
			return {
				id: idx + 1,
				name: 'test' + (idx + 1),
				price: 999999,
				filePath: '../src/assets/images/image' + idx + '.jpg',
				fileName: 'image' + idx,
				description:
					'Mauris imperdiet mauris eu erat imperdiet, nec sodales elit laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quam sem, porta at dignissim vel, porttitor sit amet nibh. Cras et justo sit amet dolor vestibulum ullamcorper in a libero. Nunc purus leo, mattis a dolor sit amet, consequat bibendum dui. In ac metus malesuada, pharetra velit eu, hendrerit enim. Phasellus placerat at justo sit amet porttitor. Nullam eget pulvinar ipsum. Pellentesque bibendum pharetra ligula, non sollicitudin odio dapibus eget. Nulla facilisi.',
			}
		}),
	)

	// 장바구니 추가
	const addCart = (itemId: number) => {
		const checkDup = cartList.value.filter(
			(item: number) => item === itemId,
		)

		if (checkDup.length) {
			return
		}

		if (cartList.value.length) {
			cartList.value.unshift(itemId)
		} else {
			cartList.value.push(itemId)
		}
	}

	// 상품 상세
	const getItem = (itemId: number) => {
		return items.value.filter((item) => item.id === itemId)[0]
	}

	// 장바구니 조회
	const getCartList = () => {
		return items.value.filter((item) => {
			return cartList.value.some((_item: number) => item.id === _item)
		})
	}

	// 장바구니 삭제
	const setCartList = (itemId: number) => {
		const filtered = cartList.value.filter((item: number) => item != itemId)

		localStorage.setItem(KEY, JSON.stringify(filtered))
		cartList.value = filtered
	}

	watch(cartList.value, async (newCartList) => {
		localStorage.setItem(KEY, JSON.stringify(newCartList))
	})

	return { items, cartList, addCart, getItem, getCartList, setCartList }
})
