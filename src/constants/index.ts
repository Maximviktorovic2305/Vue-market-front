import {
	ICartItemsSections,
	ICatalogItems,
	IOffices,
	IPopularItems,
	ISlidesSmall,
} from '../types'

export const slidesSmall: ISlidesSmall[] = [
	{
		img: '/hero/slider-small/1.jpg',
		title: 'Мойки',
	},
	{
		img: '/hero/slider-small/2.jpg',
		title: 'Столешницы',
	},
	{
		img: '/hero/slider-small/3.jpg',
		title: 'Смесители',
	},
	{
		img: '/hero/slider-small/4.jpg',
		title: 'Плиты',
	},
	{
		img: '/hero/slider-small/5.jpg',
		title: 'Аксессуары',
	},
]

export const offices: IOffices[] = [
	{
		city: 'Москва',
		address: 'ул. Ленина, 47',
		phone: '8 (495) 555-55-??',
		mail: 'jzbcj@example.com',
	},
	{
		city: 'Казань',
		address: 'ул. Ленина, 45',
		phone: '8 (495) 555-55-??',
		mail: 'jzbcj@example.com',
	},
	{
		city: 'Уфа',
		address: 'ул. Ломоносова, 23',
		phone: '8 (495) 555-55-??',
		mail: 'jzbcj@example.com',
	},
	{
		city: 'Якутск',
		address: 'ул. Светлая, 93',
		phone: '8 (495) 555-55-??',
		mail: 'jzbcj@example.com',
	},
]

export const catalogItems: ICatalogItems[] = [
	{
		img: '/catalog/1.png',
		title: 'Мойки',
		category: 'washes',
	},
	{
		img: '/catalog/2.png',
		title: 'Смесители',
		category: 'mixers',
	},
	{
		img: '/catalog/3.png',
		title: 'Аксессуары',
		category: 'accessories',
	},
	{
		img: '/catalog/4.png',
		title: 'Плиты',
		category: 'plates',
	},
	{
		img: '/catalog/5.png',
		title: 'Умывальники',
		category: 'washbasins',
	},
	{
		img: '/catalog/6.png',
		title: 'Столешницы',
		category: 'manhattan',
	},
	{
		img: '/catalog/7.png',
		title: 'Системы хранения',
		category: 'washes',
	},
	{
		img: '/catalog/8.png',
		title: 'Измельчители',
		category: 'mixers',
	},
	{
		img: '/catalog/9.png',
		title: 'Иная продукция',
		category: 'accessories',
	},
]

export const popularItems: IPopularItems[] = [
	{
		img: '/popular-products/1.png',
		title: 'Amsterdam 25 Dark chocolate',
		price: '9 905',
	},
	{
		img: '/popular-products/2.png',
		title: 'YADKIN K1065K black',
		price: '9 405',
	},
	{
		img: '/popular-products/3.png',
		title: 'Diplomat R 20 lux',
		price: '4 905',
	},
	{
		img: '/popular-products/4.png',
		title: 'Столешница WAFELBLAD R00939',
		price: '7 905',
	},
	{
		img: '/popular-products/5.png',
		title: 'Amsterdam 34 Caffe Silvery',
		price: '3 905',
	},
	{
		img: '/popular-products/6.png',
		title: 'R18 370 OSP lux',
		price: '8 905',
	},
]

export const cartItems: ICartItemsSections[] = [
	{
		title: 'Мойка №1',
		img: '/catalog/1.png',
		price: '4 597',
	},
	{
		title: 'Мойка №2',
		img: '/catalog/2.png',
		price: '3 456',
	},
	{
		title: 'Мойка №3',
		img: '/catalog/3.png',
		price: '2 875',
	},
	{
		title: 'Мойка №4',
		img: '/catalog/4.png',
		price: '1 678',
	},
]

export interface IWashesCatalogItems extends IPopularItems {}

export const washesCatalogItems: IWashesCatalogItems[] = [
	{
		img: '/popular-products/1.png',
		title: 'Amsterdam 25 Dark chocolate',
		price: '9 905',
	},
	{
		img: '/popular-products/2.png',
		title: 'YADKIN K1065K black',
		price: '9 405',
	},
	{
		img: '/popular-products/3.png',
		title: 'Diplomat R 20 lux',
		price: '4 905',
	},
	{
		img: '/popular-products/4.png',
		title: 'Столешница WAFELBLAD R00939',
		price: '7 905',
	},
	{
		img: '/popular-products/5.png',
		title: 'Amsterdam 34 Caffe Silvery',
		price: '3 905',
	},
	{
		img: '/popular-products/6.png',
		title: 'R18 370 OSP lux',
		price: '8 905',
	},
]
