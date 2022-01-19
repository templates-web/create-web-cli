/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import TailwindCSS, { TOOL_NAME } from './Tool'

import { TOOL_NAME as POPULAR_NAME, LIB_LIST } from '../popular'
import { TOOL_NAME as TS_NAME } from '../typescript'
import { TOOL_NAME as CSS_NAME } from '../css'

export default class TailwindCSSPlugin extends Plugin {
  loadTool() {
    this.tool = new TailwindCSS()
  }

  getTplFilePath(): string {
    return __dirname + '/tailwind.config.art'
  }

  getTplOptions(): object {
    const tsEnabled = this.builder.toolMap.get(TS_NAME)
    const popular = this.builder.toolMap.get(POPULAR_NAME)
    const css = this.builder.toolMap.get(CSS_NAME)
    const fileExt = tsEnabled ? 'ts' : 'js'
    const jsx = popular?.feedback.library === LIB_LIST.React
    let ext = 'html'
    if (jsx) {
      ext += ',jsx'
      if (tsEnabled) {
        ext += ',tsx'
      }
    }
    return {
      content: [`./src/**/*.{${ext}}`],
    }
  }
}

export { TOOL_NAME }
