/**
 * @author X·M
 * @date 2022-01-15 15:57:28
 */

import path from 'path'

/* ------------------------------- Tool names ------------------------------- */
export const STYLELINT = Symbol('stylelint')
export const ESLINT = Symbol('eslint')
export const PRETTIER = Symbol('prettier')

// Dev
export const TMP_DIR = path.resolve(__dirname)
