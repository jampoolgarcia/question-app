import { AnswerI } from "./answer";

export interface Question {
  description: string,
  answers: AnswerI[]
}
