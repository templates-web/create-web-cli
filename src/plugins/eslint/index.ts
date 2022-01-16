/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { OutputSet, Plugin, Tool } from '../'
import template from 'art-template'

import ESLint from './Tool'
import { TOOL_NAME as PRETTIER_NAME } from '../prettier'

export default class ESLintPlugin extends Plugin {
  loadTool() {
    this.tool = new ESLint()
  }

  buildOutput() {
    const usePrettier = !!this.builder.toolMap.get(PRETTIER_NAME)
    const tpl = template(__dirname + '/.eslintrc.art', {
      baseExtends: ['a1', 'a2'],
      parser: 'aa',
      plugins: ['b3', 'c4'],
    })
    this.builder.outputSet.add({
      filename: this.tool?.configFile as string,
      template: this.format(tpl),
    })
  }
}
