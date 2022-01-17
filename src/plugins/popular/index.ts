/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import Popular, { LIB_LIST, TOOL_NAME } from './Tool'

import React from '../react'
import Vue from '../vue'

export default class PopularPlugin extends Plugin {
  loadTool() {
    this.tool = new Popular()
  }

  afterPrompt() {
    let popularLib: Plugin
    if (this.tool?.feedback.library === LIB_LIST.Vue) {
      popularLib = new Vue()
    } else {
      popularLib = new React()
    }
    this.builder.addPlugin(popularLib)
  }
}

export { TOOL_NAME, LIB_LIST }
