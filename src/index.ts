/**
 * @author X·M
 * @date 2022-01-16 14:20:29
 */

import { createCommand } from './commander'
import Builder from './Builder'

// Plugins
import Prettier from './plugins/prettier'
import Stylelint from './plugins/stylelint'
import ESLint from './plugins/eslint'
import TypeScript from './plugins/typescript'
import Git from './plugins/Git'
import Popular from './plugins/popular'
import Build from './plugins/build'
import Html from './plugins/html'
import Css from './plugins/css'
import Babel from './plugins/babel'
import Dependiences from './plugins/dependiences'
import Project from './plugins/project'
import Tailwindcss from './plugins/tailwindcss'

const exit = process.exit

/**
 * Build interactively
 */
async function startInteractive() {
  const builder = new Builder()

  // Add plugins...
  builder.addPlugin(new Project())
  builder.addPlugin(new Git())
  builder.addPlugin(new Stylelint())
  builder.addPlugin(new ESLint())
  builder.addPlugin(new Prettier())
  builder.addPlugin(new Html())
  builder.addPlugin(new Css())
  builder.addPlugin(new Tailwindcss())
  builder.addPlugin(new Build())
  builder.addPlugin(new Babel())
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
