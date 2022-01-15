/**
 * @author X·M
 * @date 2022-01-15 11:39:35
 */

import chalk from 'chalk'

export const LOGO_TXT = `
                    .---.            
                   /. ./|            
   ,---.        .-'-. ' |    ,---.   
  /     \\      /___/ \\: |   /     \\  
 /    / '   .-'.. '   ' .  /    / '  
.    ' /   /___/ \\:     ' .    ' /   
'   ; :__  .   \\  ' .\\  |  '   ; :__  
'   | '.'|  \\   \\   ' \\ | '   | '.'| 
|   :    :   \\   \\  |--"  |   :    : 
 \    \\  /     \\   \\ |      \\   \\  /  
  \`----'       '---"        \`----'   
`

export const WELCOME_TEXT = `
${chalk.yellow('Hey, gentleman or lady. Welcome to')}
${chalk.blue(LOGO_TXT)}
${chalk.yellow('This is a tool for quick create a web project.')}
`