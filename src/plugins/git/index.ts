/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import Git from './Tool'

export default class GitPlugin extends Plugin {
  loadTool() {
    this.tool = new Git()
  }

  getTplFilePath(): string {
    return __dirname + '/.gitignore.art'
  }
}
