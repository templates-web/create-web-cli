/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import Vite from './Tool'

export default class VitePlugin extends Plugin {
  loadTool() {
    this.tool = new Vite()
  }
  getTplFilePath(): string {
    return __dirname + '/vite.config.art'
  }
}
