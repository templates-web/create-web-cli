/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import TS, { TOOL_NAME } from './Tool'

export default class TSPlugin extends Plugin {
  loadTool() {
    this.tool = new TS()
  }

  getTplFilePath(): string {
    return __dirname + '/tsconfig.art'
  }
}

export { TOOL_NAME }
