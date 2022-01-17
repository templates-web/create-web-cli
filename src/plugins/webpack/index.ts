/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import Webpack from './Tool'

import Popular, { TOOL_NAME as POPULAR_NAME, LIB_LIST } from '../popular'
import TS, { TOOL_NAME as TS_NAME } from '../typescript'
import Css, { TOOL_NAME as CSS_NAME } from '../css'
import { TOOL_NAME as SASS_NAME } from '../css/sass'

export default class WebpackPlugin extends Plugin {
  loadTool() {
    this.tool = new Webpack()
  }
  getTplFilePath(): string {
    return __dirname + '/webpack.config.art'
  }
  getTplOptions(): object {
    const tsEnabled = this.builder.toolMap.get(TS_NAME)
    const popular = this.builder.toolMap.get(POPULAR_NAME)
    const css = this.builder.toolMap.get(CSS_NAME)
    const fileExt = tsEnabled ? 'ts' : 'js'
    const jsx = popular?.feedback.library === LIB_LIST.React
    let entryFile = `./src/index.${fileExt}`
    let cssProcessor = 'less'
    if (jsx) {
      entryFile += 'x'
    }
    if (css?.feedback.processor === SASS_NAME) {
      cssProcessor = 'sass'
    }

    const config = {
      entry: entryFile,
    }
    return {
      config,
      testJSExt: `(js|${fileExt})${jsx ? 'x?' : ''}`,
      cssProcessor: `${cssProcessor}-loader`,
    }
  }
}
