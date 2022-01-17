/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import Vue from './Tool'

export default class VuePlugin extends Plugin {
  loadTool() {
    this.tool = new Vue()
  }
}
