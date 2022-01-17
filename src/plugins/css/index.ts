/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import Css, { PREPROCESSOR_LIST, TOOL_NAME } from './Tool'
import PostCss from './postcss'
import Less from './less'
import Sass from './sass'

export default class CssPlugin extends Plugin {
  loadTool() {
    this.tool = new Css()
  }

  afterPrompt() {
    this.builder.addPlugin(new PostCss())
    if (this.tool?.feedback.processor === PREPROCESSOR_LIST.Sass) {
      this.builder.addPlugin(new Sass())
    } else {
      this.builder.addPlugin(new Less())
    }
  }
}

export { TOOL_NAME }
