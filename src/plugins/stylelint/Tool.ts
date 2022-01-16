/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

const TOOL_NAME = 'stylelint'

export default class Stylelint implements Tool {
  readonly toolName = TOOL_NAME
  configFile = '.stylelintrc.json'
  feedback: Feedback = {
    enable: true,
  }
  dependencies: Dependencies = [
    {
      type: 'devDependencies',
      name: 'stylelint',
    },
    {
      type: 'devDependencies',
      name: 'stylelint-config-standard',
    },
    {
      type: 'devDependencies',
      name: 'stylelint-config-prettier',
    },
  ]
  questions: Questions = [
    {
      type: 'confirm',
      name: TOOL_NAME,
      message: 'Do you want to use stylelint ?',
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
