import { Injectable } from '@angular/core';
import { QuestionI } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questions!: QuestionI[];

  constructor() {
    this.buildData();
  }

  getQuestions(){
    return this.questions;
  }

  buildData(){
    this.questions = [
    {
      description: 'What is the capital of Argentina?',
      answers: [
        {name:'Buenos Aires', isCorret: true},
        {name:'Montevideo', isCorret: false},
        {name:'Santiago', isCorret: false},
        {name:'Lima', isCorret: false}
      ]
    },
    {
      description: 'What is the capital of France?',
      answers: [
        {name:'Roma', isCorret: false},
        {name:'Paris', isCorret: true},
        {name:'Dublin', isCorret: false},
        {name:'Atenas', isCorret: false}
      ]
    },
    {
      description: 'What is the capital of Egipto?',
      answers: [
        {name:'Londres', isCorret: false},
        {name:'Berlin', isCorret: false},
        {name:'El Cairo', isCorret: true},
        {name:'Casablanca', isCorret: false}
      ]
    }];
  }
}
