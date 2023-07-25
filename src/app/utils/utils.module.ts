import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatCurrencyService } from './format-currency.service';

@NgModule({
	declarations: [FormatCurrencyService],
	imports: [CommonModule],
})
export class UtilsModule {}
