/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

const TOOL_NAME = 'git'

export default class Git extends Tool {
  readonly toolName = TOOL_NAME
  configFile = '.gitignore'
  feedback: Feedback = {
    enable: true,
  }
}
