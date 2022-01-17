/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'
import template from 'art-template'

import ESLint from './Tool'
import { TOOL_NAME as PRETTIER_NAME } from '../prettier'

export default class ESLintPlugin extends Plugin {
  loadTool() {
    this.tool = new ESLint()
  }

  getTplFilePath(): string {
    return __dirname + '/.eslintrc.art'
  }
}
