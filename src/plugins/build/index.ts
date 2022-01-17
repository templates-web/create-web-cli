/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import Build, { BUILD_LIST, TOOL_NAME } from './Tool'

import Webpack from '../webpack'
import Vite from '../vite'

export default class BuildPlugin extends Plugin {
  loadTool() {
    this.tool = new Build()
  }

  afterPrompt() {
    let build: Plugin
    if (this.tool?.feedback.build === BUILD_LIST.Vite) {
      build = new Vite()
    } else {
      build = new Webpack()
    }
    this.builder.addPlugin(build)
  }
}

export { TOOL_NAME }
