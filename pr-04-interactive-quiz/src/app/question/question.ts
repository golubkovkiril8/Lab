import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question {
  @Input() question!: {
    text: string;
    options: string[];
    correctIndex: number;
  };

  @Output() answerSelected = new EventEmitter<string>();

  selectedIndex: number | null = null;
  showCorrect = false;

  selectAnswer(index: number) {
    this.selectedIndex = index;
    this.answerSelected.emit(this.question.options[index]);
  }

  public showAnswer() {
    this.showCorrect = true;
  }
}
