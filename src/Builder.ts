/**
 * @author X·M
 * @date 2022-01-15 10:15:04
 */

import inquirer from 'inquirer'
import fs from 'fs-extra'
import path from 'path'

import { Tool } from './Tool'
import { OutputSet } from './Output'

import { Plugin } from './plugins'

export type ToolMap = Map<string, Tool>

export default class Builder {
  toolMap: ToolMap

  plugins: Plugin[]

  outputSet: OutputSet

  questions: any

  constructor() {
    this.toolMap = new Map()
    this.plugins = []
    this.questions = []
    this.outputSet = new OutputSet()
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
  buildOutputSet = (): Builder => {
    this.plugins.forEach(({ buildOutput, tool }) => {
      if (!tool || tool.feedback.enable) {
        buildOutput?.()
      }
    })
    return this
  }

  write() {
    console.log(this)
    const tmpDir = path.join(process.cwd(), '__temp')
    fs.emptyDirSync(tmpDir)
    for (let file of this.outputSet.files) {
      fs.outputFileSync(path.join(tmpDir, file.filename), file.template)
    }
  }
}
