/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'
import template from 'art-template'

import Stylelint from './Tool'
import { TOOL_NAME as PRETTIER_NAME } from '../prettier'

export default class StylelintPlugin extends Plugin {
  loadTool() {
    this.tool = new Stylelint()
  }

  getTplFilePath(): string {
    return __dirname + '/.stylelintrc.art'
  }

  getTplOptions(): object {
    return {
      enablePrettier: this.enablePrettier(),
    }
  }

  beforeWrite(): void {
    const enablePrettier = this.enablePrettier()
    if (!this.tool?.dependencies || !enablePrettier) return
    this.tool.dependencies?.push({
      type: 'devDependencies',
      name: 'stylelint-config-prettier',
    })
  }

  enablePrettier(): boolean {
    return !!this.builder.toolMap.get(PRETTIER_NAME)
  }
}
