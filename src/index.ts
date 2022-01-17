/**
 * @author X·M
 * @date 2022-01-16 14:20:29
 */

import { createCommand } from './commander'
import Builder from './Builder'

// Plugins
import Prettier from './plugins/prettier'
import Stylelint from './plugins/Stylelint'
import ESLint from './plugins/ESLint'
import TypeScript from './plugins/TypeScript'
import Git from './plugins/Git'
import Popular from './plugins/Popular'
import Build from './plugins/Build'
import Html from './plugins/Html'
import Css from './plugins/Css'
import Babel from './plugins/Babel'
import Dependiences from './plugins/Dependiences'
import Project from './plugins/Project'

const exit = process.exit

/**
 * Build interactively
 */
async function startInteractive() {
  const builder = new Builder()

  // Add plugins...
  builder.addPlugin(new Project())
  builder.addPlugin(new Html())
  builder.addPlugin(new Css())
  builder.addPlugin(new Prettier())
  builder.addPlugin(new Stylelint())
  builder.addPlugin(new ESLint())
  builder.addPlugin(new TypeScript())
  builder.addPlugin(new Git())
  builder.addPlugin(new Popular())
  builder.addPlugin(new Babel())
  builder.addPlugin(new Build())
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

  // console.log(builder)
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
