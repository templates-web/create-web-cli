/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import Prettier, { TOOL_NAME } from './Tool'

export default class PrettierPlugin extends Plugin {
  loadTool() {
    this.tool = new Prettier()
  }
  getTplFilePath() {
    return __dirname + '/.prettierrc.art'
  }
}

export { TOOL_NAME }
