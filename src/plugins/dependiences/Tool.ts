/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

export const TOOL_NAME = 'dependiences'

export default class Dependiences extends Tool {
  readonly toolName = TOOL_NAME
  configFile = 'package.json'
  feedback: Feedback = {
    enable: true,
  }
}
