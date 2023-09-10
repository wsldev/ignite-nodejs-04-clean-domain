import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentRepository {
  create(answersComment: AnswerComment): Promise<void>
}
