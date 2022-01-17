/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import Babel, { TOOL_NAME } from './Tool'
import Popular, { TOOL_NAME as POPULAR_NAME, LIB_LIST } from '../popular'
import TS, { TOOL_NAME as TS_NAME } from '../typescript'

export default class BabelPlugin extends Plugin {
  loadTool() {
    this.tool = new Babel()
  }

  getTplFilePath(): string {
    return __dirname + '/.babelrc.art'
  }

  getTplOptions(): object {
    const popular = this.builder.toolMap.get(POPULAR_NAME)
    const enableTS = this.builder.toolMap.get(TS_NAME)
    const enableReact = popular?.feedback.library === LIB_LIST.React

    if (enableTS) {
      this.tool?.dependencies?.push({
        type: 'devDependencies',
        name: '@babel/preset-typescript',
      })
    }

    if (enableReact) {
      this.tool?.dependencies?.push({
        type: 'devDependencies',
        name: '@babel/preset-react',
      })
    }

    return {
      enableReact,
      enableTS,
    }
  }
}

export { TOOL_NAME }
