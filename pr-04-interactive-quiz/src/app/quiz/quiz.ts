import { Component, ViewChild } from '@angular/core';
import { Question } from '../question/question';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [Question],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  @ViewChild(Question) questionComponent!: Question;

  quizQuestion = {
    text: 'Яка мова використовується в Angular?',
    options: ['Java', 'Python', 'TypeScript', 'C++'],
    correctIndex: 2,
  };

  selectedAnswer = '';

  onAnswerSelected(answer: string) {
    this.selectedAnswer = answer;
  }

  showCorrectAnswer() {
    this.questionComponent.showAnswer();
  }
}
