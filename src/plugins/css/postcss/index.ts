/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../../'

import PostCss from './Tool'

export default class PostCssPlugin extends Plugin {
  loadTool() {
    this.tool = new PostCss()
  }

  getTplFilePath(): string {
    return __dirname + '/postcss.config.art'
  }
}
