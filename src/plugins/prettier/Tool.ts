/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

export const TOOL_NAME = 'prettier'

export default class Prettier implements Tool {
  readonly toolName = TOOL_NAME
  configFile = '.prettierrc.json'
  feedback: Feedback = {
    enable: true,
  }
  dependencies: Dependencies = [
    {
      type: 'devDependencies',
      name: 'prettier',
    },
  ]
  questions: Questions = [
    {
      type: 'confirm',
      name: TOOL_NAME,
      message: 'Do you want to use prettier ?',
      default: true,
      prefix: '👍',
    },
  ]
  userFeedback(answers: any): Feedback {
    this.feedback = {
      enable: !!answers[TOOL_NAME],
    }
    return this.feedback
  }
}
