import { Component } from '@angular/core';
import { NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './product-table.html',
  styleUrl: './product-table.css',
})
export class ProductTable {
  products = [
    { name: 'Ноутбук', category: 'Електроніка', price: 1200, stockCount: 5 },
    { name: 'Миша', category: 'Електроніка', price: 25, stockCount: 0 },
    { name: 'Клавіатура', category: 'Електроніка', price: 80, stockCount: 12 },
    { name: 'Навушники', category: 'Аксесуари', price: 180, stockCount: 0 },
    { name: 'Флешка', category: 'Аксесуари', price: 40, stockCount: 30 },
  ];

  getPriceStatus(price: number): string {
    if (price < 50) return 'low';
    if (price <= 200) return 'medium';
    return 'high';
  }
}
