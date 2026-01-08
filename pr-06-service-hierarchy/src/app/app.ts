import { Component, OnInit } from '@angular/core';
import { AppLogicService } from './services/app-logic';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  template: `
    <h2>Дані з сервісу</h2>

    <ul>
      <li *ngFor="let item of data">
        {{ item }}
      </li>
    </ul>
  `,
})
export class App implements OnInit {
  data: string[] = [];

  constructor(private appLogicService: AppLogicService) {}

  ngOnInit(): void {
    this.data = this.appLogicService.getDataAndLog();
  }
}
