/**
 * @author X·M
 * @date 2022-01-14 21:12:59
 */

/**
 * package.json
 *  - dependencies
 *  - devDependencies
 *  - peerDependencies
 * 
 * eg:
 * [type]: {
 *  [name]: [version]
 * } =>
 * dependencies: {
 *  react: ^18.0.0
 * } 
 */
export interface DependencyItem {
  type: 'dependencies' | 'devDependencies' | 'peerDependencies'
  name: string
  version?: string
}

export type Dependencies = DependencyItem[]