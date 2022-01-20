#!/usr/bin/env node
/**
 * @author X·M
 * @date 2022-01-16 14:20:29
 */

import chalk from 'chalk'

import { LOGO_TXT } from './utils/helper'

import { createCommand } from './commander'
import Builder from './Builder'

// Plugins
import Project from './plugins/project'
import Git from './plugins/Git'
import Html from './plugins/html'
import Css from './plugins/css'
import Tailwindcss from './plugins/tailwindcss'
import Build from './plugins/build'
import Babel from './plugins/babel'
import Prettier, { TOOL_NAME } from './plugins/prettier'
import Stylelint from './plugins/stylelint'
import ESLint from './plugins/eslint'
import TypeScript from './plugins/typescript'
import Popular from './plugins/popular'
import Dependiences from './plugins/dependiences'

const exit = process.exit

/**
 * Build interactively
 */
async function startInteractive() {
  const builder = new Builder()

  // Add plugins...
  builder.addPlugin(new Project()) // ! Default
  builder.addPlugin(new Git()) // ! Default
  builder.addPlugin(new Html()) // ! Default
  builder.addPlugin(new Css())
  builder.addPlugin(new Tailwindcss())
  builder.addPlugin(new Build())
  builder.addPlugin(new Babel()) // ! Default
  builder.addPlugin(new Stylelint()) // ! Default
  builder.addPlugin(new ESLint()) // ! Default
  builder.addPlugin(new Prettier()) // ! Default
  builder.addPlugin(new TypeScript())
  builder.addPlugin(new Popular())
  builder.addPlugin(new Dependiences())

  // Wait for user input
  await builder.prompt()
  builder.afterPrompt()
  builder.beforeOutput()
  builder.buildOutput()
  builder.beforeWrite()
  builder.write()
  builder.afterWrite()
  builder.install()
  printSuccess()
}

/**
 * create [template]
 */
const commander = createCommand()
commander
  .command('create [template]')
  .description('create a template project')
  .action((template, options) => {
    if (template === undefined) {
      startInteractive()
    } else {
      exit(2)
    }
  })

/* -------------------------------------------------------------------------- */
/*                                    Start                                   */
/* -------------------------------------------------------------------------- */
try {
  commander.parse(process.argv)
} catch (err) {
  console.error(err)
  exit(1)
}

function printSuccess() {
  console.info(
    chalk.greenBright(
      '🎉 -> Congratulations, your project has been successfullly initialzed !'
    )
  )
  console.log(chalk.yellowBright('🏄🏼‍♂️ -> Thank you for using: '))
  console.log(LOGO_TXT)
  console.log(chalk.greenBright('🍎 -> Good Luck !'))
}
