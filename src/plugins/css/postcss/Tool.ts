/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../../'

export const TOOL_NAME = 'postcss'

export default class PostCss extends Tool {
  readonly toolName = TOOL_NAME
  configFile = 'postcss.config.js'
  feedback: Feedback = {
    enable: true,
  }
  dependencies: Dependencies = [
    {
      type: 'devDependencies',
      name: 'postcss',
    },
    {
      type: 'devDependencies',
      name: 'autoprefixer',
    },
    {
      type: 'devDependencies',
      name: 'cssnano',
    },
  ]
}
