/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

const TOOL_NAME = 'vue'

export default class Vue extends Tool {
  readonly toolName = TOOL_NAME
  feedback: Feedback = {
    enable: true,
  }
  dependencies: Dependencies = [
    {
      type: 'dependencies',
      name: 'vue',
    },
  ]
}
