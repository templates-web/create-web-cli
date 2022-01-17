/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../../'

import Less, { TOOL_NAME } from './Tool'

export default class LessPlugin extends Plugin {
  loadTool() {
    this.tool = new Less()
  }
}

export { TOOL_NAME }
