/**
 * @author X·M
 * @date 2022-01-15 10:15:04
 */

import inquirer from 'inquirer'
import fs from 'fs-extra'
import path from 'path'
import template from 'art-template'
import { spawnSync as spawn } from 'child_process'

import { Tool } from './Tool'
import { OutputMap } from './Output'

import { Plugin } from './plugins'

import { TOOL_NAME as PROJECT_NAME } from './plugins/project'

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

  get project() {
    return this.toolMap.get(PROJECT_NAME)
  }

  get rootPath() {
    return this.project?.feedback?.rootPath
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
      for (const [name, tool] of this.toolMap) {
        const feedback = tool.userFeedback(answers)
        if (!feedback.enable) {
          this.toolMap.delete(name)
        }
      }
      return answers
    })
  }

  afterPrompt() {
    this.plugins.forEach((plugin) => {
      plugin.afterPrompt()
    })
    return this
  }

  beforeOutput() {
    this.plugins.forEach((plugin) => {
      plugin.beforeOutput()
    })
    return this
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
    const rootPath = this.rootPath
    fs.emptyDirSync(rootPath)
    for (let [name, output] of this.outputMap) {
      const content = template.render(output.template, output.options)
      fs.outputFileSync(
        path.join(rootPath, output.path, output.filename),
        output.format(content)
      )
    }
    return this
  }

  afterWrite(): Builder {
    this.plugins.forEach((plugin) => {
      plugin.afterWrite()
    })
    return this
  }

  install(): void {
    const dependiencies: string[] = []
    const devDependiencies: string[] = []
    for (let [name, tool] of this.toolMap) {
      if (tool.dependencies) {
        tool.dependencies.forEach((dep) => {
          if (dep.type === 'dependencies') {
            // TODO: Version support ?
            dependiencies.push(dep.name)
          } else {
            devDependiencies.push(dep.name)
          }
        })
      }
    }

    const outputPath = this.rootPath
    // TODO: Chooose manager ???
    let manager = 'pnpm'
    spawn(manager, ['i', ...dependiencies], {
      stdio: 'inherit',
      cwd: outputPath,
    })
    spawn(manager, ['i', '-D', ...devDependiencies], {
      stdio: 'inherit',
      cwd: outputPath,
    })
  }
}
