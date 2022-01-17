/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import React, { TOOL_NAME } from './Tool'

import STReact from '../st-react'
import STReactTS from '../st-react-ts'
import { TOOL_NAME as TS_NAME } from '../typescript'

export default class ReactPlugin extends Plugin {
  loadTool() {
    this.tool = new React()
  }

  beforeOutput(): void {
    if (this.tool?.feedback.enable) {
      if (this.builder.toolMap.get(TS_NAME)?.feedback.enable) {
        this.builder.addPlugin(new STReactTS())
      } else {
        this.builder.addPlugin(new STReact())
      }
    }
  }
}

export { TOOL_NAME }
