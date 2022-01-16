/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { OutputSet, Plugin, Tool } from '../'
import template from 'art-template'

import Stylelint from './Tool'
import { TOOL_NAME as PRETTIER_NAME } from '../prettier'

export default class StylelintPlugin extends Plugin {
  loadTool() {
    this.tool = new Stylelint()
  }

  buildOutput() {
    const usePrettier = !!this.builder.toolMap.get(PRETTIER_NAME)
    if (this.tool && !usePrettier) {
      this.tool.dependencies = this.tool.dependencies?.filter(
        (dep) => 'stylelint-config-prettier' !== dep.name
      )
    }
    const tpl = template(__dirname + '/.stylelintrc.art', {
      usePrettier,
    })
    this.builder.outputSet.add({
      filename: this.tool?.configFile as string,
      template: this.format(tpl),
    })
  }
}
