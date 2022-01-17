/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import HTML from './Tool'

export default class HTMLPlugin extends Plugin {
  loadTool() {
    this.tool = new HTML()
  }
  getTplFilePath(): string {
    return __dirname + '/html.art'
  }
  getOutPutPath() {
    return './public'
  }
}
