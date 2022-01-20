/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

export const TOOL_NAME = 'build'

export enum BUILD_LIST {
  Webpack = 'webpack',
  Vite = 'vite',
}

export default class Build extends Tool {
  readonly toolName = TOOL_NAME
  feedback: Feedback = {
    enable: true,
  }
  questions: Questions = [
    {
      type: 'list',
      name: TOOL_NAME,
      message: 'Please choose a build tool',
      choices: ['Webpack'],
    },
  ]
  userFeedback(answers: any): Feedback {
    this.feedback = {
      enable: !!answers[TOOL_NAME],
      build: (answers[TOOL_NAME] as string).toLowerCase(),
    }
    return this.feedback
  }
}
