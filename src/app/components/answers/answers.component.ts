import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerI } from 'src/app/models/answer';
import { QuestionI } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  public questions!: QuestionI[];
  public answers!: AnswerI[];

  constructor(private _service: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.questions = this._service.getQuestions();
    this.answers = this._service.getSelectedAnswer();
  }

  rest(){
    this._service.resetSelectedAnswer();
    this.router.navigateByUrl('/dashboar');
  }

}
