import { Component } from '@angular/core';
import { ProductTable } from './product-table/product-table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductTable],
  template: `<app-product-table></app-product-table>`,
})
export class App {}
