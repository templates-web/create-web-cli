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
  dependencies: Dependencies = [
    {
      type: 'dependencies',
      name: 'axios',
    },
    {
      type: 'devDependencies',
      name: 'msw',
    },
    {
      type: 'dependencies',
      name: 'core-js',
    },
    {
      type: 'dependencies',
      name: 'regenerator-runtime',
    },
    {
      type: 'dependencies',
      name: 'mobx',
    },
    {
      type: 'dependencies',
      name: 'mobx-state-tree',
    },
  ]
  userFeedback(answers: any): Feedback {
    this.feedback.name = answers.projectName
    return this.feedback
  }
}
