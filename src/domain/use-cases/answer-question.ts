import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
  instructionId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  execute({ instructionId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer(content)
    return answer
  }
}