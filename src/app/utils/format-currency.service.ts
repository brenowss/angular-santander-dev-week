import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class FormatCurrencyService {
	static formatCurrency(value: number): string {
		return value.toLocaleString('pt-br', {
			style: 'currency',
			currency: 'BRL',
		});
	}
	constructor() {}
}
