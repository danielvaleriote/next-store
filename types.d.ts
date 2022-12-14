export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: Rating;
}

export interface Rating {
	rate: number;
	count: number;
}

export interface CartItem extends Product {
	count: number;
}

export type order = 'lowestPrice' | 'highestPrice' | 'rating';

export interface Popup {
	active: boolean;
	currPopupId: string;
}
