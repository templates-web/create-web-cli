/**
 * @author X·M
 * @date 2022-01-15 09:12:38
 */

import { Dependencies, Tool, Feedback, Questions } from '../'

const TOOL_NAME = 'webpack'

export default class Webpack extends Tool {
  readonly toolName = TOOL_NAME
  configFile = 'webpack.config.js'
  feedback: Feedback = {
    enable: true,
  }
  dependencies: Dependencies = [
    {
      type: 'devDependencies',
      name: 'webpack',
    },
    {
      type: 'devDependencies',
      name: 'webpack-cli',
    },
    {
      type: 'devDependencies',
      name: 'webpack-dev-server',
    },
    {
      type: 'devDependencies',
      name: 'babel-loader',
    },
    {
      type: 'devDependencies',
      name: 'style-loader',
    },
    {
      type: 'devDependencies',
      name: 'css-loader',
    },
    {
      type: 'devDependencies',
      name: 'postcss-loader',
    },
    {
      type: 'devDependencies',
      name: 'html-webpack-plugin',
    },
  ]
}
