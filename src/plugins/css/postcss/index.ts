/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../../'

import PostCss, { TOOL_NAME } from './Tool'

import { TOOL_NAME as TAILWINDCSS_NAME } from '../../tailwindcss'

export default class PostCssPlugin extends Plugin {
  loadTool() {
    this.tool = new PostCss()
  }

  getTplFilePath(): string {
    return __dirname + '/postcss.config.art'
  }

  getTplOptions(): object {
    const options = {
      tailwindcss: true,
    }
    if (!this.builder.toolMap.get(TAILWINDCSS_NAME)?.feedback.enable) {
      options.tailwindcss = false
    }
    return options
  }
}

export { TOOL_NAME }
