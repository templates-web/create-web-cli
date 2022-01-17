/**
 * @author X·M
 * @date 2022-01-16 14:20:29
 */

import { createCommand } from './commander'
import Builder from './Builder'
import { Prettier, Stylelint, ESLint } from './plugins'

const exit = process.exit

/**
 * Build interactively
 */
async function startInteractive() {
  const builder = new Builder()

  // Add plugins...
  builder.addPlugin(new Prettier())
  builder.addPlugin(new Stylelint())
  builder.addPlugin(new ESLint())

  // Wait for user input
  await builder.prompt()

  builder.buildOutput().beforeWrite().write()
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
