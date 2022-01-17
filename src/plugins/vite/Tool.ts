/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

const TOOL_NAME = 'vite'

export default class Vite extends Tool {
  readonly toolName = TOOL_NAME
  configFile = 'vite.config.js'
  feedback: Feedback = {
    enable: true,
  }
  dependencies: Dependencies = [
    {
      type: 'devDependencies',
      name: 'vite',
    },
  ]
}
