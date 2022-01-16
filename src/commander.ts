/**
 * @author X·M
 * @date 2022-01-15 11:51:03
 */



 import { Command } from 'commander'
 
 import { version } from '../package.json'
 import { WELCOME_TEXT } from './utils/helper'
 
 const exit = process.exit;

 export function createCommand() {
  const program = new Command()
 
  program.version(version)
  program.name('cwc')
  
  program.addHelpText('before', WELCOME_TEXT);

  return program
 }