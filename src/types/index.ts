export interface ISlidesSmall {
	img: string
	title: string
}

export interface IOffices {
	city: string
	address: string
	phone: string
	mail: string
}

export interface ICatalogItems {
	img: string
	title: string
	category?: string
}

export interface IPopularItems extends ICatalogItems {
	price: string
}

export interface ICartItemsSections extends IPopularItems {}

export interface ICartStore {
	items: ICartItemsSections[]
	isHowCart: boolean
}
