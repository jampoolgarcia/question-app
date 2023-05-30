import { Component, OnInit } from '@angular/core';
import { AnswerI } from 'src/app/models/answer';
import { QuestionI } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public questions!: QuestionI[];
  public index = 0;
  public seleted!: AnswerI;
  public isDisabled = true;

  constructor(private _service: QuestionService) { }

  ngOnInit(): void {
    this.questions = this._service.getQuestions();
  } 

  getQuestion(){
    return this.questions[this.index].description;
  }

  get answers(){
    return this.questions[this.index].answers;
  }

  selection(a: AnswerI){
    this.seleted = a;
    this.isDisabled = false;
  }

  onClass(a: AnswerI){
    if(a === this.seleted) return 'active text-light';

    return '';
  }

}
