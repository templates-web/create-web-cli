/**
 * @author X·M
 * @date 2022-01-15 10:15:04
 */

import inquirer from 'inquirer'
import fs from 'fs-extra'
import path from 'path'
import template from 'art-template'

import { Tool } from './Tool'
import { OutputMap } from './Output'

import { Plugin } from './plugins'

export type ToolMap = Map<string, Tool>

export default class Builder {
  toolMap: ToolMap

  plugins: Plugin[]

  outputMap: OutputMap<any>

  questions: any

  constructor() {
    this.toolMap = new Map()
    this.plugins = []
    this.questions = []
    this.outputMap = new Map()
  }

  addPlugin = (plugin: Plugin): Builder => {
    plugin.acceptBuilder(this)
    this.plugins.push(plugin)

    if (plugin.buildQuestions) {
      this.questions.push(...plugin.buildQuestions())
    }
    if (plugin.buildToolBeforePrompt) {
      const _tool = plugin.buildToolBeforePrompt()
      if (_tool) {
        this.toolMap.set(_tool.toolName, _tool)
      }
    }
    return this
  }

  prompt = async (): Promise<any> => {
    return inquirer.prompt<any>(this.questions).then((answers) => {
      // Map Filter by answers
      Object.keys(answers).forEach((toolName) => {
        const _tool = this.toolMap.get(toolName)
        if (_tool) {
          const feedback = _tool.userFeedback(answers)
          if (!feedback.enable) {
            this.toolMap.delete(toolName)
          }
        }
      })
      return answers
    })
  }

  // 2. Build config by toolMap
  buildOutput = (): Builder => {
    this.plugins.forEach(({ buildOutput, tool }) => {
      if (!tool || tool.feedback.enable) {
        buildOutput?.()
      }
    })
    return this
  }

  beforeWrite(): Builder {
    this.plugins.forEach((plugin) => {
      plugin.beforeWrite()
    })
    return this
  }

  write(): Builder {
    const tmpDir = path.join(process.cwd(), '__temp')
    fs.emptyDirSync(tmpDir)
    for (let [name, output] of this.outputMap) {
      const content = template.render(output.template, output.options)
      fs.outputFileSync(
        path.join(tmpDir, output.filename),
        output.format(content)
      )
    }
    return this
  }
}
