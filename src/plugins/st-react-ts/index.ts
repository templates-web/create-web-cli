/**
 * @author X·M
 * @date 2022-01-15 16:06:52
 */

import path from 'path'

import { Plugin, Tool } from '../'

import fs from 'fs-extra'

export default class STReactPlugin extends Plugin {
  afterWrite(): void {
    fs.copySync(__dirname + '/source', path.join(this.builder.rootPath, 'src'))
  }
}
