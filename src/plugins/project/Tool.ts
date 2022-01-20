/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import path from 'path'

import { Dependencies, Tool, Feedback, Questions } from '../'

export const TOOL_NAME = 'project'

const DEFAULT_NAME = 'cwc-project'
export default class Project extends Tool {
  readonly toolName = TOOL_NAME
  feedback: Feedback = {
    enable: true,
    name: DEFAULT_NAME,
    rootPath: path.join(process.cwd(), DEFAULT_NAME),
  }
  questions: Questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'Please input project name：',
      default: DEFAULT_NAME,
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
    this.feedback.rootPath = path.join(process.cwd(), this.feedback.name)
    return this.feedback
  }
}
