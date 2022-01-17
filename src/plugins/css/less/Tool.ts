/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../../'

export const TOOL_NAME = 'less'

export default class Less extends Tool {
  readonly toolName = TOOL_NAME
  feedback: Feedback = {
    enable: true,
  }
  dependencies: Dependencies = [
    {
      type: 'devDependencies',
      name: 'less',
    },
  ]
}
