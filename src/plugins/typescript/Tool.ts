/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

const TOOL_NAME = 'typescript'

export default class TS implements Tool {
  readonly toolName = TOOL_NAME
  configFile = 'tsconfig.json'
  feedback: Feedback = {
    enable: true,
  }
  dependencies: Dependencies = [
    {
      type: 'devDependencies',
      name: 'typescript',
    },
  ]
  questions: Questions = [
    {
      type: 'confirm',
      name: TOOL_NAME,
      message: 'Do you want to use typescript ?',
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
