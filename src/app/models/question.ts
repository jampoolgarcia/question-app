import { AnswerI } from "./answer";

export interface QuestionI {
  description: string,
  answers: AnswerI[]
}
