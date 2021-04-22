export interface Question {
  question: string
  options: string[],
  answers: number[]
}

export interface Quiz {
  type: 'quiz'
  title: string,
  questions: Question[]
}

export interface Video {
  type: 'video',
  title: string,
  start?: number,
  end?: number,
  src: string
}

export type ContentItem = Video | Quiz;

export interface ELearning {
  title: string,
  content: ContentItem[]
}