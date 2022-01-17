/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import Project, { TOOL_NAME } from './Tool'

export default class BabelPlugin extends Plugin {
  loadTool() {
    this.tool = new Project()
  }
}

export { TOOL_NAME }
