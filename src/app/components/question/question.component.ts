import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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

  constructor(private _service: QuestionService, private _rauter: Router) { }

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
    if(a === this.seleted) {
      if(a.isCorret) return 'list-group-item-success';
      else return 'list-group-item-danger';
    }
    return '';  
  }

  onNext(){
    if(this.questions.length > (this.index+1)){
      this.index++;
      this.isDisabled = true;
    }else{
      this._rauter.navigateByUrl('/');
    }  
  }



}
