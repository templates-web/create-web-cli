/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

export const TOOL_NAME = 'project'

export default class Project extends Tool {
  readonly toolName = TOOL_NAME
  feedback: Feedback = {
    enable: true,
    name: 'cwc-project',
  }
  questions: Questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'Please input project name：',
    },
  ]
  userFeedback(answers: any): Feedback {
    this.feedback.name = answers.projectName
    return this.feedback
  }
}
