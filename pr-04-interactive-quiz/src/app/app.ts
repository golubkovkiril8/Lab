import { Component } from '@angular/core';
import { Quiz } from './quiz/quiz';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Quiz],
  template: `<app-quiz></app-quiz>`,
})
export class App {}
