/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import { OutputSet, Plugin, Tool } from '../'
import template from 'art-template'

import Prettier, { TOOL_NAME } from './Tool'

export default class PrettierPlugin extends Plugin {
  loadTool() {
    this.tool = new Prettier()
  }

  buildOutput() {
    const tpl = template(__dirname + '/.prettierrc.art', {})
    this.builder.outputSet.add({
      filename: this.tool?.configFile as string,
      template: this.format(tpl),
    })
  }
}

export { TOOL_NAME }
