import { Component, OnInit } from '@angular/core';
import { AmountDataModel } from 'src/app/model/amountDataModel';
import { AccountsService } from 'src/app/services/accounts.service';
import { FormatCurrencyService } from '../../utils/format-currency.service';

@Component({
	selector: 'app-amount-box',
	templateUrl: './amount-box.component.html',
	styleUrls: ['./amount-box.component.css'],
})
export class AmountBoxComponent implements OnInit {
	accountDetails: AmountDataModel = {
		amountValue: 0,
		limit: 0,
		totalAmount: 0,
		formattedAmountValue: '',
		formattedLimit: '',
		formattedTotalAmount: '',
	};

	constructor(private service: AccountsService) {}

	getAmountValues() {
		this.service.getAccount().subscribe((data) => {
			this.accountDetails.amountValue = data.account.balance;
			this.accountDetails.limit = data.account.limit;
			this.accountDetails.totalAmount =
				this.accountDetails.amountValue + this.accountDetails.limit;
			this.accountDetails.formattedAmountValue =
				FormatCurrencyService.formatCurrency(this.accountDetails.amountValue);
			this.accountDetails.formattedLimit = FormatCurrencyService.formatCurrency(
				this.accountDetails.limit
			);
			this.accountDetails.formattedTotalAmount =
				FormatCurrencyService.formatCurrency(this.accountDetails.totalAmount);
		});
	}

	ngOnInit(): void {
		this.getAmountValues();
	}
}
