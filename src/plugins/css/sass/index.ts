/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../../'

import PostCss, { TOOL_NAME } from './Tool'

export default class PostCssPlugin extends Plugin {
  loadTool() {
    this.tool = new PostCss()
  }
}

export { TOOL_NAME }
