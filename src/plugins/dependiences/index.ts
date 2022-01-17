/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { Plugin, Tool } from '../'

import Dependiences, { TOOL_NAME } from './Tool'

import { TOOL_NAME as PROJECT_NAME } from '../project'

export default class DependiencesPlugin extends Plugin {
  loadTool() {
    this.tool = new Dependiences()
  }

  getTplFilePath(): string {
    return __dirname + '/package.art'
  }

  getTplOptions(): object {
    const { name } =
      this.builder.toolMap.get(PROJECT_NAME)?.feedback || ({} as any)
    return {
      name,
    }
  }
}

export { TOOL_NAME }
