/**
 * @author X·M
 * @date 2022-01-15 17:20:03
 */

import prettier from 'prettier'

import Builder from '../Builder'
import { OutputSet } from '../Output'
import { Dependencies } from '../Dependencies'
import { Tool, Feedback, Questions } from '../Tool'

abstract class Plugin {
  /**
   * See src/Builder
   * A plugin hold the builder, so it can do anything that you want
   */
  // @ts-ignore
  builder: Builder

  /**
   * See src/Tool
   * A Plugin is not just for a Tool
   */
  tool?: Tool

  constructor() {
    this.loadTool?.()
    this.buildQuestions = this.buildQuestions.bind(this)
    this.buildToolBeforePrompt = this.buildToolBeforePrompt.bind(this)
    this.buildOutput = this.buildOutput?.bind(this)
  }

  /**
   * !!! Must call it first !!!
   */
  acceptBuilder(builder: Builder): Plugin {
    this.builder = builder
    return this
  }

  /**
   * If you plan to build a tool, just load it
   */
  abstract loadTool?(): void

  /* ---------------------------- Build basic data ---------------------------- */
  buildQuestions(): Questions {
    return this.tool?.questions || []
  }

  buildToolBeforePrompt() {
    return this.tool
  }

  /* ------------------------------ Build output ------------------------------ */
  format(source: string) {
    return prettier.format(source, { parser: 'json' })
  }
  abstract buildOutput?(): void
}

export { Tool, Feedback, Dependencies, OutputSet, Builder, Plugin, Questions }

export { default as Prettier } from './prettier'
export { default as Stylelint } from './stylelint'
export { default as ESLint } from './eslint'