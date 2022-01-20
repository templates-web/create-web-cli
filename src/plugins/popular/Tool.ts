/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

export const TOOL_NAME = 'popular'

export enum LIB_LIST {
  React = 'react',
  Vue = 'vue',
}

export default class Popular extends Tool {
  readonly toolName = TOOL_NAME
  feedback: Feedback = {
    enable: true,
  }
  questions: Questions = [
    {
      type: 'list',
      name: TOOL_NAME,
      message: 'Please choose a popular library',
      // choices: Object.values(LIB_LIST).filter((val) => typeof val === 'string'),
      choices: ['React'],
    },
  ]
  userFeedback(answers: any): Feedback {
    this.feedback = {
      enable: !!answers[TOOL_NAME],
      library: (answers[TOOL_NAME] as string).toLowerCase(),
    }
    return this.feedback
  }
}
