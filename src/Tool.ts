/**
 * The basic config of tool
 * eg:
 *  - Less
 *  - ESLint
 */

import inquirer from 'inquirer'

import { Dependencies } from './Dependencies'

abstract class Tool {
  abstract readonly toolName: string

  /**
   * inquirer.prompt questions
   *  - If no questions is provided, then the plugin is executed by default
   */
  questions?: Questions

  /**
   * Npm dependencies
   */
  dependencies?: Dependencies

  /**
   * The file name of config
   */
  configFile?: string

  /**
   * User feedback
   */
  abstract feedback: Feedback

  userFeedback(answers: object): Feedback {
    return this.feedback
  }
}

export interface Feedback {
  enable: boolean
  [k: string]: unknown
}

export type Questions = inquirer.DistinctQuestion<any>[]

export { Tool }
