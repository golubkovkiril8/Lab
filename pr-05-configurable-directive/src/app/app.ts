import { Component } from '@angular/core';
import { ConfigurableHighlightDirective } from './configurable-highlight';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConfigurableHighlightDirective],
  templateUrl: './app.html',
})
export class App {}
