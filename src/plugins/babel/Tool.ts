/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

export const TOOL_NAME = 'babel'

export default class Babel extends Tool {
  readonly toolName = TOOL_NAME
  configFile = '.babelrc.json'
  feedback: Feedback = {
    enable: true,
  }
  dependencies: Dependencies = [
    {
      type: 'devDependencies',
      name: '@babel/core',
    },
    {
      type: 'devDependencies',
      name: '@babel/preset-env',
    },
  ]
}
