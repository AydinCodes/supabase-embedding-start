// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Product {
			sku: string;
			name: string;
			price: number;
		}
		interface DatabaseProduct {
			id: number;
			sku: string;
			name: string;
			price: number;
			similarity: number;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
