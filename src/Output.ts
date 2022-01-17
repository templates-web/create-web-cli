/**
 * @author X·M
 * @date 2022-01-14 21:37:54
 */

/**
 * Final output file for a tool config
 */
export interface OutputFile<TplOptions extends Object> {
  template: string
  options?: TplOptions
  filename: string
  path: string
  format: (source: string) => string
}

export type OutputMap<TplOptions> = Map<string, OutputFile<TplOptions>>
