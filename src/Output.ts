/**
 * @author X·M
 * @date 2022-01-14 21:37:54
 */

/**
 * Final output file for a tool config
 */
export interface OutputFile<TplOptions extends Object> {
  filename: string
  path?: string
  template: string
  options?: TplOptions
}

export class OutputSet {
  files: OutputFile<any>[]

  constructor() {
    this.files = []
  }

  add = <TplOptions>(file: OutputFile<TplOptions>): OutputSet => {
    this.files.push(file)
    return this
  }

  update = <TplOptions>(index: number, options: TplOptions): OutputSet => {
    this.files[index].options = {
      ...this.files[index].options,
      ...options,
    }
    return this
  }
}
