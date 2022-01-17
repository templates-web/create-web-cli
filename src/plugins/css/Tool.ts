/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

export const TOOL_NAME = 'css'

export enum PREPROCESSOR_LIST {
  Less = 'less',
  Sass = 'sass',
}

export default class Css extends Tool {
  readonly toolName = TOOL_NAME
  feedback: Feedback = {
    enable: true,
  }
  questions: Questions = [
    {
      type: 'list',
      name: TOOL_NAME,
      message: 'Please choose a css preprocessor',
      choices: ['Less', 'Sass'],
    },
  ]
  userFeedback(answers: any): Feedback {
    this.feedback = {
      enable: !!answers[TOOL_NAME],
      processor: (answers[TOOL_NAME] as string).toLowerCase(),
    }
    return this.feedback
  }
}
