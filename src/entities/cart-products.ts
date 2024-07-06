import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { cartItems } from '../constants'
import { ICartItemsSections, ICartStore } from '../types'

export const useCartStore = defineStore('cart', () => {
	const cartCatalog = reactive<ICartStore>({
		items: cartItems,
		isHowCart: false,
	})

	const cartCatalogItems = computed(() => cartCatalog.items)
	const isHowCart = computed(() => cartCatalog.isHowCart)

	const setCartCatalog = (items: ICartItemsSections[]) => {
		cartCatalog.items = items
	}

	const deleteCartCatalogItem = (title: string) => {
		const filteredArray = cartCatalog.items.filter(item => item.title !== title)
		cartCatalog.items = filteredArray
	}

	const addToCartItem = (item: ICartItemsSections) => {
		const isItemExist = cartCatalog.items.some(n => n.title === item.title)
		if (isItemExist) {
			return
		}

		cartCatalog.items = [...cartCatalog.items, item]
	}

	const setIsShowCart = () => {
		cartCatalog.isHowCart = !cartCatalog.isHowCart
	}

	return {
		setCartCatalog,
		cartCatalogItems,
		deleteCartCatalogItem,
		addToCartItem,
		setIsShowCart,
		isHowCart,
	}
})
