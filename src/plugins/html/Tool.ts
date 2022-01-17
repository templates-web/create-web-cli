/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

const TOOL_NAME = 'html'

export default class HTML extends Tool {
  readonly toolName = TOOL_NAME
  configFile = 'index.html'
  feedback: Feedback = {
    enable: true,
  }
}
